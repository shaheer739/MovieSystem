import '../CSS/App.css';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
import { useEffect , useState} from 'react';

function App() {
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
        <Carousel />
        <hr />
        <Card />
      </>
    )}
    </>

  );
}

export default App;
