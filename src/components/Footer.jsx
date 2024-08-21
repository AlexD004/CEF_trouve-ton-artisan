import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import TitleH2 from './TitleH2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    // STATES
    const conditionalBorder = props.display === 'mobile' ? " border-end-0" : " border-bottom-0";

    // RENDER
    return (
      <div className="footer bg-primary text-white fw-bold fs-6">
          <Container fluid className='p-4'>
            <Row>
              <Col className='col-lg-4 col-12 mb-5 mb-lg-0 text-center text-lg-start'>
              <img
                  src="/images/logo-blanc.png"
                  width="250"
                  height="66"
                  className="d-inline-block align-top"
                  alt="Logo Trouve ton artisan"
                />
              </Col>
              <Col className='col-lg-8 col-12'>
                <Row>
                  <Col className={'col-12 col-sm-6 ps-5 py-4 p-lg-0 border border-start-0 border-top-0'+conditionalBorder}>
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
                  <Col className='col-12 col-sm-6 ps-5 py-4 p-lg-0'>
                    <Nav className="flex-column text-white">
                      <Nav.Link href="/legal/mentions-legales" className='lightContrast px-0 px-lg-4'>Mentions légales</Nav.Link>
                      <Nav.Link href="/legal/donnees-personnelles" className='lightContrast px-0 px-lg-4'>Données personnelles</Nav.Link>
                      <Nav.Link href="/legal/accessibilite" className='lightContrast px-0 px-lg-4'>Accessibilité</Nav.Link>
                      <Nav.Link href="/legal/gestion-cookies" className='lightContrast px-0 px-lg-4'>Gestion des cookies</Nav.Link>
                    </Nav>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className='text-center mt-3 mt-sm-5 pt-4 border border-bottom-0 border-start-0 border-end-0'>
              © Designed by Alexandre Dupré for CEF
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;
  