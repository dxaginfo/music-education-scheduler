import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

import { RootState } from './store';
import { checkAuthStatus } from './store/auth/authSlice';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Main Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import CalendarPage from './pages/calendar/CalendarPage';
import LessonsPage from './pages/lessons/LessonsPage';
import StudentsPage from './pages/students/StudentsPage';
import TeachersPage from './pages/teachers/TeachersPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import ProfilePage from './pages/profile/ProfilePage';
import PaymentsPage from './pages/payments/PaymentsPage';
import ReportsPage from './pages/reports/ReportsPage';
import SettingsPage from './pages/settings/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

// Route Guards
const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
  
  if (isLoading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const PublicRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
  
  if (isLoading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  
  return !isAuthenticated ? element : <Navigate to="/dashboard" replace />;
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="register" element={<PublicRoute element={<RegisterPage />} />} />
        <Route path="forgot-password" element={<PublicRoute element={<ForgotPasswordPage />} />} />
      </Route>

      {/* Main App Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
        <Route path="calendar" element={<PrivateRoute element={<CalendarPage />} />} />
        <Route path="lessons" element={<PrivateRoute element={<LessonsPage />} />} />
        <Route path="students" element={<PrivateRoute element={<StudentsPage />} />} />
        <Route path="teachers" element={<PrivateRoute element={<TeachersPage />} />} />
        <Route path="resources" element={<PrivateRoute element={<ResourcesPage />} />} />
        <Route path="profile" element={<PrivateRoute element={<ProfilePage />} />} />
        <Route path="payments" element={<PrivateRoute element={<PaymentsPage />} />} />
        <Route path="reports" element={<PrivateRoute element={<ReportsPage />} />} />
        <Route path="settings" element={<PrivateRoute element={<SettingsPage />} />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;