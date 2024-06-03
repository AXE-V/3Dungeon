import { BgGradient, Cell, MainBodyDecor } from '../../assets/decor/nonInteractive';
import Styles from './style.js';
import { Card_1 } from '../Common/Cards/1';
import { BtnNextBack } from '../Common/BtnNextBack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../redux/store.js';
import { supabase } from '../../supabase.js';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/authProvider.js';
import { getUserPosts } from '../../redux/slices/data/post.js';
import { useCustomDispatch } from '../../hooks/useCustomDispatch.js';
import { Tables } from '../../interfaces/db.js';

const Catalog = () => {
  const location = useLocation();
  const { user } = useAuth();
  const dispatch = useCustomDispatch();
  const [fetchedData, setFetchedData] = useState<Tables<'models'>[] | null>(null);
  useEffect(() => {
    console.log(location.pathname);

    switch (location.pathname) {
      case `/`:
        break;
      case `/user/${user?.id}/3d-models`:
        try {
          const getUserPostsFunc = async () => {
            if (user?.id) {
              const userPosts = await dispatch(getUserPosts(user.id)).unwrap();

              console.log(userPosts.data);
              setFetchedData(userPosts.data);
            }
          };
          getUserPostsFunc();
        } catch (error) {
          console.log(error);
        }
        break;
      case `user/${user?.id}/likes`:
        break;

      default:
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log(fetchedData);
  }, [fetchedData]);

  // const cards = () => {
  //   const arrCards = [];
  //   for (let i = 0; i < 12; i++) {
  //     arrCards.push(<Card_1 key={i} style={{ height: '12vw' }} />);
  //   }
  //   return arrCards;
  // };

  return (
    <>
      <Styles.CardContainer>
        {fetchedData &&
          fetchedData.map((item) => (
            <Card_1 key={item.id} data={{ ...item! }} style={{ height: '12vw' }} />
          ))}
      </Styles.CardContainer>
      <section>
        <BtnNextBack style={{ left: '.6vw' }} />
        <BtnNextBack style={{ right: '.6vw', rotate: '180deg' }} />
        <div className={Styles.cellContainer()}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <BgGradient />
        <MainBodyDecor />
      </section>
    </>
  );
};

export default Catalog;
