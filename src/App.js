// // src/App.js
// import React, { useState, useEffect } from 'react';
// import VolunteerForm from './components/VolunteerForm';
// import VolunteerList from './components/VolunteerList';

// const App = () => {
//   const [volunteers, setVolunteers] = useState([]);

//   const fetchVolunteers = async () => {
//     // Fetch volunteers from your backend API
//     try {
//       const response = await fetch('http://localhost:8000/api/volunteer/registrations');
//       const data = await response.json();
//       setVolunteers(data);
//     } catch (error) {
//       console.error('Error fetching volunteers:', error);
//     }
//   };

//   const handleVolunteerSubmit = async (formData) => {
//     // Send volunteer data to your backend API for registration
//     try {
//       const response = await fetch('http://localhost:8000/api/volunteer/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log('Volunteer registered:', data);
//       // Refresh the list of volunteers after registration
//       fetchVolunteers();
//     } catch (error) {
//       console.error('Error registering volunteer:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch volunteers when the component mounts
//     fetchVolunteers();
//   }, []);

//   return (
//     <div>
//       <VolunteerForm onSubmit={handleVolunteerSubmit} />
//       <VolunteerList volunteers={volunteers} />
//     </div>
//   );
// };

// export default App;


// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VolunteerForm from './components/VolunteerForm';
import VolunteerList from './components/VolunteerList';
import './App.css';

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Teach For India
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer-form">
                  Volunteer Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer-list">
                  Volunteer List
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/volunteer-form" element={<VolunteerForm />} />
          <Route path="/volunteer-list" element={<VolunteerList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
