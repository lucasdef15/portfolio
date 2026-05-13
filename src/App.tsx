import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
