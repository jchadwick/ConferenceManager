import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";

@binding()
export class NewEventSteps {
  @then(/the event should be created/)
  thenTheEventShouldBeCreated() {
    console.log(`the event should be created`);
    return "pending";
  }

  @then(/taken to the new event's page/)
  thenIShouldBeOnTheNewEventPage() {
    console.log(`I should be on the new event's page`);
    return "pending";
  }
}

/*
   ? When I enter the following event information:
       | name       | description       |
       | Test Event | My new test event |
       Undefined. Implement with the following snippet:

         When('I enter the following event information:', function (dataTable) {   
           // Write code here that turns the phrase above into concrete actions    
           return 'pending';
         });

*/
