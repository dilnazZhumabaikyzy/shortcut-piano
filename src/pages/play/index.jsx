
import Header from '../../components/header';

import {Footer} from '../../components/footer';

import {PlayArea} from '../../components/playArea';
import { useParams } from 'react-router-dom';


function Play() {
  const {param} = useParams();
  // const {song} = props;

  return (
  <>
    <div className='container'>
      <Header></Header>
      <PlayArea songIndex = {param}></PlayArea>      
    </div>
  </>
  );
}

export default Play;
