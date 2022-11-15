const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('App online!')
})

app.get('/cursos', (req, res) => {
  res.send('Cursos online!')
})

app.post('/cursos', (req, res) => {
  const dadosCurso = req.body
  console.log(dadosCurso)
  res.send('Curso adicionado com sucesso')
})

app.get('/estudantes', (req, res) => {
  res.send('Estudantes online!')
})

app.listen(3000, () => {
  console.log('App online OK!')
})