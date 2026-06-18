import { Route, Routes } from 'react-router-dom';
import './App.css'
import MarqueeModule from "react-fast-marquee";
import HomePage from './pages/homepage';
import Header from './components/header/header';
import HeaderBanner from './components/headerbanner/headerbanner';

const Marquee = MarqueeModule.default;

import currencies from './data/currencies.json'
import { useEffect, useState } from 'react';
import { getPopularRate, getYesterdayPopularRate } from './services/api';

function App() {
      const [popularRates, setPopularRates] = useState(null)
      const [yesterdayPopularRates, setYesterdayPopularRates] = useState(null)

      const loadPopular = async () => {
          const r = await getPopularRate("USD")
          const d = await getYesterdayPopularRate("USD")
          setPopularRates(r)
          setYesterdayPopularRates(d)
      }

      useEffect(() => {
          loadPopular()
      }, [])

    return (
    <>
      <Header />
      <HeaderBanner currencies={currencies} popularRates={popularRates} yesterdayPopularRates={yesterdayPopularRates}/>
      <Routes>
        <Route path='/' element={<HomePage currencies={currencies} popularRates={popularRates} yesterdayPopularRates={yesterdayPopularRates}/>}/>
      </Routes>
    </>
  )
}

export default App
