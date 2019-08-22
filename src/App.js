import React from 'react';
import MoviesContextProvider from './MoviesContext'
import './App.css';
import {movies} from './data'
import MoviesList from './MoviesList';


function App() {
  console.log(movies)
  return (
    <MoviesContextProvider>
  <div className="App">
      <header className="App-header">
        
       movies
      </header>
    </div>
    <MoviesList/>
    </MoviesContextProvider>
    
  );
}

export default App;
