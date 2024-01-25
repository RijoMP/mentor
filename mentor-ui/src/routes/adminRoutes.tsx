import React from 'react';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import Admin from '../components/Admin';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminProfile from '../components/admin/AdminProfile';
import Layout from 'src/layouts/Layout';

const adminRoutes: React.ReactElement<RouteProps>[] = [
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route
        path="profile"
        element={<AdminProfile />}
      />
        {/* <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
];

export default adminRoutes;
