FROM node:14.5
COPY . /src
RUN npm i -g serve
WORKDIR /src
RUN npm run build

EXPOSE 5000

CMD [ "serve", "dist" ]






