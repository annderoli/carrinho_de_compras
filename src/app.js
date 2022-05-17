import express from 'express'

const app = express()

// Middleware JSON
app.use(express.json())

/* 
    REQUISIÇÕES
    -----------------
    Verbos HTTP

    GET -> Retornar dados
    POST -> Cadastrar dados
    PUT -> Editar dados (TODOS)
    PATCH -> Editar dados (ALGUNS)
    DELETE -> Excluir dados

*/
// Home..
app.get('/', (req, res) => {
    res.send('Bem Vindo ao APP...')
})
// Query params... (/clientes?ordem=nome&top=50)
app.get('/clientes', (req, res) => {
    res.send('LIstando todos os clientes...' /*+ req.query.top*/)
})

// URI Params... (/clientes/123)
app.get('/clientes/:id', (req, res) => {
    res.send('Listando somente o cliente:' /*+ req.params.id*/)
})

app.post('/clientes', (req, res) => {
    const body = req.body
    console.log(body)
    res.send('Cadastrando um cliente')
})

app.put('/clientes', (req, res) => {
    res.send('Alterando um cliente com PUT')
})

app.patch('/clientes', (req, res) => {
    res.send('Alterando um cliente PATCH')
})

app.delete('/clientes', (req, res) => {
    res.send('Excluindo clientes')
})

app.listen(9191, () => {
    console.log('Servidor no AR!')
})

