
import {Header} from '../../header';

import {Footer} from '../../footer';

import {PlayArea} from '../../playArea';


function Play(props) {
  const {song} = props;

  return (
  <>
    <div className='container'>
      <Header></Header>
      <PlayArea song = {song}></PlayArea>      
     </div>
      {/* <Footer></Footer> */}
  </>
  );
}

export default Play;
