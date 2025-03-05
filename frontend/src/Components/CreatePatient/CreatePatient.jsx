import React, { useState } from 'react';
import "./CreatePatient.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePatient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/patients', { name, email })
            .then(res => {
                console.log("Patient added:", res);
                navigate('/dashboard');  // Redirect after success
            })
            .catch(err => console.error("Error adding patient:", err));
    }

    return (
        <div className="add-patient-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Add Patient</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            value={name}  // Fixed
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}  // Fixed
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePatient;
