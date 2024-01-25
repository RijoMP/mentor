import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutRdc } from '../global/redux/slice/slice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutRdc());

    // Navigate the user to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1 className='text-deep-orange-100'>Welcome to the Home Page</h1>
      {/* Add your home page content here */}
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
