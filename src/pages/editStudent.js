import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link,useParams  } from 'react-router-dom';


const EditStudent = () => {

    
    let { id } = useParams();

    const [student,setStudent] =useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/search/${id}`)
            .then(res => {
                setStudent(res.data); // Store the data in state
                console.log(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, [id]);

    const handleInput = (e) => {
        e.persist();

        setStudent({...student, [e.target.name]: e.target.value});
    }


    const updateStudent = (e) => {
        e.preventDefault();

        const data={
            name: student.name,
            email: student.email
        }

        axios.put(`http://127.0.0.1:8000/api/update/${id}`, data).then(res=>{
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
                                    Edit Student
                                    <Link to="/Students" className='btn btn-primary float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateStudent}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="name" id="" value={student.name} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" id="" value={student.email} onChange={handleInput} className='form-control' />
                                    </div>
                                    <button type="submit" className='btn btn-primary mt-3'>Update</button>
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

export default EditStudent;
