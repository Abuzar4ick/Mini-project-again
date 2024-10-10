const express = require('express')
const path = require('path')


const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// books API endpoints
app.use('/api/books', require('./routes/books'))

// Papkani static qilish
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// bo'ldi :)