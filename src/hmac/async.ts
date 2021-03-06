"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmacSha512Verify = exports.hmacSha512Sign = exports.hmacSha256Verify = exports.hmacSha256Sign = void 0;
const helpers_1 = require("../helpers");
function hmacSha256Sign(key, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserHmacSha256Sign(key, msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeHmacSha256Sign(key, msg);
        }
        else {
            result = helpers_1.fallbackHmacSha256Sign(key, msg);
        }
        return result;
    });
}
exports.hmacSha256Sign = hmacSha256Sign;
function hmacSha256Verify(key, msg, sig) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            const expectedSig = yield helpers_1.browserHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else if (helpers_1.isNode()) {
            const expectedSig = helpers_1.nodeHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else {
            const expectedSig = helpers_1.fallbackHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        return result;
    });
}
exports.hmacSha256Verify = hmacSha256Verify;
function hmacSha512Sign(key, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserHmacSha512Sign(key, msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeHmacSha512Sign(key, msg);
        }
        else {
            result = helpers_1.fallbackHmacSha512Sign(key, msg);
        }
        return result;
    });
}
exports.hmacSha512Sign = hmacSha512Sign;
function hmacSha512Verify(key, msg, sig) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isNode()) {
            const expectedSig = helpers_1.nodeHmacSha512Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else {
            const expectedSig = helpers_1.fallbackHmacSha512Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        return result;
    });
}
exports.hmacSha512Verify = hmacSha512Verify;
//# sourceMappingURL=async.js.map