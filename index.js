require('dotenv').config();
const { Telegraf } = require('telegraf');
const { BOT_TOKEN, ERROR_MESSAGES } = require('./config');
const setupCommands = require('./command');

// Vérification du token
if (!BOT_TOKEN) {
    console.error(ERROR_MESSAGES.MISSING_TOKEN);
    process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// Initialisation
try {
    // Configuration des commandes
    setupCommands(bot);
    
    // Gestion des erreurs
    bot.catch((err) => {
        console.error(ERROR_MESSAGES.UNKNOWN_ERROR, err);
    });

    // Démarrage du bot
    bot.launch().then(() => {
        console.log('🤖 Bot démarré avec succès');
    });

} catch (err) {
    console.error(ERROR_MESSAGES.STARTUP_FAILURE, err);
}

// Gestion des arrêts propres
process.on('SIGINT', () => bot.stop('SIGINT'));
process.on('SIGTERM', () => bot.stop('SIGTERM'));
