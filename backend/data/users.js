import bcrypt from "bcryptjs";

const users = [
  {
    name: "Caleb Selormey (test)",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe (test)",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe (test)",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
