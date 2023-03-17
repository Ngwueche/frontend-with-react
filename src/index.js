import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

// import "bootstrap/dist/js/bootstrap.bundle.min";// Bootstrap Bundle JS
import "./assets/stylesheet/app.css";
import "./assets/stylesheet/app.responsive.css";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

