

const express = require('express');
const app = express();

app.use(express.json()); //allows JSON in requests

const PORT = 3000;

console.log("THIS IS THE ACTIVE SERVER FILE");

//root endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: "API is running"});
});

//players endpoint
app.get('/players', (req, res) => {
    console.log("GET /players HIT");
    res.status(200).json([
        { id: 1, name: "John Doe", position: "Guard"},
        { id: 2, name: "Mike Smith", position: "Forward" }
    ]);
});
//POST a new player
app.post('/players', (req, res) => {
    console.log("POST /players HIT");

    const { name, position } = req.body;
    
    if (!name || !position) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Both 'name' and 'position' are required."
        });
    }

//simulate creating a new player
const newPlayer = {
    id: Date.now(),
    name,
    position
};
return res.status(201).json(newPlayer);
});

app.use((req,res) => {
    res.status(404).json({
        error: "Not Found",
        message: "The requested endpoint does not exist."
    });
});
//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
