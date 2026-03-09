import { Button, Col, Form, Row, Container, Spinner } from 'react-bootstrap';
import classes from './Contact.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';
import LetsTalkIcon from '../../assets/LetsTalkIcon';

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [validated, setValidated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const captchaToken = recaptchaRef.current.getValue();

    if (f.checkValidity() === false || !captchaToken) {
      if (!captchaToken) toast.error("Please verify you are not a robot");
      e.stopPropagation();
      setValidated(true);
    } else {
      setIsSending(true);

      emailjs.sendForm(
        import.meta.env.VITE_MAILJS_SERVICE_ID,
        import.meta.env.VITE_MAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_MAILJS_PUBLIC_KEY }
      )
        .then(() => {
          toast.success('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
          setValidated(false);
          recaptchaRef.current.reset();
        })
        .catch((error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <Container id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      <Row className='py-5'>
        <Col>
          <div className={classes['section-title-container']}>
            <div className={classes['accent-line']}></div>
            <h2 className={classes['section-title']}>Contact</h2>
          </div>
        </Col>
      </Row>

      <Row className='py-5 gy-5 align-items-stretch'>
        <Col xs={12} md={6}>
          <div className='d-flex flex-column justify-content-between align-items-center text-center text-md-start h-100'>
            <h3 className={classes['contact-title']}>Do you have a project?</h3>
            <div
              className='align-self-center'
            >
              <LetsTalkIcon
                size='160'
                color={`var(--accent)`}
              />
            </div>
            <div className="my-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                theme="dark"
              />
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Form className='d-flex flex-column justify-content-between' ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">Enter your name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">Enter a valid email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                as="textarea"
                rows={4}
                name="message"
                placeholder="How can I help you?"
                value={form.message}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">Enter a short message.</Form.Control.Feedback>
            </Form.Group>

            <Button
              type="submit"
              className="mt-4 align-self-end w-50"
              variant='outline-light'
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container >
  );
};

export default Contact;