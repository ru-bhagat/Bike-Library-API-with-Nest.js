# Bike-Library-API with Nest.js

## Description

This is a simple REST API built with **Nest.js** to manage a bike library. The API provides endpoints to perform **CRUD** operations (Create, Read, Update, Delete) for bikes, and it includes **Swagger** documentation for easier API interaction.

## Features

- Add a new bike to the library.
- Fetch a list of all bikes in the library.
- Fetch details of a specific bike by ID.
- Update the details of an existing bike.
- Delete a bike from the library.
- Swagger API documentation for seamless interaction with the API.

## Technology Stack

- **Nest.js** for building the API.
- **SQLite** for database management.
- **Swagger** for API documentation.

## Installation and Setup

### Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js)
- **Git**

### Step-by-Step Setup Guide

#### 1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

#### 2. **Install dependencies**

Run the following command to install all required dependencies:

```bash
npm install
```

#### 3. **Database setup**

The project uses SQLite, so no additional database setup is required. The SQLite database will be automatically created when you run the application.

#### 4. **Run the application**

Start the Nest.js server with the following command:

```bash
npm run start
```

This will start the API on **http://localhost:3000**.

#### 5. **Access the API Documentation**

After starting the server, open your browser and navigate to:

```
http://localhost:3000/api
```

This will open the **Swagger** UI, where you can interact with the API by making requests and viewing responses.
## Swagger API Documentation

The **Swagger** UI provides interactive documentation for this API. It allows you to visualize and test the available endpoints easily.

To access the Swagger documentation, visit:

```
http://localhost:3000/api
```

---

## Project Structure

```
src
├── app.module.ts          # Main module
├── bike
│   ├── bike.controller.ts  # Handles incoming HTTP requests
│   ├── bike.service.ts     # Handles business logic and data operations
│   ├── dto
│   │   └── create-bike.dto.ts  # Data Transfer Object for validation
│   └── entities
│       └── bike.entity.ts  # The Bike entity schema for the database
└── main.ts                # Application entry point, where Swagger is set up
```

## License
This project is licensed under the MIT License.
