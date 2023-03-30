import IAircraftVehicle from "./interfaces/IAircraftVehicle";

export default class Drone implements IAircraftVehicle {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Strating drone...");
  }

  getCargo(): void {
    console.log("Getting drone cargo!");
  }

  checkWind(): void {
    console.log("Checking drone winds!");
  }
}
