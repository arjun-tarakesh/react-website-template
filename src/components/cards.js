import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import "./projects.css"

const Cards = (props) => {
  return (
      <div className="card-div">
      <Container >
    <Row>
    <Col sm="4" className="cards">
      <Card body className="cardbody">
      <img width="100%" src="" alt="Card image cap" />
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
    <Col sm="4" className="cards">
      <Card body className="cardbody">
      <img width="100%" src="" alt="Card image cap" />
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
    <Col sm="4" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src="" alt="Card image cap" />
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
  </Row>
    </Container>
    </div>
  );
}

export default Cards;