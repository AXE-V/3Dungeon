import { FC, SyntheticEvent, useEffect, useState } from "react";
import { SVGComponent } from "../../../../../../interfaces/SVGComponent";
import { SelectItem } from "../SelectItem";
import { Styles } from "./style";
import { styleController } from "../../../../../../assets/decor/interactive";
import { SelectInter } from "../../../../../../interfaces/SelectInter";

export const Select: FC<SVGComponent & SelectInter> = ({style, label, items}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const [selectedItem, setSelectedItem] = useState(0)
  const handlerIsOpen = (val: boolean) => setIsOpen(val)

  useEffect(() => {
    const clickFunc = (e: any) => {      
      (!e.target.dataset.focusFill) ? (
        handlerIsOpen(false)
      ) : void 0
    }

    document.addEventListener('click', (e: any) => clickFunc(e))
    return document.removeEventListener('click', (e: any) => clickFunc(e))
  }, [])
  
  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {    
    // styleController((e.currentTarget as HTMLElement).childNodes, 'add', {fill: '#1e1e1e'});
  }

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {
    // styleController((e.currentTarget as HTMLElement).childNodes, 'remove');
  }
  
  return ( 
    <label style={{position: 'relative'}} >
      <Styles.SelectOutput>{items?.[selectedItem]}</Styles.SelectOutput>

      <Styles.SelectContainer>
        {isOpen && items?.map((item, i) => (
          <SelectItem 
            style={{width: '100%'}} 
            key={i} 
            _id={i} 
            setIsOpen={setIsOpen}
            setSelectedItem={setSelectedItem} 
            selectedItem={selectedItem}
            >
              {item}
          </SelectItem>
        ))}
      </Styles.SelectContainer>

    <svg 
      style={style} 
      viewBox="0 0 182 39" 
      onMouseOver={onMouseOver} 
      onMouseLeave={onMouseLeave} 
      onClick={() => handlerIsOpen(!isOpen)}>
    <polygon data-focus-fill
      points="4.35 6.32 4.35 13.13 0 21.05 0 32.13 65.87 32.1 70.84 37.04 115.61 36.98 122.4 30.29 142.97 30.34 149.94 37.04 157.4 37.04 164.19 30.29 182 30.29 182 14.49 173.92 6.45 79.78 6.45 77.31 8.91 67.48 8.91 64.84 6.28 4.35 6.32"
      fill="#161616" />
    <text transform="translate(126 37.03) scale(1.01 1)" opacity="0.5" font-size="9.92" fill="#bfa613"
      font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">00</text>
    <g>
      <polygon points="144.43 34.61 143.22 35.83 142 37.04 142 34.61 142 32.17 143.22 33.39 144.43 34.61" fill="#4d4d4d"
        opacity="0.25" />
      <line x1="141.03" y1="32.11" x2="141.03" y2="37.04" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        opacity="0.1" />
    </g>
    <g>
      <polygon points="120.66 34.55 121.88 33.33 123.09 32.11 123.09 34.55 123.09 36.98 121.88 35.77 120.66 34.55"
        fill="#4d4d4d" opacity="0.25" />
      <line x1="124.06" y1="37.04" x2="124.06" y2="32.11" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        opacity="0.1" />
    </g>
    <g opacity="0.25">
      <line x1="6.25" y1="4.78" x2="57.76" y2="4.64" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" />
      <polygon points="10.62 3.59 6.25 3.59 6.25 4.78 12.77 4.78 10.62 3.59" fill="#4d4d4d" />
    </g>
    <line x1="4.92" y1="3.59" x2="4.92" y2="5.32" fill="none" stroke="#bfa613" strokeMiterlimit="10" />
    <line x1="2.53" y1="26.51" x2="2.53" y2="31.22" fill="none" stroke="#0a0a0a" strokeMiterlimit="10" />
    <line x1="4.55" y1="26.51" x2="4.55" y2="31.22" fill="none" stroke="#0a0a0a" strokeMiterlimit="10" />
    <polyline points="85.29 4.69 78.92 4.69 76.57 7.03 68.45 7.03 66.05 4.64 58.69 4.64" fill="none" stroke="#4d4d4d"
      strokeMiterlimit="10" opacity="0.5" />
    <polygon points="182 11.82 176.25 6.1 182 6.1 182 11.82" fill="#4d4d4d" opacity="0.5" />
    <g data-triangle="triangle" transform="rotate(0)" transform-origin="94.7% 50%">
      <polygon points="172.43 22.79 167.6 17.86 177.25 17.86 172.43 22.79" fill="#bfa613" />
      <line x1="177.25" y1="16.25" x2="167.6" y2="16.25" fill="none" stroke="#bfa613" strokeMiterlimit="10"
        opacity="0.75" />
    </g>
    <text data-label="label" transform="translate(111.78 4.96) scale(1.01 1)" opacity="0.75" font-size="9.92"
      fill="#4d4d4d" font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">{label}</text>
</svg>
    </label>
   );
}