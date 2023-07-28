import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Portfolio from './pages/Portfolio';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/portfolio" />}></Route>
          <Route path='/about'></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/portfolio/project/:id'></Route>
          <Route path='*'></Route>
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
