Feature: Create New Event
    In order to have an Event in the system that I can manage
    As an Organizer
    I want to create a new Event so that I can begin managing it

    Background:
        Given I navigate to the "Create Event" page

    Scenario: Event Organizer creates a new Event
        Given I am authenticated as an Organizer
        When I populate the form with:
            | name       | description       |
            | Test Event | My new test event |
        And I submit the form
        Then the event should be created
        And I should be taken to the new event's page
