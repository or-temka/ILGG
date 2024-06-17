# ![ILGG logo](https://raw.githubusercontent.com/or-temka/ILGG/4b7e8d8d6e2f95d7719b00c867e8b69c2c95a8f1/frontend/src/assets/svgs/logo.svg?token=AQUQACXA2BLNIW43IJAKUUTGMHMHY)

<img alt="Static Badge" src="https://img.shields.io/badge/version-0.1.0-red?style=for-the-badge">

---

Веб-платформа для дистрибуции и управления браузерными приложениями и играми.

<img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-5.4.5-%233D81CA?style=for-the-badge&logo=typescript&labelColor=%23333&color=%233D81CA"> ![Static Badge](https://img.shields.io/badge/Node.js-20.9.0-%2393C80F?style=for-the-badge&logo=node.js&labelColor=%23333&color=%2393C80F)

![NPM Version](https://img.shields.io/npm/v/react?logo=react&label=react&color=%2318DBFE) ![NPM Version](https://img.shields.io/npm/v/redux?logo=redux&label=redux&color=%23844EC3) ![NPM Version](https://img.shields.io/npm/v/create-react-app?logo=create-react-app&label=create-react-app) ![NPM Version](https://img.shields.io/npm/v/axios?logo=axios&label=axios) ![NPM Version](https://img.shields.io/npm/v/uuid?logo=uuid&label=uuid) ![NPM Version](https://img.shields.io/npm/v/sass?logo=sass&label=SCSS&color=%23DA87AD) ![NPM Version](https://img.shields.io/npm/v/query-string?logo=query-string&label=query-string)

![NPM Version](https://img.shields.io/npm/v/express?logo=express&label=express&labelColor=%23333&color=%23333) ![NPM Version](https://img.shields.io/npm/v/nodemon?logo=nodemon&label=nodemon&color=%237FD357) ![NPM Version](https://img.shields.io/npm/v/mongoose?logo=mongoose&label=mongoose&color=%238A120F) ![NPM Version](https://img.shields.io/npm/v/jsonwebtoken?logo=jsonwebtoken&label=jsonwebtoken) ![NPM Version](https://img.shields.io/npm/v/cors?logo=cors&label=cors) ![NPM Version](https://img.shields.io/npm/v/bcrypt?logo=bcrypt&label=bcrypt)

# Старт в разработке

## frontend

1. откройте директорию `frontend` в корне проекта
2. В терминале: `npm i` для установки npm пакетов
3. В терминале: `npm start` для запуска проекта локально

Теперь проект можно открыть по пути `http://localhost:3000` (путь по умолчанию)

## backend

Для того, чтобы запустить backend-часть приложения для начала потребуется создать файл "PASSWORDS.ts" в директории "backend/src/" со значениями:

```js
export const DB_LOGIN = '[ваш логин для базы данных mongoDB]'
export const DB_PASSWORD = '[ваш пароль для базы данных mongoDB]'
export const TOKEN_KEY = '[ваш уникальный ключ (можно придумать любой)]'
```

1. откройте директорию `backend` в корне проекта
2. В терминале: `npm i` для установки npm пакетов
3. В терминале: `npm run dev` для старта сервера локально в режиме разработке
4. В терминале: `npm run build` для запуска компилятора TypeScript, который будет отслеживать изменения

Теперь проект можно открыть по пути `http://localhost:4000` (порт 4000 указан в главном файле сервера)

# структура проекта

## общая структура
```
project-root/
├── frontend/
│ ├── public/
│ ├── src/
│ ├── package.json
│ ├── package-lock.json
│ ├── tsconfig.json
│ └── README.md
├── backend/
│ ├── src/
│ ├── package.json
│ ├── package-lock.json
│ └── tsconfig.json
├── shared/
│ ├── interfaces/
│ └── utils/
├── .gitignore
└── `README.md`
```
# Управление проектом

## Скрипты

для запуска потребуется ввести `npm run [название]`

### frontend

| Название  | Описание                               | Расшифровка           |
| :-------- | :------------------------------------- | :-------------------- |
| **start** | Запуск сервера в режиме разработки     | `react-scripts start` |
| **build** | Билд разработаного проекта в продакшен | `react-scripts build` |

### backend

| Название  | Описание                                                     | Расшифровка               |
| :-------- | :----------------------------------------------------------- | :------------------------ |
| **start** | Запуск сервера в режиме продакшен                            | `node ./dist/index.js`    |
| **dev**   | Запуск сервера в режиме разработки                           | `nodemon ./dist/index.js` |
| **build** | Запуск слежки за изменение `.ts` файлов и компиляция в `.js` | `shell tsc -w`            |
