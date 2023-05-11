import IPlatform from "./interfaces/IPlatform";

export default class Youtube implements IPlatform {
  constructor() {
    this.configureRMPT();
    console.log("Youtube stream initialized");
  }

  configureRMPT() {
    this.authToken();
    console.log("Configuring Youtube live stream");
  }

  authToken() {
    console.log("Getting Youtube auth token");
  }
}
