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

  public prepareForProjectsList(repos: Array<RepositoryModel>, size: number) {
    repos?.sort((a, b) => b.pushedAt.valueOf() - a.pushedAt.valueOf());
    repos = repos?.slice(0, size);

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
    const languageCounts: { [key: string]: number } = {};
    const totalRepos = repos.length;

    // Get object with key: language_name and value: count of project with this lang
    repos.forEach(repo => {
      const lang = repo.language || 'Unknown';
      languageCounts[lang] = (languageCounts[lang] || 0) + 1;
    });

    // Calculate percentage using total count of repos
    const languageOverview = Object.entries(languageCounts).map(([lang, count]) => ({
      label: lang,
      value: `${((count / totalRepos) * 100).toFixed(2)}%`
    })).sort((a, b) => parseFloat(b.value) - parseFloat(a.value));

    return languageOverview;
  }

}

export default new Repository;