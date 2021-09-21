# Npm-webpack-jquery-base-template
A base-template for npm, webpack and jquery

## Developer

```
npm install  
npm run dev
```
http://localhost:2708

## Testing & Prod (manually)

```
npm install  
npm run build
npm run start
```

Go to http://127.0.0.1:8080

Use `export PORT=8085` for another port


## Testing & Prod (docker)

```
docker build -t myweb .
docker run -d -p 8080:8080 --name myweb -it myweb
```
