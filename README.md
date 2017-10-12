# todo-list-springboot-restful-angular-h2
This is a To-Do application with option to add/delete and mark it as completed. It shows pending and completed tasks.
- Front End  : AngularJS / JavaScript / Html / Css3
- Middleware : Spring boot
- Back end   : In memory DB - H2

![Alt text](screen_todolist.png?raw=true "Todo List App")


## Running the program
To run the application:
```
mvn spring-boot:run
```

```
cd web
npm install
npm start
```

And browse to:
![http://localhost:4200/](http://localhost:4200/)
This will load up the application page.


## Microservice Acrhitecture
The application is split into tiers to give the non-functional property of loose coupling.
Each microservice has it own tiers add. In this example I have created one for Todo items which contains the Model, Controller and Repository.
This achieve good architecture design practice of separation of concerns.
The front-end is an Angular JS embedded within the index.html page. It called the Spring RESTful middleware endpoint which renders the JSON output from the application into the view.

The category list is first loaded. Upon selecting a category and entering a location into the input box. A REST request is sent to the Spring MVC controllers which returns with a filtered list of events.
  The Angulars JS iterates through the JSON response and bind each field to the form and page HTML elements. This gives loosely coupled front-end which enables front-end developers to customise the application without have to modify the backend or restart the Spring Boot app service.

## Application Tiers
These are the fours tiers
* Controllers - this defines the endpoint which the application request respone handlers will serve. It's responsible for directing the incoming request to the relevant service and responsed to the front-end, in this is a HTML page with Angular JS to render the results from the JSON output.
* Domain - This is the object oriented model of our entities. In this case it is Todo items in the list.
* Repository - This is the backend data access layers for third party data access. In this case I have used H2 data which is populated with sample data upon application startup.
* Serivce - This process the incoming request from the controllers calling upon the necessary data access code in the repository package.


# Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 4.4.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
