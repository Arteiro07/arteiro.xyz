import smoke from '../../videos/9vZI.mp4';
import './musica.css';
import "bootstrap/dist/css/bootstrap.min.css"

const CLIENT_ID ="3371260c91e84ca38c14aff77cc3afdf";
const REDIRECT_URI="http://localhost:3000/authed"
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id="+CLIENT_ID+"&response_type=code&redirect_uri="+REDIRECT_URI+"&scope=streaming%20user-read-playback-state%20user-modify-playback-state%20user-read-email%20user-read-private%20user-library-read%20user-library-modify";

export default function Musica_Auth (){

  return(
    <>
        <div className='music-gif'>
            <video loop autoplay="" muted id="myVideo">
                <source src={smoke} type='video/mp4'/>
            </video>
            <a className='btn btn-sucess btn-lg' href={AUTH_URL} >
                Login to Spotify
            </a>
        </div>
    </>
  );}

  // GET https://api.spotify.com/v1/search