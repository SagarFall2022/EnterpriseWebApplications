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

# 2. Smart Portables Application

This project is a servlet-based web application developed in Java that provides customers with the ability to create an account, manage their shopping cart, and choose delivery options. It also includes two additional roles, salesperson and store manager, who can manage the inventory.

## Features

The web shopping cart application offers the following features:

1. User Registration and Authentication:
   - Customers can create an account by providing necessary details such as name, email, and password.
   - User authentication is implemented to ensure secure access to the application.

2. Product Management:
   - Customers can view the available products and add/remove items to/from their shopping cart.
   - Salespersons and store managers have the ability to manage the inventory by adding new products or updating existing ones.

3. Shopping Cart Management:
   - Customers can view their shopping cart, modify quantities, and remove items.
   - The total price of the items in the shopping cart is calculated and displayed.

4. Delivery Options:
   - Customers can choose between home delivery or pick-up options during the checkout process.

5. Role-Based Access Control:
   - The application includes three roles: customer, salesperson, and store manager.
   - Salespersons can manage the inventory by adding or updating products.
   - Store managers have additional privileges to manage salespersons and access sales reports.

## Usage

To use the web shopping cart application, follow these steps:

1. Clone or download the repository.

2. Set up the Java development environment and ensure that a compatible web server (e.g., Apache Tomcat) is installed.

3. Import the project into your preferred integrated development environment (IDE).

4. Configure the database connection settings in the application to ensure proper interaction with the database.

5. Build and deploy the application on the web server.

6. Access the application through a web browser using the provided URL.

7. Create a customer account to start using the shopping cart functionalities.

8. If you are a salesperson or store manager, use the provided login credentials to access the respective roles and manage the inventory.

## Technologies Used

The web shopping cart application is built using the following technologies:

- Java: The core programming language used to develop the application.
- Servlets: Used for handling HTTP requests and building the web application logic.
- HTML/CSS: Used for creating the user interface and styling the application.
- MySQL: The database management system used for storing customer details, product information, and other relevant data.



