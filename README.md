# REST API using Express

This project implements a simple REST API using Node.js and Express. It provides basic CRUD (Create, Read, Update, Delete) operations for managing users.

## Features

- **GET /api/users**: Retrieve a list of users.
- **GET /api/users/:id**: Retrieve details of a specific user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update an existing user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:RoystonDAlmeida/REST-Api-using-Express.git
cd REST-Api-using-Express/
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the server:

```bash
node app.js
```

2. The server will run on `http://localhost:3000`. You can access the API endpoints prefixed with `/api`.