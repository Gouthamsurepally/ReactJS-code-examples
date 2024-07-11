import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import reportWebVitals from './reportWebVitals';
import { Operations } from './components/CRUD/CRUD2';
import { CRUDoperations } from './components/CRUD/CRUD1';
import { TodoApp } from './components/APIs with backend/todo-app';
import { CompleteCRUD, Operations1 } from './components/CRUD/CRUD3';
import { Coding1 } from './components/coding QA/coding1';
import { Coding2 } from './components/coding QA/coding2';
import { Fstore } from './components/API\'s/fstore';
import { Swapping } from './components/coding QA/coding3';
import { Operations2 } from './components/CRUD/CRUD4';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Swapping/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
