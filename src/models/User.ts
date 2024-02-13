import { getUserData } from "@api/github";
import moment from "moment-timezone";
import { UserModel } from "types";
import Repository from "./Repository";

class User {
  public async findByUsername(username: string) {
    const userData = await getUserData(username);
    const repositoriesData = await Repository.getAllByUsername(username);
    
    const user: UserModel = {
      name: userData.name,
      registrationDate: moment(userData.created_at),
      publicReposCount: userData.public_repos,
      repos: repositoriesData
    }
    console.log('user', user);

    return user;
  }

}

export default new User;