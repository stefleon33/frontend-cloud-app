import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your App component
import './index.css'; // Optional: For global CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // Renders the app into the #root div
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
