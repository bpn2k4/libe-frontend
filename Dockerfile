FROM node:21 as build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY ./public ./src index.html postcss.config.js tailwind.config.ts tsconfig.json tsconfig.node.json vite.config.ts /app/
RUN npm run build


FROM nginx:1.25
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/default.conf


