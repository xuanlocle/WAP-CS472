import './App.css';
import HeaderComponent from './components/header.js';
import FooterComponent from './components/footer.js';
import CreateStudent from './components/createStudent.js';
import AllStudent from './components/allStudents.js'
import { useState, useEffect } from 'react';

function App() {

  const [students, setStudents] = useState();


  useEffect(() => {
    getStudents();
  }, [])

  async function getStudents() {
    console.log('fetch');
    const res = await fetch('http://localhost:3000/api/v1/students')
    const data = await res.json();
    setStudents(data);
  };

  return (
    <>
      <HeaderComponent />
      <CreateStudent onStudentCreated={getStudents} />
      <AllStudent students={students} onStudentDeleted={getStudents} />
      <FooterComponent />
    </>
  );
}

export default App;
