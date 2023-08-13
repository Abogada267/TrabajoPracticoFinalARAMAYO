/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(<App/>);



