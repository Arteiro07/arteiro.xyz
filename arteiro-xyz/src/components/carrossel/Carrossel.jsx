import Carousel from 'react-bootstrap/Carousel'
import Botao from './botao/Botao'
import twentyFourImg from '../../images/24.png'
import musicImg from '../../images/music.png'
import './carrossel.css'

export default function Carrossel (){
    const botao1 ='twentyfour';//24
    const botao3 ='musica';//musica
 
  return(
    <Carousel className='container' variant="dark" interval="2500">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src= {twentyFourImg}
                alt="One"
            />
            <Carousel.Caption>
                <Botao name={botao1}/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src= {musicImg}
                alt="Three"
            />
            <Carousel.Caption>
                <Botao name={botao3}/>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}