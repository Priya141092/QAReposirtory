Feature: Login Validation

Background: 
Given Launch Application

Scenario: Login Page
When Enter valid username and password
Then Click on Login
And Verify the page title