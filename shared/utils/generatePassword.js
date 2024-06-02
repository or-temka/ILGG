"use strict";
// Генерирует пароль длиной length (Можно указать свои символы для генерации пароля в charset)
Object.defineProperty(exports, "__esModule", { value: true });
const generatePassword = (length, charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') => {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};
exports.default = generatePassword;
