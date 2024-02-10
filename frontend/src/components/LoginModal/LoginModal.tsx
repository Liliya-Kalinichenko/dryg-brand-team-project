/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import './LoginModal.scss';

import { LoginForm } from '../LoginForm/LoginForm';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { Link } from 'react-router-dom';

type Props = {
  onClose: (value: boolean) => void;
};

const LoginModal: React.FC<Props> = React.memo(({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="LoginModal">
      <div className="LoginModal__header">
        <h2 className="LoginModal__title">Login</h2>
        <button
          type="button"
          className="LoginModal__button"
          onClick={() => onClose(false)}
        >
          <div className="icon icon--close" />
        </button>
      </div>

      <LoginForm />

      <Link 
        to="account/create"
        className="LoginModal__create" 
        onClick={() => onClose(false)}
      >
        Create account
      </Link>
    </div>
  );
});

export default ModalWrapper(LoginModal);
