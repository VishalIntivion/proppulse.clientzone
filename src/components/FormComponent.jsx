// DynamicForm.js
import React, { useState } from "react";

const FormComponent = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, idx) => (
        <div key={idx} style={{ margin: "1em" }}>
          <label>{field.label}</label>
          <br />
          {field.type === "select" ? (
            <select
              name={field.name}
              onChange={handleChange}
              required={field.required}
            >
              {field.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ margin: "1em" }}
      >
        <button type="submit" className="sub-btn">
          Submit
        </button>
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
