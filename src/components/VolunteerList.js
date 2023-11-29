// src/components/VolunteerList.js
import React from 'react';

const VolunteerList = ({ volunteers }) => {
  return (
    <div>
      <h2>Registered Volunteers</h2>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer.id}>
            <strong>Name:</strong> {volunteer.name},{' '}
            <strong>Contact:</strong> {volunteer.contact},{' '}
            <strong>Location:</strong> {volunteer.location},{' '}
            <strong>Languages:</strong> {volunteer.languages.join(', ')},{' '}
            <strong>Availability:</strong> {volunteer.availability.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerList;
