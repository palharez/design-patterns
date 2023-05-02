import PayonnerAdapter from "./adapters/PayonnerAdapter";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";

const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment.paypalPayment();
payment.paypalReceive();
