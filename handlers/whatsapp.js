const { Client, LocalAuth } = require('whatsapp-web.js');
let client = null;

module.exports.initWA = (config) => {
    client = new Client({
        authStrategy: new LocalAuth({ dataPath: config.WA_SESSION_PATH }),
        puppeteer: { headless: true }
    });

    return {
        client,
        pair: async (phoneNumber) => {
            try {
                const code = await client.requestPairingCode(phoneNumber);
                return { status: 'success', code };
            } catch (e) {
                return { status: 'error', message: e.message };
            }
        }
    };
};

// En tête du fichier
const path = require('path');

// Modifier la configuration du client
const client = new Client({
    authStrategy: new LocalAuth({ 
        dataPath: path.join(config.WA_SESSION_PATH, 'whatsapp') 
    }),
    puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});
