import PermissionType from "./PermissionType";

interface DatabaseItem {
  email: string;
  password: string;
  permissions: PermissionType;
}

const Database: DatabaseItem[] = [
  {
    email: "eduardo@palharez.dev",
    password: "super",
    permissions: PermissionType.ADMIN,
  },
  {
    email: "user@palharez.dev",
    password: "123456",
    permissions: PermissionType.USER,
  },
];

export default Database;
