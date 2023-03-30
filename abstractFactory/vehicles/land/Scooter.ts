import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting scooter....");
  }

  getCargo(): void {
    console.log("Getting scooter cargo");
  }
}
