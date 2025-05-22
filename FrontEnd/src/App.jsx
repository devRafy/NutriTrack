import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
