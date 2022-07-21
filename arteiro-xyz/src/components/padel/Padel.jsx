import {react, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./padel.css";

export default function Padel (){

    return(
      
//////<Link className='button' to={"tournament"}> Torneio</Link>
      <div className="padel-buttons">
        <Link className='padel-button' to={"single"}> Single</Link>
        <Link className='padel-button' to={"stats"}> Estatisticas</Link>
      </div>
    );}