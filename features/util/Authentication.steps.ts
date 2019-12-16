import { Given, Then } from "cucumber";

const givenAutheticatedAsRole = (role: string) => {
  if (!role) {
    throw new Error("Missing user role");
  }

  console.log(`Given role ${role}`);
  //return 'pending';
};

Given(`I am authenticated as a User`, () =>
  givenAutheticatedAsRole("Authenticated User")
);

Given(`I am authenticated as an Organizer`, () =>
  givenAutheticatedAsRole("Organizer")
);

Given(/I am not authenticated/, () => {
  console.log(`Given not authenticated`);
  //return "pending";
});

Then(
  /I should be (?:automatically )?authenticated(?: as user "(.*?)")?/,
  (username: string) => {
    if (username) {
      console.log(`I am authenticated as ${username}`);
    } else {
      console.log(`I am authenticated as ${username}`);
    }
    return "pending";
  }
);
