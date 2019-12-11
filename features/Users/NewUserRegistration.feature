Feature: New User Registration
    In order to access the capabilities of the system beyond just readonly views
    As an unregistered Organizer or Speaker
    I want to register for a new account

    Background:
        Given I am not authenticated

    Scenario: User successfully registers for a new account
        Given I navigate to the "New User" page
        When I enter "test@test.com" in the emailAddress field
        And I enter "Passw0rd123!" in the password field
        And submit the form
        Then I should be registered as a new user in the system
        And I should be automatically authenticated

    Scenario: User tries to register with a bad password
        Given I navigate to the "New User" page
        When I enter "test@test.com" in the emailAddress field
        And I enter "" in the password field
        And submit the form
        Then I should NOT be registered as a new user in the system
        And I should see an error message "Invalid password"