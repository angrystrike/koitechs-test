import React from "react";
import { UserModel } from "types";

interface IProps {
  user: UserModel;
  containerClassName?: string;
}

const UserCard = (props: IProps) => {
  const { user, containerClassName } = props;

  return (
    <div className={containerClassName}>
      <p className="text-lg">Name: {user?.name}</p>
      <p className="text-lg">Public Repositories: {user?.publicReposCount}</p>
      <p className="text-lg">Member Since: {user?.registrationDate.format('DD-MM-YYYY')}</p>
    </div>
  );
};

export default UserCard;