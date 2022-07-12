import { useContext, useEffect, useState } from "react";
import { Header } from "../../header"
import logo from '../../../assets/images/disk.png';
import logo2 from '../../../assets/images/diskLock.png';
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "../../../routing";

export const Compositions = (props) => {
  const {category} = useParams();
  console.log(category);

  const {gameStatus, setSong} = useContext(UserContext);
  // console.log(gameStatus, ' is gameStatus');

  const { myArray } = props;
  
  const [ma,setMa] = useState(myArray);
  const [transition, setTransition] = useState("");


  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  if (category === "advanced") {
    return (
      <>
        <Header>
        </Header>
        page is building
      </>
    );

  };
  function handleAnimation(index, bool = true){
    // console.log("handle ", bool);
    let temp = ma;
    temp = [...ma.slice(0, index),
    {
       ...ma[index],
       transition: bool
    },
    ...ma.slice(index+1)   
    ];
    setMa(temp);
  }

  return (
    <>
      <div className="container">
        <Header>
        </Header>

        <div className="composition-list">
        {ma.map((el, index) => (
            <div className={`composition ${el.locked ? "" : "locked"}`} key={index} onMouseEnter={(e) => {handleAnimation(index)}} onMouseLeave={(e) =>{ e.preventDefault(); handleAnimation(index,false)}}>
              <div className={`background ${el.transition?"transition-line":""}`} >
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
                  <button onClick={() => {setSong(el)}}>Play</button>
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
