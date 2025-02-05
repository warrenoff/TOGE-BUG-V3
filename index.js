const { Telegraf } = require('telegraf');
const express = require('express');
const { initWA } = require('./handlers/whatsapp');
const { setupCommands } = require('./handlers/commands');
const config = require('./config');

// Initialisation du serveur Express pour éviter le sleep sur Render
const app = express();
app.get('/', (req, res) => res.send('🤖 Bot WhatsApp actif'));
app.listen(3000, () => console.log('Serveur web démarré sur le port 3000'));

// Initialisation du bot Telegram
const bot = new Telegraf(config.TELEGRAM_TOKEN);

// Initialisation du client WhatsApp
const wa = initWA(config);

// Middleware pour vérifier les droits admin
bot.use((ctx, next) => {
    const command = ctx.message?.text?.split(' ')[0]?.replace('/', '');
    if (config.PREMIUM_CMDS.includes(command) && ctx.from.id.toString() !== config.OWNER_ID) {
        return ctx.reply('🔐 Accès réservé à l\'administrateur');
    }
    return next();
});

// Configuration des commandes
setupCommands(bot, wa, config);

// Gestion des erreurs
bot.catch((err, ctx) => {
    console.error(`Erreur pour la commande ${ctx.updateType}`, err);
    ctx.reply('❌ Une erreur est survenue. Veuillez réessayer.');
});

// Démarrer le bot
bot.launch()
    .then(() => console.log('🤖 Bot Telegram démarré avec succès'))
    .catch((err) => console.error('Échec du démarrage du bot :', err));

// Gestion des arrêts propres
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
