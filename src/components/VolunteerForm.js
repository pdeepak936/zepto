import React, { useEffect, useRef } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import Header from "./Header";
const MultiSelectDropdown = () => {
  const selectRef = useRef(null);
  const selectedRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      contact: e.target.contact.value,
      location: e.target.location.value,
      languages: selectRef.current.value,
      availability: selectedRef.current.value,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      redirect: 'follow',
    };

    try {
      const response = await fetch("https://tfibackend-9apo.onrender.com/api/volunteer/register", requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const choices = new Choices(selectRef.current, {
      removeItemButton: true,
    });

    const choice = new Choices(selectedRef.current, {
      removeItemButton: true,
    });

    return () => {
      choices.destroy();
      choice.destroy();
    };
  }, []);

  return (
    <>
    <Header/>
     <div className="container mt-3 containerborder center">
      <h2 className="mb-4 mt-3 center">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            required
          />
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="languages">Languages:</label>
          </div>
          <select
            ref={selectRef}
            className="form-control choices-multiple"
            multiple
          >
            <option></option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Kanada">Kanada</option>
            <option value="Tamil">Tamil</option>
            <option value="Gujrati">Gujrati</option>
            <option value="Telgu">Telgu</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <select
            ref={selectedRef}
            className="form-control choices-multiple"
            multiple
          >
            <option></option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Submit
        </button>
      </form>
    </div></>
   
  );
};

export default MultiSelectDropdown;
