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
  pushed_at: Moment;
}