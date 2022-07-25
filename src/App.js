import './App.css';
import Header from './components/header';
import {Main} from './pages/main-page'
import Footer from './components/footer'
import { MyRoutes } from './routing';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  return (
  <>
    <div className='container'>
      <Header></Header>
      <Main></Main>
     </div>
      <Footer></Footer>
  </>
  );
}

export default App;
