import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <div className="blur" style= {{top: '-18%', right: '0'}}></div>
        <div className="blur" style= {{top: '37%', left: '-8rem'}}></div>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
    </div>
  );
}

export default App;
