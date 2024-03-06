import React, { useState } from 'react';
import axios from 'axios';

const UpdateTaskComponent = () => {
  // State to store the task item and response message
  const [taskItem, setTaskItem] = useState({
    taskId: '',
    taskName: '',
    taskDesc: '',
    status: 0,
    projectId: 0,
    projectDesc: ''
  });
  const [message, setMessage] = useState('');

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskItem({ ...taskItem, [name]: value });
  };

  // Function to handle updating task
  const handleUpdate = async () => {
    try {
      const response = await axios.put('https://127.0.0.1:7290/api/Task/UpdateTask', taskItem);
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <div>
        <label>Task ID:</label>
        <input type="text" name="taskId" value={taskItem.taskId} onChange={handleChange} />
      </div>
      <div>
        <label>Task Name:</label>
        <input type="text" name="taskName" value={taskItem.taskName} onChange={handleChange} />
      </div>
      <div>
        <label>Task Description:</label>
        <input type="text" name="taskDesc" value={taskItem.taskDesc} onChange={handleChange} />
      </div>
      <div>
        <label>Status:</label>
        <input type="number" name="status" value={taskItem.status} onChange={handleChange} />
      </div>
      <div>
        <label>Project ID:</label>
        <input type="number" name="projectId" value={taskItem.projectId} onChange={handleChange} />
      </div>
      <div>
        <label>Project Description:</label>
        <input type="text" name="projectDesc" value={taskItem.projectDesc} onChange={handleChange} />
      </div>
      <button onClick={handleUpdate}>Update Task</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateTaskComponent;
