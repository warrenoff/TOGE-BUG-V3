# Utilise une image Node.js officielle
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package.json .
COPY index.js .
COPY commands.js .
COPY payloads.js .
COPY config.js .

# Installe les dépendances
RUN npm install --production

# Expose le port (si nécessaire)
EXPOSE 3000

# Commande pour démarrer le bot
CMD ["node", "index.js"]
