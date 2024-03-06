import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskComponent = () => {
  const [task, setTask] = useState(null); // State to hold the task data
  const [taskId, setTaskId] = useState(0); // State to hold the task ID input value

  // Function to fetch task data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://127.0.0.1:7290/api/Task/GetTask?taskID=${taskId}`);
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  useEffect(() => {
    // Call the fetchData function when the component mounts or when taskId changes
    fetchData();
  }, [taskId]); // Fetch data whenever task ID changes

  // Event handler to update the taskId state when the input value changes
  const handleTaskIdChange = (event) => {
    setTaskId(event.target.value);
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
      <input type="number" id="taskIdInput" value={taskId} onChange={handleTaskIdChange} />
      
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
