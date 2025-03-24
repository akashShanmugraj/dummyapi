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

app.get("/detectiondata", (req, res) => {
    const data = [
        {
          "name": "Cars",
          "population": 456,
          "color": "#3B82F6",
          "legendFontColor": "#94A3B8"
        },
        {
          "name": "Trucks",
          "population": 87,
          "color": "#8B5CF6",
          "legendFontColor": "#94A3B8"
        },
        {
          "name": "Motorcycles",
          "population": 34,
          "color": "#10B981",
          "legendFontColor": "#94A3B8"
        },
        {
          "name": "Buses",
          "population": 12,
          "color": "#F59E0B",
          "legendFontColor": "#94A3B8"
        },
        {
          "name": "Pedestrians",
          "population": 231,
          "color": "#EF4444",
          "legendFontColor": "#94A3B8"
        }
        ];
    res.status(200).json(data);
}
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});