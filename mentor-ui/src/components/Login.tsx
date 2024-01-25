// Login.tsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setIsFetching, updateUser } from '../global/redux/slice/slice';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const simulateApiCall = (username: string, password: string) => {
    return new Promise<{
      isAuthenticated: boolean;
      name: string;
      isFetching:boolean
    }>((resolve, reject) => {
      // Simulating success after a delay (you would replace this with your actual API call)
      setTimeout(() => {
        resolve({
          isAuthenticated: true,
          name: "collins",
          isFetching:false
        });
      }, 1000);
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Dispatch action to set isFetching to true
      dispatch(setIsFetching());

      // Simulating API call for user authentication
      const authenticatedUser = await simulateApiCall(username, password);

      // Dispatch action to update the user state with the authenticated user
      dispatch(updateUser(authenticatedUser));

      // Redirect the user after successful authentication
      const from = location.state?.from || '/home';
      navigate(from);
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
