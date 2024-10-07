import React, { useState } from 'react';
import Modal from 'react-modal';
import AuthAdmin from './AuthAdmin';

Modal.setAppElement('#root'); // Указывает, где должно открываться модальное окно

function AuthEmployee() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Открыть модальное окно</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Пример модального окна"
      >
        <AuthAdmin />
        <button onClick={() => setModalIsOpen(false)}>Закрыть</button>
      </Modal>
    </div>
  );
}


export default AuthEmployee;