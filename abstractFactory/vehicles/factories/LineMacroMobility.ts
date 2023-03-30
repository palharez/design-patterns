import Drone from "../aerial/Drone";
import IAircraftVehicle from "../aerial/interfaces/IAircraftVehicle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LineMacroMobility implements ITransportFactory {
  creatTransportVehicle(): ILandVehicle {
    return new Scooter();
  }

  createTransportAircraft(): IAircraftVehicle {
    return new Drone();
  }
}
