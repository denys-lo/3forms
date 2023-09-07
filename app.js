const express = require("express"); // подключение express
const cors = require('cors');

const app = express(); // создаем объект приложения
app.use(cors({ origin: '*' })); // origin: '*' разрешение для cors на все подключения
