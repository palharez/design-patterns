import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckWeakPasswordMiddleware from "./middlewares/CheckWeakPasswordMiddleware";
import Server from "./servers/Server";

const server = new Server();

const userMiddleware = new CheckUserMiddleware();
const weakPasswordMiddleware = new CheckWeakPasswordMiddleware();
const permissionMiddleware = new CheckPermissionMiddleware();

userMiddleware.linkWith(weakPasswordMiddleware).linkWith(permissionMiddleware);

server.setMiddleware(userMiddleware);
server.logIn(`eduardo@palharez.dev`, `super`);
// server.logIn(`user@palharez.dev`, `123456`);
// server.logIn(`user`, `123456`);
