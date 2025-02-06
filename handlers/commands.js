const { BOT, PREMIUM_CMDS, ERROR_MESSAGES, SUCCESS_MESSAGES } = require('./config');
const { generateAndroidPayload, generateIOSPayload } = require('./payload');

module.exports = (bot) => {
    // Commande /menu
    bot.command('menu', (ctx) => {
        const menu = `
        🚀 *Commandes Disponibles* :
        /paircode [num] - Générer un code d'appairage
        /xandroid [num] - Crash Android
        /xios [num] - Crash iOS
        /crashgroup [lien] - Crash un groupe
        `;
        ctx.replyWithMarkdown(menu);
    });

    // Commande /paircode
    bot.command('paircode', (ctx) => {
        const [cmd, number] = ctx.message.text.split(' ');
        if (!number) return ctx.reply(ERROR_MESSAGES.INVALID_NUMBER);
        
        const code = Math.floor(1000 + Math.random() * 9000);
        ctx.reply(`${SUCCESS_MESSAGES.PAIR_CODE_SENT}\nCode : ||${code}||`, { parse_mode: 'Markdown' });
    });

    // Commande premium (/xandroid, /xios)
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
