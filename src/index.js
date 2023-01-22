import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PasswordContextprovider } from './Context/PasswordContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordContextprovider>
      <App />
    </PasswordContextprovider>
  </React.StrictMode>
);
