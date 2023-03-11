import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from './Screenshot_2.png';

export default function CarouselComponent() {
    const placeholderImageUrl = img;
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        let fetchNews = async () => {
            const apiKey = '0Z7kEqdBT5GiZFiKX1uEeaQikWWdgAg3';
            const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                // Set the fetched news data to the state variable
                setNewsData(data.results);

            } catch (error) {
                // Handle any errors here
                console.error(error);
            }
        }

        fetchNews();
    }, []);

    return (
        <Carousel className='cardc cardd'>
            {newsData.map((newsItem, index) => (
                <Carousel.Item key={index} interval={1000} >
                    <div className='image-wrapper'>
                        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block w-100 horizontalsize resimg"
                                src={newsItem.multimedia?.[2]?.url || placeholderImageUrl} // Use the first multimedia object in the array, if it exists
                                alt={newsItem.title}
                            />
                        </a>
                    </div>
                    <div className='text-wrapper font'>
                        <Carousel.Caption>
                            <h3 className='font6'>{newsItem.title}</h3>
                            <p className='font5'>{newsItem.abstract}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))
            }
        </Carousel >
    );
}