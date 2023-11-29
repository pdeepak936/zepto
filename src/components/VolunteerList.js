import React, { useEffect, useState } from 'react';
import Header from './Header';
import Modal from 'react-modal';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Corrected declaration

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tfibackend-9apo.onrender.com/api/volunteer/registrations");
        const data = await response.json();
        setVolunteers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSuccessButtonClick = async () => {
    try {
      const response = await fetch("https://tfibackend-9apo.onrender.com/api/volunteer/allocation", {
        method: 'POST',
      });

      if (response.status === 201) {
        console.log("hello");
        setModalIsOpen(true);
      } else {
        console.error('Error in API call:', response.statusText);
      }
    } catch (error) {
      console.error('Error in API call:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <h2>Registered Volunteers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Languages</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <tr key={volunteer.id}>
                <td>{volunteer.name}</td>
                <td>{volunteer.contact}</td>
                <td>{volunteer.location}</td>
                <td>{volunteer.languages.join(', ')}</td>
                <td>{volunteer.availability.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ justifyContent: "center", display: "flex" }}>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSuccessButtonClick}
          >
            Allocat
          </button>
        </div>

        {/* Modal rendering code */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // overlay background color with transparency
            },
            content: {
              width: '25%', // or whatever width you prefer
              height: '25%', // or whatever height you prefer
              margin: 'auto', // to center the modal
            },
          }}
        >
          
          <p>Volunteer allocated successfully</p>
          <button className='mt-5' onClick={() => setModalIsOpen(false)}>Ok</button>
        </Modal>
      </div>
    </div>
  );
};

export default VolunteerList;
