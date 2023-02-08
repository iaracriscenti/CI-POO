import { AllPaymentMethods, BasicMethodTypes, MethodWithDiscountTypes, MethodWithFeesTypes, OperationType } from "./types";

export abstract class PaymentMethod {
    private _type: AllPaymentMethods;
    private _operationType: OperationType;

    constructor(operationType: OperationType, type: AllPaymentMethods) {
        this._operationType = operationType;
        this._type = type;
    }

    public set type(type: AllPaymentMethods) {
        this._type = type;
    }

    public get operationType(): OperationType {
        return this._operationType;
    }
}

export class BasicMethod extends PaymentMethod {
    constructor(operationType: OperationType, type: BasicMethodTypes) {
        super(operationType, type);
    };
}

export class MethodWithDiscount extends PaymentMethod{
    private _discount: number;
    constructor( operationType: OperationType, type: MethodWithDiscountTypes, discount: number) {
        super(operationType, type);
        this._discount = discount;
    };

    public set discount(d: number) {
        this._discount = d;
    }

    public get discount(): number {
        return this._discount;
    }
}

export class MethodWithFees extends PaymentMethod {
    private _limitFees: number;
    private _interest: number;

    constructor( operationType: OperationType, type: MethodWithFeesTypes, limitFees: number, interest: number,){
        super(operationType, type);
        this._limitFees = limitFees;
        this._interest = interest;
    }

    public set interest(int: number) {
        this._interest = int;
    }

    public set limitFees(int: number) {
        this._limitFees = int;
    }

    public get limitFees(): number {
        return this._limitFees;
    }

    public getInterest(currentFees: number): number {
        if(currentFees > this._limitFees) {
            return this._interest;
        } else return 0;
    }
}

