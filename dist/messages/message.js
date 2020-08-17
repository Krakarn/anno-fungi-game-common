"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageHandler = void 0;
exports.createMessageHandler = function (processMessageMap) { return function (message) {
    return processMessageMap[message.type](message);
}; };
