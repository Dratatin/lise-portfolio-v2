import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Main from './layout/main/Main';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import './styles/main.css';

function App() {
  const { pathname } = useLocation();

  return (
    <div className='app'>
      <Header onPortfolioPage={pathname === "/portfolio"}/>
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/portfolio" />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/portfolio/project/:id'></Route>
          <Route path='*'></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
