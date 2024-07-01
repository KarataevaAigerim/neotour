import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import styles from './info.module.scss';
import ConfirmationModal from '../confirmation/ConfirmationModal';

const InfoModal = ({ tourId, tourName }) => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [people, setPeople] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleShowModal = async () => {
    setShow(false); 
    const result = await createBooking(); 
    setConfirmationMessage(result.message); 
    setShowModal(true); 
  };

  const handlePhoneChange = (phone) => {
    if (!phone.startsWith('+')) {
      phone = `+${phone}`;
    }
    setPhone(phone);
  };

  useEffect(() => {
    // Validate phone number format: it should start with + and be 9 or 11 digits long
    const isValidPhone = phone.startsWith('+') && (phone.length === 10 || phone.length === 12);
    setIsFormValid(isValidPhone && people > 0 && tourId !== '');
  }, [phone, people, tourId]);

  
  const handleCloseModal = () => setShowModal(false);

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

  const validateForm = useCallback(() => {
    if (phone && comments && people > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [phone, comments, people]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const createBooking = async () => {
    try {
      const payload = {
        tour: tourId,
        phone_number: phone,
        comment: comments,
        number_of_people: people
      };
  
      console.log('Request payload:', payload); // Add this log to inspect the payload, это для теста создания букингов
  
      const response = await fetch('https://muha-backender.org.kg/create-booking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': 'AFEE4WYMVqa4vxhZicWSJKEKMHla8okfb68NG8CAE3JWRc4W9iLaAiI7ZbIeRkaI',
          'accept': '*/*'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response status:', response.status);
        console.error('Response text:', errorText);
        throw new Error('Failed to create booking');
      }
  
      const result = await response.json();
      console.log('Booking created successfully:', result);
      return { success: true, message: 'Your trip has been booked!' };
    } catch (error) {
      console.error('Error creating booking:', error);
      return { success: false, message: "Your tour couldn't be booked" };
    }
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
        centered={true}
        dialogClassName={styles.custom_modal}
        contentClassName={styles.custom_modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Tour: {tourName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To submit an application for a tour, please fill out the form below. We will be in touch with you shortly.</p>
          <Form>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label className={styles.phone_label}>Phone Number</Form.Label>
              <PhoneInput
                country={'kg'}
                value={phone}
                // onChange={(phone) => setPhone(phone)}
                region={'asia'}
                preferredCountries={['kg', 'kz', 'ru']}
                countryCodeEditable={false}
                onChange={handlePhoneChange}
                inputClass={styles.phone_input}
                buttonClass={styles.phone_btn}
              />
            </Form.Group>
            <Form.Group controlId="formComments">
              <Form.Label className={styles.comments_label}>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className={styles.comments_input}
              />
            </Form.Group>
            <Form.Group controlId="formPeople">
              <Form.Label className={styles.ppl_label}>Number of People</Form.Label>
              <div className={styles.people_control}>
                <Button
                  variant="secondary"
                  onClick={() => handlePeopleChange(-1)}
                  disabled={people <= 1}
                  className={styles.people_btn}
                >
                  -
                </Button>
                <span>{people}</span>
                <Button
                  variant="secondary" 
                  onClick={() => handlePeopleChange(1)}
                  disabled={people >= 6}
                  className={styles.people_btn}
                >
                  +
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleShowModal}
            className={styles.submit_btn}
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <ConfirmationModal
      show={showModal}
      handleClose={handleCloseModal}
      message={confirmationMessage}
      />
      
    </>
  );
};

export default InfoModal;