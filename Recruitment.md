- [Assigment](#assignment-for-avsystems-recruitment-process)
- - [Requirements](#requirements)
- - [How to run](#how-to-run)
- [Project setup](#test-project-setup)
- - [Tests](#tests)
- - [Page objects](#page-objects)


# Assignment for AVSystems recruitment process

### Requirements

- nodejs version 14 or higher https://nodejs.org/en/
- chrome browser version 103.0.5060.114 or higher

### How to run:

- `npm i`
- `npm run start`
- `npm run test`

> Please note: Make sure the app is running before starting tests

###### For debug mode use:

- `npm run test:debug`


# Test project setup

Project has been set up using Cypress, Typescript using basic page object pattern

Some validation has been moved inside Page Object classes due to cypress limitation
> `within()` scope is closed and it didnt make sense to work around it's limitation
see [FormPage.ts](cypress/pageObjects/FormPage.ts) `shouldHaveAlertByLabel`
> see official documentation on `within()` (docs.cypress.io/api/commands/within)(https://docs.cypress.io/api/commands/within)

### Structure
- cypress
- - /downloads (default folder for downloadable content)
- - /e2e
- - - /recrutimentApp - test/spec files
- - /pageObjects - page object classes
- - /support (default files for extending commands and e2e capabilities)
- - /videos (default folder for test run videos)

### Tests
[./cypress/e2e/recruitmentApp/* - test folder](cypress/e2e/recruitmentApp)

##### Sanity
Basic test checking if application can be accessed using cypress
[./cypress/e2e/recruitmentApp/*](cypress/e2e/recruitmentApp/sanity.cy.ts)
##### Form - happy path
Testing happy path user acceptance test
[./cypress/e2e/recruitmentApp/*](cypress/e2e/recruitmentApp/form-happyPath.cy.ts)
##### Form - validation
Testing front end validation of the form with valid and negative scenarios
[./cypress/e2e/recruitmentApp/*](cypress/e2e/recruitmentApp/form-validation.cy.ts)
##### Main Page - resources
First part of main page components, verify external links
[./cypress/e2e/recruitmentApp/*](cypress/e2e/recruitmentApp/mainPage-resources.cy.ts)
##### Main Page - next steps
Second part of main page components, verify dynamic text substitution
[./cypress/e2e/recruitmentApp/*](cypress/e2e/recruitmentApp/mainPage-nextSteps.cy.ts)

### Page objects

##### Base Page (abstract)
[./cypress/pageObjets/BasePage.ts](cypress/pageObjects/BasePage.ts)
Abstract page for all common functions. In this project only routing is inherited.
Please note: base url can also be defined in cypress settings which can be useful in projects with multiple configurations

##### Main Page
[./cypress/pageObjets/MainPage.ts](cypress/pageObjects/MainPage.ts)
Landing page for the application

##### Form Page
[./cypress/pageObjets/FormPage.ts](cypress/pageObjects/FormPage.ts)
Form page
[./cypress/pageObjets/ResultForm.ts](cypress/pageObjects/ResultForm.ts)
Results page after completing form
