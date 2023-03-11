import React, { useContext } from 'react'
import { Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import img2 from "./Screenshot_1.png";

const MovieCard = props => {
  const img1 = img2;
  const { setimdbID } = useContext(MovieContext);

  const MovieOverlay = ({ year, type }) => {
    return (
      <>
        <span>{year}</span>
        <span className='ms-auto'>{type}</span>
      </>
    );
  }

  const handleCardClick = (ID) => {
    setimdbID(ID);
  }

  return (
    <>
        {props.movies && props.movies.map((movie) => (
          <Card key={movie.imdbID} className="cb card3 mx-2 my-2" style={{ width: '250px' }}>
            <Link to='/Post' onClick={() => handleCardClick(movie.imdbID)}>
              <Card.Img className='cimg' variant="top" style={{ height: '300px' }} src={!movie.Poster ? img1 : movie.Poster} />
            </Link>
            <Card.Body>
              <Card.Title className='text-center font3'>{movie.Title}</Card.Title>
              <Card.Text className='font2 d-flex'>
                <MovieOverlay year={movie.Year} type={movie.Type} />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
      );
}

      export default MovieCard
