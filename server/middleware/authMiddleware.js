const jwt = require('jsonwebtoken');
const config = require('config')
//это функция миддлвейр, которая вернет нам пользователя из токена
module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next() //просто продолжаем выполнять запрос
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer alsldlasldlasd
        if (!token) {
            return res.status(403).json({message: "Пользователь не авторизован", code: 1})
        }
        req.userByToken = jwt.verify(token, config.get('secretKey')) // добавляем нашего пользователя в параметр req
        next()
    } catch (e) {
        res.status(403).json({message: "Пользователь не авторизован", code: 1})
    }
}
