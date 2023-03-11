import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './Screenshot_1.png';
import { Link } from "react-router-dom";

function CardComponent() {
    return (
        <div>
            <Card className="mx-auto my-3 col-6 cardc cd">
                <Link to='/MovieRS'>
                    <Card.Img src={img} />
                        <div className='card-hover'>
                    <Card.ImgOverlay>
                            <Card.Title className='text-center'>Movie Recommendation</Card.Title>
                            <Card.Text>
                                Recommend movies across various genres, such as action,
                                romance, comedy, and more, and suggest titles from different
                                eras and countries.
                            </Card.Text>
                    </Card.ImgOverlay>
                        </div>
                </Link>
            </Card>

        </div>
    );
}

export default CardComponent;
