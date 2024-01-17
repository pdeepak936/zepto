import React, { useEffect, useRef } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import Header from "./Header";
import data from './data.json';  // Import the JSON data

const MultiSelectDropdown = () => {
  const selectRef = useRef(null);
  const selectedRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: selectRef.current.value
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      redirect: 'follow',
    };

  };

  useEffect(() => {
    if (selectRef.current) {
      const choices = new Choices(selectRef.current, {
        removeItemButton: true,
      });
  
      return () => {
        choices.destroy();
      };
    }
  }, [selectRef]);
  

  // ...

return (
  <>
    <div className="container mt-3 containerborder center">
      <h2 className="mb-4 mt-3 center" style={{color: 'Blue', alignText: 'center'}}>Pick Users</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="languages">Add new user...:</label>
          </div>
          <select
            ref={selectRef}
            className="form-control choices-multiple"
            multiple
          >
            <option></option>
            {data.map((item, index) => (
              <option key={index} value={item.name}>
                {`${item.name} - ${item.email_id}`}
                {item.photo_link && (
                  <img
                    src={item.photo_link}
                    alt={`Preview for ${item.name}`}
                    style={{ width: '50px', height: '50px', marginLeft: '10px' }}
                  />
                )}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Submit
        </button>
      </form>
    </div>
  </>
);
// ...

};

export default MultiSelectDropdown;
