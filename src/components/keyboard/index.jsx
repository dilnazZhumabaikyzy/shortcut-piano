import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

import * as Tone from 'tone';
// create the piano and load 5 velocity steps


//connect it to the speaker output




let animatingObj;
setTimeout(() => {
    animatingObj = document.getElementById('ak');
}, 100);



/////////////////////////////////
const row1 = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'Ins', 'Del'];
const row2 = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const row3 = [{
    name: "Tab",
    type: "default-key center",
    style: false,
},
{
    name: "Q",
    type: "default-key quadrant",
    quadrants: {
        q2: "Q",
        q4: "Й"
    }
},
{
    name: "W",
    type: "default-key quadrant",
    quadrants: {
        q2: "W",
        q4: "Ц"
    }
},
{
    name: "E",
    type: "default-key quadrant",
    quadrants: {
        q2: "E",
        q4: "У"
    }
},
{
    name: "R",
    type: "default-key quadrant",
    quadrants: {
        q2: "R",
        q4: "К"
    }
},
{
    name: "T",
    type: "default-key quadrant",
    quadrants: {
        q2: "T",
        q4: "E"
    }
},
{
    name: "Y",
    type: "default-key quadrant",
    quadrants: {
        q2: "Y",
        q4: "H"
    }
},
{
    name: "U",
    type: "default-key quadrant",
    quadrants: {
        q2: "U",
        q4: "Г"
    }
},
{
    name: "I",
    type: "default-key quadrant",
    quadrants: {
        q2: "I",
        q4: "Ш"
    }
},
{
    name: "O",
    type: "default-key quadrant",
    quadrants: {
        q2: "O",
        q4: "Щ"
    }
},
{
    name: "P",
    type: "default-key quadrant",
    quadrants: {
        q2: "P",
        q4: "З"
    }
},
{
    name: "{",
    type: "default-key quadrant",
    quadrants: {
        q2: "{",
        q3: "[",
        q4: "X"
    }
},
{
    name: "}",
    type: "default-key quadrant",
    quadrants: {
        q2: "}",
        q3: "]",
        q4: "Ъ"
    }
},
{
    name: "|",
    type: "default-key quadrant",
    quadrants: {
        q1: "/",
        q2: "|",
        q3: "\\",
        q4: "\\"
    },
    id: "Enter1"
}
];
const row4 = [{
    name: "CapsLK",
    type: "default-key center",
    style: false
},
{
    name: "A",
    type: "default-key quadrant",
    quadrants: {
        q2: "A",
        q4: "Ф"
    }
},
{
    name: "S",
    type: "default-key quadrant",
    quadrants: {
        q2: "S",
        q4: "Ы"
    }
},
{
    name: "D",
    type: "default-key quadrant",
    quadrants: {
        q2: "D",
        q4: "В"
    }
},
{
    name: "F",
    type: "default-key quadrant",
    quadrants: {
        q2: "F",
        q4: "A"
    }
},
{
    name: "G",
    type: "default-key quadrant",
    quadrants: {
        q2: "G",
        q4: "Р"
    }
},
{
    name: "H",
    type: "default-key quadrant",
    quadrants: {
        q2: "H",
        q4: "Р"
    }
},
{
    name: "J",
    type: "default-key quadrant",
    quadrants: {
        q2: "J",
        q4: "O"
    }
},
{
    name: "K",
    type: "default-key quadrant",
    quadrants: {
        q2: "K",
        q4: "Л"
    }
},
{
    name: "L",
    type: "default-key quadrant",
    quadrants: {
        q2: "L",
        q4: "Д"
    }
},
{
    name: ":",
    type: "default-key quadrant",
    quadrants: {
        q2: ":",
        q3: ";",
        q4: "Ж"
    },
    id: "signcolon"
},
{
    name: "\"",
    type: "default-key quadrant",
    quadrants: {
        q2: "\"",
        q3: "'",
        q4: "Э"
    },
    id: "signquote"
},
{
    name: "Enter",
    type: "default-key center",
    id: "Enter2"
}
];
const row5 = [{
    name: "Shift",
    type: "default-key center",
    id: "Shift1"
},
{
    name: "Z",
    type: "default-key quadrant",
    quadrants: {
        q2: "Z",
        q4: "Я"
    }
},
{
    name: "X",
    type: "default-key quadrant",
    quadrants: {
        q2: "X",
        q4: "Ч"
    }
},
{
    name: "C",
    type: "default-key quadrant",
    quadrants: {
        q2: "C",
        q4: "C"
    }
},
{
    name: "V",
    type: "default-key quadrant",
    quadrants: {
        q2: "V",
        q4: "М"
    }
},
{
    name: "B",
    type: "default-key quadrant",
    quadrants: {
        q2: "B",
        q4: "И"
    }
},
{
    name: "N",
    type: "default-key quadrant",
    quadrants: {
        q2: "N",
        q4: "Т"
    }
},
{
    name: "M",
    type: "default-key quadrant",
    quadrants: {
        q2: "M",
        q4: "Ь"
    }
},
{
    name: "<",
    type: "default-key quadrant",
    quadrants: {
        q2: "<",
        q3: ",",
        q4: "Б"
    }
},
{
    name: ">",
    type: "default-key quadrant",
    quadrants: {
        q2: ">",
        q3: ".",
        q4: "Ю"
    }
},
{
    name: ",",
    type: "default-key quadrant",
    quadrants: {
        q1: ",",
        q2: "?",
        q3: "/",
        q4: "."
    }
},
{
    name: "Shift",
    type: "default-key quadrant",
    quadrants: {
        q1: ",",
        q2: "?",
        q3: "/",
        q4: "."
    },
    id: "Shift2"
}
];
const row6 = [{
    name: "Ctrl",
    type: "default-key center",
    id: "Ctrl1"
},
{
    name: "Fn",
    type: "default-key center"
},
{
    name: "Win",
    type: "default-key center"
},

{
    name: "Alt",
    type: "default-key center",
    id: "Alt1"
},
{
    name: "Space",
    type: "default-key center"
},
{
    name: "Alt",
    type: "default-key center",
    id: "Alt2"
},
{
    name: "Ctrl",
    type: "default-key center",
    id: "Ctrl2"
},
{
    name: "Left",
},
{
    name: "up-down",
    type: "default-key center",
},
{
    name: "Right"
}

];

