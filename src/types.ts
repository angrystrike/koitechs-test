import { Moment } from "moment-timezone";

export interface UserModel {
  name: string;
  registrationDate: Moment;
  publicReposCount: number;
}