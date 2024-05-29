import { BgGradient } from '../../assets/decor/nonInteractive';
import { Logo } from '../Common/Logo';
import { Frame } from './components/Frame';
import { Sign } from './components/Sign';
import { Styles } from './style';
import { FormRegLog } from './components/Form';

const Auth = () => {
  const signData = [
    { label: 'sign in', path: '/auth/login' },
    { label: 'sign up', path: '/auth/register' },
  ];

  return (
    <>
      <Styles.Container>
        <Styles.Group>
          {signData.map((elem, i) => (
            <Sign
              style={{ width: '8.4vw' }}
              key={i}
              _id={i}
              inputOptions={{ label: elem.label }}
              path={elem.path}
            />
          ))}
        </Styles.Group>

        <FormRegLog />
        <Frame />
        <Logo
          style={{
            position: 'absolute',
            width: '18vw',
            right: '9vw',
            top: '8vw',
          }}
          fill="#222"
        />
      </Styles.Container>
      <BgGradient />
    </>
  );
};

export default Auth;
