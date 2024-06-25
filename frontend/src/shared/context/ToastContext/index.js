import { createContext, useCallback, useContext } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import { v4 as uuid } from 'uuid';

import { Container } from './styles';
import './styles.css';

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const addToast = useCallback(message => {
    const { type, title, description } = message;

    const Message = () => (
      <Container>
        <strong>{title}</strong>
        {description && <span>{description}</span>}
      </Container>
    );

    const icons = {
      error: '☠️',
      success: '🥳',
      warn: '👀',
      info: '😬',
    };

    toast[type](<Message />, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: uuid(),
      icon: icons[type],
    });
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastContainer
        autoClose={5000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
