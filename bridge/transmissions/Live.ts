import IPlatform from "../platforms/interfaces/IPlatform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  broadcasting() {
    console.log("Starting the live");
  }

  result() {
    console.log("Live started");
  }
}
