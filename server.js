const express = require('express');
const app = express();
const port = 6223;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/trafficdata', (req, res) => {
  const data = {
    "labels": ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
    "datasets": [
      {
        "data": [90, 78, 82, 75, 68, 71, 85]
      }
    ]
  };
  res.status(200).json(data);
});

app.get('/intersection', (req, res) => {
  const data = [
    { "id": "SIG001", "name": "Main St & 5th Ave", "status": "OPTIMAL", "efficiency": "87", "vehicles": "245" },
    { "id": "SIG002", "name": "Broadway & 42nd St", "status": "CONGESTED", "efficiency": "62", "vehicles": "430" },
    { "id": "SIG003", "name": "Park Ave & 34th St", "status": "NORMAL", "efficiency": "78", "vehicles": "310" },
    { "id": "SIG004", "name": "Lexington & 59th St", "status": "OPTIMAL", "efficiency": "91", "vehicles": "190" }
  ];
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});