import{useState, useEffect} from 'react'

export default function Stopwatch ({time, setTime, startstop}){

//  const [time, setTime] = useState(0);
//  const [start, setStart] = useState(true);

  useEffect(()=>{
    let interval = null;
    if(startstop){
      interval = setInterval(()=>{
        setTime(prevtime=> prevtime + 10)
      },10)
    }else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  },[startstop])

  return(
    <>
      {( "0"+ Math.floor((time/60000)%60)).slice(-2)}:
      {( "0"+ Math.floor((time/1000)%60)).slice(-2)}:
      {( "0"+ ((time/10)%1000)).slice(-2)}
    </>
  )
}