import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  private mercadoPago: MercadoPago;

  constructor(mercadoPago: MercadoPago) {
    this.mercadoPago = mercadoPago;
  }

  authToken(): Token {
    return this.mercadoPago.authToken();
  }

  paypalPayment(): void {
    console.log("Adaptando pagamento via Mercado Pago");
    this.mercadoPago.sendPayment();
  }

  paypalReceive(): void {
    console.log("Adaptando recebimento via Mercado Pago");
    this.mercadoPago.receivePayment();
  }
}