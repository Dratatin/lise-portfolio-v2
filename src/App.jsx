import { Routes, Route, Navigate } from 'react-router-dom'
import { useRef } from 'react'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Main from './layout/main/Main'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import useDeviceType from './utils/useDeviceType'
import useAppState from './utils/themeContext'

import './styles/main.css'

function App() {
  const sliderRef = useRef()
  const { setDeviceType } = useAppState()

  useDeviceType(setDeviceType)

  return (
    <div className='app'>
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
          <Route path='*'></Route>
        </Routes>
      </Main>
      <Footer 
        sliderRef={sliderRef}
      />
    </div>
  );
}

export default App;
