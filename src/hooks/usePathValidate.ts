import { useLocation } from 'react-router-dom';

type Props = {
  path: string;
  fn: Function;
};
export const usePathValidate = () => {
  const { pathname } = useLocation();
  const validatePathes = (pathes: Props[]) =>
    pathes.some((obj) => {
      if (obj.path === pathname) {
        obj.fn();
        return true;
      } else {
        return false;
      }
    });

  return validatePathes;
};
