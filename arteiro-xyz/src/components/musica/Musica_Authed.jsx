import {React, useState, useEffect} from 'react'
import useAuth from '../useAuth/useAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import SearchDropdown from './SearchDropdown';
import Player from './Player';
import './musica.css';

const code = new URLSearchParams(window.location.search).get("code")

const spotifyApi = new SpotifyWebApi({
  clientId: "3371260c91e84ca38c14aff77cc3afdf",
})

export default function Musica_Authed() {
  const accessToken = useAuth(code);
  const [search, setSearch]= useState("");
  const [searchResults, setSearchResults]= useState([]);
  const [choice, setChoice] = useState([]);


// function to pass as reference
  function choosePlaylist( playlist){
    setChoice(playlist);
    setSearch("");
  }
  
  useEffect(()=>{
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  },[accessToken])

  useEffect(()=>{
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    let cancel = false;
    spotifyApi.searchPlaylists(search).then(res => {
      if (cancel) return;  
      setSearchResults(res.body.playlists.items.map(playlist=>{
        return{
          name: playlist.name,
          uri: playlist.uri,
          image: playlist.images[0].url
        }
      }
      ));
    }).catch((err)=>{
      console.log(err);
      console.log("err");
    })
    return () => cancel=true;
  },[search, accessToken])

  return (
      <div className='music-background'>
        <div className='music-searchbox'>
          <input placeholder='playlist' value={search} onChange={e=> setSearch(e.target.value)} />
        </div>
        {searchResults.map(playlist => (
          <SearchDropdown playlist={playlist} key={playlist.uri} choosePlaylist={choosePlaylist}/>
        ))}
        <div className='music-player'>
          <Player accessToken={accessToken} playlistUri={choice} />  
        </div>
      </div>
  )
}