import React, { useState } from "react";
import styles from "./Playlist.css";

export default function Playlist({playlists, createPlaylist, selectedPlaylist, selectPlaylist }){
    const [newPlaylistName, setNewPlaylistName] = useState('');

    function handleCreatePlaylist(){
        if(newPlaylistName) {
            createPlaylist(newPlaylistName);
            setNewPlaylistName('');
        }
    };

    return(
        <div>
            <h2>Your Playlists</h2>
            <input
                type="text"
                placeholder="Create Playlist"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <button onClick={handleCreatePlaylist}>Create Playlist</button>
            <ul>
                {playlists.map((playlist, index) => (
                    <li key={index} className={`playlist-item ${selectedPlaylist === playlist.name ? 'selected' : ''}`} onClick={() => selectPlaylist(playlist.name)}>
                        <strong>{playlist.name}</strong>
                        <ul>
                            {playlist.songs.map((song, songIndex) => (
                                <li key={songIndex}>{song}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}