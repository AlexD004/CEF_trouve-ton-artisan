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

function Header(props) {
    // STATES

    // Control searchbar display
    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (props.display==='desktop') {
        setOpen(true);
      }else{
        setOpen(false);
      }
    },[props.display]);
    
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
      <header className="header">
        <Navbar expand="lg" className="bg-white shadow-sm" sticky="top">
          <Container>

            {/* Elements display by default on mobile and tablet */}
            <div id="mobileNav">
              {/* Logo */}
              <Navbar.Brand href="/">
                <img
                  src="/images/logo.png"
                  width="200"
                  height="53"
                  className="d-inline-block align-top"
                  alt="Logo Trouve ton artisan"
                />
              </Navbar.Brand>
              {/* Set of icons to toggle other elements on mobile and tablet */}
              <div id="buttonNav">
                {/* Icon for searchbar */}
                <Button
                  id="searchButton"
                  onClick={() => setOpen(!open)} 
                  aria-controls="searchbar"
                  aria-expanded={open}
                  className='text-primary bg-transparent border-0'
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Ouvrir et Fermer la recherche" />
                </Button>
                {/* Icon for navbar */}
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className='border-0'
                  onClick={onClickNavIcon}
                >
                  <FontAwesomeIcon icon={navIcon} aria-label="Ouvrir et Fermer le menu de navigation" className='text-primary bg-transparent' />
                </Navbar.Toggle>
              </div>
            </div>
            {/* Elements display by default on desktop but toggled on mobile */}
            <div id="toggleNav" className='w-100'>
              {/* Searchbar */}
              <Collapse in={open}>
                <Form id="searchar">
                  <Row className='g-2 w-100'>
                    <Col xs="auto" className='col-8'>
                      <Form.Control type="text" placeholder="Ville, Nom, Spécialité..."
                        className="
                          mt-md-0
                          mb-md-0
                          mt-sm-3
                          mb-sm-3
                          rounded-0
                          border-primary
                          border-top-0
                          border-start-0
                        "
                      />
                    </Col>
                    <Col xs="auto" className='col-4'>
                      <Button
                        type="submit"
                        className="
                          mt-md-0
                          mb-md-0
                          mt-sm-3
                          mb-sm-3
                          bg-primary
                          w-100
                        "
                      >
                        Rechercher
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Collapse>
              {/* Navbar */}
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
      </header>
    );
  }
  
  export default Header;
  