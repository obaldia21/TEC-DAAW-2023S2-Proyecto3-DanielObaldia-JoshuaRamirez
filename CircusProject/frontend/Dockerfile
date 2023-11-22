# Stage 1: Build
FROM node:latest as build

WORKDIR /app

COPY package.json package,json

RUN npm install

FROM node:latest AS builder
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY . .

# Stage 2: Serve
FROM nginx:latest
EXPOSE 80

# Copiar desde el directorio de construcción correcto
COPY --from=builder /app/dist/CircusProject /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
