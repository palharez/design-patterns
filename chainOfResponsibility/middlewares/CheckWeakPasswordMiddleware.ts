import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (password === "123456") {
      console.log("Your password is too weak change it!");

      return false;
    }

    return this.checkNext(email, password);
  }
}
