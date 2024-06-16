//@ts-nocheck
import { FC, useEffect } from 'react';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { Styles } from './style';
import { Scrollbar } from '../../../Common/Scroll';
import { Card_2 } from '../../../Common/Cards/2';
import BtnCollection from './components/BtnCollection';

import { useSelector } from 'react-redux';
import { cartSelector, setCartID } from '../../../../redux/slices/data/cart';
import store from '../../../../redux/store';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { Field_2 } from '../../../Common/Fields/2';
import { Field_3 } from '../../../Common/Fields/3';
import { Field_1 } from '../../../Common/Fields/1';

export const CartPanel: FC<SVGComponent> = ({ style }) => {
  const cartSlice = useSelector(cartSelector);
  const dispatch = useCustomDispatch();
  useEffect(() => {}, []);

  return (
    <div style={{ position: 'absolute', right: 0, top: 76, ...style }}>
      <Styles.Container>
        <div className={Styles.header()}>
          <span style={{ position: 'relative', opacity: 0.75 }}>Cart of posts</span>
          <Styles.Counter>{cartSlice.total}</Styles.Counter>
        </div>
        <Scrollbar
          buttons={false}
          windowStyle={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr .05fr',
            height: '65.7vh',
          }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: '1vw',
            }}>
            {cartSlice.posts.map((post, i) => (
              <Card_2 key={post.id} post={post} order={i + 1} />
            ))}
          </div>
        </Scrollbar>

        <div
          style={{
            height: '10.5vw',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1vw',
            paddingTop: '1vw',
          }}>
          <Field_2
            inputOptions={{ label: 'name', type: 'text' }}
            action={setCartID}
            sliceValue={cartSlice.id}
          />
          <BtnCollection style={{ width: '20vw' }} />
        </div>
      </Styles.Container>
    </div>
  );
};
