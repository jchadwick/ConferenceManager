import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

interface User {
  id: string;
  username: string;
  attributes: {
    sub: string;
    name: string;
  };
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    Auth.currentUserInfo().then(user => {
      console.log("Current user", user);
      setUser(user);
    });
  }, []);

  return user;
};
