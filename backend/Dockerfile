# Usa una imagen base de Node.js
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto del proyecto (package.json y package-lock.json)
# para instalar dependencias primero. Esto es bueno para la caché de Docker.
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el resto del código de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["node", "server.js"]