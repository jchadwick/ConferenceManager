import { Then, TableDefinition } from "cucumber";

Then(/I should see "(.*?)"/, function(message: string) {
  console.log(`Should see message "${message}"`);
  return "pending";
});

Then("I should see options:", function(dataTable: TableDefinition) {
  const options = dataTable.rows().map(([option]) => option);
  console.log(`Should see options ${options.join(", ")}`);
  return "pending";
});
