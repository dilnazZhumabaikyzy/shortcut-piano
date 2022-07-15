
import {Header} from '../../header';

import {Footer} from '../../footer';

import {PlayArea} from '../../playArea';
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
