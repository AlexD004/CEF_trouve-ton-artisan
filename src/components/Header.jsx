import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

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

    // Clean value submited in searchbar
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // On SUBMIT SearchBar
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      const stringSearch = event.target.search.value;

      const showError = (err) => {
        setIsError(true);
        console.log(err);
      }

      try {
        if(!stringSearch){
          throw new Error("The field is required!");
        }

        setIsError(false); // If the form was in error, now it is good !
        const cleanSearch = escapeHtml(stringSearch); // clean the string
        const url = "/recherche/"+cleanSearch; // Build url
        navigate(url); // And go!

      } catch (err) {
        showError(err);
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
                <Form id="searchar" onSubmit={handleSubmit}>
                  <Row className='g-2 w-100 d-flex align-items-end'>
                    <Col xs="auto" className='col-8'>
                      {isError && (<span className='text-danger'>Veuillez saisir votre recherche</span>)}
                      <Form.Group  controlId="searchInput">
                        <Form.Label  hidden>Recherche</Form.Label>
                        <Form.Control id="searchInput" type="text" name="search" placeholder="Ville, Nom, Spécialité..."
                          className={"my-0 rounded-0 border-primary border-top-0 border-start-0 " + (isError && "invalid")}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="auto" className='col-4'>
                      <Button
                        type="submit"
                        value="Rechercher"
                        className="my-0 bg-primary w-100"
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
  