import Airplane from "../aerial/Airplane";
import IAircraftVehicle from "../aerial/interfaces/IAircraftVehicle";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {
  creatTransportVehicle(): ILandVehicle {
    return new Car();
  }

  createTransportAircraft(): IAircraftVehicle {
    return new Airplane();
  }
}
