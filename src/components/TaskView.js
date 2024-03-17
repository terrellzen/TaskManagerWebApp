import React, { useState } from 'react';
import axios from 'axios';

const TaskComponent = () => {
    const [projectId, setProjectId] = useState('');
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const handleProjectIdChange = (e) => {
        setProjectId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://127.0.0.1:7290/api/Task/GetTasks?projectID=${projectId}`);
            setTasks(response.data);
            setError('');
        } catch (error) {
            if (error.response.status === 404) {
                setError('No tasks found for the provided project ID.');
            } else {
                setError('An error occurred while fetching tasks.');
            }
            setTasks([]);
        }
    };

    return (
        <div>
            <h2>Enter Project ID to Retrieve Tasks</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Project ID:
                    <input type="text" value={projectId} onChange={handleProjectIdChange} />
                </label>
                <button type="submit">Retrieve Tasks</button>
            </form>
            {error && <p>{error}</p>}
            {tasks.length > 0 && (
                <div>
                    <h3>Tasks:</h3>
                    <ul>
                        {tasks.map(task => (
                            <li key={task.taskId}>
                                <strong>Task ID:</strong> {task.taskId}<br />
                                <strong>Task Name:</strong> {task.taskName}<br />
                                <strong>Task Description:</strong> {task.taskDesc}<br />
                                <strong>Status:</strong> {task.status}<br />
                                <strong>Created:</strong> {new Date(task.created).toLocaleString()}<br />
                                <strong>Updated:</strong> {new Date(task.updated).toLocaleString()}<br />
                                <strong>Project ID:</strong> {task.projectId}<br />
                                <strong>Project Description:</strong> {task.projectDesc}<br />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskComponent;
