// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que App sea tu componente principal
import './App.css'; // Importa tu hoja de estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
