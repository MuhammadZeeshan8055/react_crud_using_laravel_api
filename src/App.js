import React from 'react';
import { Link } from 'react-router-dom';
import MyRouter from './router/index';
import Navbar from './pages/Navbar';

const App = () => {
    return (
        <div>
            <Navbar/>

            <MyRouter/>
        </div>
    );
}

export default App;
