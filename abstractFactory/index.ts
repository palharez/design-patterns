import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTranporst";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany = Company.NINENINE;

const CompanyFactory = {
  UBER: new UberTransport(),
  NINENINE: new NineNineTransport(),
};

const factory = CompanyFactory[currentCompany as keyof typeof CompanyFactory];

const client = new Client(factory);

client.startRoute();
