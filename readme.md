#Docker

Run PostgreSQL using Docker: 
```ssh
cd postgres
docker-compose up
```
> PostgreSQL port: <b>5440</b>

```
... src/main/resourcesapplication.properties

spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5440/business-tracker
spring.datasource.username=postgres
spring.datasource.password=1234
...
`````

## Swagger

It’s Specification,with the visual documentation making.<br> To use Swagger Ui run the Application and visit
the http://localhost:8080/swagger-ui.html page in your browser

#Developer
-Inna
-Anzhela
-Vitalij
-Valeryia
-Nina
-Alex
