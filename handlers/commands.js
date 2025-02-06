const { BOT, PREMIUM_CMDS, ERROR_MESSAGES, SUCCESS_MESSAGES } = require('./config');
const { generateAndroidPayload, generateIOSPayload } = require('./payload');

module.exports = (bot) => {
    // Commande /menu avec image
    bot.command('menu', async (ctx) => {
        try {
            const menuCaption = `
            🚀 *TOGE-BUG-V3 MENU* 🚀
            
            📲 *Commandes Disponibles* :
            /paircode [num] - Générer un code d'appairage
            /xandroid [num] - Crash Android (Premium)
            /xios [num] - Crash iOS (Premium)
            /crashgroup [lien] - Crash un groupe
            /spamgroup [lien] - Spam un groupe

            ⚠️ *Avertissement* : Usage éducatif uniquement
            `;

            // Envoi de l'image + menu
            await ctx.replyWithPhoto({
                source: 'https://i.ibb.co/gZw1hKq4/a1b61bd2-693c-465d-8766-a7f151fdfb65.jpg'
            }, {
                caption: menuCaption,
                parse_mode: 'Markdown'
            });

        } catch (err) {
            ctx.reply(ERROR_MESSAGES.UNKNOWN_ERROR);
            console.error('Erreur /menu :', err);
        }
    });

    // Reste des commandes inchangé
    bot.command('paircode', (ctx) => {
        const [cmd, number] = ctx.message.text.split(' ');
        if (!number) return ctx.reply(ERROR_MESSAGES.INVALID_NUMBER);
        
        const code = Math.floor(1000 + Math.random() * 9000);
        ctx.reply(`${SUCCESS_MESSAGES.PAIR_CODE_SENT}\nCode : ||${code}||`, { 
            parse_mode: 'Markdown' 
        });
    });

    PREMIUM_CMDS.forEach(cmd => {
        bot.command(cmd, (ctx) => {
            if (ctx.from.id.toString() !== BOT.OWNER_ID) {
                return ctx.reply(ERROR_MESSAGES.PERMISSION_DENIED);
            }
            
            const [_, target] = ctx.message.text.split(' ');
            const payload = cmd === 'xandroid' 
                ? generateAndroidPayload(target) 
                : generateIOSPayload(target);
            
            ctx.replyWithMarkdown(SUCCESS_MESSAGES.CRASH_SENT);
        });
    });
};
