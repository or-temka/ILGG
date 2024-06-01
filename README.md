# ILGG

# about

application for distribution and management of browser games and applications. Play with friends. Does not require download.

# start dev project

## frontend

1. go to the `frontend` directory
2. in terminal: `npm i` for install npm packages
3. in terminal: `npm start` for start project

## backend

```
In order to start backend you will need to create own file "PASSWORDS.ts" in directory "backend/src/" with values:
export const DB_LOGIN = '[your login from mongoDB]'
export const DB_PASSWORD = '[your password from mongoDB]'
export const TOKEN_KEY = '[you unique key]'
```

1. go to the `backend` directory
2. in terminal: `npm i` for install npm packages
3. in terminal: `npm run dev` for start project in dev mode
4. in terminal: `npm start` for start project in production mode
