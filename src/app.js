import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.send('APP PRONTO PRA RODAR!')
})

app.listen(9191, () => {
    console.log('Servidor no AR!')
})

