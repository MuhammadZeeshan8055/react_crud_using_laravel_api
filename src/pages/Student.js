import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/workers')
            .then(res => {
                setStudents(res.data); // Store the data in state
                console.log(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    const deleteStudent = (e, id) => {
        e.preventDefault();

        axios.delete(`http://127.0.0.1:8000/api/delete/${id}`).then(res=>{
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
                                <h4>Students
                                    <Link to="/addStudent" className='btn btn-primary float-end'>Add Student</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td><Link to={`/edit/${student.id}`} className='btn btn-primary'>Edit</Link></td>
                                                <td><button type='button' onClick={(e)=>deleteStudent(e, student.id)} className='btn btn-danger'>Delete</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;
