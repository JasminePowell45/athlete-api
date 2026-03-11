# Athlete API

## Overview 
The Athlete API is a simple RESTful API built with Express.js for managaging basketball player data.

It allows clients to:
- Retrieve a list of players
- Add new player

This project demonstrates the structure and documentation of a RESTful API, including HTTP methods, request and responses examples, and error
handling. It serves as a portfolio exanple of API documentation and backend development. 

Base URL: http://localhost:3000

## Installation
Clone the repository and install dependencies.
```bash
git clone https://github.com/JasminePowell45/athlete-api.git
cd athlete-api
npm install
```
Start the server:
```bash
node index.js
```
The API will run at:
http://localhost:3000
---

# Endpoints

### GET /players
Retrieve a list of all players.
Response: 200 OK
Example Response: 
```json
[
  { "id": 1, "name": "John Doe", "position": "Guard" },
  { "id": 2, "name": "Mike Smith", "position": "Forward" }
]
```
---

### POST /players
create a new player.

Request Body:
```json
{
  "name": "Chris Paul",
  "position": "Guard"
}
```
Response: 201 Created 

Example Responses:
```json
{
  "id": 170000000000,
  "name": "Chris Paul",
  "position": "Guard"
}
```
---

# Error Handling
The Athlete API uses standard HTTP status codes to indicate request success or failure. 

### 400 Bad Request 
Returned when required fields are missing.

Example:
```json
{
  "error": "Bad Request",
  "message": "Both 'name' and 'position' are required."
}
```
### 404 Not Found
Returned when an endpoint does not exist.

Example: 
```json
{
  "error": "Not Found",
  "message": "The requested endpoint does not exist."
}
```
---

# Future Improvements 
Potential enhancements for this API includes:

- Add PUT and DELETE endpoints
- Implement authentication
- Connect to a database
- Add pagination and filtering

## Contributing 
This project is part of a technical writing portfolio.
If you would like to suggest improvements, feel free to fork the repository and submit a pull request.

Before contributing: 
- Install dependencies using `npm install`
- Start the server with `node index.js`


