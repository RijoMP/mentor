import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Client from '../components/Client';
import Dashboard from '../components/client/ClientDashboard';
import Profile from '../components/client/ClientProfile';

const clientRoutes: React.ReactElement<RouteProps>[] = [
  <Route
    key="client-home"
    path="/"
    element={<Client />}
  >
    <Route key="client-dashboard" path="dashboard" element={<Dashboard />} />
    <Route key="client-profile" path="profile" element={<Profile />} />
    {/* Add more client sub-routes as needed */}
  </Route>,
];

export default clientRoutes;
