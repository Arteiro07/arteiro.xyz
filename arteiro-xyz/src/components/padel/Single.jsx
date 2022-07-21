import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import "./single.css"

// Player {
//    first_name : String;
//    last_name : String;
//    age : String;
//    location : String;
//    phone_number : String;
//}   

export default function Single() {
    
    const [Games, setGames] = useState(1);
    const [Menu, setMenu] = useState([]);
    const [PlayerNumber1, setPlayerNumber1] = useState('');
    const [PlayerNumber2, setPlayerNumber2] = useState('');
    const [PlayerNumber3, setPlayerNumber3] = useState('');
    const [PlayerNumber4, setPlayerNumber4] = useState('');
    const [Results, setResults] = useState({
        team1: [],
        team2: [],
    });
    
    function checkProfile(Number){
            // call check profile hook returns null if there's no existing profile, returns a profile object in case there's already one
    }

    function handleResults(result,game,team){
        console.log("game:"+game+" team:"+team+" result:"+result); 
        if(!isNaN(result)){
            setResults(resul=>{
                if(team===1) resul.team1[0] = result;
                if(team===2) resul.team2[0] = result;
            }); 
        }
    }


    useEffect(()=>{

        const results = []; 
        for( var i =1; i <= Games ; i++)
        {
            results.push(
                <li className='single-resultados' >
                    <h4>Game {i}</h4>
                    <input placeholder='team1' onChange={e=> handleResults(e.target.value,i,1)}/>
                    <input placeholder='team2' onChange={e=> handleResults(e.target.value,i,2)}/>
                </li>
            );
        }
        setMenu(results);
    },[Games])
      
    return(
        <div className='single'>
            <div className='background'>    
                <div className='single-teams'>   
                        <div className='single-team-1'>
                            <input placeholder='team 1 player 1 #phone' onChange={e=> setPlayerNumber1(e.target.value)} />
                            <input placeholder='team 1 player 2 #phone' onChange={e=> setPlayerNumber2(e.target.value)} />
                        </div>
                        <div className='single-team-2'>
                            <input className='single-team-2' placeholder='team 2 player 1 #phone' onChange={e=> setPlayerNumber3(e.target.value)} />
                            <input className='single-team-2' placeholder='team 2 player 2 #phone' onChange={e=> setPlayerNumber4(e.target.value)} />
                        </div>
                </div>
                <h4>Number of games played</h4>
                <Form.Select className='menu' aria-label="Numero de jogos" onChange={e=> setGames(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </Form.Select>
                <>
                    <h5>Results</h5>
                    <ul>
                        {Menu}
                    </ul>
                </>

            </div>
        </div>
    )
}











/*    if(Profile)
        {
            return (
                <div>
                    <div>
                        <input placeholder='Number' onChange={e=> setNumber(e.target.value)}/>
                        <input placeholder='Name' onChange={e=> setName(e.target.value)}/>
                        <input placeholder='Age' onChange={e=> setAge(e.target.value)}/>
                        <Form.Select aria-label="Default select example" onChange={e=> setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Div">Div</option>
                        </Form.Select>
                        <input placeholder='Cidade' onChange={e=> setCidade(e.target.value)}/>
                    </div>
                </div>        
            )
        }*/