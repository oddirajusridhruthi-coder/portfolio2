import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Profile</h1>
      <p>My student profile page</p>
      <div className="flex-box">
        <div>
import rap from "./rap.jpg";
<img src={rap} alt="Rapunzel" />


        </div>

        <table border="1">
          <tr>
            <th>Name</th>
            <td>Dhruthi</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>18</td>
          </tr>
          <tr>
            <th>Course</th>
            <td>B.Tech</td>
          </tr>
          <tr>
            <th>College</th>
            <td>KLU Hyderabad</td>
          </tr>
        </table>

      </div>
      <div className="form-section">
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Enter Name" /><br /><br />
          <input type="email" placeholder="Enter Email" /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default App;
