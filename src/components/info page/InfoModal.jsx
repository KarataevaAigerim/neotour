import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './info.module.scss';

function InfoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      >
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To submit an application for a tour, please fill out the form below. We will be in touch with you shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoModal;