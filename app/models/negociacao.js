"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantidade, _valor;
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(data, quantidade, valor) {
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            return __classPrivateFieldGet(this, _data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "quantidade", {
        get: function () {
            return __classPrivateFieldGet(this, _quantidade);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "valor", {
        get: function () {
            return __classPrivateFieldGet(this, _valor);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "Volume", {
        get: function () {
            return __classPrivateFieldGet(this, _quantidade) * __classPrivateFieldGet(this, _valor);
        },
        enumerable: false,
        configurable: true
    });
    return Negociacao;
}());
exports.Negociacao = Negociacao;
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();
