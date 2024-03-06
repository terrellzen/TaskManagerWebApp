import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    TaskName: '',
    TaskDesc: '',
    Status: 0,
    ProjectId: 0,
    ProjectDesc: ''
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData state with the new value
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert form data to JSON
      const jsonData = JSON.stringify(formData);

      // Send a POST request with JSON data in the request body
      const response = await axios.post('https://127.0.0.1:7290/api/Task/PostTask', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data); // Log the response from the API
    } catch (error) {
      console.error('Error adding task:', error); // Log any errors that occur
    }
  };

  return (
    // Form component
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <label>
        Task Name:
        <input type="text" name="TaskName" value={formData.TaskName} onChange={handleChange} />
      </label>
      <label>
        Task Description:
        <textarea name="TaskDesc" value={formData.TaskDesc} onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="number" name="Status" value={formData.Status} onChange={handleChange} />
      </label>
      <label>
        Project ID:
        <input type="number" name="ProjectId" value={formData.ProjectId} onChange={handleChange} />
      </label>
      <label>
        Project Name:
        <input type="text" name="ProjectName" value={formData.ProjectDesc} onChange={handleChange} />
      </label>
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
