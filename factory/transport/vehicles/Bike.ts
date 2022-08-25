import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o delivery...");
    }

    getCargo(): void {
        console.log("Já pegamos a comida!");
    }

}