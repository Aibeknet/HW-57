import { User } from "../../type";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className="list-group-item">
      <strong>{user.name}</strong> - {user.email} - {user.role} -{" "}
      {user.active ? "Active" : "Inactive"}
    </li>
  );
};

export default UserItem;
