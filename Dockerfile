FROM node:alpine3.18 as build


WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:2
WORKDIR /usr/share/nginx/html
RUN rm -rf * 
COPY --from=build /app/build .
EXPOSE 80

ENTRYPOINT [ "nginx",'-g','daemon off;' ]