import React from 'react';
import CSVReader from 'react-csv-reader';
import axios from 'axios';

const CSVUpload = () => {
  const handleForce = (data, fileInfo) => {
    data.forEach(async (student) => {
      await axios.post('http://localhost:5000/students', {
        id: student[0],
        name: student[1],
        email: student[2],
        course: student[3]
      });
    });
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <CSVReader
        cssClass="csv-reader-input"
        label="Select CSV with student data"
        onFileLoaded={handleForce}
        onError={console.error}
        inputId="ObiWan"
        inputStyle={{ color: 'red' }}
      />
    </div>
  );
};

export default CSVUpload;
