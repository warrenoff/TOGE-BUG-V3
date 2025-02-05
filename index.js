const { Telegraf } = require('telegraf');
const config = require('./config');
const { initWA } = require('./handlers/whatsapp');
const { setupCommands } = require('./handlers/commands');

const bot = new Telegraf(config.TELEGRAM_TOKEN);
const wa = initWA(config);

// Vérification Admin
bot.use((ctx, next) => {
    const cmd = ctx.message.text.split(' ')[0].replace('/', '');
    if(config.PREMIUM_CMDS.includes(cmd) && ctx.from.id.toString() !== config.OWNER_ID) {
        return ctx.reply('🔒 Accès admin requis');
    }
    return next();
});

setupCommands(bot, wa, config);

bot.launch();
