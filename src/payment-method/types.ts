export enum OperationType { PURCHASE = 'PURCHASE', SALE = 'SALE'}

export enum MethodWithDiscountTypes {CASH = 'CASH'};
export enum MethodWithFeesTypes {CREDIT_CARD = 'CREDIT_CARD'};
export enum BasicMethodTypes {DEBIT_CARD = 'DEBIT_CARD', BILLETERA = 'BILLETERA', TRANSFERENCE = 'TRANSFERENCE'};

export type AllPaymentMethods  = MethodWithDiscountTypes | MethodWithFeesTypes | BasicMethodTypes;

export interface PaymentMethodType {
    type: AllPaymentMethods;
    operationType: OperationType;
    discount?: number;
    limitFees?: number;
    interest?: number;
}