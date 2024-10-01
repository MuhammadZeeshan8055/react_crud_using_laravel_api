import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Student from '../pages/Student';
import AddStudent from '../pages/addStudent';
import EditStudent from '../pages/editStudent';




const MyRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/students' element={<Student/>}/>
                <Route path='/addStudent' element={<AddStudent/>}/>
                <Route path='/edit/:id' element={<EditStudent/>}/>
            </Routes>

           
        </div>
    );
}

export default MyRouter;
