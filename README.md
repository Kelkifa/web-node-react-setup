# Basic layout Nodejs + Reactjs

## Introduction
Basic layout for Nodejs server and Reactjs client

- Server (Nodejs + Express, MongoDB)
- Client (Reactjs)

## Libraries
Reactjs (client)

```npm install create-react-app```

React Router Dom

```npm install react-router-dom```



Nodejs Express (server)

```npm install express```

Mongoose (database)

```npm install mongoose```

Cors

```npm install cors```

Concurrently (run Reactjs and nodejs on a same terminal)

```npm install concurrently--save-dev```

## Folder Organization
```
client
|__ public
|__ src
|  |__ components
|  |__ views
|  |__ index.js
server
|__ app
|  |__ cores
|  |  |__ connectDb.js
|  |__ models   
|__ index.js
```

## Usage
- When you clone this project to your folder, you have to run this command:

```cd client && npm install```

- You have to delete git when cloning fihish, using this command:

```rmdir /S .git```

- Change Mongodb Url in file connectDb.js to your db

## Src

- Setup to deloy to heroku: https://www.youtube.com/watch?v=xgvLP3f2Y7k
- Create react app: https://vi.reactjs.org/docs/create-a-new-react-app.html

