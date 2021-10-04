const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('../server/routes/authRouter')
const productRouter = require('../server/routes/productRouter')


//создаем приложение
const app = express();

//даем возможность серверу читать json формат
app.use(express.json());

//определяем маршрут для авторизации пользователя
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
//определяем порт
const PORT = config.get('PORT') || 5000;

/**
 * Старт главного сервера, с последующим подключением к базе данных
 * @returns {Promise<void>}
 */
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер был запущен на порту ${PORT}`)
        })
        await mongoose.connect(config.get('dbURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log("Подключение в базе данных прошло успешно")
        })
    } catch (e) {
        console.log(e)
    }
}
start();
