import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard/Dashboard';
import Journal from './pages/Dashboard/Journal';
import Event from './pages/Dashboard/Event';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/dashboard/journals" element={<Journal />} />
        <Route  path="/dashboard/events" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}