import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     const response = await axios.get('http://localhost:5000/students');
  //     setStudents(response.data);
  //   };
  //   fetchStudents();
  // }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = async (id, updatedData) => {
    await axios.put(`http://localhost:5000/students/${id}`, updatedData);
    setStudents(students.map(student => student.id === id ? { ...student, ...updatedData } : student));
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.email}
            <button onClick={() => handleEdit(student.id, { name: 'Updated Name' })}>Edit</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
