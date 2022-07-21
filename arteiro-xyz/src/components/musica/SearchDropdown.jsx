import {React} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function SearchDropdown( playlist ) {
 
    function clicked()
    {
        playlist.choosePlaylist(playlist.playlist.uri)
    }
    return (
        <ListGroup>
            <ListGroup.Item action variant="dark" onClick={clicked}>
                <img src={playlist.playlist.image} width="50px" height="50px" /> 
                <div className='music-name'>{playlist.playlist.name}</div>   
            </ListGroup.Item>
        </ListGroup>
    )
}
