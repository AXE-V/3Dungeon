import { useLocation } from 'react-router-dom';

export const usePathValidate = () => {
  const { pathname } = useLocation();
  const validatePathes = (pathes: string[]) =>
    pathes.some((url) => (url === pathname ? true : false));

  return validatePathes;
};
