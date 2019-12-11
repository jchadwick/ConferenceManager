import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";

@binding()
export class AuthenticationSteps {
  @given(/I am authenticated as an? (.*?)/)
  givenAuthenticatedAsRole(role: string) {
    console.debug(`Given role ${role}`);
    return 'pending';
  }

  @given(/I am not authenticated/)
  givenNotAuthenticated() {
    console.debug(`Given not authenticated`);
    return 'pending';
  }

  @then(/I should be (?:automatically) authenticated(?: as user "(.*?)")?/)
  thenUserShouldBeAuthenticatedAsUser(username: string) {
    if (username) {
      console.debug(`I am authenticated as ${username}`);
    } else {
      console.debug(`I am authenticated as ${username}`);
    }
    return 'pending';
  }
}
