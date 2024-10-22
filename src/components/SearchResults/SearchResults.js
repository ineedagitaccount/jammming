import React from "react";

export default function SearchResults ({items, searchTerm, addSongToPlaylist}) {
    const filteredItems = items.filter(item => 
        item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.album.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Results:</h2>
            {filteredItems.length > 0 ? (
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}>
                            <strong>{item.album}</strong> by {item.artist}
                            <ul>
                                {item.songs.map((song, songIndex) => (
                                    <li key={songIndex}>
                                        {song}
                                        <button onClick={() => addSongToPlaylist(song)}>Add to Playlist</button>
                                    </li> 
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    )
}