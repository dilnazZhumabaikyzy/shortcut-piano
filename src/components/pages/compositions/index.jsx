import { useContext, useEffect, useState } from "react";
import { Header } from "../../header"
import logo from '../../../assets/images/disk.png';
import logo2 from '../../../assets/images/diskLock.png';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "../../../routing";

export const Compositions = (props) => {
  const { gameStatus } = useContext(UserContext);
  // console.log(gameStatus, ' is gameStatus');

  useEffect(() => {
    console.log(props);
  }, []);

  const { myArray } = props;
  
  const [ma,setMa] = useState(myArray);

  const [transition, setTransition] = useState("");
  if (gameStatus === "advanced") {
    return (
      <>
        <Header>
        </Header>
        page is building
      </>
    );

  };


  function handleAnimation(index, bool = true){
    console.log("handle ", bool);
    // console.log(ma);
    // console.log(index);

    // console.log(ma.slice(0, index));
    // console.log(  {...ma[index]});
    // console.log(ma.slice(index+1));
    let temp = ma;
    temp = [...ma.slice(0, index),
    {
       ...ma[index],
       transition: bool
    },
    ...ma.slice(index+1)   
    ];
    setMa(temp);
    // console.log(temp);
    // console.log(ma);
    
    // setTimeout(()=>{
    //   console.log(ma," 3 sec");
    // },3000)
  }

  return (
    <>
      <div className="container">
        <Header>
        </Header>

        <div className="composition-list">
        {ma.map((el, index) => (
            <div className={`composition ${el.locked ? "" : "locked"}`} key={index}>
              <div className={`background ${el.transition?"transition-line":""}`} onMouseEnter={(e) => { e.preventDefault(); handleAnimation(index)}} onMouseLeave={(e) =>{ e.preventDefault(); handleAnimation(index,false)}} >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="logo">
                <img src={el.locked ? logo : logo2} alt="" />
              </div>
              <div className="text">
                <div className="title">{el.title}</div>
                <div className="description">{el.description}</div>
                <div className="progress">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="playButton">
                <Link to="/instruction" className='text-link'>
                  <button onClick={() => console.log(el.title)}>Play</button>
                </Link>
              </div>
            </div>
          )
          )}
          {/* {ma.map((el, index) => (
            <div className={`composition ${el.locked ? "" : "locked"}`} key={index}>
              <div className={`background ${transition}`} onMouseOver={() => {  setTransition("transition-line"); console.log("moseon") }} onMouseOut={() => { setTransition(""); console.log("moseout") }} >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="logo">
                <img src={el.locked ? logo : logo2} alt="" />
              </div>
              <div className="text">
                <div className="title">{el.title}</div>
                <div className="description">{el.description}</div>
                <div className="progress">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="playButton">
                <Link to="/instruction" className='text-link'>
                  <button onClick={() => console.log(el.title)}>Play</button>
                </Link>
              </div>
            </div>
          )
          )} */}
        </div>
      </div>
    </>
  )
}
