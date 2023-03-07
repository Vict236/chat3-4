import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import {Main} from './pages/Main';
import './App.css';
import { Header } from './components/Header';


function App() {
  return (
    <>
    <Routes>
<Route path='/' element={<>{Header} </>} />
<Route index element={<>{Login} </>} />
<Route path='/main' element={<>{Main} </>} />
    </Routes>
    </>
  )
}

export default App;
