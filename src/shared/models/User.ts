export interface User {
  id: string;
  key: string;
  email: string;
  credentials: string[];
  firstName?: string;
  lastName?: string;
  profileImageUrl: string;
  gitHubId?: string;
  twitterId?: string;
  biography?: string;
}
