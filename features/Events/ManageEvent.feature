Feature: Manage Event
    In order to modify an existing Event
    As an Organizer
    I want to be able to modify the Event's details

    Background:
        Given I have created an Event
        And I navigate to the Event Admin Page for the Event

    Scenario: Change the event's details
        Given I am an Event Organizer
        When I populate the form with:
            | Event Name        | Updated Event Name        |
            | Event Description | Updated event description |
            | Event Start Date  | 2020-11-19                |
            | Event End Date    | 2020-11-23                |
        And I submit the form
        Then the page should show the following text:
            | Event Name        | Updated Event Name        |
            | Event Description | Updated event description |
            | Event Start Date  | 2020-11-19                |
            | Event End Date    | 2020-11-23                |

    Scenario: Make the Event public
        Given I am an Event Organizer
        And the Event is not publicly visible
        When I set the Event's visibility to Public
        Then the Event should be publicly visible

    Scenario: Make the Event private
        Given I am an Event Organizer
        And the Event is publicly visible
        When I set the Event's visibility to Private
        Then the Event should not be publicly visible
