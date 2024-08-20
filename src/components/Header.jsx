import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    // STATES

    // Control searchbar display
    const [open, setOpen] = useState(false);

    useEffect(() => {
      // if desktop : searchbar open
      if (window.innerWidth > 991) {
        setOpen(true);
      }
      // if resize to desktop : searchbar open
      window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
          setOpen(true);
        }else{
          setOpen(false);
        }
      });
    }, []);

    // Change burger navIcon if clicked
    const [navIcon, setNavIcon] = useState(faBars);

    const onClickNavIcon = () => {
      if(navIcon === faBars){
        setNavIcon(faXmark);
      }else{
        setNavIcon(faBars);
      }
    }
  
    // RENDER
    return (
      <div className="header">
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
          <Container>

            <div id="mobileNav">
              <Navbar.Brand href="/">
                <img
                  src="/images/logo.png"
                  width="200"
                  height="53"
                  className="d-inline-block align-top"
                  alt="Logo Trouve ton artisan"
                />
              </Navbar.Brand>
              <div id="buttonNav">
                <Button
                  id="searchButton"
                  onClick={() => setOpen(!open)} 
                  aria-controls="searchbar"
                  aria-expanded={open}
                  className='text-primary bg-transparent border-0'
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className='border-0'
                  onClick={onClickNavIcon}
                >
                  <FontAwesomeIcon
                    icon={navIcon}
                    className='text-primary bg-transparent '
                  />
                </Navbar.Toggle>
              </div>
            </div>
            <div id="toggleNav">
              <Collapse in={open}>
                <Form id="searchar">
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </Collapse>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/categorie/batiment">Bâtiment</Nav.Link>
                  <Nav.Link href="/categorie/services">Services</Nav.Link>
                  <Nav.Link href="/categorie/fabrication">Fabrication</Nav.Link>
                  <Nav.Link href="/categorie/alimentation">Alimentation</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Header;
  