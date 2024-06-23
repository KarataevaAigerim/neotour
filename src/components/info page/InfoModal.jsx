import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-input-2';
import styles from './info.module.scss';

const InfoModal = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [people, setPeople] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePeopleChange = (delta) => {
    setPeople((prevPeople) => {
      const newPeople = prevPeople + delta;
      if (newPeople < 1) return 1;
      if (newPeople > 6) return 6;
      return newPeople;
    });
  };

  return (
    <>
      <div onClick={handleShow} className={styles.btn}>
        <button className={styles.book_btn}>Book Now</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName={styles.custom_modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To submit an application for a tour, please fill out the form below. We will be in touch with you shortly. </p>
          <Form>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                country={'kg'}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                region ={'asia'}
                preferredCountries={['kg', 'kz', 'ru']}
              />
            </Form.Group>
            <Form.Group controlId="formComments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className={styles.comments_input}
              />
            </Form.Group>
            <Form.Group controlId="formPeople">
              <Form.Label>Number of People</Form.Label>
              <div className={styles.people_control}>
                <Button
                  variant="secondary"
                  onClick={() => handlePeopleChange(-1)}
                  disabled={people <= 1}
                >
                  -
                </Button>
                <span>{people}</span>
                <Button
                  variant="secondary"
                  onClick={() => handlePeopleChange(1)}
                  disabled={people >= 6}
                >
                  +
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className={styles.submit_btn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoModal;