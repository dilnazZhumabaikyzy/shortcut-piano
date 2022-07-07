import './App.css';
import {Header} from './components/header';
import {Main} from './components/main-page'
import {Footer} from './components/footer'
import { MyRoutes } from './routing';


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
