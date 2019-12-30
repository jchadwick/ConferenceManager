import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import { TableDefinition } from "cucumber";

@binding()
export class FormsSteps {
  @when("I populate the form with:")
  whenIPopulateTheFormWithADataTable(dataTable: TableDefinition) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`When I fill the form with:`);
    console.table(dataTable.rowsHash());
    return "pending";
  }

  @when(/enter "(.*?)" in the (.*?) field/)
  whenEnteringValueIntoAnInputField(value: string, field: string) {
    console.log(`Enter ${value} into ${field}`);
    return "pending";
  }

  @when(/submit the form/)
  whenSubmittingTheForm() {
    console.log(`Submit the form`);
    return "pending";
  }

  @then(/I should see an error message(?: "(.*?)")?/i)
  thenIShouldSeeAnErrorMessage(error?: string) {
    console.log(`I should see error message ${error}`);
    return "pending";
  }
}
