import React from 'react';
import CSVUpload from './CSVUpload';
import StudentList from './StudentList';

const Dashboard = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CSVUpload />
      <StudentList />
    </div>
  );
};

export default Dashboard;
