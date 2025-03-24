from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/trafficdata")
def fn1():
    o = {
    "labels": ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
    "datasets": [
      {
        "data": [90, 78, 82, 75, 68, 71, 85]
      }
    ]
  }
    return o,200

@app.route("/intersection")
def fn2():
    o1 = [
    { "id": "SIG001", "name": "Main St & 5th Ave", "status": "OPTIMAL", "efficiency": "87", "vehicles": "245" },
    { "id": "SIG002", "name": "Broadway & 42nd St", "status": "CONGESTED", "efficiency": "62", "vehicles": "430" },
    { "id": "SIG003", "name": "Park Ave & 34th St", "status": "NORMAL", "efficiency": "78", "vehicles": "310" },
    { "id": "SIG004", "name": "Lexington & 59th St", "status": "OPTIMAL", "efficiency": "91", "vehicles": "190" }
]
    return o1,200

if __name__ == '__main__':
    app.run(debug=True, port = 6223)