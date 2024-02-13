import { Moment } from "moment-timezone";

export interface UserModel {
  name: string;
  registrationDate: Moment;
  publicReposCount: number;
  repos: Array<RepositoryModel>;
}

export interface RepositoryModel {
  id: number;
  name: string;
  url: string;
  language: string;
  pushedAt: Moment;
}

export interface IListItem {
  label?: string;
  value: string;
  url?: string;
}