# Usa una imagen base de Node.js para construir la app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Usa una imagen de Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Cambia el puerto de Nginx a 3001
RUN sed -i 's/listen       80;/listen 3001;/' /etc/nginx/conf.d/default.conf

# Expone el puerto 3001
EXPOSE 3001

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
