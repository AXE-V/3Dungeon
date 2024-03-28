import { FC, useRef } from "react";
import { styleController } from "../../../../../../assets/decor/interactive";
import { SVGComponent } from "../../../../../../interfaces/SVGComponent";

type State = {seeFunc: () => void, canSee: boolean}
export const InputEye: FC<SVGComponent & State> = ({seeFunc, canSee}) => {
  const fieldRef = useRef(null)

  function onClick() {
    seeFunc()
    // canSee ? styleController((fieldRef.current! as HTMLInputElement).childNodes, 'add', {stroke: '#c6b63f'}) : 
    // styleController((fieldRef.current! as HTMLInputElement).childNodes, 'remove')
  }

  return ( 
      <svg viewBox="0 0 25.68 24.48" onClick={onClick} ref={fieldRef} style={{height: '1.45vw', zIndex: 5, pointerEvents: 'painted'}}>
        <polygon data-focus-fill points="20.36 0.5 0.5 0.5 0.5 23.98 25.18 23.98 25.18 5.32 20.36 0.5" fill="#181818"
          stroke="#181818" stroke-miterlimit="10" />
        <g>
          <path data-focus-stroke
            d="M952.15,548.48l-6.66,10.78a1,1,0,0,0,.85,1.52h13.32a1,1,0,0,0,.85-1.52l-6.66-10.78A1,1,0,0,0,952.15,548.48Z"
            transform="translate(-940.16 -542.06)" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75"
            opacity="0.75" />
          <circle data-focus-stroke cx="12.84" cy="14" r="2.12" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75"
            opacity="0.75" />
        </g>
      </svg>
   );
}