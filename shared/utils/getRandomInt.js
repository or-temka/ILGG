"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = getRandomInt;
