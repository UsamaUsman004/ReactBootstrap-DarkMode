import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import { Navbar, Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Slider from "./components/slider"


function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem('Mode')) || false
  }

  const [dark, setMode] = useState(getMode());
  useEffect(() => {
    localStorage.setItem('Mode', JSON.stringify(dark))
  }, [dark])


  const [alignment, setAlignment] = React.useState('white');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent"  >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="white">White</ToggleButton>
              <ToggleButton value="dark">Dark</ToggleButton>

            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>

      <Slider />





    </div>



    // <div className={dark ? "App dark-mode" : "App"}>
    //   <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
    //     <Container>
    //       <Navbar.Brand href="#home">M.Osama</Navbar.Brand>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="justify-content-end">
    //         <Form>
    //           <Form.Check
    //             type="switch"
    //             id="custom-switch"
    //             label="Change Mode"
    //             onChange={() => setMode(!dark)}
    //             checked={dark}
    //           />
    //         </Form>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>


    //   <Container className="my-2 py-2">
    //     <Row>
    //       <Col sm={12}>
    //         <Card>
    //           <Card.Img variant="top" src="https://images.hindustantimes.com/auto/img/2021/09/13/600x338/apple_icar_youtube_1612505634970_1612505641070_1631525849072.jpg" />
    //           <Card.Body className={dark ? " dark-mode" : ""}>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up the bulk of
    //               the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>


  )
}

export default App;
