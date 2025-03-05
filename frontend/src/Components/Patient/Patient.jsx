import React, { useEffect, useState } from 'react';
import "./Patient.css";
import axios from 'axios';
import { Link } from 'react-router-dom';


function Patient() {
    const [patients, setPatients] = useState([]);

    // Fetch patients from API
    useEffect(() => {
        axios.get('http://localhost:5000/patients')
            .then(res => setPatients(res.data))
            .catch(err => console.error("Error fetching patients:", err));
    }, []);

    // Add new patient
    const addPatient = () => {
        const newPatient = { Name: "John Doe", Email: "johndoe@example.com" };

        axios.post('http://localhost:5000/patients', newPatient)
            .then(res => {
                setPatients([...patients, { ...newPatient, id: res.data.id }]);
            })
            .catch(err => console.error("Error adding patient:", err));
    };

    return (
        <div className="patient-container">
            <div className="table-wrapper">
                <Link to="/create" className="add-button" onClick={addPatient}>Add +</Link>
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((data, i) => (
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                    <td className="action-buttons">
                                        <button className="update-button">Update</button>
                                        <button className="delete-button">Delete</button>
                                     </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Patient;
