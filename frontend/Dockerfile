# filepath: /c:/Users/progr/OneDrive/Documentos/chronosLab/Frontend/frontend/Dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG COMMIT_HASH
LABEL commit_hash=${COMMIT_HASH}

RUN sed -i 's/listen       80;/listen 3001;/' /etc/nginx/conf.d/default.conf

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]