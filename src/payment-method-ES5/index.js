var operationTypes = ['PURCHASE', 'SALE'];
var basicMethodsTypes = ['BILLETERA', 'DEBIT-CARD', 'TRANSFER'];
var methodWithDiscountTypes = ['CASH'];
var methodWithFeesTypes = ['CREDIT-CARD'];
var allPaymentMethods = [...basicMethodsTypes, ...methodWithDiscountTypes, ...methodWithFeesTypes];

function PaymentMethod(type, operationType){
    if(!operationTypes.includes(operationType)) throw ('The operation type must be PURCHASE or SALE');
    if(!allPaymentMethods.includes(type)) throw ('The operation type must be one of ' + allPaymentMethods);

    var _type = type;
    var _operationType = operationType;
    this.getType = function() {return _type};
    this.getOperationType = function() {return _operationType};
};

function BasicMethod (type, operationType) {
    if(!basicMethodsTypes.includes(type)) throw ('The operation type must be one of ' + basicMethodsTypes);
    PaymentMethod.call(this, type, operationType);
};

function MethodWithDiscount (type, operationType, discount) {
    if(!methodWithDiscountTypes.includes(type)) throw ('The operation type must be one of ' + methodWithDiscountTypes);
    if(!discount) throw 'Discount is required';

    PaymentMethod.call(this, type, operationType);
    var _discount = discount;

    this.setDiscount = function(d){
        _discount = d;
    };
    this.getDiscount = function(){
        return _discount;
    };
};

function MethodWithFees (type, operationType, limitFees, interest) {
    if(!methodWithFeesTypes.includes(type)) throw ('The operation type must be one of ' + methodWithFeesTypes);
    if(!limitFees || !interest) throw 'LimitFees and interest are required'

    PaymentMethod.call(this, type, operationType);
    var _limitFees = limitFees;
    var _interest = interest;

    this.setLimitFees= function(d){
        _limitFees = d;
    }
    this.getLimitFees= function(){
        return _limitFees;
    }
    this.setInterest= function(i){
        _interest = i;
    }
    this.getInterest= function(currentFees) {
        if(currentFees > _limitFees) {
            return _interest;
        } else return 0;
    }
};

BasicMethod.prototype = Object.create(PaymentMethod.prototype);
BasicMethod.prototype.constructor = BasicMethod;

MethodWithDiscount.prototype = Object.create(PaymentMethod.prototype);
MethodWithDiscount.prototype.constructor = MethodWithDiscount;

MethodWithFees.prototype = Object.create(PaymentMethod.prototype);
MethodWithFees.prototype.constructor = MethodWithFees;

var newBasicMethod = new BasicMethod('BILLETERA', 'SALE')
var newMethodWithD = new MethodWithDiscount('CASH', 'SALE', 15)
var newMethodWithF = new MethodWithFees('CREDIT-CARD', 'SALE', 3, 100)

console.log('newMethod', newBasicMethod)
console.log('newMethodWithD', newMethodWithD)
console.log('newMethodWithF', newMethodWithF)

console.log('discount', newMethodWithD.getDiscount());
console.log('type', newBasicMethod.getType());
console.log('interest', newMethodWithF.getInterest(5));