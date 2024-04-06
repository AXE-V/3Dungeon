import { ComponentPropsWithoutRef, MouseEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import { Styles } from "./style";
import { CSSProperties } from "@stitches/react";
type Options = {buttons?: boolean, windowStyle?: CSSProperties, scrollStyle?: CSSProperties}
export const Scrollbar = ({children, className, buttons = true, windowStyle, scrollStyle}: ComponentPropsWithoutRef<'div'> & Options) => {

  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // задает высоту для thumb
  function handleThumbHeight(ref: HTMLDivElement, clientHeight_scroll: number) {
    const {scrollHeight, clientHeight} = ref
    setThumbHeight(Math.max((clientHeight / scrollHeight) * clientHeight_scroll, 20))
  }

  // задает смещение для thumb при прокрутки контента 
  const handleThumbPosition = useCallback(() => {
    if (
      !contentRef.current || 
      !scrollThumbRef.current || 
      !scrollTrackRef.current
      ) {
      return
    }
    const {scrollTop, scrollHeight} = contentRef.current
    const {clientHeight} = scrollTrackRef.current

    let newTop = (scrollTop / scrollHeight) * clientHeight
    newTop = Math.min(newTop, clientHeight - thumbHeight)

    const thumb = scrollThumbRef.current
    thumb.style.top = `${newTop}px`
  }, [thumbHeight])

  useEffect(() => {
    if (scrollTrackRef.current && contentRef.current) {
      const ref = contentRef.current
      const {clientHeight: clientHeight_scroll} = scrollTrackRef.current

      observer.current = new ResizeObserver(() => {
        handleThumbHeight(ref, clientHeight_scroll)
      })
      observer.current.observe(ref)   

      ref.addEventListener('scroll', handleThumbPosition)
      return () => observer.current?.unobserve(ref)
    }
  }, [])

  // прокрутка по заданному значению по клику
  function handleScrollButton(direction: 'up' | 'down') {
    const {current} = contentRef
    const scrollAmount = direction === 'up' ? -250 : 250
    current?.scrollBy({top: scrollAmount, behavior: 'smooth'})
  }

  // прокрутка до указанной позиции по клику
  const handleTrackClick = useCallback(
    (e: SyntheticEvent<EventTarget>) => {
      e.preventDefault()
      e.stopPropagation()
      const {current: currentTrack} = scrollTrackRef
      const {current: currentContent} = contentRef
      if (currentTrack && currentContent) {
        // куда нажал по Y внутри элемента
        const {clientY} = ((e as unknown) as MouseEvent)
        // объект со свойствами соотношения элемента на экране
        const rect = (e.target as HTMLDivElement).getBoundingClientRect()
        // смещение thumb на половину (для его цетрирования)        
        const thumbOffset = -(thumbHeight / 2)
        // соотношение клика к началу элемента по Y
        const clickRatio = (clientY - rect.top + thumbOffset) / currentTrack.clientHeight
        // прокрутка содержимого до вычисленного значения
        const scrollAmount = Math.floor(clickRatio * currentContent.scrollHeight)
        currentContent.scrollTo({
          top: scrollAmount,
          behavior: 'smooth'
        })
      }
    }, [thumbHeight]);

  const handleThumbMousedown = useCallback((e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(((e as unknown) as MouseEvent).clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);
  
  const handleThumbMouseup = useCallback((e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);
  
  const handleThumbMousemove = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging && scrollStartPosition && contentRef.current) {
        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = contentRef.current as HTMLDivElement;
  
        // Subtract the current mouse y position from where you started to get the pixel difference in mouse position. Multiply by ratio of visible content height to thumb height to scale up the difference for content scrolling.
        const deltaY =
          (e.clientY - scrollStartPosition) * 
          (contentOffsetHeight / thumbHeight);
        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          contentScrollHeight - contentOffsetHeight
        );
  
        contentRef.current.scrollTop = newScrollTop;
      }
    },
    [isDragging, scrollStartPosition, thumbHeight]
  );
  
  // Listen for mouse events to handle scrolling by dragging the thumb
  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    document.addEventListener('mouseleave', handleThumbMouseup);
    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
      document.removeEventListener('mouseleave', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);


  return ( 
    <>
    <div 
      className={`${Styles["custom-scrollbars__container"]()} ${className}`}
      style={windowStyle}
      >

      <div className={Styles["custom-scrollbars__content"]()} ref={contentRef}>
        {children}
      </div>
      
      <div 
        className={Styles["custom-scrollbars__scrollbar"]()}
        style={scrollStyle}>
        {buttons && <button 
          className={Styles["custom-scrollbars__button"]()}
          onClick={() => handleScrollButton('up')}
          >🢕</button>}

        <div className={Styles["custom-scrollbars__track-and-thumb"]()}>
          <div 
            className={Styles["custom-scrollbars__track"]()}
            ref={scrollTrackRef}
            onClick={handleTrackClick}
            >
          <div 
            className={Styles["custom-scrollbars__thumb"]()}
            ref={scrollThumbRef}
            onMouseDown={handleThumbMousedown}
            style={{
              height: `${thumbHeight}px`,
            }}
            ></div>
          </div>          
        </div>
        
        {buttons && <button 
          className={Styles["custom-scrollbars__button"]()}
          onClick={() => handleScrollButton('down')}
          >🢗</button>}
      </div>

    </div>
    </>
   );
}
