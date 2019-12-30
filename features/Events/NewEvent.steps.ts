import { binding, then } from "cucumber-tsflow";

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
