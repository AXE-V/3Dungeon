import { FC, SyntheticEvent, useEffect, useRef } from "react";
import { SVGComponent } from "../../../../../../interfaces/SVGComponent";
import { SelectInter } from "../../../../../../interfaces/SelectInter";
import { styleController } from "../../../../../../utils/styleController";

export const SelectItem: FC<SVGComponent & SelectInter> = ({children, style, _id, selectedItem, setSelectedItem, setIsOpen}) => {

  const itemRef = useRef(null)
  useEffect(() => {
    selectedItem === _id ? 
    styleController({target: ((itemRef.current as unknown) as HTMLElement)
      .childNodes[1].childNodes, command: 'add', style: {fill: '#c6b63f'}}) : 
      styleController({target: ((itemRef.current as unknown) as HTMLElement)
        .childNodes[1].childNodes, command: 'remove'});
  }, [selectedItem])

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {
    selectedItem !== _id ? 
    styleController({target: (e.currentTarget as HTMLElement)
      .childNodes[1].childNodes, command: 'add', 
      style: {fill: '#1e1e1e'}}) : void 0;
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    selectedItem !== _id ? 
    styleController({target: (e.currentTarget as HTMLElement)
      .childNodes[1].childNodes, command: 'remove'}) : void 0;
  }

  function onClick<E extends SyntheticEvent<EventTarget>>(e: E) {
    setSelectedItem?.(_id)
    styleController({target: (e.currentTarget as HTMLElement)
      .childNodes[1].childNodes, command: 'add', 
      style: {fill: '#c6b63f'}});
    setIsOpen?.(false)
  }

  return ( 
    <div style={{position: 'relative'}} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
      onClick={onClick} ref={itemRef}>
    <span style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 50%)', 
      textWrap: 'nowrap', pointerEvents: 'none', userSelect: 'none', color: _id === selectedItem ? '#111' : void 0}}>{children}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 38.34" style={style}>
      <path d="M931,554.86H864.19V523.42l64.45,0,5,5H1033l6.8-6.8h16.39v31.48h-18.55l-6.81,6.83H936.05l-5-5"
        transform="translate(-864.19 -521.54)" fill="#161616" data-focus-fill/>
      <line x1="2.54" y1="4.39" x2="2.54" y2="9.68" fill="none" stroke="#0a0a0a" stroke-miterlimit="10" />
      <line x1="2.54" y1="23.31" x2="2.54" y2="28.59" fill="none" stroke="#0a0a0a" stroke-miterlimit="10" />
</svg>
    </div>
   );
}