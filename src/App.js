import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContent from './components/PageContent';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContent />
      <Footer name="Bán Attila"/>
    </BrowserRouter>
  );
}

export default App;
