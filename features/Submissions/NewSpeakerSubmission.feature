Feature: New Session Submission
    As a speaker
    I should be able to submit my session to the conference
    So that they can accept it

    Scenario: Submit valid session
        Given I am authenticated as a User
        And I navigate to the "Submit Session" page
        When I populate the form with:
            | title       | My Test Session                        |
            | description | This is a session for testing purposes |
            | notes       | Some private note for the organizers   |
            | format      | 1 hour                                 |
            | track       | Testing                                |
            | level       | 100                                    |
            | tags        | test, testing, gherkin, bdd            |
        And submit the form
        Then the session should be submitted
        And I should see a thank you message
        And I should see options:
            | View the submission    |
            | Submit another session |

    Scenario: Submit invalid session
        Given I am authenticated as a User
        And I navigate to the "Submit Session" page
        When I populate the form with:
            | title       |  |
            | description |  |
        And submit the form
        Then the session should NOT be submitted
        And I should see an error message