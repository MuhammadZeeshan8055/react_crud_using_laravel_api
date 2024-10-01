import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AddStudent = () => {

    const [student,setStudent] =useState({
        name:'',
        email:''
    })

    const handleInput = (e) => {
        e.persist();

        setStudent({...student, [e.target.name]: e.target.value});
    }


    const saveStudent = (e) => {
        e.preventDefault();

        const data={
            name: student.name,
            email: student.email
        }

        axios.post('http://127.0.0.1:8000/api/add_worker', data).then(res=>{
            alert(res.data.message);
        });

    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Add Student
                                    <Link to="/Students" className='btn btn-primary float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveStudent}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="name" id="" value={student.name} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" id="" value={student.email} onChange={handleInput} className='form-control' />
                                    </div>
                                    <button type="submit" className='btn btn-primary mt-3'>Add Student</button>
                                </form>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
