# TOGE-BUG-V3 Bot

**TOGE-BUG-V3** est un bot WhatsApp puissant et polyvalent, conçu pour exécuter des commandes spéciales, y compris des fonctionnalités de crash et de spam. Développé avec Node.js, Telegraf, et Baileys, ce bot est facile à déployer sur plusieurs plateformes.


## Fonctionnalités

- **Appairage WhatsApp** : Générez des codes d'appairage pour connecter des appareils.
- **Commandes de crash** : Crash Android, iOS, et WhatsApp.
- **Commandes de groupes** : Crash et spam de groupes WhatsApp.
- **Interface simple** : Commandes intuitives via Telegram.

---

## Déploiement

### Prérequis
- Node.js 18+
- Un compte Telegram pour le token du bot.
- Un compte WhatsApp pour l'appairage.

---

### 1. Déployer sur **Replit**

1. **Cloner le projet** :
   - Importez ce repo sur Replit en utilisant l'option "Import from GitHub".
   - Ou créez un nouveau projet et collez les fichiers manuellement.

2. **Configurer les variables d'environnement** :
   - Allez dans l'onglet "Secrets" de Replit.
   - Ajoutez les variables suivantes :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     ```

3. **Démarrer le bot** :
   - Cliquez sur le bouton "Run" pour démarrer le bot.
   - Le bot sera accessible via l'URL fournie par Replit.

---

### 2. Déployer sur **Render**

1. **Créer un nouveau service** :
   - Connectez votre compte GitHub à Render.
   - Sélectionnez ce repo pour créer un nouveau service Web.

2. **Configurer les variables d'environnement** :
   - Dans l'onglet "Environment" de Render, ajoutez :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     PORT=3000
     ```

3. **Démarrer le bot** :
   - Render déploiera automatiquement le bot.
   - Le bot sera accessible via l'URL fournie par Render.

---

### 3. Déployer sur un **Panel d'Hébergement**

1. **Téléverser les fichiers** :
   - Compressez votre projet en `.zip` (excluez `node_modules` et `.env`).
   - Téléversez le fichier `.zip` sur le panel.

2. **Installer les dépendances** :
   - Ouvrez la console du panel.
   - Exécutez :
     ```bash
     npm install --production
     ```

3. **Configurer les variables d'environnement** :
   - Ajoutez les variables suivantes dans le panel :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     PORT=3000
     ```

4. **Démarrer le bot** :
   - Exécutez :
     ```bash
     node index.js
     ```
   - Assurez-vous que le port `3000` est ouvert.

---

## Commandes Disponibles

| Commande               | Description                                   |
|------------------------|-----------------------------------------------|
| `/menu`                | Affiche le menu des commandes.               |
| `/paircode [numéro]`   | Génère un code d'appairage WhatsApp.         |
| `/xandroid [cible]`    | Crash un appareil Android.                   |
| `/xios [cible]`        | Crash un appareil iOS.                       |
| `/crashgroup [lien]`   | Crash un groupe WhatsApp.                    |
| `/spamgroup [lien]`    | Spam un groupe WhatsApp.                     |

---

## Avertissement

Ce bot est conçu à des fins éducatives uniquement. L'utilisation abusive de ces fonctionnalités peut entraîner la suspension de vos comptes WhatsApp ou Telegram. Utilisez ce bot de manière responsable et légale.

---

## Support

Pour toute question ou problème, ouvrez une [issue](https://github.com/toge012345/TOGE-BUG-V3/issues) sur GitHub.

---

## Licence

Ce projet est sous licence **Apache-2.0**. Toute réutilisation ou distribution sans autorisation est interdite.

---

## Auteur

- **TOGE INUMAKI.**  
  Développeur principal  
  [GitHub](https://github.com/toge012345) | [Contact](lionelbzst@gmail.com)

---

**Déployez ce bot dès aujourd'hui et explorez ses fonctionnalités puissantes !** 🚀

---
