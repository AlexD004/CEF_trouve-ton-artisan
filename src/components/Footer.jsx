import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import TitleH2 from './TitleH2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    // STATES
  
    // RENDER
    return (
      <div className="footer bg-primary text-white fw-bold fs-6">
          <Container fluid className='p-4'>
            <Row>
              <Col className='col-lg-4 col-12'>
              <img
                  src="/images/logo-blanc.png"
                  width="200"
                  height="53"
                  className="d-inline-block align-top"
                  alt="Logo Trouve ton artisan"
                />
              </Col>
              <Col className='col-lg-8 col-12'>
                <Row>
                  <Col className='col-12 col-md-6 border border-white border-top-0 border-bottom-0 border-start-0'>
                    <TitleH2 colorDivider='white' content='Lyon' />
                    <p>
                      101 cours Charlemagne <br/>
                      CS 20033 <br/>
                      69269 LYON CEDEX 02 <br/>
                      France
                    </p>
                    <a href="tel:+33426734000" className='lightContrast text-white text-decoration-none'>
                      <FontAwesomeIcon
                        icon={faPhone}
                        aria-hidden="true"
                      />
                      <span className='ms-2'>
                      +33 (0)4 26 73 40 00
                      </span>
                    </a>
                  </Col>
                  <Col className='col-12 col-md-6'>
                    <Nav className="flex-column text-white">
                      <Nav.Link href="/legal/mentions-legales" className='lightContrast'>Mentions légales</Nav.Link>
                      <Nav.Link href="/legal/donnees-personnelles" className='lightContrast'>Données personnelles</Nav.Link>
                      <Nav.Link href="/legal/accessibilite" className='lightContrast'>Accessibilité</Nav.Link>
                      <Nav.Link href="/legal/gestion-cookies" className='lightContrast'>Gestion des cookies</Nav.Link>
                    </Nav>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;
  