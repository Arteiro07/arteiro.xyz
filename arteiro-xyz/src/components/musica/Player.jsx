import React from 'react'
import { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, playlistUri}) {
    const [play, setPlay]=useState(false);
    useEffect(()=>{
       setPlay(true)
    },[playlistUri])

    if (!accessToken) return null;
    if (!playlistUri) return null;
    
    return (
        <div>
            <SpotifyPlayer
                token={accessToken}
                showSaveIcon
                uris={playlistUri? [playlistUri] : []}
                play={play}
                callback={state => {
                    if (!state.isPlaying) setPlay(false)
                }}
            />
        </div>
    )
}
