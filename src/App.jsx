import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

//layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}
