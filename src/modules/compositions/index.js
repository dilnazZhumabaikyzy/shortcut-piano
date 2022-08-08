// noteOrder:[0,0,1,0,2,3,0,1,0,4,2,0,0,7,5,2,3,1,6,6,5,2,4,2]
const basicGmail = [
    {id: "hb",
     title: "Happy Birthday",
     description: "8 basic commands to learn",
     score:0,
     locked: true,
     section: [0,8],
     notes: [ {code: 80,
        play: "G4"
       },
       {code: 78,
       play: "A4"
       },
       {code: 188,
        play: "C5"
       },
       {code: 88,
       play: "B4"
       },   
       {code: 83,
       play: "D5"
       },
       {code: 27,
       play: "E5"
       },           
       {code: 69,
       play: "F5"
       },
       {code: 77,
       play: "A5"
       }],
       noteOrder:[0,0,1,0,2,3,0,1,0,4,2,0,0,7,5,2,3,1,6,6,5,2,4,2]
    },
      {
      id: "jb",
      title: "Jingle Bells",
     description: "10 basic commands to learn",
     score:0,
     locked: true,
     section: [8,18],
     notes:[{code: 85,
      play: "C4", 
      index: 0
     },
     {code: 75,
     play: "A4", 
     index: 1        
     },
     {code: 82,
      play: "G4", 
      index: 2
     },
     {code: 65,
     play: "F4", 
     index: 3
     },  
     {code: 70,
      play: "D4", 
      index: 4
     },  
     {code: 90,
     play: "A#4", 
     index: 5
     },
     {code: 189,
     play: "E4", 
     index: 6
     },           
     {code: 66,
     play: "C5", 
     index: 7
     },
     {code: 186,
     play: "G5", 
     index: 8
     },
     {code: 74,
     play: "D5", 
     index: 9
     }],
   noteOrder:[0,1,2,3,0,
      0,0,0,1,2,3,4,
      4,5,1,2,6,
      7,7,5,2,1,
      0,1,2,3,0,
      0,0,0,1,2,3,4,
      4,5,1,2,
      7,7,7,9,7,5,2,3,
      7,1,1,1,1,1,1,1,7,
      3,2,1,5,5,5,5,1,1,
      1,1,1,2,2,1,2,7,1,1,1,
      1,1,1,2,2,1,7,1,1,1,
      1,1,1,1,7,3]}
   ,
    {id: "ttls",
    title: "Twinkle Twinkle Little Star",
     description: "6 basic commands to learn",
     section: [18,24],
     score: 0,
     locked: true,
     notes:[
      { code: [16, 49],
        play: "C#4", 
        index: 0
      },
       {code: [16, 51],
       play: "G#4", 
       index: 1        
       },
       {code: [16,27],
        play: "A#4", 
        index: 2
       },
       {code: [17,13],
       play: "F4", 
       index: 3
       },  
       {code: [17,190],
        play: "F#4", 
        index: 4
       },  
       {code: [17,188],
       play: "D#4", 
       index: 5
       }
      ],
     noteOrder:[0,0,1,1,2,2,1,
               4,4,3,3,5,5,0,
               1,1,4,4,3,3,5,
               1,1,4,4,3,3,5,
               0,0,1,1,2,2,1,
               4,4,3,3,5,5,0]
    },
    {title: "Gavotte",
     description: "15 shortcuts to learn",
     score:0,
     locked: false
    },
    {title: "Empty",
     description: "Empty",
     score:0,
     locked: false
    }      
];

const advancedGmail = [];
const basicVscode = [];
const advancedVscode = [];

export {basicGmail,
        advancedGmail,
        basicVscode,
        advancedVscode};