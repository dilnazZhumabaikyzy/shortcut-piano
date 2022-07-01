
import {Header} from '../../header';

import {Footer} from '../../footer';

import {PlayArea} from '../../playArea';


function Play(props) {
  const currentCommands = props.currentCommands;
  return (
  <>
    <div className='container'>
      <Header></Header>
      <PlayArea currentCommands = {currentCommands}></PlayArea>      
     </div>
      {/* <Footer></Footer> */}
  </>
  );
}

export default Play;
