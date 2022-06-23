import './index.css';

export const Keyboard = ()=>{
    return(
        <div className='keyboard'>
        <div className="function row">
                <div className="default-key center" id='Esc'>Esc</div>
                <div className="default-key center" id='F1'>F1</div>
                <div className="default-key center" id='F2'>F2</div>
                <div className="default-key center" id='F3'>F3</div>
                <div className="default-key center" id='F4'>F4</div>
                <div className="default-key center" id='F5'>F5</div>
                <div className="default-key center" id='F6'>F6</div>
                <div className="default-key center" id='F7'>F7</div>
                <div className="default-key center" id='F8'>F8</div>
                <div className="default-key center" id='F9'>F9</div>
                <div className="default-key center" id='F10'>F10</div>
                <div className="default-key center" id='F11'>F11</div>
                <div className="default-key center" id='F12'>F12</div>
                <div className="default-key center" id='PrtSc'>PrtSc</div>
                <div className="default-key center" id='Ins'>Ins</div>
                <div className="default-key center" id='Del'>Del</div>
        </div>
        <div className="numbers row">
                <div className="default-key center" id='~'>~</div>
                <div className="default-key center" id='n1'>1</div>
                <div className="default-key center" id='n2'>2</div>
                <div className="default-key center" id='n3'>3</div>
                <div className="default-key center" id='n4'>4</div>
                <div className="default-key center" id='n5'>5</div>
                <div className="default-key center" id='n6'>6</div>
                <div className="default-key center" id='n7'>7</div>
                <div className="default-key center" id='n8'>8</div>
                <div className="default-key center" id='n9'>9</div>
                <div className="default-key center" id='n0'>0</div>
                <div className="default-key center" id='-'>-</div>
                <div className="default-key center" id='-'>=</div>
                <div className="default-key center" id='Backspace'>BackSpace</div>
        </div>
        <div className="row">
                <div className="default-key center" id='Tab'>Tab</div>
                {/* <div className="default-key center" id='CapsLK'>CapsLK</div> */}
                <div className="default-key quadrant" id='lq'>
                <div className="q2">Q</div>
                <div className="q4">Й</div>
                </div>
                <div className="default-key quadrant" id='lw'>
                <div className="q2">W</div>
                <div className="q4">Ц</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">E</div>
                <div className="q4">У</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">R</div>
                <div className="q4">К</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">T</div>
                <div className="q4">Е</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">Y</div>
                <div className="q4">Н</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">U</div>
                <div className="q4">Г</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">I</div>
                <div className="q4">Ш</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">O</div>
                <div className="q4">Щ</div>
                </div>
                <div className="default-key quadrant" id='lq'>
                <div className="q2">P</div>
                <div className="q4">З</div>
                </div>
                <div className="default-key quadrant" id='signcbl'>
                <div className="q2">{`{`}</div>
                <div className="q3">{`[`}</div>
                <div className="q4">Х</div>
                </div>
                <div className="default-key quadrant" id='signcbr'>
                <div className="q2">{`{`}</div>
                <div className="q3">{`[`}</div>
                <div className="q4">Ъ</div>
                </div>
                <div className="default-key quadrant" id='Enter1'>
                <div className="q1">{`/`}</div>
                <div className="q2">{`|`}</div>
                <div className="q3">\</div>
                <div className="q4">\</div>
                </div>     
            </div>
            <div className="row">
                <div className="default-key center" id='CapsLK'>CapsLK</div>
                {/* <div className="default-key center" id='CapsLK'>CapsLK</div> */}
                <div className="default-key quadrant" id='la'>
                <div className="q2">A</div>
                <div className="q4">Ф</div>
                </div>
                <div className="default-key quadrant" id='ls'>
                <div className="q2">S</div>
                <div className="q4">Ы</div>
                </div>
                <div className="default-key quadrant" id='ld'>
                <div className="q2">D</div>
                <div className="q4">В</div>
                </div>
                <div className="default-key quadrant" id='lf'>
                <div className="q2">F</div>
                <div className="q4">А</div>
                </div>
                <div className="default-key quadrant" id='lg'>
                <div className="q2">G</div>
                <div className="q4">П</div>
                </div>
                <div className="default-key quadrant" id='lh'>
                <div className="q2">H</div>
                <div className="q4">Р</div>
                </div>
                <div className="default-key quadrant" id='lj'>
                <div className="q2">J</div>
                <div className="q4">О</div>
                </div>
                <div className="default-key quadrant" id='lk'>
                <div className="q2">K</div>
                <div className="q4">Л</div>
                </div>
                <div className="default-key quadrant" id='ll'>
                <div className="q2">L</div>
                <div className="q4">Д</div>
                </div>
                
                <div className="default-key quadrant" id='signcolon'>
                <div className="q2">{`:`}</div>
                <div className="q3">{`;`}</div>
                <div className="q4">Ж</div>
                </div>
                <div className="default-key quadrant" id='signquote'>
                <div className="q2">{`"`}</div>
                <div className="q3">{`'`}</div>
                <div className="q4">Э</div>
                </div>
                <div className="default-key center" id='Enter2'>
                Enter
                </div>     
            </div>
            <div className="row">
                <div className="default-key center" id='Shift'>Shift</div>
                <div className="default-key quadrant" id='lz'>
                <div className="q2">Z</div>
                <div className="q4">Я</div>
                </div>
                <div className="default-key quadrant" id='lx'>
                <div className="q2">X</div>
                <div className="q4">Ч</div>
                </div>
                <div className="default-key quadrant" id='lc'>
                <div className="q2">C</div>
                <div className="q4">С</div>
                </div>
                <div className="default-key quadrant" id='lv'>
                <div className="q2">V</div>
                <div className="q4">М</div>
                </div>
                <div className="default-key quadrant" id='lb'>
                <div className="q2">B</div>
                <div className="q4">И</div>
                </div>
                <div className="default-key quadrant" id='ln'>
                <div className="q2">N</div>
                <div className="q4">Т</div>
                </div>
                <div className="default-key quadrant" id='lm'>
                <div className="q2">M</div>
                <div className="q4">Ь</div>
                </div>
            
                <div className="default-key quadrant" id='signg'>
                <div className="q2">{`<`}</div>
                <div className="q3">{`,`}</div>
                <div className="q4">Б</div>
                </div>
                <div className="default-key quadrant" id='signl'>
                <div className="q2">{`>`}</div>
                <div className="q3">{`.`}</div>
                <div className="q4">Ю</div>
                </div>
               
                <div className="default-key quadrant" id='q'>
                <div className="q1">{`,`}</div>
                <div className="q2">{`?`}</div>
                <div className="q3">{`/`}</div>
                <div className="q4">.</div>
                </div> 

                <div className="default-key center" id='Shift'>Shift</div>
            </div>
            <div className="row">
            
                <div className="default-key center" id='Ctrl1'>Ctrl</div>
                <div className="default-key center" id='Fn'>Fn</div> 
                <div className="default-key center" id='Win'>Win</div>  
                <div className="default-key center" id='Alt1'>Alt</div>
                <div className="default-key center" id='Space'></div> 
                <div className="default-key center" id='Alt2'>Alt</div>
                <div className="default-key center" id='Ctrl2'>Ctrl</div>
                <div className="default-key center" id='Left'>&#8592;</div>   
                <div className="default-key center" id='up-down'>
                    <div id='up'>&#8593;</div>
                    <div id='down'>&#8595;</div>
                </div>
                <div className="default-key center" id='Right'>&#8594;</div>   
            
                   
            </div>    
        <div></div>
        </div>
    );
}