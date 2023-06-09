"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizeMetadata = exports.AuthorizationMetadataProvider = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
// This will read the decorator metadata from the controller methods wherever the decorator is used.
let AuthorizationMetadataProvider = class AuthorizationMetadataProvider {
    constructor(controllerClass, methodName) {
        this.controllerClass = controllerClass;
        this.methodName = methodName;
    }
    value() {
        return getAuthorizeMetadata(this.controllerClass, this.methodName);
    }
};
AuthorizationMetadataProvider = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(core_1.CoreBindings.CONTROLLER_CLASS)),
    tslib_1.__param(1, context_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME)),
    tslib_1.__metadata("design:paramtypes", [Object, String])
], AuthorizationMetadataProvider);
exports.AuthorizationMetadataProvider = AuthorizationMetadataProvider;
function getAuthorizeMetadata(controllerClass, methodName) {
    return context_1.MetadataInspector.getMethodMetadata(keys_1.AUTHORIZATION_METADATA_ACCESSOR, controllerClass.prototype, methodName);
}
exports.getAuthorizeMetadata = getAuthorizeMetadata;
//# sourceMappingURL=authorization-metadata.provider.js.map