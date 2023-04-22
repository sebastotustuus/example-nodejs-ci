const express = require('express')
const app = express()
const port = process.env.PORT || 3030
const {sum, substrct, product, divide} = require('./utils')

app.get('/ping', (req, res) => {
    res.send("pong")
})

app.get('/', (req, res) => {
    res.json({
        sum: sum(12,13),
        substrct: substrct(10,6),
        product: product(5,6),
        divide: divide(18,2)
    })
})

app.listen(port, () => {
    console.info(`Server running on port: ${port}`)
})