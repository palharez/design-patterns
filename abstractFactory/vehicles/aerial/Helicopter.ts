import IAircraftVehicle from "./interfaces/IAircraftVehicle";

export default class Helicopter implements IAircraftVehicle {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando a decolagem...");
  }

  getCargo(): void {
    console.log("Passageiros ok. Ligando hélices...");
  }

  checkWind(): void {
    console.log("Ventos a 25km, Sudest, ventos Ok!");
  }
}
