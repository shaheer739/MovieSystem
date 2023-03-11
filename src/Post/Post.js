import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../Components/MovieContext';
import '../CSS/Post.css';
import Navbar from '../Components/Navbar';
import BackgroundImage from '../Components/BackgroundImage';
import MovieDetails from '../Components/MovieDetails';
import Spinner from '../Components/Spinner';

const Post = () => {
  const { imdbID } = useContext(MovieContext);
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let URL = `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=5de493cb`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [imdbID]);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  return (
    <>
      {isLoading ? <Spinner /> :
        <div className='body1'>
          <Navbar />
          {movieData && (
            <div>
              <BackgroundImage imageUrl={movieData.Poster} />
              <MovieDetails imageUrl={movieData.Poster} Te={movieData.Title} Pt={movieData.Plot} Rd={movieData.Released} Rn={movieData.Runtime} As={movieData.Actors} Ge={movieData.Genre} Cy={movieData.Country} />
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Post;
