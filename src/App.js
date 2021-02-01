import React from "react";
import "./App.css";
import icon from "./icon.png";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <a href="#">
          <img src={icon} alt="icon" />
        </a>
        <h1>Social-Network.samurai</h1>
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Setting</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1255&q=80" alt="start-image" />
        </div>
        <div>ava + desc</div>
        <div>
          My posts
          <div>New posts</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
        <div>ava + desc</div>
      </div>
    </div>
  );
}

export default App;
