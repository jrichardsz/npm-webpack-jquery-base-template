FROM node:14

WORKDIR /opt/
COPY . /opt/
RUN npm install
RUN npm run build

ENTRYPOINT ["npm","run","start"]
