import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";

@binding()
export class FormsSteps {
  @when("I populate the form with:")
  whenIPopulateTheFormWithADataTable(dataTable) {
    // Write code here that turns the phrase above into concrete actions
    console.debug(`When I fill the form with:`);
    console.table(dataTable);
    return "pending";
  }

  @when(/enter "(.*?)" in the (.*?) field/)
  whenEnteringValueIntoAnInputField(value: string, field: string) {
    console.debug(`Enter ${value} into ${field}`);
    return "pending";
  }

  @when(/submit the form/)
  whenSubmittingTheForm() {
    console.debug(`Submit the form`);
    return "pending";
  }

  @then(/I should see an error message(?: "(.*?)")?/i)
  thenIShouldSeeAnErrorMessage(error?: string) {
    console.debug(`I should see error message ${error}`);
    return "pending";
  }
}
