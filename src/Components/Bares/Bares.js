import React from "react";
import './bares.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from "react-bootstrap";

function Bares() {

  return (
    <>
    <Container fluid className="fondoNegro">
        <Container fluid className="dejarBonitp">
        <h3 className="">Bares</h3>
        <Carousel fade >
        <Carousel.Item>
            <CardGroup className="gap-2">
                <Card className="card2">
                    <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="card2">
                    <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="card2">
                    <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="gap-2">
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="gap-2">
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Img variant="top" src="https://images.xceed.me/clubs/covers/bataplan-club-san-sebastian-xceed-605e.jpg?w=28&blur=auto&fm=auto" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
        </Carousel.Item>
        </Carousel>
        </Container>
    </Container>
    </>
  );
}

export default Bares;