import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Main from './layout/main/Main';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import { ThemeProvider } from './utils/themeContext';
import './styles/main.css';

function App() {
  const { pathname } = useLocation();
  const sliderNavPrev = useRef();
  const sliderNavNext = useRef();

  return (
    <ThemeProvider>
      <div className='app'>
        <Header onPortfolioPage={pathname === "/portfolio"}/>
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
    </ThemeProvider>
  );
}

export default App;
