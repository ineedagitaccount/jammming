import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const musicData = [
    {
      artist: "Miike Snow",
      album: "Happy To You",
      songs: ["Enter The Jokers Lair", "The Wave", "Devil's Work", 'Vase', 'God Help This Divorce', 'Bavarian #1(Say You Will)', 'Pretender', 'Archipelago', 'Black Tin Box', 'Paddling Out']
    },
    {
      artist: 'Lazerhawk',
      album: 'Redline',
      songs: ['Redline', 'Overdrive', 'Electric Groove', 'DistressSignal', 'Dream Machine', 'The Fixx', 'Pedal to the Metal', 'Interstellar', 'So Close', 'Space Trash', 'Activation']
    }
  ]

  function handleSearchChange(e){
    setSearchTerm(e.target.value);
  }

  function createPlaylist(name){
    setPlaylists([...playlists, { name, songs: [] }]);
    selectPlaylist(name);
  }

  function addSongToPlaylist(song) {
    if(selectedPlaylist){
      setPlaylists(playlists.map(playlist =>
        playlist.name === selectedPlaylist ? { ...playlist, songs: [...playlist.songs, song] } : playlist
      ));
    }
  }

  function selectPlaylist(name) {
    setSelectedPlaylist(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar searchInput={searchTerm} handleChange={handleSearchChange}/>
        <SearchResults items={musicData} searchTerm={searchTerm} addSongToPlaylist={addSongToPlaylist}/>
        <Playlist playlists={playlists} createPlaylist={createPlaylist} selectedPlaylist={selectedPlaylist} selectPlaylist={selectPlaylist}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
