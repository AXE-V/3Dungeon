import { FC, SyntheticEvent } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { styleController } from "../../../../utils/styleController";

export const BgUpload: FC<SVGComponent> = ({style}) => {

  function onMouseLeave<E extends SyntheticEvent<EventTarget>>(e: E) {    
    // styleController(e, {command: 'remove'})

    
  }

  function onMouseOver<E extends SyntheticEvent<EventTarget>>(e: E) {  
    // styleController(e, {command: 'add'})
    // console.log((e.currentTarget as HTMLElement).childNodes);
  }

  return ( 
    <svg 
      id="Слой_1" 
      data-name="Слой 1" 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1871.03 947.51" 
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      style={{
        width: '95vw', 
        position: 'absolute', 
        left: '50%', 
        top: '4vw', 
        transform: 'translate(-50%, 0)', 
        zIndex: -1, 
        ...style
        }}>
  <defs>
    <pattern id="Новый_узор_3" data-name="Новый узор 3" width="120" height="120"
      patternTransform="matrix(-0.5, 0, 0, 0.5, 13.5, -103.69)" patternUnits="userSpaceOnUse" viewBox="0 0 120 120">
      <rect width="120" height="120" fill="none" />
      <line x1="156.9" y1="113.1" x2="103.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="113.1" x2="-16.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="113.1" x2="3.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="113.1" x2="23.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="113.1" x2="43.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="113.1" x2="63.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="113.1" x2="83.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="113.1" x2="-36.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="73.1" x2="103.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="73.1" x2="-16.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="73.1" x2="3.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="73.1" x2="23.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="73.1" x2="43.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="73.1" x2="63.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="73.1" x2="83.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="73.1" x2="-36.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="33.1" x2="103.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="33.1" x2="-16.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="33.1" x2="3.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="33.1" x2="23.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="33.1" x2="43.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="33.1" x2="63.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="33.1" x2="83.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="33.1" x2="-36.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-6.9" x2="103.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-6.9" x2="-16.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-6.9" x2="3.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-6.9" x2="23.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-6.9" x2="43.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-6.9" x2="63.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-6.9" x2="83.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-6.9" x2="-36.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-46.9" x2="103.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-46.9" x2="-16.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-46.9" x2="3.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-46.9" x2="23.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-46.9" x2="43.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-46.9" x2="63.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-46.9" x2="83.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-46.9" x2="-36.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
    </pattern>
    <pattern id="Новый_узор_3-3" data-name="Новый узор 3" width="120" height="120"
      patternTransform="translate(13.5 -12) rotate(-180) scale(0.5)" patternUnits="userSpaceOnUse"
      viewBox="0 0 120 120">
      <rect width="120" height="120" fill="none" />
      <line x1="156.9" y1="113.1" x2="103.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="113.1" x2="-16.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="113.1" x2="3.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="113.1" x2="23.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="113.1" x2="43.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="113.1" x2="63.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="113.1" x2="83.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="113.1" x2="-36.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="73.1" x2="103.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="73.1" x2="-16.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="73.1" x2="3.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="73.1" x2="23.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="73.1" x2="43.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="73.1" x2="63.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="73.1" x2="83.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="73.1" x2="-36.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="33.1" x2="103.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="33.1" x2="-16.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="33.1" x2="3.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="33.1" x2="23.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="33.1" x2="43.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="33.1" x2="63.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="33.1" x2="83.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="33.1" x2="-36.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-6.9" x2="103.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-6.9" x2="-16.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-6.9" x2="3.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-6.9" x2="23.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-6.9" x2="43.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-6.9" x2="63.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-6.9" x2="83.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-6.9" x2="-36.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-46.9" x2="103.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-46.9" x2="-16.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-46.9" x2="3.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-46.9" x2="23.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-46.9" x2="43.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-46.9" x2="63.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-46.9" x2="83.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-46.9" x2="-36.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
    </pattern>
    <pattern id="Новый_узор_3-5" data-name="Новый узор 3" width="120" height="120"
      patternTransform="matrix(0.5, 0, 0, -0.5, -20.85, -12)" patternUnits="userSpaceOnUse" viewBox="0 0 120 120">
      <rect width="120" height="120" fill="none" />
      <line x1="156.9" y1="113.1" x2="103.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="113.1" x2="-16.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="113.1" x2="3.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="113.1" x2="23.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="113.1" x2="43.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="113.1" x2="63.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="113.1" x2="83.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="113.1" x2="-36.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="73.1" x2="103.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="73.1" x2="-16.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="73.1" x2="3.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="73.1" x2="23.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="73.1" x2="43.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="73.1" x2="63.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="73.1" x2="83.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="73.1" x2="-36.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="33.1" x2="103.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="33.1" x2="-16.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="33.1" x2="3.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="33.1" x2="23.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="33.1" x2="43.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="33.1" x2="63.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="33.1" x2="83.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="33.1" x2="-36.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-6.9" x2="103.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-6.9" x2="-16.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-6.9" x2="3.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-6.9" x2="23.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-6.9" x2="43.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-6.9" x2="63.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-6.9" x2="83.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-6.9" x2="-36.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-46.9" x2="103.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-46.9" x2="-16.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-46.9" x2="3.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-46.9" x2="23.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-46.9" x2="43.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-46.9" x2="63.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-46.9" x2="83.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-46.9" x2="-36.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
    </pattern>
    <pattern id="Новый_узор_3-7" data-name="Новый узор 3" width="120" height="120"
      patternTransform="translate(-20.85 -103.69) scale(0.5)" patternUnits="userSpaceOnUse" viewBox="0 0 120 120">
      <rect width="120" height="120" fill="none" />
      <line x1="156.9" y1="113.1" x2="103.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="113.1" x2="-16.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="113.1" x2="3.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="113.1" x2="23.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="113.1" x2="43.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="113.1" x2="63.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="113.1" x2="83.1" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="113.1" x2="-36.9" y2="166.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="73.1" x2="103.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="73.1" x2="-16.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="73.1" x2="3.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="73.1" x2="23.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="73.1" x2="43.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="73.1" x2="63.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="73.1" x2="83.1" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="73.1" x2="-36.9" y2="126.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="33.1" x2="103.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="33.1" x2="-16.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="33.1" x2="3.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="33.1" x2="23.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="33.1" x2="43.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="33.1" x2="63.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="33.1" x2="83.1" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="33.1" x2="-36.9" y2="86.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-6.9" x2="103.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-6.9" x2="-16.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-6.9" x2="3.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-6.9" x2="23.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-6.9" x2="43.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-6.9" x2="63.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-6.9" x2="83.1" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-6.9" x2="-36.9" y2="46.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <line x1="156.9" y1="-46.9" x2="103.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
      <g>
        <line x1="36.9" y1="-46.9" x2="-16.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="56.9" y1="-46.9" x2="3.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="76.9" y1="-46.9" x2="23.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="96.9" y1="-46.9" x2="43.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="116.9" y1="-46.9" x2="63.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
        <line x1="136.9" y1="-46.9" x2="83.1" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
          stroke-width="5" />
      </g>
      <line x1="16.9" y1="-46.9" x2="-36.9" y2="6.9" fill="none" stroke="#2e2e2e" stroke-miterlimit="10"
        stroke-width="5" />
    </pattern>
  </defs>
  <g id="sym_upload_model">
    <g>
      <polyline points="1134.75 94.31 1134.75 160.2 1058.9 236.05" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
        opacity="0.1" />
      <path data-stroke d="M1159.42,112.07" transform="translate(-24.68 -66.43)" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
        stroke-width="0.75" />
      <g id="top_right">
        <polygon points="1818.04 227.81 1870.67 175.18 1870.67 187.87 1818.71 239.83 1818.04 227.81" fill="#4d4d4d"
          opacity="0.25" />
        <g>
          <path d="M1593.89,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M1638,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
          <path d="M1663.25,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M1895,172.88" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1817.28 217.36 1870.28 164.37 1870.28 115.28" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline
          points="1222.05 257.46 1169.62 309.89 1169.62 336.93 1216.54 383.85 1348.97 251.43 1348.97 199.94 1522.78 26.14 1546.98 26.14"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <path
          d="M1550,100.76h23.09l25.12,25.12V149L1428.71,318.44h-23.1l-25.11-25.12V270.23ZM1389.5,289.85l19.59,19.59h17L1533.59,201.9v-17L1514,165.34h-17L1389.5,272.88Z"
          transform="translate(-24.68 -66.43)" fill="#4d4d4d" opacity="0.25" />
        <g opacity="0.75">
          <polygon points="1594.98 3.52 1609.1 3.52 1609.1 0.5 1590.39 0.5 1594.98 3.52" fill="#fff" />
          <line x1="1576.63" y1="0.5" x2="1609.1" y2="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" />
        </g>
        <g opacity="0.75">
          <line x1="1635.75" y1="0.5" x2="1613.34" y2="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" />
          <polygon points="1619.04 3.52 1613.34 3.52 1613.34 0.5 1623.28 0.5 1619.04 3.52" fill="#fff" />
        </g>
        <g opacity="0.25">
          <path d="M1425.19,154.82" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1179.05 309.84 1375.67 113.22 1400.51 88.39" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="1228.94 259.95 1228.94 245.99 1289.84 185.09 1303.36 185.09 1228.94 259.95" fill="#4d4d4d" />
        </g>
        <g opacity="0.5">
          <polygon points="1460.77 28.13 1460.77 34.88 1449.3 46.35 1442.71 46.35 1460.77 28.13" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="1437.32 51.58 1437.32 58.33 1425.85 69.8 1419.26 69.8 1437.32 51.58" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1407.18 81.72 1488.39 0.5 1569.22 0.5" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
        </g>
        <g opacity="0.75">
          <polyline data-stroke points="1358.3 244.22 1358.3 257.46 1322.8 292.97" fill="none" stroke="#c6b63f"
            stroke-miterlimit="10" />
        </g>
        <g opacity="0.25">
          <polyline
            points="1689.92 19.1 1692.6 21.77 1758.04 21.77 1766.21 29.94 1858.28 29.94 1864.82 36.48 1864.82 87.7 1870.28 93.16 1870.28 19.1 1689.92 19.1"
            fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1870.28 106.44 1870.28 19.1 1659.47 19.1 1640.87 0.5 1638.57 0.5" fill="none"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline points="1210.52 390.45 1162.85 342.77 1162.85 309.84" fill="none" stroke="#fff" stroke-miterlimit="10"
          stroke-width="0.75" />
        <polygon points="1457.99 21.59 1478.98 0.59 1470.33 0.4 1452.82 16.41 1457.99 21.59" fill="none" stroke="#fff"
          stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="1448.03" y="96.98" width="33.69" height="7.32" transform="translate(333.21 998.87) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="1420.41" y="124.3" width="34.29" height="7.32" transform="translate(305.89 987.55) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.25" />
        <polyline points="1870.67 204.45 1820.58 254.54 1820.58 318.33" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" />
        <polyline points="1497.05 112.68 1487.81 103.44 1473.99 103.44 1439.53 137.9" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <polyline points="1376.7 230.51 1385.94 239.75 1399.76 239.75 1434.22 205.29" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <g>
          <polygon points="1344.79 203.58 1344.79 250.16 1341.35 253.59 1341.35 207.24 1344.79 203.58" fill="#4d4d4d"
            opacity="0.25" />
          <polygon points="1338.5 209.86 1338.5 256.44 1335.06 259.88 1335.06 213.52 1338.5 209.86" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.06" opacity="0.23" />
          <polygon points="1332.22 216.15 1332.22 262.72 1328.78 266.16 1328.78 219.81 1332.22 216.15" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.12" opacity="0.21" />
          <polygon points="1325.93 222.43 1325.93 269.01 1322.49 272.45 1322.49 226.09 1325.93 222.43" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.17" opacity="0.19" />
          <polygon points="1319.65 228.71 1319.65 275.29 1316.21 278.73 1316.21 232.37 1319.65 228.71" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.23" opacity="0.17" />
          <polygon points="1313.37 235 1313.37 281.57 1309.93 285.01 1309.93 238.66 1313.37 235" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.29" opacity="0.15" />
          <polygon points="1307.08 241.28 1307.08 287.86 1303.64 291.3 1303.64 244.94 1307.08 241.28" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.35" opacity="0.13" />
          <polygon points="1300.8 247.56 1300.8 294.14 1297.36 297.58 1297.36 251.22 1300.8 247.56" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.4" opacity="0.12" />
          <polygon points="1294.52 253.85 1294.52 300.43 1291.08 303.87 1291.08 257.51 1294.52 253.85" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.46" opacity="0.1" />
          <polygon points="1288.23 260.13 1288.23 306.71 1284.79 310.15 1284.79 263.79 1288.23 260.13" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.52" opacity="0.08" />
          <polygon points="1281.95 266.42 1281.95 312.99 1278.51 316.43 1278.51 270.08 1281.95 266.42" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.58" opacity="0.06" />
          <polygon points="1275.66 272.7 1275.66 319.28 1272.22 322.72 1272.22 276.36 1275.66 272.7" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.63" opacity="0.04" />
          <polygon points="1269.38 278.98 1269.38 325.56 1265.94 329 1265.94 282.64 1269.38 278.98" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.69" opacity="0.02" />
          <polygon points="1263.1 285.27 1263.1 331.84 1259.66 335.28 1259.66 288.93 1263.1 285.27" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0" />
        </g>
        <g opacity="0.1">
          <polygon
            points="1580.16 82.58 1737.57 82.58 1737.57 38.72 1655.69 38.72 1636.58 57.82 1580.16 57.82 1580.16 82.58"
            fill="url(#Новый_узор_3)" />
        </g>

        <g id="fileOver">
          <polyline data-focus-stroke
            points="1807.57 473.75 1807.57 214.4 1863.86 158.11 1863.86 96.51 1854.74 87.39 1754.42 87.39 1741.65 100.16 1573.49 100.16 1546.85 126.81"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
          <polyline data-focus-stroke
            points="1344.79 128.69 1304.03 169.45 1285.1 169.45 1176.52 278.04 1134.75 278.04 1124.46 267.75 1084.98 267.75 1062.31 290.42"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
        </g>
        
      </g>
      <g id="bottom_right">
        <polygon points="1818.04 719.7 1870.67 772.33 1870.67 759.64 1818.71 707.68 1818.04 719.7" fill="#4d4d4d"
          opacity="0.25" />
        <g>
          <path d="M1593.89,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M1638,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M1663.25,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M1895,907.5" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
          <polyline points="1817.28 730.14 1870.28 783.14 1870.28 832.23" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline
          points="1222.05 690.04 1169.62 637.62 1169.62 610.58 1216.54 563.66 1348.97 696.08 1348.97 747.57 1522.78 921.37 1546.98 921.37"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <path
          d="M1380.5,810.15V787.06l25.11-25.12h23.1L1598.17,931.4v23.1l-25.12,25.11H1550Zm9-2.65L1497,915h17l19.59-19.59v-17L1426.06,770.94h-17l-19.59,19.59Z"
          transform="translate(-24.68 -66.43)" fill="#4d4d4d" opacity="0.25" />
        <g opacity="0.75">
          <polygon points="1594.98 943.99 1609.1 943.99 1609.1 947.01 1590.39 947.01 1594.98 943.99" fill="#fff" />
          <line x1="1576.63" y1="947.01" x2="1609.1" y2="947.01" fill="none" stroke="#fff" stroke-miterlimit="10" />
        </g>
        <g opacity="0.75">
          <line x1="1635.75" y1="947.01" x2="1613.34" y2="947.01" fill="none" stroke="#fff" stroke-miterlimit="10" />
          <polygon points="1619.04 943.99 1613.34 943.99 1613.34 947.01 1623.28 947.01 1619.04 943.99" fill="#fff" />
        </g>
        <g opacity="0.25">
          <path d="M1425.19,925.56" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1179.05 637.67 1375.67 834.29 1400.51 859.12" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="1228.94 687.55 1228.94 701.52 1289.84 762.42 1303.36 762.42 1228.94 687.55" fill="#4d4d4d" />
        </g>
        <g opacity="0.5">
          <polygon points="1460.77 919.38 1460.77 912.63 1449.3 901.16 1442.71 901.16 1460.77 919.38" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="1437.32 895.93 1437.32 889.18 1425.85 877.71 1419.26 877.71 1437.32 895.93" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1407.18 865.79 1488.39 947.01 1569.22 947.01" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <g opacity="0.75">
          <polyline data-stroke points="1358.3 703.28 1358.3 690.04 1322.8 654.54" fill="none" stroke="#c6b63f"
            stroke-miterlimit="10" />
        </g>
        <g opacity="0.25">
          <polyline
            points="1689.92 928.41 1692.6 925.74 1758.04 925.74 1766.21 917.57 1858.28 917.57 1864.82 911.03 1864.82 859.81 1870.28 854.35 1870.28 928.41 1689.92 928.41"
            fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="1870.28 841.07 1870.28 928.41 1659.47 928.41 1640.87 947.01 1638.57 947.01" fill="none"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline points="1210.52 557.06 1162.85 604.73 1162.85 637.67" fill="none" stroke="#fff" stroke-miterlimit="10"
          stroke-width="0.75" />
        <polygon points="1457.99 925.92 1478.98 946.91 1470.33 947.11 1452.82 931.1 1457.99 925.92" fill="none"
          stroke="#fff" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="1461.22" y="962.89" width="7.32" height="33.69" transform="translate(-288.4 1256.35) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="1433.9" y="935.27" width="7.32" height="34.29" transform="translate(-277.09 1229.03) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.25" />
        <polyline points="1870.67 743.06 1820.58 692.97 1820.58 629.17" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" />
        <polyline points="1497.05 834.83 1487.81 844.07 1473.99 844.07 1439.53 809.61" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <polyline points="1376.7 717 1385.94 707.76 1399.76 707.76 1434.22 742.22" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <g>
          <polygon points="1344.79 743.93 1344.79 697.36 1341.35 693.91 1341.35 740.27 1344.79 743.93" fill="#4d4d4d"
            opacity="0.25" />
          <polygon points="1338.5 737.65 1338.5 691.07 1335.06 687.63 1335.06 733.99 1338.5 737.65" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.06" opacity="0.23" />
          <polygon points="1332.22 731.36 1332.22 684.79 1328.78 681.35 1328.78 727.7 1332.22 731.36" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.12" opacity="0.21" />
          <polygon points="1325.93 725.08 1325.93 678.5 1322.49 675.06 1322.49 721.42 1325.93 725.08" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.17" opacity="0.19" />
          <polygon points="1319.65 718.8 1319.65 672.22 1316.21 668.78 1316.21 715.14 1319.65 718.8" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.23" opacity="0.17" />
          <polygon points="1313.37 712.51 1313.37 665.94 1309.93 662.5 1309.93 708.85 1313.37 712.51" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.29" opacity="0.15" />
          <polygon points="1307.08 706.23 1307.08 659.65 1303.64 656.21 1303.64 702.57 1307.08 706.23" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.35" opacity="0.13" />
          <polygon points="1300.8 699.95 1300.8 653.37 1297.36 649.93 1297.36 696.28 1300.8 699.95" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.4" opacity="0.12" />
          <polygon points="1294.52 693.66 1294.52 647.09 1291.08 643.64 1291.08 690 1294.52 693.66" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.46" opacity="0.1" />
          <polygon points="1288.23 687.38 1288.23 640.8 1284.79 637.36 1284.79 683.72 1288.23 687.38" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.52" opacity="0.08" />
          <polygon points="1281.95 681.09 1281.95 634.52 1278.51 631.08 1278.51 677.43 1281.95 681.09" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.58" opacity="0.06" />
          <polygon points="1275.66 674.81 1275.66 628.23 1272.22 624.79 1272.22 671.15 1275.66 674.81" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.63" opacity="0.04" />
          <polygon points="1269.38 668.53 1269.38 621.95 1265.94 618.51 1265.94 664.87 1269.38 668.53" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.69" opacity="0.02" />
          <polygon points="1263.1 662.24 1263.1 615.67 1259.66 612.23 1259.66 658.58 1263.1 662.24" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0" />
        </g>
        <g opacity="0.1">
          <polygon
            points="1580.16 864.93 1737.57 864.93 1737.57 908.79 1655.69 908.79 1636.58 889.69 1580.16 889.69 1580.16 864.93"
            fill="url(#Новый_узор_3-3)" />
        </g>

        <g id="fileOver">
          <polyline data-focus-stroke
            points="1807.57 473.75 1807.57 733.11 1863.86 789.4 1863.86 851 1854.74 860.12 1754.42 860.12 1741.65 847.35 1573.49 847.35 1546.85 820.7"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
          <polyline data-focus-stroke
            points="1344.79 818.81 1304.03 778.06 1285.1 778.06 1176.52 669.47 1134.75 669.47 1124.46 679.76 1084.98 679.76 1062.31 657.09"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
        </g>

      </g>
      <polyline points="736.28 94.31 736.28 160.2 812.13 236.05" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
        opacity="0.1" />
      <g id="bottom_left">
        <polygon points="52.98 719.7 0.35 772.33 0.35 759.64 52.31 707.68 52.98 719.7" fill="#4d4d4d" opacity="0.25" />
        <g>
          <path d="M326.48,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M282.36,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M257.13,1013.44" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M25.42,907.5" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="53.74 730.14 0.75 783.14 0.75 832.23" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
        </g>
        <polyline
          points="648.97 690.04 701.4 637.62 701.4 610.58 654.48 563.66 522.06 696.08 522.06 747.57 348.25 921.37 324.04 921.37"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <path
          d="M539.88,810.15V787.06l-25.12-25.12H491.67L322.21,931.4v23.1l25.11,25.11h23.1Zm-9-2.65L423.34,915h-17l-19.59-19.59v-17L494.32,770.94h17l19.59,19.59Z"
          transform="translate(-24.68 -66.43)" fill="#4d4d4d" opacity="0.25" />
        <g opacity="0.75">
          <polygon points="276.04 943.99 261.92 943.99 261.92 947.01 280.63 947.01 276.04 943.99" fill="#fff" />
          <line x1="294.39" y1="947.01" x2="261.92" y2="947.01" fill="none" stroke="#fff" stroke-miterlimit="10" />
        </g>
        <g opacity="0.75">
          <line x1="235.28" y1="947.01" x2="257.69" y2="947.01" fill="none" stroke="#fff" stroke-miterlimit="10" />
          <polygon points="251.98 943.99 257.69 943.99 257.69 947.01 247.75 947.01 251.98 943.99" fill="#fff" />
        </g>
        <g opacity="0.25">
          <path d="M495.19,925.56" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="691.97 637.67 495.35 834.29 470.52 859.12" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="642.09 687.55 642.09 701.52 581.18 762.42 567.67 762.42 642.09 687.55" fill="#4d4d4d" />
        </g>
        <g opacity="0.5">
          <polygon points="410.26 919.38 410.26 912.63 421.73 901.16 428.32 901.16 410.26 919.38" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="433.71 895.93 433.71 889.18 445.18 877.71 451.77 877.71 433.71 895.93" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="463.85 865.79 382.63 947.01 301.81 947.01" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <g opacity="0.75">
          <polyline data-stroke points="512.72 703.28 512.72 690.04 548.23 654.54" fill="none" stroke="#c6b63f"
            stroke-miterlimit="10" />
        </g>
        <g opacity="0.25">
          <polyline
            points="181.1 928.41 178.43 925.74 112.98 925.74 104.82 917.57 12.75 917.57 6.21 911.03 6.21 859.81 0.74 854.35 0.74 928.41 181.1 928.41"
            fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="0.75 841.07 0.75 928.41 211.56 928.41 230.16 947.01 232.45 947.01" fill="none"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline points="660.5 557.06 708.18 604.73 708.18 637.67" fill="none" stroke="#fff" stroke-miterlimit="10"
          stroke-width="0.75" />
        <polygon points="413.03 925.92 392.04 946.91 400.69 947.11 418.21 931.1 413.03 925.92" fill="none" stroke="#fff"
          stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="438.66" y="976.08" width="33.69" height="7.32" transform="translate(-584.04 542.61) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="465.68" y="948.76" width="34.29" height="7.32" transform="translate(-556.72 553.93) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.25" />
        <polyline points="0.35 743.06 50.45 692.97 50.45 629.17" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" />
        <polyline points="373.98 834.83 383.22 844.07 397.04 844.07 431.5 809.61" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <polyline points="494.32 717 485.08 707.76 471.26 707.76 436.8 742.22" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <g>
          <polygon points="526.24 743.93 526.24 697.36 529.68 693.91 529.68 740.27 526.24 743.93" fill="#4d4d4d"
            opacity="0.25" />
          <polygon points="532.52 737.65 532.52 691.07 535.96 687.63 535.96 733.99 532.52 737.65" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.06" opacity="0.23" />
          <polygon points="538.81 731.36 538.81 684.79 542.25 681.35 542.25 727.7 538.81 731.36" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.12" opacity="0.21" />
          <polygon points="545.09 725.08 545.09 678.5 548.53 675.06 548.53 721.42 545.09 725.08" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.17" opacity="0.19" />
          <polygon points="551.37 718.8 551.37 672.22 554.82 668.78 554.82 715.14 551.37 718.8" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.23" opacity="0.17" />
          <polygon points="557.66 712.51 557.66 665.94 561.1 662.5 561.1 708.85 557.66 712.51" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.29" opacity="0.15" />
          <polygon points="563.94 706.23 563.94 659.65 567.38 656.21 567.38 702.57 563.94 706.23" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.35" opacity="0.13" />
          <polygon points="570.23 699.95 570.23 653.37 573.67 649.93 573.67 696.28 570.23 699.95" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.4" opacity="0.12" />
          <polygon points="576.51 693.66 576.51 647.09 579.95 643.64 579.95 690 576.51 693.66" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.46" opacity="0.1" />
          <polygon points="582.79 687.38 582.79 640.8 586.23 637.36 586.23 683.72 582.79 687.38" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.52" opacity="0.08" />
          <polygon points="589.08 681.09 589.08 634.52 592.52 631.08 592.52 677.43 589.08 681.09" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.58" opacity="0.06" />
          <polygon points="595.36 674.81 595.36 628.23 598.8 624.79 598.8 671.15 595.36 674.81" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.63" opacity="0.04" />
          <polygon points="601.64 668.53 601.64 621.95 605.09 618.51 605.09 664.87 601.64 668.53" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.69" opacity="0.02" />
          <polygon points="607.93 662.24 607.93 615.67 611.37 612.23 611.37 658.58 607.93 662.24" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0" />
        </g>
        <g opacity="0.1">
          <polygon
            points="290.87 864.93 133.45 864.93 133.45 908.79 215.34 908.79 234.44 889.69 290.87 889.69 290.87 864.93"
            fill="url(#Новый_узор_3-5)" />
        </g>
        <g id="fileOver">
          <polyline data-focus-stroke
            points="63.45 473.75 63.45 733.11 7.16 789.4 7.16 851 16.29 860.12 116.6 860.12 129.37 847.35 297.53 847.35 324.18 820.7"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
          <polyline data-focus-stroke
            points="526.24 818.81 567 778.06 585.92 778.06 694.51 669.47 736.28 669.47 746.57 679.76 786.04 679.76 808.71 657.09"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
        </g>
      </g>
      <g id="top_left">
        <polygon points="52.98 227.81 0.35 175.18 0.35 187.87 52.31 239.83 52.98 227.81" fill="#4d4d4d"
          opacity="0.25" />
        <g>
          <path d="M326.48,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M282.36,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M257.13,66.93" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <path d="M25.42,172.88" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="53.74 217.36 0.75 164.37 0.75 115.28" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
        </g>
        <polyline
          points="648.97 257.46 701.4 309.89 701.4 336.93 654.48 383.85 522.06 251.43 522.06 199.94 348.25 26.14 324.04 26.14"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <path
          d="M370.42,100.76h-23.1l-25.11,25.12V149L491.67,318.44h23.09l25.12-25.12V270.23ZM530.88,289.85l-19.59,19.59h-17L386.78,201.9v-17l19.59-19.59h17L530.88,272.88Z"
          transform="translate(-24.68 -66.43)" fill="#4d4d4d" opacity="0.25" />
        <g opacity="0.75">
          <polygon points="276.04 3.52 261.92 3.52 261.92 0.5 280.63 0.5 276.04 3.52" fill="#fff" />
          <line x1="294.39" y1="0.5" x2="261.92" y2="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" />
        </g>
        <g opacity="0.75">
          <line x1="235.28" y1="0.5" x2="257.69" y2="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" />
          <polygon points="251.98 3.52 257.69 3.52 257.69 0.5 247.75 0.5 251.98 3.52" fill="#fff" />
        </g>
        <g opacity="0.25">
          <path d="M495.19,154.82" transform="translate(-24.68 -66.43)" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="691.97 309.84 495.35 113.22 470.52 88.39" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="642.09 259.95 642.09 245.99 581.18 185.09 567.67 185.09 642.09 259.95" fill="#4d4d4d" />
        </g>
        <g opacity="0.5">
          <polygon points="410.26 28.13 410.26 34.88 421.73 46.35 428.32 46.35 410.26 28.13" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polygon points="433.71 51.58 433.71 58.33 445.18 69.8 451.77 69.8 433.71 51.58" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="463.85 81.72 382.63 0.5 301.81 0.5" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
            stroke-width="0.75" />
        </g>
        <g opacity="0.75">
          <polyline data-stroke points="512.72 244.22 512.72 257.46 548.23 292.97" fill="none" stroke="#c6b63f"
            stroke-miterlimit="10" />
        </g>
        <g opacity="0.25">
          <polyline
            points="181.1 19.1 178.43 21.77 112.98 21.77 104.82 29.94 12.75 29.94 6.21 36.48 6.21 87.7 0.74 93.16 0.74 19.1 181.1 19.1"
            fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
          <polyline points="0.75 106.44 0.75 19.1 211.56 19.1 230.16 0.5 232.45 0.5" fill="none" stroke="#4d4d4d"
            stroke-miterlimit="10" stroke-width="0.75" />
        </g>
        <polyline points="660.5 390.45 708.18 342.77 708.18 309.84" fill="none" stroke="#fff" stroke-miterlimit="10"
          stroke-width="0.75" />
        <polygon points="413.03 21.59 392.04 0.59 400.69 0.4 418.21 16.41 413.03 21.59" fill="none" stroke="#fff"
          stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="451.84" y="83.79" width="7.32" height="33.69" transform="translate(37.58 285.13) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.5" />
        <rect x="479.16" y="110.81" width="7.32" height="34.29" transform="translate(26.26 312.45) rotate(-45)"
          fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0.25" />
        <polyline points="0.35 204.45 50.45 254.54 50.45 318.33" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" />
        <polyline points="373.98 112.68 383.22 103.44 397.04 103.44 431.5 137.9" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <polyline points="494.32 230.51 485.08 239.75 471.26 239.75 436.8 205.29" fill="none" stroke="#4d4d4d"
          stroke-miterlimit="10" opacity="0.5" />
        <g>
          <polygon points="526.24 203.58 526.24 250.16 529.68 253.59 529.68 207.24 526.24 203.58" fill="#4d4d4d"
            opacity="0.25" />
          <polygon points="532.52 209.86 532.52 256.44 535.96 259.88 535.96 213.52 532.52 209.86" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.06" opacity="0.23" />
          <polygon points="538.81 216.15 538.81 262.72 542.25 266.16 542.25 219.81 538.81 216.15" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.12" opacity="0.21" />
          <polygon points="545.09 222.43 545.09 269.01 548.53 272.45 548.53 226.09 545.09 222.43" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.17" opacity="0.19" />
          <polygon points="551.37 228.71 551.37 275.29 554.82 278.73 554.82 232.37 551.37 228.71" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.23" opacity="0.17" />
          <polygon points="557.66 235 557.66 281.57 561.1 285.01 561.1 238.66 557.66 235" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.29" opacity="0.15" />
          <polygon points="563.94 241.28 563.94 287.86 567.38 291.3 567.38 244.94 563.94 241.28" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.35" opacity="0.13" />
          <polygon points="570.23 247.56 570.23 294.14 573.67 297.58 573.67 251.22 570.23 247.56" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.4" opacity="0.12" />
          <polygon points="576.51 253.85 576.51 300.43 579.95 303.87 579.95 257.51 576.51 253.85" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.46" opacity="0.1" />
          <polygon points="582.79 260.13 582.79 306.71 586.23 310.15 586.23 263.79 582.79 260.13" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.52" opacity="0.08" />
          <polygon points="589.08 266.42 589.08 312.99 592.52 316.43 592.52 270.08 589.08 266.42" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.58" opacity="0.06" />
          <polygon points="595.36 272.7 595.36 319.28 598.8 322.72 598.8 276.36 595.36 272.7" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.63" opacity="0.04" />
          <polygon points="601.64 278.98 601.64 325.56 605.09 329 605.09 282.64 601.64 278.98" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.69" opacity="0.02" />
          <polygon points="607.93 285.27 607.93 331.84 611.37 335.28 611.37 288.93 607.93 285.27" fill="#4d4d4d"
            stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" opacity="0" />
        </g>
        <g opacity="0.1">
          <polygon points="290.87 82.58 133.45 82.58 133.45 38.72 215.34 38.72 234.44 57.82 290.87 57.82 290.87 82.58"
            fill="url(#Новый_узор_3-7)" />
        </g>
        <g id="fileOver">
          <polyline data-focus-stroke
            points="63.45 473.75 63.45 214.4 7.16 158.11 7.16 96.51 16.29 87.39 116.6 87.39 129.37 100.16 297.53 100.16 324.18 126.81"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
          <polyline data-focus-stroke
            points="526.24 128.69 567 169.45 585.92 169.45 694.51 278.04 736.28 278.04 746.57 267.75 786.04 267.75 808.71 290.42"
            fill="none" stroke="#c6b63f" stroke-miterlimit="10" />
        </g>
      </g>
    </g>
    <rect x="43.45" y="54.13" width="66" height="3.88" fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10"
      stroke-width="0.75" opacity="0.25" />
    <line x1="15.83" y1="61.05" x2="35.38" y2="61.05" fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10"
      opacity="0.25" />
    <line x1="15.83" y1="63.52" x2="35.38" y2="63.52" fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10"
      opacity="0.5" />
    <line x1="15.83" y1="65.99" x2="35.38" y2="65.99" fill="#4d4d4d" stroke="#4d4d4d" stroke-miterlimit="10"
      opacity="0.75" />
    <g opacity="0.75">
      <g>
        <rect x="16.29" y="38.96" width="18.63" height="18.63" fill="none" data-stroke stroke="#c6b63f" stroke-miterlimit="10" />
        <line x1="16.29" y1="38.96" x2="34.92" y2="57.59" fill="none" data-stroke stroke="#c6b63f" stroke-miterlimit="10" />
      </g>
    </g>
    <g opacity="0.75">
      <text transform="translate(43.45 50.48)" font-size="22" fill="#fff"
        font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">uw-1.0</text>
    </g>
  </g>
</svg>
   );
}