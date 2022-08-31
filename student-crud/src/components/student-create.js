import React, { Component } from 'react'
import axios from 'axios'

export class StudentCreate extends Component {
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

        this.state = {
            name : '',
            email : '',
            rollno : ''
        }
    }

    handleInputChange = (e,type)=>{
        if(type == 'name'){
            this.setState({name: e.target.value})
        }
        if(type == 'email'){
            this.setState({email: e.target.value})
        }
        if(type == 'rollno'){
            this.setState({rollno: e.target.value})
        }
       // console.log(e.target.value,type);

    }
    handleCreate = (e)=>{
        e.preventDefault();
        let student = {
            name : this.state.name,
            email : this.state.email,
            rollno : this.state.rollno,
        }
        axios.post('http://localhost:4000/students/create-student', student)
        .then(res => console.log(res.data));
        console.log(student);
        this.setState({name:'',email:'',rollno:''});
    }
    render() {
        return (
            <div className="StudentCreate">
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
                                        value={this.state.name}
                                        onChange={(event)=> this.handleInputChange(event,'name')}
                                        />

                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="exampleInputPassword1">Student' Email</label>
                                    <input  
                                       type="email" 
                                       className="form-control" 
                                       id="exampleInputPassword1" 
                                       placeholder="Enter email"
                                       value={this.state.email}
                                       onChange={(event)=> this.handleInputChange(event,'email')}
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
                                       value={this.state.rollno}
                                       onChange={(event)=> this.handleInputChange(event,'rollno')}
                                        />

                                </div>
                                <button 
                                   type="submit" 
                                   className="btn btn-primary" 
                                   style={{ width: "100%" }}
                                   onClick = {this.handleCreate}
                                   >Create Student Record</button>
                            </form>
                        </div>
                        <div className='col-3'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentCreate