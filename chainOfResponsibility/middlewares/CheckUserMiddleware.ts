import Database from "../servers/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf("@") === -1) {
      console.log(`Email ${email} is invalid.`);

      return false;
    }

    if (
      !Database.find(
        (user) => user.email === email && user.password === password,
      )
    ) {
      console.log(`Email ${email} or password is invalid.`);

      return false;
    }

    return this.checkNext(email, password);
  }
}
