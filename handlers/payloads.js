const CryptoJS = require('crypto-js');
const { SECURITY } = require('./config');

const encryptPayload = (data) => {
    return CryptoJS.AES.encrypt(data, SECURITY.ENCRYPTION_KEY).toString();
};

module.exports = {
    generateAndroidPayload: (target) => {
        const payload = `*#${target}*${Math.random().toString(36).substring(7)}`;
        return encryptPayload(payload);
    },

    generateIOSPayload: (target) => {
        const payload = `;crash=${target};${Date.now()}`;
        return encryptPayload(payload);
    }
};
