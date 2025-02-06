# Utilise une image Node.js 18 Alpine (légère et sécurisée)
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# 1. Copie des fichiers de dépendances en premier pour optimiser le cache Docker
COPY package*.json ./

# 2. Installe les dépendances PRODUCTION uniquement (optimisation de taille)
RUN npm install --omit=dev

# 3. Copie de TOUS les fichiers du projet (sauf ceux exclus par .dockerignore)
COPY . .

# 4. Exposition du port utilisé par le bot (optionnel selon votre configuration)
EXPOSE 3000

# 5. Démarrage du bot avec les variables d'environnement
CMD ["node", "index.js"]
