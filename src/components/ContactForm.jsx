import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

function ContactForm({ workerName, workerEmail }) {
/* SET UP SOME VARIABLES */
    // Stock input value / user informations
    const [mailInfos, setmailInfos] = useState(
        {
            name: "",
            email: "",
            subject: "",
            message: "",
            workerName: workerName,
            workerMail: workerEmail
        }
    );
    // To know if a field is empty or not
    const  [validFields, setValidFields] = useState(
        {
            name: false,
            email: false,
            subject: false,
            message: false
        }
    );
    // To know if all content are 'ok' or if there is an error
    const [invalid, setInvalid] = useState(false);

/* FUNCTIONS CALLED IN PROCESS */
    // Update values of inputs in contact form
    const handleChange = (e) => {
      // Determine if the new field value is empty or not (so valid or not)
      let isValid = false;
      if (e.target.value){
          isValid = true;
      }
      // Put the field value in the corresponded key value in the state
      setmailInfos({ 
          ...mailInfos, // Copy current fields
          [e.target.name] : e.target.value // Override this one
        });
        // Put the statue (valid or invalid / true or false) in the corresponded key value
        setValidFields({ 
          ...validFields, // Copy current fields
          [e.target.name] : isValid // Override this one  
        });
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
    // Call when error after submit
    const showError = (err) => {
        setInvalid(true);
        console.log(err);
    }
    //MAIL SENDING
    const [isSent, setIsSent] = useState(false);
    const sendMail = () => {
      fetch("http://localhost:8000/maildev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailInfos),
      })
        .then((res) => res.json())
        .then((data) => setIsSent(data.sent))
        .then(() => mailSent())
        .catch(function(error) {                        // catch
          console.log('Request failed', error);
        });
    };
    // Fade out success message
    let fadeOut = () => {
      let fadeTarget = document.getElementById("successMessage");
      let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.01;
        } else {
          clearInterval(fadeEffect);
          setIsSent(false);
        }
      }, 10);
    }
    // Call when all is ok after submit
    const mailSent = () => {
      // Reset form fields
      setmailInfos({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      // Reset form states
      setValidFields({
        name: false,
        email: false,
        subject: false,
        message: false
      });
      setTimeout( fadeOut , 5000 ); // Wait 6s and fade out the success message
    }
/* FUNCTION SUBMIT */
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            if( mailInfos.name.length < 1 || mailInfos.email.length < 1 || mailInfos.subject.length < 1 || mailInfos.message.length < 1 ){
             throw new Error("All fields are required!");
            }

            setInvalid(false); // If the form was invalid, now it is good !
            setmailInfos({
              name: escapeHtml(mailInfos.name),
              email: escapeHtml(mailInfos.email),
              subject: escapeHtml(mailInfos.subject),
              message: escapeHtml(mailInfos.message),
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
                    value={mailInfos.name}
                    className={"bg-light rounded-5 " + ( (invalid && (validFields.name === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                    type="text"
                    placeholder="Entrez votre nom"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col sm="12" md="6" className="mt-4">
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    value={mailInfos.email}
                    className={"bg-light rounded-5 " + ( (invalid && (validFields.email === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                    type="email"
                    placeholder="Entrez votre adresse email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject" className="mt-4">
                  <Form.Label>
                    Objet <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="subject"
                    value={mailInfos.subject}
                    className={"bg-light rounded-5 " + ( (invalid && (validFields.subject === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                    type="text"
                    placeholder="Entrez le sujet de votre demande"
                    onChange={handleChange}
                  />
                </Form.Group>
            <Form.Group controlId="formMessage" className="mt-4">
              <Form.Label>
                Message <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="message"
                value={mailInfos.message}
                className={"formMessage bg-light rounded-4 " + ( (invalid && (validFields.message === false)) ? "border border-2 border-danger" : "border border-1 border-primary")}
                as="textarea"
                placeholder="Entrez votre message"
                onChange={handleChange}
              />
            </Form.Group>
            { invalid && (<div className='py-2 mt-3 border border-danger rounded-2 text-center text-danger'>Tous les champs sont obligatoires. Veuillez compléter les informations manquantes.</div>) }
            { isSent && (<div id="successMessage" className='py-2 mt-3 border border-success rounded-2 text-center text-success'>Votre message est envoyé. Nous vous répondrons sous 48h (jours ouvrés).</div>) }
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
  