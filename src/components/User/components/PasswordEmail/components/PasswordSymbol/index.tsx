import { FC } from "react"
import { SVGComponent } from "../../../../../../interfaces/SVGComponent"

export const PasswordSymbol: FC<SVGComponent> = ({transform}) => {
  return (
    <svg viewBox="0 0 21.72 18.81" style={{maxWidth: '1.2vw', minWidth: '1.2vw', display: 'inline'}}>
      <path d="M962.79,549.22h-5.2l-3.91-6.78-3.92-6.78,2.6-4.5H968l2.59,4.5-3.91,6.78Z"
        transform={`translate(-949.33 -530.78) ${transform ? transform : ''}`} fill="none" stroke="#c6b63f" strokeMiterlimit="10" strokeWidth="0.75" />
    </svg>
  )
}