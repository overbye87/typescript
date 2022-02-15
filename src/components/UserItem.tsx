import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid green", margin: 5 }}>
      {user.id}. {user.name} lives in town {user.address.city} on street{" "}
      {user.address.street}, {user.address.zipcode}
    </div>
  );
};

export default UserItem;
