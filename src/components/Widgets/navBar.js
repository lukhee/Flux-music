import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Badge,
  Form,
  Row,
  Col,
} from 'reactstrap';
import UserProfile from './userProfile';
import { nextedMenu } from './../../utils/data';
import { findObjectByKey } from './../../utils/utilities';

const NavBar = (props) => {
  const [isOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [dropdownOpen, toggleDropDown] = useState(false);
  const [subNavKey, setSubNavKey] = useState('explore');

  const toggleActiveButton = (value) => {
    setActiveButton(value);
    if (value === 3) {
      setSubNavKey('library');
    } else {
      setSubNavKey('explore');
    }
  };

  return (
    <div className="container-fluid text-white bg-Dark pt-2">
      <Navbar color="light" light expand="md">
        <Row className="no-gutters w-100">
          <Col md={4}>
            <NavbarBrand href="/" className="text-white fw-bold">
              Logo
            </NavbarBrand>
          </Col>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Col md={4}>
            <Collapse isOpen={isOpen} navbar className="justify-content-around">
              <Nav className="mr-auto" navbar>
                <div className="auth-button position-relative">
                  <div
                    style={{
                      width: '80%',
                      backgroundColor: '#ffffff75',
                      top: '130%',
                    }}
                    className={`p-2 text-dark position-absolute  start-50 translate-middle rounded-bottom border border-1 border-light d-flex justify-content-between
                    ${activeButton === 1 && 'd-none'}`}
                  >
                    {findObjectByKey(nextedMenu, subNavKey).data.map((val) => (
                      <h6
                        key={val.id}
                        style={{ fontSize: '0.8rem' }}
                        className="mb-0 text-white text-capitalize"
                      >
                        {val.value}
                      </h6>
                    ))}
                  </div>
                  <ButtonGroup className="bg-white p-1 rounded-pill">
                    <Button
                      size="sm"
                      onClick={() => toggleActiveButton(1)}
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
                      onClick={() => toggleActiveButton(2)}
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
                      onClick={() => toggleActiveButton(3)}
                      className={`rounded-pill px-4 ${
                        activeButton === 3
                          ? 'bg-primary'
                          : 'bg-white text-muted border border-white'
                      }`}
                    >
                      Library
                    </Button>
                    <span className="border-start ms-1 border-2"> </span>
                    <Dropdown
                      className="rounded-pill ms-1"
                      group
                      isOpen={dropdownOpen}
                      size="sm"
                      toggle={() => toggleDropDown(!dropdownOpen)}
                    >
                      <DropdownToggle
                        style={{ background: 'white', color: 'grey' }}
                        className="rounded-pill border border-white"
                      >
                        <i className="bi bi-bell position-relative">
                          <Badge
                            style={{
                              top: '20%',
                              start: '85%',
                              fontSize: '7px',
                            }}
                            color="secondary"
                            className="position-absolute translate-middle border border-light rounded-circle bg-secondary"
                          >
                            4
                          </Badge>
                        </i>
                      </DropdownToggle>
                      <DropdownMenu
                        style={{ minWidth: '2rem', borderRadius: '5px' }}
                      >
                        <DropdownItem>Song</DropdownItem>
                        <DropdownItem>Playlist</DropdownItem>
                        <DropdownItem>Album</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Nav>
            </Collapse>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <Form className="mw-50 my-auto">
              <Input
                style={{ background: '#ffffff75', color: 'white' }}
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
