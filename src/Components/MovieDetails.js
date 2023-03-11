import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function MovieDetails(props) {
    return (
        <>
            <Container className="box">
                <Row>
                    <Col className='col-4 flex' xs={12} lg={4}>
                        <img src={props.imageUrl} alt='' className='imgs' />
                    </Col>
                    <Col className='col-8' xs={12} lg={8}>
                        <h1 className='p2'>{props.Te}</h1>
                        <p className='p1'>{props.Pt}</p>
                        <Row>
                            <Col>
                                <p className='pe'>Released: {props.Rd}</p>
                                <p className='pe'>Duration: {props.Rn}</p>
                                <p className='pe'>Actors: {props.As}</p>
                            </Col>
                            <Col>
                                <p className='pe'>Genre: {props.Ge}</p>
                                <p className='pe'>Country: {props.Cy}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieDetails