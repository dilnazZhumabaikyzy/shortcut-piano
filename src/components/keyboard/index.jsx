// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import audioPath from '../../assets/sounds/mixkit-losing-bleeps-2026.wav';
import audioPathApplause from '../../assets/sounds/applause.wav';
import * as Tone from 'tone';

import { ProgressContext } from '../playArea';
import { ShowScore } from '../showScore';

import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();



const audioTune = new Audio(audioPath);

const audioApplause = new Audio(audioPathApplause);

/////////////////////////////////
const row1 = [
    {
        style: false,
        name:   "Esc",
        type: "default-key center",
        code: 27
    },
    {
        style: false,
        name:    "F1",
        type: "default-key center",
        code: 112
    },
    {
        style: false,
        name:   "F2",
        type: "default-key center",
        code: 113
    },
    {
        style: false,
        name:   "F3",
        type: "default-key center",
        code: 114
    },
    {
        style: false,
        name:   "F4",
        type: "default-key center",
        code: 115
    },
    {
        style: false,
        name:   "F5",
        type: "default-key center",
        code: 116
    },
    {
        style: false,
        name:   "F6",
        type: "default-key center",
        code: 117
    },
    {
        style: false,
        name:   "F7",
        type: "default-key center",
        code: 118
    },
    {
        style: false,
        name:   "F8",
        type: "default-key center",
        code: 119
    },
    {
        style: false,
        name:   "F9",
        type: "default-key center",
        code: 120
    },
    {
        style: false,
        name:   "F10",
        type: "default-key center",
        code: 121
    },
    {
        style: false,
        name:   "F11",
        type: "default-key center",
        code:  122
    },
    {
        style: false,
        name:   "F12",
        type: "default-key center",
        code: 123
    },
    {
        style: false,
        name:   "PrtSc",
        type: "default-key center",
        code: 44
    },
    {
        style: false,
        name:   "Ins",
        type: "default-key center",
        code: 45
    },
    {
        style: false,
        name:   "Del",
        type: "default-key center",
        code: 46
    }];
