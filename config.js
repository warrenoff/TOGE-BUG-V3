// Importation de dotenv pour lire les variables d'environnement
require('dotenv').config();

module.exports = {
    // Token du bot (nécessaire pour l'authentification avec l'API)
    BOT_TOKEN: process.env.BOT_TOKEN, // Récupère le token depuis .env

    // ID du propriétaire (pour les commandes admin ou les restrictions)
    OWNER_ID: process.env.OWNER_ID, // Récupère l'ID depuis .env

    // Commandes premium disponibles
    PREMIUM_CMDS: [
        'xandroid',
        'xios',
        'xfreeze',
        'xbugv1',
        'xbugv2',
        'crashgroup', // Nouvelle commande
        'spamgroup'   // Nouvelle commande
    ],

    // Messages d'erreur
    ERROR_MESSAGES: {
        INVALID_NUMBER: '❌ Numéro invalide. Veuillez entrer un numéro valide.',
        INVALID_GROUP_LINK: '❌ Lien de groupe invalide. Veuillez entrer un lien valide.',
        COMMAND_NOT_FOUND: '❌ Commande non trouvée. Utilisez /menu pour voir les commandes disponibles.',
        PERMISSION_DENIED: '❌ Vous n\'avez pas la permission d\'utiliser cette commande.',
        UNKNOWN_ERROR: '❌ Une erreur inconnue est survenue. Veuillez réessayer plus tard.'
    },

    // Messages de succès
    SUCCESS_MESSAGES: {
        PAIR_CODE_SENT: '🔑 Code d\'appairage envoyé avec succès.',
        CRASH_SENT: '☠️ Payload envoyé avec succès.',
        GROUP_CRASHED: '💥 Le groupe a été crashé avec succès.',
        GROUP_SPAMMED: '📢 Spam envoyé dans le groupe avec succès.'
    },

    // Paramètres de sécurité
    SECURITY: {
        MAX_REQUESTS_PER_MINUTE: 10, // Limite de requêtes pa
