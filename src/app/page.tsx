import React from 'react';
import Login from './auth/login/page';
import './globals.css';



const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Login />
        </div>
    );
};

export default App;