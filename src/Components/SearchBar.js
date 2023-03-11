import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedQuery = sessionStorage.getItem('searchQuery');
        const storedMovies = sessionStorage.getItem('movieList');

        if (storedQuery && storedMovies) {
            setQuery(storedQuery);
            setMovies(JSON.parse(storedMovies));
        }
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        console.log("ok")
        event.preventDefault();
        const api = "5de493cb";
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api}`);
        const data = await response.json();
        setMovies(data.Search);
        sessionStorage.setItem('searchQuery', query);
        sessionStorage.setItem('movieList', JSON.stringify(data.Search));
    };

    return (
        <div className='my-2'>
            <div>
                <Row className="justify-content-center">
                    <Col className='col-10' lg={10}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Movie Name..."
                                value={query}
                                onChange={handleInputChange}
                                className="form-control me-2 card3"
                            />
                            <Row className='b4'>
                                <button type="submit" className=" my-3 col-3 btn btn-success card3">
                                    Search
                                </button>
                            </Row>
                        </form>
                    </Col>
                    <MovieCard movies={movies} />
                </Row>
            </div>
        </div>
    );
}

export default SearchBar;
