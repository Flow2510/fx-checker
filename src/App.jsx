import { Route, Routes } from 'react-router-dom';
import './App.css'
import MarqueeModule from "react-fast-marquee";
import HomePage from './pages/homepage';
import Header from './components/header/header';
import HeaderBanner from './components/headerbanner/headerbanner';

const Marquee = MarqueeModule.default;

import currencies from './data/currencies.json'

function App() {

  return (
    <>
      <Header />
      <HeaderBanner />
      <Routes>
        <Route path='/' element={<HomePage currencies={currencies}/>}/>
      </Routes>
    </>
  )
}

export default App
