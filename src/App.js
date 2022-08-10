import { React, Router } from "react";
import Navbar from "./components/Navbar";
import image from "./assets/buddy.png";
import "./App.css";

function App() {
  return (
    /*<Router>
    <Routes>
    <Route path="/queries" elememnt={queries}></Route>
    </Routes>*/
    <div>
      <div className="details">
        <h2>Rohit kumar</h2>
        <p>Rohitkumar@16826gmail.com</p>
        <div className="queries">
          <p>Queries</p>
          <p>blogs</p>
          <p>news and events</p>
          <p>Faculty</p>
          <p>user management</p>
        </div>
      </div>
      <div className="blog d-flex">
        <h1>Blogs</h1>
        <button className="btn btn-primary">Add blog</button>
      </div>
      <div className="tags d-flex-row">
        <p>TAG0503</p>
        <p>How to get started with music production</p>
        <p>How to get started with music production</p>
        <p>How to get started with music production</p>
      </div>
    </div>
  );
}

export default App;
