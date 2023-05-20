# 1. Health Hub Application

The Health Hub application is designed to provide users with the ability to search for nearby pharmacies and hospitals, as well as schedule appointments. It leverages a combination of technologies, including Angular for the frontend, Node.js and Spring Boot for the backend, MySQL for data storage, and MongoDB for storing doctor and hospital ratings. Additionally, the Google Maps API is integrated for displaying nearby locations, and the Yelp API is utilized for obtaining reviews, which are then stored in Elasticsearch.

## Features

1. User Registration and Login:
   - Users can register an account and securely log in to the application.

2. Nearby Pharmacy and Hospital Search:
   - The application allows users to search for nearby pharmacies and hospitals based on their location.
   - Integration with the Google Maps API enables accurate location-based search results.

3. Appointment Scheduling:
   - Users can schedule appointments with doctors or hospitals based on their availability.
   - Appointment requests are handled by the backend system built with Spring Boot.
   - User appointments are stored in a MySQL database for efficient retrieval and management.

4. Doctor and Hospital Ratings:
   - The application incorporates MongoDB to store and manage ratings of doctors and hospitals.
   - Users can provide ratings and reviews for healthcare providers to help other users make informed decisions.

5. Yelp API Integration:
   - A Python script is used to fetch reviews from the Yelp API.
   - The obtained reviews are stored in Elasticsearch, allowing for efficient search and retrieval.

## Technology Stack

- Frontend:
  - Angular: A popular JavaScript framework for building responsive and dynamic user interfaces.

- Backend:
  - Node.js: A JavaScript runtime environment for building scalable server-side applications.
  - Spring Boot: A Java framework that simplifies the development of Java-based web applications.

- Databases:
  - MySQL: A relational database management system used for storing user registration and appointment data.
  - MongoDB: A NoSQL document database used for storing doctor and hospital ratings.
  - Elasticsearch: A distributed search and analytics engine used for storing Yelp reviews.

- APIs and Services:
  - Google Maps API: Integrated to provide location-based search functionality for nearby pharmacies and hospitals.
  - Yelp API: Utilized to fetch reviews and ratings for doctors and hospitals.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Frontend setup:
   - Install Angular CLI: `npm install -g @angular/cli`
   - Install dependencies: `cd frontend && npm install`
   - Start the frontend server: `ng serve`
3. Backend setup:
   - Install dependencies: `cd backend && npm install`
   - Start the backend server: `node server.js`
4. Configure and connect the MySQL database.
5. Configure and connect the MongoDB database.
6. Configure the necessary API keys for Google Maps and Yelp.

For detailed instructions on setting up the application and its dependencies, please refer to the project's documentation.



