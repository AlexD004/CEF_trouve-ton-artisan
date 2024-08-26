import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import emailjs from '@emailjs/browser';

function ContactForm({ workerName, workerEmail }) {
/* SET UP SOME VARIABLES */
    // Stock input value / user informations
    const [formInfos, setFormInfos] = useState(
        {
            name: "",
            subject: "",
            message: ""
        }
    );
    // To know if a field is empty or not
    const  [validFields, setValidFields] = useState(
        {
            name: false,
            subject: false,
            message: false
        }
    );
    // To know if all content are 'ok' or if there is an error
    const [invalid, setInvalid] = useState(false);

/* FUNCTIONS CALLED IN PROCESS */
    // Clean value submited in searchbar
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    // Update values of inputs in contact form
    const handleChange = (e) => {
        // Determine if the new field value is empty or not (so valid or not)
        let isValid = false;
        if (e.target.value){
            isValid = true;
        }
        // Put the field value in the corresponded key value in the state
        setFormInfos({ 
            ...formInfos, // Copy current fields
            [e.target.name] : e.target.value // Override this one
         });
         // Put the statue (valid or invalid / true or false) in the corresponded key value
         setValidFields({ 
            ...validFields, // Copy current fields
            [e.target.name] : isValid // Override this one  
         });
    } 
    // Call when error after submit
    const showError = (err) => {
        setInvalid(true);
        console.log(err);
    }
    // Fade out success message
    let fadeOut = () => {
      var fadeTarget = document.getElementById("successMessage");
      var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.01;
        } else {
          clearInterval(fadeEffect);
          setIsSend(false);
        }
      }, 10);
    }
    // Call when all is ok after submit
    const [isSend, setIsSend] = useState(false);
    const sendMail = () => {

      // EmailJS IDs
      const serviceId = "service_mio0al7";
      const templateId = "template_42gsd4e";
      const publicKey = "gtH3eGjpnco2ghUE7";

      // Dynamic params for template
      const templateParams = {
        client_name: formInfos.name,
        client_subject: formInfos.subject,
        client_message: formInfos.message,
        worker_name: 'Nom Artisan',
        worker_email: "MAIL"
        //worker_name: workerName,
        //worker_email: workerEmail
      }

      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          // reset form
          setFormInfos({
            name: "",
            subject: "",
            message: ""
          });

        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
      setIsSend(true);
      setTimeout( fadeOut , 6000 ); // Wait 6s and fade out the success message
    }
/* FUNCTION SUBMIT */
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if( formInfos.name.length < 1 || formInfos.subject.length < 1 || formInfos.message.length < 1 ){
             throw new Error("All fields are required!");
            }
            setInvalid(false); // If the form was invalid, now it is good !
            setFormInfos({
              name: escapeHtml(formInfos.name),
              subject: escapeHtml(formInfos.subject),
              message: escapeHtml(formInfos.message)
            });
            sendMail();

        } catch (err) {
            showError(err);
        }

    }

    // RENDER
    return (
      <div className="contactForm">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm="12" md="6" className="mt-4">
                <Form.Group controlId="formName">
                  <Form.Label>
                    Nom <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="name"
                    value={formInfos.name}
                    className={"bg-light rounded-5 " + ( (invalid && (validFields.name === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                    type="text"
                    placeholder="Entrez votre nom"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col sm="12" md="6" className="mt-4">
                <Form.Group controlId="formSubject">
                  <Form.Label>
                    Objet <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="subject"
                    value={formInfos.subject}
                    className={"bg-light rounded-5 " + ( (invalid && (validFields.subject === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                    type="text"
                    placeholder="Entrez le sujet de votre demande"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage" className="mt-4">
              <Form.Label>
                Message <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="message"
                value={formInfos.message}
                className={"formMessage bg-light rounded-4 " + ( (invalid && (validFields.message === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                as="textarea"
                placeholder="Entrez votre message"
                onChange={handleChange}
              />
            </Form.Group>
            { invalid && (<div className='py-2 mt-3 border border-danger rounded-2 text-center text-danger'>Tous les champs sont obligatoires. Veuillez compléter les informations manquantes.</div>) }
            { isSend && (<div id="successMessage" className='py-2 mt-3 border border-success rounded-2 text-center text-success'>Votre message est envoyé. Nous vous répondrons sous 48h (jours ouvrés).</div>) }
            <div className="d-flex justify-content-center justify-content-sm-end">
              <Button variant="primary" type="submit" className="mt-4 rounded-5 px-5">
                Demander un devis
              </Button>
            </div>
          </Form>
      </div>
    );
  }
   
  export default ContactForm;
  