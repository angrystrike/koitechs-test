import { getUserRepositories } from "@api/github";
import moment from "moment-timezone";
import { RepositoryModel } from "types";

class Repository {
  public async getAllByUsername(username: string) {
    const response = await getUserRepositories(username);

    const repositories: Array<RepositoryModel> = response.reduce(
      (acc: Array<RepositoryModel>, item) => {
        const repo: RepositoryModel = {
          id: item.id,
          name: item.name,
          url: item.html_url,
          language: item.language,
          pushed_at: moment(item.pushed_at)
        }
        acc.push(repo);

        return acc;
    }, []);

    return repositories;
  }
}

export default new Repository;