import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const WatchList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('/api/v1/movies');
                setMovies(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovies();
    }, []);

    return (
        <Container>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.imdbId} sm={12} md={6} lg={4} xl={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={movie.poster} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.plot}</Card.Text>
                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                    <Button variant="primary" className="me-2">View Trailer</Button>
                                </Link>
                                <Link to={`/Reviews/${movie.imdbId}`}>
                                    <Button variant="secondary">View Reviews</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WatchList;