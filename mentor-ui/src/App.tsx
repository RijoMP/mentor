import React from 'react';
import { BrowserRouter, Route, Link, Outlet, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './layouts/Layout';
import Home from './components/Home';
import ProtectedRoute from './ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route
          path="profile"
          element={<Profile />}
        />
        <Route path="/home" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
     }/>
          {/* <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route
          path="login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <Outlet />
    </div>
  );
}

function Posts() {
  return <h3>Posts</h3>;
}

function Comments() {
  return <h3>Comments</h3>;
}

function NoPage() {
  return <h3>No Page</h3>;
}
