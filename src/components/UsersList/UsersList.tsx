import React from "react";
import UserItem from "../UserItem/UserItem.tsx";
import { User } from "../../type";

interface UsersListProps {
  users: User[];
}
const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((user) => (
        <UserItem key={user.email} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
