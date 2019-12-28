import { Pages } from "../../Pages";
import { Given } from "cucumber";

Given(/navigate to the "(.*?)" page/, (page: string) => {
  const url = Pages[page];

  if (url == null) {
    return `pending: no route for "${page}"`;
  }

  console.log(`Navigate to ${page} (${url})`);
});
