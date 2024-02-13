import { getUserRepositories } from "@api/github";
import moment from "moment-timezone";
import { IListItem, RepositoryModel } from "types";

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
          pushedAt: moment(item.pushed_at)
        }
        acc.push(repo);

        return acc;
    }, []);

    return repositories;
  }

  public prepareForProjectList(repos: Array<RepositoryModel>, size: number) {
    repos?.sort((a, b) => b.pushedAt.valueOf() - a.pushedAt.valueOf());
    repos = repos.slice(0, size);

    const listItems: Array<IListItem> = repos?.reduce((acc: Array<IListItem>, item: RepositoryModel) => {
      acc.push({
        url: item.url,
        value: item.name
      });

      return acc;
    }, []);

    return listItems;
  }

  public prepareForLanguagesList(repos: Array<RepositoryModel>) {
    repos?.sort((a, b) => b.pushedAt.valueOf() - a.pushedAt.valueOf());

    const listItems: Array<IListItem> = repos?.reduce((acc: Array<IListItem>, item: RepositoryModel) => {
      acc.push({
        url: item.url,
        value: item.name
      });

      return acc;
    }, []);

    return listItems;
  }

}

export default new Repository;