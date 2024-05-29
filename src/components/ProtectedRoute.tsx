import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/authProvider';

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/auth/login'} />;
  }
  return <>{children}</>;
};
