#stage 1
FROM docker.io/node:latest as build
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build --prod

#stage 2
FROM docker.io/nginx:latest
COPY --from=build /app/dist/vechicle-service-automation /usr/share/nginx/html