const row2 = [
    {
        style: false,
        name:   "~",
        type: "default-key quadrant",
        quadrants: {
            q2: "~",
            q3: "`",
            q4: "Ё"
        },
        code: 192
    },
    {
        style: false,
        name:   "1",
        type: "default-key quadrant",
        quadrants: {
            q2: "!",
            q3: "1",
        },
        code: 49
    },
    {
        style: false,
        name:   "2",
        type: "default-key quadrant",
        quadrants: {
            q1: "\"",
            q2: "@",
            q3: "2"
        },
        code: 50
    },
    {
        style: false,
        name:   "3",
        type: "default-key quadrant",
        quadrants: {
            q1: "#",
            q2: "#",
            q3: "3"
        },
        code: 51
    },
    {
        style: false,
        name:   "4",
        type: "default-key quadrant",
        quadrants: {
            q1: ";",
            q2: "$",
            q3: "4"
        },
        code: 52
    },
    {
        style: false,
        name:   "5",
        type: "default-key quadrant",
        quadrants: {
            q2: "%",
            q3: "5"
        },
        code: 53
    },
    {
        style: false,
        name:   "6",
        type: "default-key quadrant",
        quadrants: {
            q1: ":",
            q2: "^",
            q3: "6"
        },
        code: 54
    },
    {
        style: false,
        name:   "7",
        type: "default-key quadrant",
        quadrants: {
            q1: "?",
            q2: "&",
            q3: "7"
        },
        code: 55
    },
    {
        style: false,
        name:   "8",
        type: "default-key quadrant",
        quadrants: {
            q2: "*",
            q3: "8"
        },
        code: 56
    },
    {
        style: false,
        name:   "9",
        type: "default-key quadrant",
        quadrants: {
            q2: "(",
            q3: "9"
        },
        code: 57
    },
    {
        style: false,
        name:   "0",
        type: "default-key quadrant",
        quadrants: {
            q2: ")",
            q3: "0"
        },
        code: 48
    },
    {
        style: false,
        name:   "_",
        type: "default-key quadrant",
        quadrants: {
            q2: "_",
            q3: "-"
        },
        code: 189
    },
    {
        style: false,
        name:   "+",
        type: "default-key quadrant",
        quadrants: {
            q2: "+",
            q3: "="
        },
        code: 187
    },
    {
        style: false,
        name:   "Backspace",
        type: "default-key center",
        code: 46
    }
]
const row3 = [{
    style: false,
        name:   "Tab",
    type: "default-key center",
    style: false,
    code: 9
},
{
    style: false,
        name:   "Q",
    type: "default-key quadrant",
    quadrants: {
        q2: "Q",
        q4: "Й"
    },
    code: 81
},
{
    style: false,
        name:   "W",
    type: "default-key quadrant",
    quadrants: {
        q2: "W",
        q4: "Ц"
    },
    code: 87
},
{
    style: false,
        name:   "E",
    type: "default-key quadrant",
    quadrants: {
        q2: "E",
        q4: "У"
    },
    code: 69
},
{
    style: false,
        name:   "R",
    type: "default-key quadrant",
    quadrants: {
        q2: "R",
        q4: "К"
    },
    code: 82
},
{
    style: false,
        name:   "T",
    type: "default-key quadrant",
    quadrants: {
        q2: "T",
        q4: "E"
    },
    code: 84
},
{
    style: false,
        name:   "Y",
    type: "default-key quadrant",
    quadrants: {
        q2: "Y",
        q4: "H"
    },
    code: 89
},
{
    style: false,
        name:   "U",
    type: "default-key quadrant",
    quadrants: {
        q2: "U",
        q4: "Г"
    },
    code: 85
},
{
    style: false,
        name:   "I",
    type: "default-key quadrant",
    quadrants: {
        q2: "I",
        q4: "Ш"
    },
    code: 73
},
{
    style: false,
        name:   "O",
    type: "default-key quadrant",
    quadrants: {
        q2: "O",
        q4: "Щ"
    },
    code: 79
},
{
    style: false,
        name:   "P",
    type: "default-key quadrant",
    quadrants: {
        q2: "P",
        q4: "З"
    },
    code: 80
},
{
    style: false,
        name:   "{",
    type: "default-key quadrant",
    quadrants: {
        q2: "{",
        q3: "[",
        q4: "X"
    },
    code: 219
},
{
    style: false,
        name:   "}",
    type: "default-key quadrant",
    quadrants: {
        q2: "}",
        q3: "]",
        q4: "Ъ"
    },
    code: 221
},
{
    style: false,
        name:   "|",
    type: "default-key quadrant",
    quadrants: {
        q1: "/",
        q2: "|",
        q3: "\\",
        q4: "\\"
    },
    code: 220,
    id: "Enter1"
}
];
const row4 = [{
    style: false,
        name:   "CapsLK",
    type: "default-key center",
    style: false,
    code: 20
},
{
    style: false,
        name:   "A",
    type: "default-key quadrant",
    quadrants: {
        q2: "A",
        q4: "Ф"
    },
    code: 65
},
{
    style: false,
        name:   "S",
    type: "default-key quadrant",
    quadrants: {
        q2: "S",
        q4: "Ы"
    },
    code: 83
},
{
    style: false,
        name:   "D",
    type: "default-key quadrant",
    quadrants: {
        q2: "D",
        q4: "В"
    },
    code: 68
},
{
    style: false,
        name:   "F",
    type: "default-key quadrant",
    quadrants: {
        q2: "F",
        q4: "A"
    },
    code: 70
},
{
    style: false,
        name:   "G",
    type: "default-key quadrant",
    quadrants: {
        q2: "G",
        q4: "Р"
    },
    code: 70
},
{
    style: false,
        name:   "H",
    type: "default-key quadrant",
    quadrants: {
        q2: "H",
        q4: "Р"
    },
    code: 72
},
{
    style: false,
        name:   "J",
    type: "default-key quadrant",
    quadrants: {
        q2: "J",
        q4: "O"
    },
    code: 74
},
{
    style: false,
        name:   "K",
    type: "default-key quadrant",
    quadrants: {
        q2: "K",
        q4: "Л"
    },
    code: 75
},
{
    style: false,
        name:   "L",
    type: "default-key quadrant",
    quadrants: {
        q2: "L",
        q4: "Д"
    },
    code: 76
},
{
    style: false,
        name:   ":",
    type: "default-key quadrant",
    quadrants: {
        q2: ":",
        q3: ";",
        q4: "Ж"
    },
    id: "signcolon",
    code: 186
},
{
    style: false,
        name:   "\"",
    type: "default-key quadrant",
    quadrants: {
        q2: "\"",
        q3: "'",
        q4: "Э"
    },
    id: "signquote",
    code: 222
},
{
    style: false,
        name:   "Enter",
    type: "default-key center",
    id: "Enter2",
    code: 13
}
];
const row5 = [{
    style: false,
        name:   "Shift",
    type: "default-key center",
    id: "Shift1",
    code: 16,
    position: "ShiftLeft"
},
{
    style: false,
        name:   "Z",
    type: "default-key quadrant",
    quadrants: {
        q2: "Z",
        q4: "Я"
    },
    code: 90
},
{
    style: false,
        name:   "X",
    type: "default-key quadrant",
    quadrants: {
        q2: "X",
        q4: "Ч"
    },
    code: 88
},
{
    style: false,
        name:   "C",
    type: "default-key quadrant",
    quadrants: {
        q2: "C",
        q4: "C"
    },
    code: 67
},
{
    style: false,
        name:   "V",
    type: "default-key quadrant",
    quadrants: {
        q2: "V",
        q4: "М"
    },
    code: 86
},
{
    style: false,
        name:   "B",
    type: "default-key quadrant",
    quadrants: {
        q2: "B",
        q4: "И"
    },
    code: 66
},
{
    style: false,
        name:   "N",
    type: "default-key quadrant",
    quadrants: {
        q2: "N",
        q4: "Т"
    },
    code: 78
},
{
    style: false,
        name:   "M",
    type: "default-key quadrant",
    quadrants: {
        q2: "M",
        q4: "Ь"
    },
    code: 77
},
{
    style: false,
        name:   "<",
    type: "default-key quadrant",
    quadrants: {
        q2: "<",
        q3: ",",
        q4: "Б"
    },
    code: 188
},
{
    style: false,
        name:   ">",
    type: "default-key quadrant",
    quadrants: {
        q2: ">",
        q3: ".",
        q4: "Ю"
    },
    code: 190
},
{
    style: false,
        name:   ",",
    type: "default-key quadrant",
    quadrants: {
        q1: ",",
        q2: "?",
        q3: "/",
        q4: "."
    },
    code: 191
},
{
    style: false,
        name:   "Shift",
    type: "default-key center",
    id: "Shift2",
    code: 16,
    position: "ShiftRight"
}
];
const row6 = [{
    style: false,
        name:   "Ctrl",
    type: "default-key center",
    id: "Ctrl1",
    code: 17
},
{
    style: false,
        name:   "Fn",
    type: "default-key center",
    code: "none"
},
{
    style: false,
    name:   <i className="fa-brands fa-windows" style = {{fontSize: "2em"}}></i>,
    type: "default-key center",
    code: 91,
    id: "Win"
},

{
    style: false,
    name:   "Alt",
    type: "default-key center",
    id: "Alt1",
    code: 18
},
{
    style: false,
    name:   "\n",
    type: "default-key center",
    code: 32,
    id: "Space"
},
{
    style: false,
        name:   "Alt",
    type: "default-key center",
    id: "Alt2",
    code: 18
},
{
    style: false,
        name:   "Ctrl",
    type: "default-key center",
    id: "Ctrl2",
    code: 17
},
{
    style: false,
        name:   "Left",
    code: 37
},
{
    style: false,
        name:   "up-down",
    type: "default-key center",
},
{
    style: false,
        name:   "Right",
    code: 39
}
];
/////////////////////////////////

