import {React, useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Single_Elim from './Single_Elim';
import Single_Round_Robin from './Single_Round_Robin';
import Double_Round_Robin from './Double_Round_Robin';
import "./padel.css";

export default function Tournament() {
  const [Choice, setChoice] = useState(0);
/*
  const teamsforms = [];

  var i;
  for ( i =1; i <= Teams ; i++){
      teamsforms.push(
      <>
          <div>   
              <div>
                  <input placeholder="team $i player 1 name" onChange={e=> setPlayerName(e.target.value)} />
                  <input placeholder='team $i player 1 #phone' onChange={e=> setPlayerNumber(e.target.value)} />
              </div>
              <div>
                  <input placeholder='team $i player 2 name' onChange={e=> setPlayerName(e.target.value)} />
                  <input placeholder='team i player 2 #phone' onChange={e=> setPlayerNumber(e.target.value)} />
              </div>
          </div>
      </>)
  }*/

  return (
    <>
          <div>
              <div className='menu'>
                  <Form.Select aria-label="Default select example" onChange={e=> setChoice(e.target.value)}>
                      <option value="1">Single Elimination</option>
                      <option value="2">Single Round Robin</option>
                      <option value="3">Double Round Robin</option>
                  </Form.Select>
              </div>
              <>
                {Choice===1 && (<Single_Elim> </Single_Elim>)}
                {Choice===2 && (<Single_Round_Robin> </Single_Round_Robin>)}
                {Choice===3 && (<Double_Round_Robin> </Double_Round_Robin>)}
              </>
          </div>        
    </>
  )
}
