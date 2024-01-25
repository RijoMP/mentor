import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from './global/redux/slice/slice';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('here')
  const user = useSelector((state: RootState) => state.user); // Corrected type
  const location = useLocation();
  console.log(user);
  if (!user.isAuthenticated) {
    console.log(user);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