const handleQuadrants = (quadrants) => {
    return Object.keys(quadrants).map((key) => (
        <div className={key} key={uuidv4()}>{quadrants[key]}</div>
    ));
}

/////////////////////////////////

export const Keyboard = ({song}) => {

    useEffect(() => {
        audioTune.load();
        audioApplause.load();
    }, []);

    const synth = new Tone.Synth().toDestination();
    
    const [rowS1, setRowS1] = useState(row1);
    const [rowS2, setRowS2] = useState(row2);
    const [rowS3, setRowS3] = useState(row3);
    const [rowS4, setRowS4] = useState(row4);
    const [rowS5, setRowS5] = useState(row5);
    const [rowS6, setRowS6] = useState(row6);
    
    const keyboard = [rowS1,rowS2,rowS3,rowS4,rowS5,rowS6];




    function setStyle(row, number, index, bool = true) {
        row[index].style = bool;
        switch(number){
            case 1: setRowS1([...row]);
            break;
            case 2: setRowS2([...row]);
            break;
            case 3: setRowS3([...row]);
            break;
            case 4: setRowS4([...row]);
            break;
            case 5: setRowS5([...row]);
            break;
            case 6: setRowS6([...row]);
            break;
        }
    }
    
    useEffect(()=>{
        document.addEventListener('keydown', (event)=>{
            event.preventDefault();
            const keycode = event.keyCode;
            const keyname = event.code;
                    
            const res = findKey(keycode,keyname);

            const [row, number, index] = res; 
            setStyle(row, number, index);
            handleOrder(keycode);        
        });   
        document.addEventListener('keyup', (event) => {     
            event.preventDefault();  
            const keycode = event.keyCode;
            const keyname = event.code;          
                const res = findKey(keycode,  keyname);
                const [row, number, index] = res; 
                setStyle(row, number, index,false);    
        }, false);      
    }, []);

    function findKey(keycode,keyname){
        if(keycode===16||keycode===17||keycode===18){
            if(keyname==="ShiftLeft"){
                return [keyboard[4],5, 0];
            }
            if(keyname==="ShiftRight"){
                return [keyboard[4],5,11];
            }
            if(keyname==="ControlLeft"){
                return [keyboard[5],6,0];
            }
            if(keyname==="ControlRight"){
                return [keyboard[5],6,6];
            }
            if(keyname==="AltLeft"){
                return [keyboard[5],6,3];
            }
            if(keyname==="AltRight"){
                return [keyboard[5],6,5];
            }
        }
        for(let i = 0; i<6; i++ ){
            const res = keyboard[i].findIndex(content => {
            return content.code === keycode;
           });
           if (res !== -1 ){
            return [keyboard[i],i+1, res];
         }
        }
    };

    const [composition, setComposition] = useState(song);
    const {n, setN } = useContext(ProgressContext);  
    
    let i = 0; 
    let isCorrect = "";  
      
      
     const notes = composition.notes;
     const noteOrder = composition.noteOrder;

     
                         
  //   let nowKey = jb[orderjb[i]];
        
       let   nowKey = notes[noteOrder[i]];
        const [faile, setFaile] = useState(false);
        async function handleOrder(keycode){
     
        if(keycode === nowKey.code){
            setFaile(false);
            i++;
            isCorrect = true;

            synth.triggerAttackRelease(nowKey.play, "8n");
        }
        else{
            audioTune.play();
            setFaile(true);
            i=0;  
            isCorrect = false;          
        }
        if(i>noteOrder.length-1){
            setIsEnd(true);
            
           await jsConfetti.addConfetti({
            emojis: [ '⭐'],
            emojiSize: 20,
              confettiNumber: 100,
         });

            audioApplause.play();
            console.log("songend");
            i=0;            
        };
        
        nowKey = notes[noteOrder[i]];
         
        setN({name:noteOrder[i], index: i, bool: isCorrect});
    }

    

    
    const [comment, setComment] = useState("Wow!");
    const [myAnimation, setAnimate] = useState("hideComment");
    const [firstEnter, setEnterStatus] = useState(true);
   
    useEffect(()=>{
        if(faile){
            setComment("Try again!");
            animateComments();
           }
         else
           checkProgress(n.index);
        // faile ?
        //        setComment("Try again!"):n.indexOrder===7
        //       ?
        //       setComment("Great!"):n.indexOrder===4
        //       ?
        //       setComment("Good!"):setComment("Wow!");

        // if(!firstEnter)
        // animateComments();
    },[n,faile]);
    useEffect(()=>{
        setEnterStatus(false);
    },[]);
     
   function checkProgress(n){
    console.log(n);
    if(n===7){
        setComment("Great!");
        animateComments();
    }
    else if(n===4){
        setComment("Good!");
        animateComments();
    }
    }

    
   function animateComments(){
      setAnimate("");

      setTimeout((
      )=>{ setAnimate("hideComment");}, 320);
   }
    const [isEnd, setIsEnd] = useState(false);
    return (
    <> {isEnd?<ShowScore setIsEnd = {setIsEnd}/>:""}
        <div className= {`comments ${myAnimation}`}>
               {comment}
        </div>
        <div className='keyboard'>
            <div className="row" id='functions'>
                {
                    rowS1.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`} id={el.name} key={uuidv4()}>{el.name}</div>
                    ))
                }
            </div>
            <div className="row" id='numbers'>

            {
                    rowS2.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`}  id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
                            {
                                el.type === "default-key quadrant" ?
                                    <>
                                        {
                                            handleQuadrants(el.quadrants)
                                        }
                                    </> : <>{el.name}</>
                            }
                        </div>
                    ))
                }

            </div>
            <div className="row">
                {
                    rowS3.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`}  id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
                            {
                                el.type === "default-key quadrant" ?
                                    <>
                                        {
                                            handleQuadrants(el.quadrants)
                                        }
                                    </> : <>{el.name}</>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="row">
                {
                    rowS4.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name}  >
                            {
                                el.type === "default-key quadrant" ?
                                    <>
                                        {
                                            handleQuadrants(el.quadrants)
                                        }
                                    </> : <>{el.name}</>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="row">

                {
                    rowS5.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
                            {
                                el.type === "default-key quadrant" ?
                                    <>
                                        {
                                            handleQuadrants(el.quadrants)
                                        }
                                    </> : <>{el.name}</>
                            }
                        </div>
                    ))
                }


            </div>
            <div className="row">
                {
                    rowS6.map((el) => (
                        <div className={`${el.type} ${el.style ? "anim" : ""}`} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
                            {
                                el.type === "default-key quadrant" ?
                                    <>
                                        {
                                            handleQuadrants(el.quadrants)
                                        }
                                    </>
                                    :
                                    el.name === "up-down" ?
                                        <>
                                            <div id='up'>&#8593;</div>
                                            <div id='down'>&#8595;</div>
                                        </>
                                        :
                                        el.name === "Left" ?
                                            <div className="default-key center" id='Left'>&#8592;</div>
                                            :
                                            el.name === "Right" ?
                                                <div className="default-key center" id='Right'>&#8594;</div>
                                                :
                                                <>{el.name}</>
                            }
                        </div>
                    ))
                }


            </div>
            <div></div>
        </div>
        </>
    );
}