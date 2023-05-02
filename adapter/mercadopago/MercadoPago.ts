import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token | undefined;

  authToken(): Token {
    return new Token();
  }

  sendPayment(): void {
    this.token = this.authToken();
    console.log(`Token ${this.token.getToken()}`);
    console.log("Enviando pagamento via Mercado Pago");
  }

  receivePayment(): void {
    console.log("Recebendo pagamentos via Mercado Pago");
  }
}