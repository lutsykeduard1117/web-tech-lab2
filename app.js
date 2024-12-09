const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Налаштування
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Роутери
const indexRouter = require('./routes/index');
const itemRouter = require('./routes/item');
const privacyRouter = require('./routes/privacy');
const aboutRouter = require('./routes/about');
const addItemRouter = require('./routes/addItem');

app.use('/', indexRouter);
app.use('/item', itemRouter);
app.use('/privacy', privacyRouter);
app.use('/about', aboutRouter);
app.use('/add', addItemRouter);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
// Експорт додатку
module.exports = app;
