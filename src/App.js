import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friend from './components/Friend/Friend';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1 className='text-5xl mt-3 mb-3 text-orange-500'>Welcome to my fancy website!!</h1>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend' element={<Friend></Friend>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
