const { Telegraf } = require('telegraf');
const { setupCommands } = require('./commands');
const { sendPayload } = require('./payloads');
const config = require('./config');

// Initialisation du bot
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Simuler un client WhatsApp (à adapter selon votre implémentation)
const wa = {
    client: {}, // Simule un client WhatsApp
    pair: async (phoneNumber) => {
        // Simule l'appairage
        return { status: 'success', code: '123456' };
    },
    crashGroup: async (groupLink) => {
        // Simule le crash d'un groupe
        console.log(`Crashing group: ${groupLink}`);
        return true;
    },
    spamGroup: async (groupLink) => {
        // Simule le spam d'un groupe
        console.log(`Spamming group: ${groupLink}`);
        return true;
    }
};

// Configuration des commandes
setupCommands(bot, wa, config);

// Démarrer le bot
bot.launch()
    .then(() => console.log('Bot démarré avec succès !'))
    .catch((err) => console.error('Erreur lors du démarrage du bot :', err));

// Gestion des erreurs
bot.catch((err) => {
    console.error('Erreur du bot :', err);
});

// Démarrer un serveur HTTP simple (optionnel)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot WhatsApp Toge-Bug-V3 est en ligne !');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
