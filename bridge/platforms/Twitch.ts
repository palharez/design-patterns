import IPlatform from "./interfaces/IPlatform";

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMPT();
    console.log("Twitch stream initialized");
  }

  configureRMPT() {
    this.authToken();
    console.log("Configuring Twitch live stream");
  }

  authToken() {
    console.log("Getting Twitch auth token");
  }
}
