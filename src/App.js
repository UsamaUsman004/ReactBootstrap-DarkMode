import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Form, Row, Col, Card, Button } from 'react-bootstrap';

function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem('Mode')) || false
  }

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem('Mode', JSON.stringify(dark))
  }, [dark])

  

  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Container>
          <Navbar.Brand href="#home">M.Osama</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Change Mode"
                onChange={() => setMode(!dark)}
                checked={dark}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Container className="my-2 py-2">
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Img variant="top" src="https://images.hindustantimes.com/auto/img/2021/09/13/600x338/apple_icar_youtube_1612505634970_1612505641070_1631525849072.jpg" />
              <Card.Body className={dark ? " dark-mode" : ""}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
