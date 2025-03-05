//Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import PMSlogo3 from '../../assets/PMSlogo3.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import Patient from "../Patient/Patient";

const Dashboard = () => {
 

  return (
    
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li><i className="fa-solid fa-gauge"></i> Dashboard</li>
          <li><i className="fa-solid fa-list"></i> Patients List</li>
          <li><i className="fa-solid fa-table-cells"></i> Category</li>
          <li><i className="fa-solid fa-user"></i> Profile</li>
          <li><i className="fa-solid fa-power-off"></i> Logout</li>
        </ul>
      </aside>

      <div className="content">
        <div className="logo-container">
          <img src={PMSlogo3} alt="PMS Logo" />
          <h1>Patient Management System</h1>
        </div>
        
        {/* Added elements from the image */}
        <div className="patient-management">
          
          <h1 className="patient-list">Patients List</h1>
          {/* <button className="add-patient-button">Add patient</button> */}
          {/* <Link to="/dashboard/add_patient" input type="submit" className="add-patient-button" >Add Patient</Link> */}
          <div>
            <Patient/>
          </div>
        </div>
      </div>

    </div>

   
  );
};

export default Dashboard;
