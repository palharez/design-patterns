import ILandVehicle from "../../land/interfaces/ILandVehicle";
import IAircraftVehicle from "../../aerial/interfaces/IAircraftVehicle";

export default interface ITransportFactory {
  creatTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraftVehicle;
}
