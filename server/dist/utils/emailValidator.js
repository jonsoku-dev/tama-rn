"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (inputEmail) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(inputEmail);
});
//# sourceMappingURL=emailValidator.js.map