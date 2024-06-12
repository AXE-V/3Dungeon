import { Html } from '@react-three/drei';
import { SVGComponent } from '../../../interfaces/SVGComponent';

export function Loading({ style }: SVGComponent) {
  return (
    <Html>
      <h2
        style={{
          position: 'relative',
          left: '0%',
          top: '0%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.75,
          textWrap: 'nowrap',
          fontSize: '1vw',
          width: '100%',
          height: '100%',
          ...style,
        }}>
        model data loading...
      </h2>
    </Html>
  );
}
