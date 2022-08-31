import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

 const StudentEdit = (props) => {
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [rollno,setRollno] = useState('');
   const navigate = useNavigate();
   const {state} = useLocation();
   //const student = {...state};
   useEffect(()=>{
    setName(state.name);
    setEmail(state.email);
    setRollno(state.rollno);
    
   },[]);
 
 const  handleUpdate = (e)=>{
    e.preventDefault();
    let student = {
        name,email,rollno
    }
    console.log('Update click ', student);
    axios.put('http://localhost:4000/students/update-student/'+state._id,student)
    .then(res=>{
       console.log("updated .........");
    }).catch(err=>{
         console.log(err);
    });
    navigate('/studentlist');

  }
    return (
        <div className="StudentEdit">
        <div className='container'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Student's Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter Name" 
                                value={ name}
                                onChange = {(e)=>setName(e.target.value)}
                                />

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputPassword1">Student' Email</label>
                            <input 
                              type="email" 
                              className="form-control" 
                              id="exampleInputPassword1" 
                              placeholder="Enter email"
                              value={ email}
                              onChange = {(e)=>setEmail(e.target.value)}
                               />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Student's Roll No</label>
                            <input 
                               type="text" 
                               className="form-control" 
                               id="exampleInputEmail1" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter Roll No"
                               value={rollno}
                               onChange = {(e)=>setRollno(e.target.value)}
                                />

                        </div>
                        <button 
                           type="submit" 
                           className="btn btn-primary" 
                           style={{ width: "100%" }}
                           onClick = {(e)=>handleUpdate(e)}
                           >Update Student Record</button>
                    </form>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    </div>
    )
  }

export default StudentEdit