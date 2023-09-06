import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Main from './layout/main/Main'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import Error404 from './pages/Error404/Error404'
import useDeviceType from './utils/useDeviceType'
import useAppState from './utils/themeContext'
import Cursor from './components/cursor/Cursor'
import { isBrowser } from 'react-device-detect';

import './styles/main.css'

function App() {
  const sliderRef = useRef()
  const { setDeviceType } = useAppState()

  useDeviceType(setDeviceType)

  useEffect(() => {
    const appHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  },[])

  return (
    <div className='app'>
      {/* {isBrowser &&
        <Cursor />
      } */}
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/portfolio" />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route 
            path='/portfolio' 
            element={<Portfolio 
              sliderRef={sliderRef}
            />}>
          </Route>
          <Route path='/portfolio/project/:id'></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </Main>
      {/* <Footer 
        sliderRef={sliderRef}
      /> */}
    </div>
  );
}

export default App;
