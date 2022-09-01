import IAircraftVehicle from "../aerial/interfaces/IAircraftVehicle";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraftVehicle;

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.creatTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
