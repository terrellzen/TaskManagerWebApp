import React, { useState } from 'react';
import axios from 'axios';

const TaskComponent = () => {
  const [task, setTask] = useState(null); // State to hold the task data
  const [taskId, setTaskId] = useState(0); // State to hold the task ID input value

  // Function to fetch task data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://127.0.0.1:7290/api/Task/GetTask?taskID=${taskId}`); //Send Data to API Endpoint
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task:', error);
      setTask(null); // Reset task state in case of an error
    }
  };

  // Event handler to initiate the search for the task
  const handleFindClick = () => {
    // Call the fetchData function to fetch task data based on the current taskId state
    fetchData();
  };

  // Render the component
  return (
    <div>
      {/* Input field for entering the task ID */}
      <label htmlFor="taskIdInput">Enter Task ID: </label>
      <input type="number" id="taskIdInput" value={taskId} onChange={(event) => setTaskId(event.target.value)} />
      
      {/* Button to initiate the search */}
      <button onClick={handleFindClick}>Find</button>
      
      {/* Conditional rendering based on whether task data is available */}
      {task ? (
        <div>
          <h2>Task Details</h2>
          <p>Task ID: {task.taskId}</p>
          <p>Name: {task.taskName}</p>
          <p>Description: {task.taskDesc}</p>
          {/* Render other task details as needed */}
        </div>
      ) : (
        <p>No task found with ID {taskId}</p>
      )}
    </div>
  );
};

export default TaskComponent;
