"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJsonRpcValidationInvalid = exports.isJsonRpcError = exports.isJsonRpcResult = exports.isJsonRpcResponse = exports.isJsonRpcRequest = exports.isJsonRpcPayload = void 0;
function isJsonRpcPayload(payload) {
    return "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
exports.isJsonRpcPayload = isJsonRpcPayload;
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && ("result" in payload || "error" in payload);
}
exports.isJsonRpcResponse = isJsonRpcResponse;
function isJsonRpcResult(payload) {
    return "result" in payload;
}
exports.isJsonRpcResult = isJsonRpcResult;
function isJsonRpcError(payload) {
    return "error" in payload;
}
exports.isJsonRpcError = isJsonRpcError;
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}
exports.isJsonRpcValidationInvalid = isJsonRpcValidationInvalid;
//# sourceMappingURL=validators.js.map