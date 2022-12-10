Featured Implemented:
1. User Registration
2. User Login
3. Users can schedule an appointment with a Doctor / Medical Practitioner
4. List of Doctors / Hospital / Pharmacies
5. Yelp Reviews
6. Bar charts of Hospitals Reviews
7. Location of hospitals on google map (Find nearby doctors, hospitals)
8. Write Reviews
9. View Reviews
10. Search AutoComplete


Installation prerequisites & Environment set-up


1. Install Visual Studio Code 
2. Install Angular 15  by using npm install
3. Install Elastic search version 7.11.2
4. Install Node js version 16.18.0
5. Install Anaconda for jupyter notebook (Anaconda3 2022.10)
6. Install MySQL server 8.0.30 along with MySQL notifier and MySQL Workbench 8.0 CE
7. Install MongoDB (version 3.6)
8. Install Spring boot (2.4.4)
9. Get Yelp API key from https://www.yelp.com/developers/v3/manage_app by opening an account on yelp website.
10. Get Google map API key from  https://console.cloud.google.com/projectselector2/google/maps-apis/credentials by opening an account on Google website.
11. Install Postman to test the APIs 


Line of code written: 8754

        
Build and deployment process:


MySQL 
-Check MY SQL notifier whether the MYSQL server is up and running.
- It should run on mysql://localhost:3306/
- Run DB scripts provided with the deliverables from Extra Code folder
        Name of script : DB_Scripts.sql


MongoDB  
-Check Mongo shell whether Mongo DB server is up and running.
-Open C:\Program Files\MongoDB\Server\3.6\bin to run following commands:
1. Mongod
2. Mongo
- MongoDB should run on mongodb://127.0.0.1:27017/




Jupyter Notebook :
- Open HealthHub.ipynb in Jupyter Notebook which is available in Anaconda Navigator.
- Change Yelp API key according to your app configuration  
-We have used below Yelp API API Key: 2FQKfsVwMaprJbfoTV16ExrY3Ta8gujYBkaRkz3hUorPGZXxp6J0b1phGvcMMJUav6B3f1E89ae-pSSW0Opg9gXrrf86qu9joe7g3APCXmV0BI_RCm-bNagqg1dYY3Yx
- Run the all cells 


Google API Key :
We are using below api key 
AIzaSyANho3VyRDhrNN62QJqNJrQUXyHoTqoBN4


Elastic search
Open the command prompt and run the below script.
*******For elastic search,************


cd C:\elasticsearch-7.11.2\bin
C:\elasticsearch-7.11.2\bin>elasticsearch


- Elasticsearch should run on http://127.0.0.1:9200/


Backend Node servers (We are using two node servers multitier architecture)


1. First Node server : (This server will be used for Spring Boot - MySQL connection)


*******For backend, first node server********


C:\cd C:\HealthHub\backend
C:\HealthHub\backend>node server
        
        -It should run on http://localhost:8080


2. Second Node server : (This server will be used for MongoDB connection)


*******For backend, second node server********


C:\cd C:\HealthHub\backend
C:\HealthHub\backend>node server


        -It should run on http://localhost:8082


Spring boot Application :


Run the application from Visual Studio code manually.




Frontend Angular Application 


********For Angular frontend *******
C:\Users\nikam>cd C:\HealthHub\frontend


C:\HealthHub\frontend>ng serve


Note: Angular-Client should be on http://localhost:4200






Go to your browser and type http://localhost:4200/ and press Enter.