import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";

@binding()
export class NavigationSteps {
  @given(/navigate to the "(.*?)" page/)
  givenNavigatingToPage(page: string) {
    console.debug(`Navigate to ${page}`);
  }
}
