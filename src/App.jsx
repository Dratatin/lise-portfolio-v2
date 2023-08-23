import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useRef } from 'react'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Main from './layout/main/Main'
import Portfolio from './pages/portfolio/Portfolio'
import HeaderMobile from './layout/headerMobile/HeaderMobile'
import About from './pages/about/About'
import useDeviceType from './utils/useDeviceType'
import useAppState from './utils/themeContext'

import './styles/main.css'

function App() {
  const { pathname } = useLocation()
  const sliderNavPrev = useRef()
  const sliderNavNext = useRef()
  const { state, setDeviceType } = useAppState()

  useDeviceType(setDeviceType)

  return (
    <div className='app'>
      {state.deviceType === 'mobile' ? 
        <HeaderMobile />
        :
        <Header onPortfolioPage={pathname === "/portfolio"} />
      }
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/portfolio" />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio sliderNavPrev={sliderNavPrev} sliderNavNext={sliderNavNext} />}></Route>
          <Route path='/portfolio/project/:id'></Route>
          <Route path='*'></Route>
        </Routes>
      </Main>
      <Footer 
        onPortfolioPage={pathname === "/portfolio"} 
        sliderNav={{
          'prev':sliderNavPrev,
          'next':sliderNavNext
        }} 
      />
    </div>
  );
}

export default App;
