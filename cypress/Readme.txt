There are two feature files present 
1.orangeapplication
2.admin

orangeapplication: It is having tets cases of login functionality
Admin feature: it has test cases related to PIM module of addition of new employee

login.js- Step definition for orangeapplication
loginpage.js - It has all methods of loginjs step definition along with assertions

admin.js-Step definitions of admin feature
adminpage.js- Methods of adminjs along with assertions

They are independent test cases

opennewtab.cy.js- This is opening new tab for one of the applications

API methods:
getapitest.cy.js -- GET API from reqres.in and returning 200
postapitest.cy.js - POST API from reqres.in and returning 201

Environemnt variables are decalred in cypress.config.js

and The cloud execution has been done " https://cloud.cypress.io/projects/db59j6/runs/1"

RUN THE npm test command it will pick cypress run from package.json
