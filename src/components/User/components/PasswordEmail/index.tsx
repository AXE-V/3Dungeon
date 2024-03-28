import { FC } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { Field_2 } from "./components/Field";
import { Styles } from "./style";
import { usePasswordEmailEvents } from "../../../../hooks/usePasswordEmailEvents";

export const PasswordEmail: FC<SVGComponent & {headersData: string}> = ({_id, _idParent, headersData, label, style}) => {
  const {onMouseLeave, onMouseOver} = usePasswordEmailEvents(_id, _idParent)

  return ( 
    <div 
      style={{position: 'relative'}} 
      onMouseOver={onMouseOver} 
      onMouseLeave={onMouseLeave}>

      <div 
      style={{
        position: 'absolute', 
        left: '1.84vw', 
        top: '.9vw', 
        fontSize: '.75vw', 
        opacity: .75, 
        userSelect: 'none', 
        pointerEvents: 'none'}}
        >

        change the {headersData} for your
        <span style={{color: '#c6b63f'}}> 3Dungeon </span> 
        account

      </div>

      <Styles.FieldsContainer>        
        {Array.isArray(label) ? 
        label?.map((elem: any, i: number) => (
          <Field_2 {...elem} key={i} _id={i} _idParent={_id} style={{width: '90%'}}/>
        )) : void 0}     
      </Styles.FieldsContainer>

      <svg id='emailBox' style={style} viewBox="0 0 696.47 161.01">
      <path d="M1686.27-204l-22.75,22.75v65.59h-673V-255.14l20.78-20.78h453.36l13,13h208.46Z"
        transform="translate(-990.18 276.29)" fill="#111" pointerEvents='none'/>
      <g opacity="0.75" pointerEvents='none'>
        <rect x="675.69" y="20.13" width="11.26" height="11.26" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" />
        <line x1="675.69" y1="20.13" x2="686.94" y2="31.38" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" />
      </g>
      <polyline points="71.97 5.64 22.68 5.64 5.58 22.74 5.58 36.7" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
        stroke-width="0.75" opacity="0.25" pointerEvents='none'/>
      <g pointerEvents='none'>
        <path data-focus-stroke d="M1477.68-262.93l-13-13H1011.33l-20.78,20.78v139.48h673v-65.59L1686.27-204v-59Z" opacity={0}
          transform="translate(-990.18 276.29)" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="0.75" />
        <polygon data-focus-fill points="661.49 160.63 673.32 148.8 673.32 160.63 661.49 160.63" fill="#4d4d4d" opacity={0}/>
      </g>
      <g pointerEvents='none'>
        <polyline points="671.54 88.85 691.09 69.29 691.09 41.93" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.25" />
        <rect x="693.36" y="3.58" width="2.74" height="4.65" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.5" />
        <rect x="688.36" y="3.58" width="2.74" height="4.65" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.25" />
        <rect x="683.5" y="3.58" width="2.74" height="4.65" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.1" />
        <rect x="678.58" y="3.58" width="2.74" height="4.65" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.75" />
        <line x1="684.1" y1="41.93" x2="684.1" y2="52.65" fill="none" stroke="#0a0a0a" stroke-miterlimit="10" />
        <line x1="686.86" y1="41.93" x2="686.86" y2="52.65" fill="none" stroke="#0a0a0a" stroke-miterlimit="10" />
      </g>
      <g opacity="0.75" pointerEvents='none'>
        <text transform="translate(496.91 8.22) scale(0.95 1)" font-size="16" fill="#c6b63f"
          font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK" style={{userSelect: 'none'}}>ub-2</text>
      </g>
      <g pointerEvents='none'>
        <line x1="81.33" y1="5.67" x2="90.74" y2="5.67" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" />
        <line x1="5.52" y1="46.14" x2="5.52" y2="55.55" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" />
        <polygon points="656.62 48.28 668.48 36.42 668.48 20.16 503.12 20.16 485.28 38 74.48 38 74.48 48.28 656.62 48.28"
          fill="#161616" stroke="#161616" stroke-miterlimit="10" />
        <rect x="67.75" y="37.98" width="2.86" height="10.3" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.25" />
        <rect x="61.13" y="37.98" width="2.86" height="10.3" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.5" />
        <rect x="54.51" y="37.98" width="2.86" height="10.3" fill="none" stroke="#4d4d4d" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.75" />
        <rect x="47.89" y="37.98" width="2.86" height="10.3" fill="none" stroke="#c6b63f" stroke-miterlimit="10"
          stroke-width="0.75" opacity="0.75" />
      </g>
  </svg>
    </div>
   );
}