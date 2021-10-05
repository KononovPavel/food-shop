const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('../server/routes/authRouter')
const productRouter = require('../server/routes/productRouter')
const userRouter = require('../server/routes/usersRouter')

//создаем приложение
const app = express();

//даем возможность серверу читать json формат
app.use(express.json());

//определяем маршрут для авторизации пользователя
app.use('/api/auth', authRouter)
//определяем маршрут для продуктов
app.use('/api/products', productRouter)
// определяем маршрут для пользователей
app.use('/api/users', userRouter)
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
