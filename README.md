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
git clone https://github.com/ru-bhagat/Bike-Library-API-with-Nest.js.git
cd Bike-Library-API-with-Nest.js
```

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
## Example 
### 1. **Adding a Bike to the Library (POST `/bikes`)**
   
   - Click on the `POST /bikes` endpoint in Swagger UI.
   - Click on the **"Try it out"** button.
   - In the **Request Body**, enter an example bike object in JSON format, like this:
   
     ```json
     {
       "make": "Royal Enfield",
       "model": "Classic 350",
       "year": 2021,
       "type": "Cruiser"
     }
     ```

   - Click **"Execute"** to send the request.
   - You should receive a `201 Created` response with the newly created bike's details in the response body.

### 2. **Fetching the List of Bikes (GET `/bikes`)**

   - After adding a bike, click on the `GET /bikes` endpoint.
   - Click **"Execute"**.
   - The server should return a list of bikes, including the one you just added. The response body will look something like this:

     ```json
     [
       {
         "id": "some-unique-id",
         "make": "Royal Enfield",
         "model": "Classic 350",
         "year": 2021,
         "type": "Cruiser"
       }
     ]
     ```

### 3. **Fetching a Specific Bike by ID (GET `/bikes/{id}`)**

   - You can use the ID of the bike that was returned in the `POST` request.
   - Click on the `GET /bikes/{id}` endpoint in Swagger.
   - Click **"Try it out"**.
   - Enter the ID of the bike (e.g., `some-unique-id`).
   - Click **"Execute"**.
   - The server should return the details of the bike with the specified ID.

### 4. **Updating a Bike's Details (PUT `/bikes/{id}`)**

   - Click on the `PUT /bikes/{id}` endpoint.
   - Click **"Try it out"**.
   - Enter the bike's ID and provide the updated details in the request body, like this:
   
     ```json
     {
       "make": "Royal Enfield",
       "model": "Meteor 350",
       "year": 2023,
       "type": "Cruiser"
     }
     ```

   - Click **"Execute"**.
   - You should receive a `200 OK` response, confirming that the bike's details have been updated.

### 5. **Deleting a Bike (DELETE `/bikes/{id}`)**

   - Click on the `DELETE /bikes/{id}` endpoint.
   - Click **"Try it out"**.
   - Enter the bike's ID that you want to delete.
   - Click **"Execute"**.
   - You should receive a `200 OK` response confirming that the bike has been deleted.

## License
This project is licensed under the MIT License.
