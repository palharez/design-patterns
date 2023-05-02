import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token | undefined;

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    this.token = this.authToken();
    console.log(`Token ${this.token.getToken()}`);
    console.log("Enviando pagamento via paypal");
  }

  paypalReceive(): void {
    console.log("Rebendo pagamentos via PayPal");
  }
}