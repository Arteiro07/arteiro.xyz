import {Link} from 'react-router-dom'
import "./botao.css"

export default function Botao (props){

  return (
    <button className='button-container'>
      <Link to={props.name} style={{color:'white', textDecoration:'none'}}>{props.name}</Link>
    </button>
    );
}