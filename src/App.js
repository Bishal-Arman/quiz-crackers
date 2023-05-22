import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/routes';


function App() {
  return (
    <div className='body' >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
