import React, { useState } from 'react';
import axios from 'axios';

const DeleteTaskComponent = () => {
  // State to store the task ID and response message
  const [taskId, setTaskId] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle the deletion of a task
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://127.0.0.1:7290/api/Task/DeleteTask?taskId=${taskId}`);
      setMessage(response.data);
    } catch (error) {
      // Check if error.response exists before accessing its data property
      if (error.response && error.response.data) {
        setMessage(error.response.data);
      } else {
        // If error.response is undefined or error.response.data is undefined, set a generic error message
        setMessage('An error occurred while processing your request.');
      }
    }
  };
  

  return (
    <div>
      <h2>Delete Task</h2>
      {/* Input field to enter the task ID */}
      <input
        type="text"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      {/* Button to trigger the deletion */}
      <button onClick={handleDelete}>Delete Task</button>
      {/* Display the response message, if any */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteTaskComponent;