const handleQuadrants = (quadrants) => {
    return Object.keys(quadrants).map((key) => (
        <div className={key} key={uuidv4()}>{quadrants[key]}</div>
    ));
}

/////////////////////////////////



//   const [change, setChange] =useEffect();
//   const funcChange = ()=>{
//   setChange(
//     {color: black}
//   );
//   }


export const Keyboard = () => {
    const [myRow, setRow] = useState(row3);

    function setStyle() {
        row3[0].style = true;
        setRow(row3);
    }

    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note


    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        console.log(event.key);
        if (event.key === "Tab") {
            setStyle();
            console.log(myRow);

            synth.triggerAttackRelease("C4", "8n");
            event.preventDefault();
        }

    }, false);

    return (
        <div className='keyboard'>
            <div className="row" id='functions'>
                {
                    row1.map((key) => (
                        <div className="default-key center" id={key} key={key}>{key}</div>
                    ))
                }
            </div>
            <div className="row" id='numbers'>

                {
                    row2.map((key) => (
                        <div className="default-key center" id={key} key={key}>{key}</div>
                    ))
                }

            </div>
            <div className="row">
                {
                    myRow.map((el) => (
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
                    row4.map((el) => (
                        <div className={el.type} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name}  >
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
                    row5.map((el) => (
                        <div className={el.type} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
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
                    row6.map((el) => (
                        <div className={el.type} id={el.id ? el.id : el.name} key={el.id ? el.id : el.name} >
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
    );
}