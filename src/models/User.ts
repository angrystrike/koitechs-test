import { getUser } from "@api/github";

class User {
  public findByUsername(username: string) {
    return getUser(username);
  }
}

export default new User;