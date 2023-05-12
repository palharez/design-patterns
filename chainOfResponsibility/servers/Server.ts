import Middleware from "../middlewares/Middleware";

export default class Server {
  private middleware: Middleware | undefined;

  public setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  public logIn(email: string, password: string): boolean {
    if (!this.middleware) {
      return false;
    }

    if (this.middleware.check(email, password)) {
      console.log("Authorization have been successful!");

      return true;
    }

    return false;
  }
}
