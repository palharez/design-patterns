import Database from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = Database.filter(
      (item) => item.email === email && item.password === password,
    );

    if (!users.length) {
      console.log(`Email ${email} do not exists.`);

      return false;
    }

    if (users[0].permissions === PermissionType.ADMIN) {
      console.log(`Welcome admin ${email}!`);

      return true;
    }

    console.log(`Welcome user ${email}!`);

    return this.checkNext(email, password);
  }
}
