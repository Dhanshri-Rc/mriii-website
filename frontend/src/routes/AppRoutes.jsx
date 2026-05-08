import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Journals from '../pages/Journals';
import Events from '../pages/Events';
import Membership from '../pages/Membership';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Journal from '../pages/Dashboard/Journal';
import Event from '../pages/Dashboard/Event';

// Protected route wrapper — redirects to /login if no token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/login" replace />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/journals" element={<MainLayout><Journals /></MainLayout>} />
      <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
      <Route path="/membership" element={<MainLayout><Membership /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Protected Admin Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/dashboard/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
      <Route path="/dashboard/event" element={<ProtectedRoute><Event /></ProtectedRoute>} />
    </Routes>
  );
}
