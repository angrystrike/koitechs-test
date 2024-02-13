import { getUserData } from "@api/github";
import moment from "moment-timezone";
import { UserModel } from "types";

class User {
  public async findByUsername(username: string) {
    const response = await getUserData(username);
    console.log('user', response);
    const user: UserModel = {
      name: response.name,
      registrationDate: moment(response.created_at),
      publicReposCount: response.public_repos
    }

    return user;
  }

}

export default new User;