import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const StudentList = (props)=> {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:4000/students/')
            .then(res => {
                setStudents(res.data);
                console.log(res.data);
            }).catch(err => {
                console.log('error', err);
            })
    }
    ,[]); 
   const handleDelete = (e, id, idx) => {
        console.log(id);
        let tmp = students;
        setStudents( [...tmp.slice(0, idx), ...tmp.slice(idx + 1)]);
        axios.delete('http://localhost:4000/students/delete-student/' + id)
            .then(res => {
                console.log('deleted ..........');
            }).catch(err => {
                console.log(err);
            });
    }
   const  handleEdit = (e, id, student) => {
        console.log(student);
        navigate('/editstudent', {state: student});
    }
    
        return (
            <div className="StudentList">
                <div className='container'>
                    <div className="row">
                        <div className='col-2'></div>
                        <div className='col-8'>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Roll No</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student, idx) => {
                                        return (
                                            <tr key={student._id}>
                                                <th scope="row">{idx + 1}</th>
                                                <td>{student.name} </td>
                                                <td>{student.email} </td>
                                                <td>{student.rollno}</td>
                                                <td>
                                                    <div className='btnContainer'>
                                    
                                                            <button
                                                                type="button"
                                                                className="btn btn-info mx-2"
                                                                onClick={(e) =>handleEdit(e, student._id, student)}
                                                            >Edit</button>
                                                       
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning"
                                                            onClick={(e) =>handleDelete(e, student._id, idx)}
                                                        >Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
        )
    }


export default StudentList