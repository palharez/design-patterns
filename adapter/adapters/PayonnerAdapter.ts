import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
  private payonner: Payonner;

  constructor(payonner: Payonner) {
    this.payonner = payonner;
  }

  authToken(): Token {
    return this.payonner.authToken();
  }

  paypalPayment(): void {
    console.log("Realizando pagamento via Payonner");
    return this.payonner.sendPayment();
  }

  paypalReceive(): void {
    console.log("Recebendo pagamento via Payonner");
    return this.payonner.receivePayment();
  }
}