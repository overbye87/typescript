import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back to users list</button>
      <h2>{user?.name} page</h2>
      <div>
        <p>{user?.email}</p>
        <p>{user?.address.street}</p>
      </div>
    </div>
  );
};

export default UserItemPage;
