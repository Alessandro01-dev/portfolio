import { Button, Col, Form, Row, Container, Spinner } from 'react-bootstrap';
import classes from './Contact.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';
import LetsTalkIcon from '../../assets/LetsTalkIcon';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { content, language } = useLanguage()

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
      if (!captchaToken) toast.error(content.contact.notifications.captchaError);
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
          toast.success(content.contact.notifications.success);
          setForm({ name: '', email: '', message: '' });
          setValidated(false);
          recaptchaRef.current.reset();
        })
        .catch((error) => {
          toast.error(content.contact.notifications.error);
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
            <h2 className={classes['section-title']}>{content.contact.sectionTitle}</h2>
          </div>
        </Col>
      </Row>

      <Row className='py-5 gy-5 align-items-stretch'>
        <Col xs={12} md={6}>
          <div className='d-flex flex-column justify-content-between align-items-center text-center text-md-start h-100'>
            <h3 className={classes['contact-title']}>{content.contact.question}</h3>
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
                hl={language}
              />
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Form className='d-flex flex-column justify-content-between' ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{content.contact.form.nameLabel}</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                name="name"
                type="text"
                placeholder={content.contact.form.namePlaceholder}
                value={form.name}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">{content.contact.form.nameError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{content.contact.form.emailLabel}</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                name="email"
                type="email"
                placeholder={content.contact.form.emailPlaceholder}
                value={form.email}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">{content.contact.form.emailError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{content.contact.form.messageLabel}</Form.Label>
              <Form.Control
                className={classes['custom-input']}
                as="textarea"
                rows={4}
                name="message"
                placeholder={content.contact.form.messagePlaceholder}
                value={form.message}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">{content.contact.form.messageError}</Form.Control.Feedback>
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
                  {content.contact.form.sendingBtn}
                </>
              ) : (
                content.contact.form.submitBtn
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container >
  );
};

export default Contact;