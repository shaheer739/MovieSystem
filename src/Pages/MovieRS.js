import React from 'react'
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import Heading from '../Components/Heading';
import '../CSS/MovieRS.css';
import Spinner from '../Components/Spinner';
import { useEffect , useState} from 'react';

const MovieRS = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
      <Spinner />
    ) : (
      <>
      <Navbar />
      <Heading/>
      <SearchBar />
      </>
    )}
    </>
  );
}

export default MovieRS