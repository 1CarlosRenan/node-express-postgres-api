const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Estudantes online!')
})

module.exports = router