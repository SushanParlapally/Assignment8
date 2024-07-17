import React from 'react';

const Student = ({ name, address, scores }) => {
  return (
    <div>
      <h2>Student Info</h2>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Scores: {scores}</p>
    </div>
  );
};

export default Student;
