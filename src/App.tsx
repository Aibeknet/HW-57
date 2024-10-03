import { useState } from "react";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/UsersList/UsersList";
import { User, initialUsers } from "./type.ts";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
