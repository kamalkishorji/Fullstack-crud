import { Route, Routes } from 'react-router-dom';
import StudentCreate from './components/student-create';
import StudentEdit from './components/student-edit';
import StudentList from './components/student-list';
import HeaderComponent from './components/header';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
        <Route path='/' element = {<StudentCreate {...props}/>}/>
        <Route path='/studentlist' element = {<StudentList {...props}/>}/>
        <Route path='/editstudent/' element = {<StudentEdit {...props}/>}/>
      </Routes>
    </div>
  );
}

export default App;
