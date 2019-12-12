import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";

@binding()
export class NewUserRegistrationSteps {
  @then(/I should be registered as a new user in the system/i)
  thenIShouldBeARegisteredUser() {
    console.log(`I should be a registered user`);
    return "pending";
  }

  @then(/I should not be registered as a new user in the system/i)
  thenIShouldNotBeARegisteredUser() {
    console.log(`I should NOT be a registered user`);
    return "pending";
  }
}
