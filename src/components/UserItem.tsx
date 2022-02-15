import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: "1px solid green", margin: 5 }}
    >
      {user.id}. {user.name} lives in town {user.address.city} on street{" "}
      {user.address.street}, {user.address.zipcode}
    </div>
  );
};

export default UserItem;
