import IPLatform from "./interfaces/IPlatform";

export default class Facebook implements IPLatform {
  constructor() {
    this.configureRMPT();
    console.log("Facebook stream initialized");
  }

  configureRMPT() {
    this.authToken();
    console.log("Configuring Facebook live stream");
  }

  authToken() {
    console.log("Getting Facebook auth token");
  }
}
