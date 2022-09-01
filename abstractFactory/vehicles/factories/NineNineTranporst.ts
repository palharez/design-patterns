import Helicopter from "../aerial/Helicopter";
import IAircraftVehicle from "../aerial/interfaces/IAircraftVehicle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  creatTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }

  createTransportAircraft(): IAircraftVehicle {
    return new Helicopter();
  }
}
