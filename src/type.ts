export interface User {
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export const initialUsers: User[] = [
  {
    name: "Diego Maradonna",
    email: "maradonna@example.com",
    active: false,
    role: "editor",
  },
  {
    name: "Cristiano Ronaldo",
    email: "cristian@example.com",
    active: true,
    role: "user",
  },
  {
    name: "Lionel Messi",
    email: "messi@example.com",
    active: false,
    role: "admin",
  },
];
