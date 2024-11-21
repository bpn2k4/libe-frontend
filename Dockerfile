FROM node:21 AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY ./public index.html postcss.config.js tailwind.config.ts tsconfig.json tsconfig.node.json vite.config.ts /app/
COPY ./src /app/src
RUN npm run build


FROM nginx:1.25
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./env.example.js /usr/share/nginx/html/env.js
COPY nginx.conf /etc/nginx/conf.d/default.conf


