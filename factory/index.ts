import { BikeTransport } from "./transport/BikeTransport";
import { CarTransport } from "./transport/CarTransport";
import { MotorcycleTransport } from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

enum TransportType {
  UBER = "uber",
  LOGGI = "loggi",
  EATS = "eats",
}

function createTransport(transportType: TransportType): Transport {
  const transportMap = {
    uber: () => new CarTransport(),
    loggi: () => new MotorcycleTransport(),
    eats: () => new BikeTransport(),
  };

  return transportMap[transportType]();
}

const transport = createTransport(TransportType.UBER);
transport.startTransport();
