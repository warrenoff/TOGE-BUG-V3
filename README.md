# TOGE-BUG-V3 Bot
  <a href="https://wa.me/message/7JQKSN6B3LLKF1">
        <p align="center">
   <img alt="toge01245" height="300" src="https://i.ibb.co/gZw1hKq4/a1b61bd2-693c-465d-8766-a7f151fdfb65.jpg">
              </p>
  </a>
</p>

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

### **Étapes pour déployer sur Heroku**

1. **Créer un compte Heroku** :  
   Si vous n'en avez pas, inscrivez-vous sur [Heroku](https://signup.heroku.com/).

2. **Créer une nouvelle application** :  
   - Cliquez sur "New" > "Create new app".
   - Donnez un nom à votre application et choisissez une région.

3. **Connecter GitHub** :  
   - Allez dans l'onglet "Deploy" > "Connect to GitHub".
   - Sélectionnez votre repo (`toge-bug-v3-bot`).

4. **Configurer les variables d'environnement** :  
   - Allez dans l'onglet "Settings" > "Config Vars".
   - Ajoutez les variables suivantes :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     PORT=3000
     ```

5. **Déployer** :  
   - Dans l'onglet "Deploy", cliquez sur "Deploy Branch".
   - Heroku installera les dépendances et démarrera le bot.

6. **Vérifier les logs** :  
   - Allez dans l'onglet "Resources" et activez le dyno `web`.
   - Vérifiez les logs pour confirmer que le bot fonctionne.

---

### **Accéder au bot**

Une fois déployé, votre bot sera accessible via l'URL suivante :  
```
https://votre-app-heroku.herokuapp.com
```

---

### **Add-ons recommandés**

- **Heroku Postgres** : Pour stocker des données (optionnel).
- **Papertrail** : Pour surveiller les logs en temps réel.
- **Heroku Scheduler** : Pour exécuter des tâches planifiées.

---

### **Problèmes courants**

| Problème                          | Solution                                                                 |
|-----------------------------------|--------------------------------------------------------------------------|
| `Error: Cannot find module`       | Vérifiez que toutes les dépendances sont installées (`npm install`).    |
| `Port already in use`             | Assurez-vous que le port `3000` est libre.                              |
| `Telegram token invalid`          | Vérifiez la variable `TELEGRAM_BOT_TOKEN`.                              |
| `WhatsApp connection failed`      | Assurez-vous que `@adiwajshing/baileys` est correctement configuré.     |

---

### **Documentation Officielle**

- **[Heroku Node.js Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)**
- **[Telegraf Documentation](https://telegraf.js.org/)**
- **[Baileys Documentation](https://github.com/adiwajshing/Baileys)**

---

### 1. Déployer sur **Replit**

1. **Créer un compte Replit** :  
   Si vous n'en avez pas, inscrivez-vous sur [Replit](https://replit.com/signup).

2. **Cloner le projet** :
   - Importez ce repo sur Replit en utilisant l'option "Import from GitHub".
   - Ou créez un nouveau projet et collez les fichiers manuellement.

3. **Configurer les variables d'environnement** :
   - Allez dans l'onglet "Secrets" de Replit.
   - Ajoutez les variables suivantes :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     ```

4. **Démarrer le bot** :
   - Cliquez sur le bouton "Run" pour démarrer le bot.
   - Le bot sera accessible via l'URL fournie par Replit.

---

### 2. Déployer sur **Render**

1. **Créer un compte Render** :  
   Si vous n'en avez pas, inscrivez-vous sur [Render](https://dashboard.render.com/register).

2. **Créer un nouveau service** :
   - Connectez votre compte GitHub à Render.
   - Sélectionnez ce repo pour créer un nouveau service Web.

3. **Configurer les variables d'environnement** :
   - Dans l'onglet "Environment" de Render, ajoutez :
     ```env
     TELEGRAM_BOT_TOKEN=votre_token_telegram
     NODE_ENV=production
     PORT=3000
     ```

4. **Démarrer le bot** :
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
