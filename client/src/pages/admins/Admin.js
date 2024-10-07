import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/global.css'
import CreateNews from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/AdminsControls/CreateNews';
import CreateFund from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/AdminsControls/CreateFund';

Modal.setAppElement('#root');

function Admin() {
  const [createNewsModalIsOpen, setCreateNewsModalIsOpen] = useState(false);
  const [createFundModalIsOpen, setCreateFundModalIsOpen] = useState(false);
  const [regEmployeeModalIsOpen, setRegEmployeeModalIsOpen] = useState(false);

  return (
    <main className='panel'>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <Modal
        isOpen={createNewsModalIsOpen}
        onRequestClose={() => setCreateNewsModalIsOpen(false)}
        contentLabel="Модальное окно для новости"
        className="modal"
      >
        <CreateNews />
        <button onClick={() => setCreateNewsModalIsOpen(false)}>Закрыть</button>
      </Modal>

      <button className='auth__button' onClick={() => setCreateFundModalIsOpen(true)}>Объявить сбор</button>
      <Modal
        isOpen={createFundModalIsOpen}
        onRequestClose={() => setCreateFundModalIsOpen(false)}
        contentLabel="Модальное окно для сбора"
      >
        <CreateFund />
        <button onClick={() => setCreateFundModalIsOpen(false)}>Закрыть</button>
      </Modal>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
      <button className='auth__button' onClick={() => setCreateNewsModalIsOpen(true)}>Опубликовать новость</button>
    </main>
  );
}

export default Admin;
