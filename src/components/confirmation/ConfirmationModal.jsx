import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './confirmation.module.scss';

const ConfirmationModal = ({ show, handleClose, message }) => {
  return (
    <Modal 
      show={show}
      onHide={handleClose}
      backdrop="static"
      centered={true}
      contentClassName={styles.custom_modal}>
      <Modal.Body className={styles.text}>{message}</Modal.Body>
      <Button variant="primary" onClick={handleClose} className={styles.submit_btn}>
        Ok
      </Button>
    </Modal>
  );
};

export default ConfirmationModal;