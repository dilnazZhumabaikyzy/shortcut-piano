import { useContext, useEffect, useState } from "react";

import logo from '../../assets/images/disk.png';
import logo2 from '../../assets/images/diskLock.png';

import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
 
import { advancedGmail, basicGmail } from "../../modules/compositions";
import  Header  from "../../components/header";
import { UserContext } from "../../routing";

export const Compositions = () => {
  useEffect(()=>{
     sessionStorage.setItem("currentSongScore", {});
  },[]);
  
  const {category,app} = useParams();

  

  
  const myArray = 
               category === "basic" ? 
                                      app === "gmail" ? basicGmail : "basicVscode" 
                                    : app === "gmail" ? "advancedGmail" : "advancedVscode";

  // const {setSong} = useContext(UserContext);
  // 

  const [ma,setMa] = useState(myArray);


  
 
  const [transition, setTransition] = useState("");
  const [stars,setStars] = useState("");
 
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
    setStars(JSON.parse(localStorage.user).basicGmail);
  }, []);
  useEffect(()=>{
    ;
  },[ma]);

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
    let temp = ma;
    for(let i = 0; i < ma.length; i++){
      if(i !== index){
        temp[i] =  {
          ...ma[i],
          transition: false
         }
      }
      else{
        temp[i] =  {
          ...ma[i],
          transition: bool
         }
      }
    }
  


    // const temp = [...ma.slice(0, index),
    // {
    //      ...ma[index],
    //      transition: bool
    //   },
    //   ...ma.slice(index+1)   
    //   ];
      ;
      setMa([...temp]);
      ;    
  }

  return (
    <>
      <div className="container scoreBarParent">
        <Header>
        </Header>
        <div className="composition-list">
        <div className="scoreBar">
        <span>{stars}</span>
        
         <i className="fa-solid fa-star"></i>
        
        </div>  
        {ma.map((el, index) => (
          //onMouseLeave={(e) =>{handleAnimation(index,false)}}
            <div className={`composition ${el.locked ? "" : "locked"}`} key={index} onMouseEnter={(e) => {handleAnimation(index)}} onMouseLeave={(e) =>{handleAnimation(index,false)}}>
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
                <Link to={`/instruction/${category}/${app}/${el.id}`} className='text-link'>
                  <button>Play</button>
                </Link>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}
