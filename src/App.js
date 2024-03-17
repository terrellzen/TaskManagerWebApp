import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Import Components to Use
import MainMenu from './components/MainMenu';
import TaskCreation from './components/TaskCreation';
import TaskSearch from './components/TaskSearch';
import TaskView from './components/TaskView';
import TaskUpdate from './components/TaskUpdate';
import TaskRemoval from './components/TaskRemoval';

// Define components for the routes

// function About() {
//   return <h1>About</h1>;
// }

// function Contact() {
//   return <h1>Contact</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Create a navigation menu with links */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Task Manager</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/createtask">Create a Task</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/searchtask">Search Tasks</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/updatetask">Update Tasks</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/deletetask">Delete Task</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/viewtask">View Task</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/createtask" element={<TaskCreation />} />
          <Route path="/searchtask" element={<TaskSearch />} />
          <Route path="/updatetask" element={<TaskUpdate />} />
          <Route path="/deletetask" element={<TaskRemoval />} />
          <Route path="/viewtask" element={<TaskView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
