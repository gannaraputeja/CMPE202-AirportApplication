import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <div className="blur" style= {{top: '-18%', right: '0'}}></div>
        <div className="blur" style= {{top: '37%', left: '-8rem'}}></div>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
    </div>
  );
}

export default App;
