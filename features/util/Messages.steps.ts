import { Then } from "cucumber";
import { dataTableToStrings } from "./dataTableHelpers";

Then("I should see a thank you message", function() {
  console.log(`Should see thank you message`);
  //return "pending";
});

Then("I should see options:", function(dataTable) {
  const options = dataTableToStrings(dataTable);
  console.log(`Should see options ${options.join(", ")}`);
  //return "pending";
});
