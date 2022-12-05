import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import HomePage2 from './Pages/Home/HomePage2';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Home/LoginPage';
import SchedulePage from './Pages/Home/SchedulePage';
import Gateway from './Pages/Home/Gateway';
import UpdateFlight from './Pages/Home/UpdateFlight';
import BaggageCarousel from './Pages/Home/BaggageCarousel';
import UpdateFlight2 from './Pages/Home/UpdateFlight2';
import ProfilePage from './Pages/Home/ProfilePage';
import AddFlight from './Pages/Home/AddFlight';

function App() {
  return (
    <div className="App">
      <div className="blur" style= {{top: '-18%', right: '0'}}></div>
        <div className="blur" style= {{top: '37%', left: '-8rem'}}></div>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path="/HomePage2" element={<HomePage2 />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SchedulePage" element={<SchedulePage />}></Route>
          <Route path="/Gateway" element={<Gateway />}></Route>
          <Route path="/UpdateFlight" element={<UpdateFlight />}></Route>
          <Route path="/BaggageCarousel" element={<BaggageCarousel />}></Route>
          <Route path="/UpdateFlight2" element={<UpdateFlight2 />}></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          <Route path="/AddFlight" element={<AddFlight />}></Route>

        </Routes>
    </div>
  );
}

export default App;
