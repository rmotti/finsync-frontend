import React from 'react';
import Login from '../components/login';
import './globals.css';



const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Login />
        </div>
    );
};

export default App;