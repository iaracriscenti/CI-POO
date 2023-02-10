import {MethodWithDiscount, MethodWithFees, BasicMethod,  } from "./payment-method";
import {PaymentMethodType, MethodWithDiscountTypes, OperationType, MethodWithFeesTypes, BasicMethodTypes} from './types'

const paymentMethods: PaymentMethodType[] = [];

paymentMethods[0] = new MethodWithDiscount(OperationType.PURCHASE, MethodWithDiscountTypes.CASH, 10);
paymentMethods[1] = new MethodWithDiscount(OperationType.SALE, MethodWithDiscountTypes.CASH, 15);
paymentMethods[2] = new MethodWithFees(OperationType.PURCHASE, MethodWithFeesTypes.CREDIT_CARD, 6, 11);
paymentMethods[3] = new MethodWithFees(OperationType.SALE, MethodWithFeesTypes.CREDIT_CARD, 3, 11);
paymentMethods[4] = new BasicMethod(OperationType.PURCHASE, BasicMethodTypes.DEBIT_CARD);
paymentMethods[5] = new BasicMethod(OperationType.PURCHASE, BasicMethodTypes.TRANSFERENCE);
paymentMethods[6] = new BasicMethod(OperationType.SALE, BasicMethodTypes.DEBIT_CARD);
paymentMethods[7] = new BasicMethod(OperationType.SALE, BasicMethodTypes.BILLETERA);

export {paymentMethods};