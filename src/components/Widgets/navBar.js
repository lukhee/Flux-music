import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup,
  Input,
  Form,
  Row,
  Col,
} from 'reactstrap';
import UserProfile from './userProfile';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid text-white bg-Dark pt-2">
      <Navbar color="light" light expand="md">
        <Row className="no-gutters w-100">
          <Col md={4}>
            <NavbarBrand href="/" className="text-white fw-bold">Logo</NavbarBrand>
          </Col>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Col md={4}>
            <Collapse isOpen={isOpen} navbar className="justify-content-around">
              <Nav className="mr-auto" navbar>
                <div className="auth-button">
                  <ButtonGroup className="bg-white p-1 rounded-pill">
                    <Button
                      size="sm"
                      onClick={() => setActiveButton(1)}
                      className={`rounded-pill me-1 px-4 ${
                        activeButton === 1
                          ? 'bg-primary'
                          : 'bg-white text-muted border border-white'
                      }`}
                    >
                      Home
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setActiveButton(2)}
                      className={`rounded-pill me-1 px-4 ${
                        activeButton === 2
                          ? 'bg-primary'
                          : 'bg-white text-muted border border-white'
                      }`}
                    >
                      Explore
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setActiveButton(3)}
                      className={`rounded-pill px-4 ${
                        activeButton === 3
                          ? 'bg-primary'
                          : 'bg-white text-muted border border-white'
                      }`}
                    >
                      Library
                    </Button>
                  </ButtonGroup>
                </div>
              </Nav>
            </Collapse>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <Form className="mw-50">
              <Input
                type="text"
                className="form-control rounded"
                placeholder="Search"
                size="sm"
              />
            </Form>
            <UserProfile />
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default NavBar;
