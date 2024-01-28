import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import Movie from './components/movie';

function App() {
  const bestMovies = [
    {
      name: 'The Shawshank Redemption',
      year: 1994,
      rating: 9.3,
      image: 'https://i.imgur.com/jajuPYG.png',
    },
    {
      name: 'The Godfather',
      year: 1972,
      rating: 9.2,
      image: 'https://i.imgur.com/nV11ncq.png',
    },
    {
      name: 'The Dark Knight',
      year: 2008,
      rating: 9.0,
      image: 'https://i.imgur.com/QW7Msuf.png',
    },
    {
      name: 'Pulp Fiction',
      year: 1994,
      rating: 8.9,
      image: 'https://i.imgur.com/0EQgIuV.png',
    },
    {
      name: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      rating: 8.9,
      image: 'https://i.imgur.com/LDnkjFV.png',
    },
  ];
  

  return (
    <div className='App'>
      <h1>My Favorite Movies</h1>
      <Movies movies={bestMovies} />
    </div>
    
  );
}

export default App;
