# Étape 1 : construire l’image à partir d’un node officiel
FROM node:18

# Créer un dossier de travail
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port
EXPOSE 80

# Démarrer l’application
CMD [ "npm", "start" ]
