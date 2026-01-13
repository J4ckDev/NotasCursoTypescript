"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3;
    Validations.validateDate = (myDate) => isNaN(myDate.valueOf());
})(Validations || (Validations = {}));
console.log(Validations.validateText("Jack"));
//# sourceMappingURL=app.js.map