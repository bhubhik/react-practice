import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Body from './components/Body';
import Api from './components/Api';
import Counter from './components/Counter';

function App() {
  return (
    <Router>
      <nav className=' w-full flex flex-row justify-between items-center mx-3 my-2'>
        <h1 className='text-lg font-semibold'>Logo</h1>
        <ul className='flex mr-6 flex-row'>
          <li>
            <NavLink
              exact
              to='/'
              className={`mx-3 py-1 px-2 rounded-lg text-white bg-purple-400 hover:bg-purple-500`}
              activeClassName='bg-purple-500'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/api'
              className='mx-3 py-1 px-2 rounded-lg text-white bg-purple-400 hover:bg-purple-500'
              activeClassName='bg-purple-500'
            >
              Api
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/counter'
              className='mx-3 py-1 px-2 rounded-lg text-white bg-purple-400 hover:bg-purple-500'
              activeClassName='bg-purple-500'
            >
              Counter
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/api' element={<Api />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
