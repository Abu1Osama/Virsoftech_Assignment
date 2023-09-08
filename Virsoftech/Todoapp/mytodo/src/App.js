import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todo';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
     <Todos/>
     <Toaster/>
    </div>
  );
}

export default App;
