import React, { useState } from "react";

const VolunteerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    languages: [],
    availability: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, [e.target.name]: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/volunteer/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Volunteer registered:", data);
      // Assuming onSubmit triggers some callback to refresh the list of volunteers
      onSubmit(formData);
    } catch (error) {
      console.error("Error registering volunteer:", error);
    }
  };

  return (
    <div className="container mt-3 containerborder center">
      <h2 className="mb-4 center">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="languages">Languages:</label>
          </div>
          <div>
          <select class="selectpicker" multiple data-live-search="true">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* <div className="btn-group dropend">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Languages
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <input
                  type="checkbox"
                  id="hindiCheckbox"
                  value="Hindi"
                  onChange={handleSelectChange}
                  checked={formData.languages.includes("Hindi")}
                />
                <label htmlFor="hindiCheckbox"> Hindi</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="englishCheckbox"
                  value="English"
                  onChange={handleSelectChange}
                  checked={formData.languages.includes("English")}
                />
                <label htmlFor="englishCheckbox"> English</label>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <div className="btn-group dropend">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Availability
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <input
                  type="checkbox"
                  id="sundayCheckbox"
                  value="Sunday"
                  onChange={handleSelectChange}
                  checked={formData.availability.includes("Sunday")}
                />
                <label htmlFor="sundayCheckbox"> Sunday</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="mondayCheckbox"
                  value="Monday"
                  onChange={handleSelectChange}
                  checked={formData.availability.includes("Monday")}
                />
                <label htmlFor="mondayCheckbox"> Monday</label>
              </li>
              {/* Add more days as needed */}
            </ul>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
