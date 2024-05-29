import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Melonconcert from './pages/Melonconcert';
import Melonexhibiton from './pages/Melonexhibiton';
import Melonmusical from './pages/Melonmusical';
import Ticketconcert from './pages/Ticketconcert';
import Ticketexhibiton from './pages/Ticketexhibiton';
import Ticketmusical from './pages/Ticketmusical';
import Yes24concert from './pages/Yes24concert';
import Yes24exhibiton from './pages/Yes24exhibiton';
import Yes24musical from './pages/Yes24musical';

import Header from './components/section/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/melonconcert' element={<Melonconcert />} />
        <Route path='/melonexhibiton' element={<Melonexhibiton />} />
        <Route path='/melonmusical' element={<Melonmusical />} />
        <Route path='/ticketconcert' element={<Ticketconcert />} />
        <Route path='/ticketexhibiton' element={<Ticketexhibiton />} />
        <Route path='/ticketmusical' element={<Ticketmusical />} />
        <Route path='/yes24concert' element={<Yes24concert />} />
        <Route path='/yes24exhibiton' element={<Yes24exhibiton />} />
        <Route path='/yes24musical' element={<Yes24musical />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
