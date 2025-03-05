import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON parsing

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "helse"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to database");
    }
});

// Fetch patients
app.get('/patients', (req, res) => {
    db.query('SELECT * FROM patient', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// Add new patient
app.post('/patients', (req, res) => { 
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
    }
    const sql = "INSERT INTO patient (Name, Email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to insert data" });
        }
        return res.json({ message: "Patient added successfully", id: result.insertId });
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
