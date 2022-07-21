import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./twenty-four.css"
import {CgRedo, CgMathDivide, CgMathMinus, CgMathPlus} from 'react-icons/cg';
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFillPlayFill, BsBackspace} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import Stopwatch from '../stopwatch/Stopwatch';

export default function Twentyfour (){
  const operatorsIcons = [<CgMathPlus/>, <CgMathMinus/>, <FaTimes/>, <CgMathDivide/>, '(', ')', <BsBackspace/> ];
  const operators = ['+', '-', '*', '/', '(', ')'];

  const [solution, setSolution] = useState("");
  const [numbers, setNumbers] = useState("0000");
  const [options, setOptions] = useState([]);
  const [difficulty, setDifficulty] = useState("1.1")
  const [difficultyEl, setDifficultyEL] = useState(<></>);
  const [startstop, setStartstop] = useState(false);
  const [time, setTime] = useState(0);
  const [recordTime, setRecordTime] = useState(0);
  const [sessionRecordTime, setSessionRecordTime] = useState(0);
  const [winscreen, setWinscreen] = useState(false); 


  function win(){
    pickNumbers();
    setSolution("");
    setWinscreen(false);
    setStartstop(true);
  }
  function checkrecordTime(){
    if(time<sessionRecordTime||sessionRecordTime===0){
      setSessionRecordTime(time);
      if(time<recordTime||recordTime===0){
        setRecordTime(time);
        localStorage.setItem('recordTime', time.toString());
      }
    }
    setWinscreen(true);

  }

  function pickNumbers(){
    setTime(0);
    setNumbers([]);
    let index = 40 * Math.floor(Math.random() * 195);
    setNumbers([options[16+index],options[17+index],options[18+index],options[19+index]]);
    setDifficulty(options[37+index]+options[38+index]+options[39+index]);
  }

  function start() {
    setRecordTime(Number(localStorage.getItem('recordTime')));
    axios.post('http://localhost:3001/24',{
    }).then(res => {
        setOptions(res.data);
        setStartstop(true);
    }).catch( (res =>
    {   
        console.log(res);
        console.log("err");
        window.location = '/'; 
    }))
  }

  function retry() {
    pickNumbers();
    setSolution("");
    setStartstop(true);
  }

  useEffect(()=>{
    if(difficulty <= 0.5)
    {
      setDifficultyEL(<><div className='twenty-four-ball'></div> </>) 
    }
    else if(difficulty <= 0.8)
    {
      setDifficultyEL(<><div className='twenty-four-ball'></div> <div className='twenty-four-ball'></div></>)
    }
    else if ((difficulty <= 1))
    {
      setDifficultyEL( <><div className='twenty-four-ball'></div> <div className='twenty-four-ball'></div> <div className='twenty-four-ball'></div></>);
    }
  },[difficulty])

  useEffect(()=>{
    pickNumbers();
  },[options])

  function submit() {
    if(solution!=="")
    {
      if (eval(solution)===24 && solution.includes(numbers[0]) && solution.includes(numbers[1])&& solution.includes(numbers[2])&& solution.includes(numbers[3])){
        setStartstop(false);
        checkrecordTime();
      }
      else{
        alert("loose");
      }
    }
    else{
      alert("empty submission")
    }  
  }
 
  function onKeyUp(e) {
    if (e.key === 'Enter') {
      submit();
    }
  }  

  return(
  <>
    <div className="twenty-four-square">
        <div className='twenty-four-container'>
            <div className='twenty-four-stopwatch'> <Stopwatch time={time} setTime={setTime} startstop={startstop} /> </div>
            <div className='twenty-four-difficulty'>{difficultyEl}</div>
            <div className='twenty-four-retry' onClick={retry} > <CgRedo/> </div>
        </div>
        <div className='twenty-four-operations'>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[0]]))} >{operatorsIcons[0]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[1]]))} >{operatorsIcons[1]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[2]]))} >{operatorsIcons[2]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[3]]))} >{operatorsIcons[3]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[4]]))} >{operatorsIcons[4]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => ([prevSolution+ operators[5]]))} >{operatorsIcons[5]}</div>
            <div className='twenty-four-op' onClick={()=>setSolution(prevSolution => (prevSolution.slice(0,-1)))} >{operatorsIcons[6]}</div>
        </div>
        <div className="twenty-four-circle">
            <div className='twenty-four-start' onClick={start} > <BsFillPlayFill/> </div>
              <div className='twenty-four-numbers'>
                <button className='twenty-four-top' onClick={()=>setSolution(prevSolution => ([prevSolution+ numbers[0]]))} >{numbers[0]}</button>
                <button className='twenty-four-left'onClick={()=>setSolution(prevSolution => ([prevSolution+ numbers[1]]))} >{numbers[1]}</button>
                <button className='twenty-four-bot' onClick={()=>setSolution(prevSolution => ([prevSolution+ numbers[2]]))} >{numbers[2]}</button>
                <button className='twenty-four-right' onClick={()=>setSolution(prevSolution => ([prevSolution+ numbers[3]]))}>{numbers[3]}</button>
              </div>
          </div>
          <span>
            <div className='twenty-four-submit' onClick={submit}>Submit</div>
            <input placeholder='solution' value={solution} onChange={e=> setSolution(e.target.value)} onKeyUp={onKeyUp}/>
          </span>
            <div className='twenty-four-footnote'>(parenthesis required)</div>
    </div>
    <>
      {winscreen 
      ?<div className='twenty-four-win-popup' onClick={win}>
          <div className='twenty-four-win-main'>
            <div className='twenty-four-win-close' onClick={win}> <AiFillCloseCircle/></div>            
            <h1>Best computer record {("0"+ Math.floor((recordTime/60000)%60)).slice(-2)}m :{("0" + Math.floor((recordTime/1000)%60)).slice(-2)}s :{("0"+ ((recordTime/10)%1000)).slice(-2)+"ms"} </h1>
          
            <h1>Record in this session {("0"+ Math.floor((sessionRecordTime/60000)%60)).slice(-2)}m :{("0" + Math.floor((sessionRecordTime/1000)%60)).slice(-2)}s :{("0"+ (  (sessionRecordTime/10)%1000)).slice(-2)}ms)</h1>
          
            <h1>You won in {("0"+ Math.floor((time/60000)%60)).slice(-2)}m :{("0" + Math.floor((time/1000)%60)).slice(-2)}s :{("0"+ ((time/10)%1000)).slice(-2)}ms</h1>
          
          </div>
        </div>
        :<></>
      }
    </>
  </>  


  );}