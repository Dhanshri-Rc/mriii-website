import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Journals from '../pages/Journals';
import Events from '../pages/Events';
import Membership from '../pages/Membership';
import ContactUs from '../pages/ContactUs';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/journals" element={<MainLayout><Journals /></MainLayout>} />
      <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
      <Route path="/membership" element={<MainLayout><Membership /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
    </Routes>
  );
}
