
FROM node:16 AS build


WORKDIR /app


COPY ./server/client/package*.json ./client/


RUN cd client && npm install

# Копируем все файлы проекта и собираем фронтенд
COPY ./server/client ./client/
RUN cd client && npm run build


FROM node:16


WORKDIR /app


COPY ./server/package*.json ./


RUN npm install


COPY ./server .


COPY --from=build /app/client/build ./client/build


EXPOSE 5444


CMD ["npm", "start"]