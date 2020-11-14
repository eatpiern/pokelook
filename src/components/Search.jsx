import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';


export default function Search(props) {

  const [search, setSearch] = React.useState('');
  
  return (
    <Container>
      <Form className="second">
        <Form.Row className="align-items-center">
          <Col sm={10} className="my-1">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter a Pokemon name" />
          </Col>
          <Col sm={2} className="first">
            <Button block onClick={(e) => props.getPokemon(search.toLowerCase())}>Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}