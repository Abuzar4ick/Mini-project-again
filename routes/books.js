const { Router } = require('express')
const router = Router()
const books = require('../Books')
const uuid = require('uuid')


// Get all books
router.get('/', (req, res) => {
    res.json(books)
  })
  
  // Get one book by id
  router.get('/:id', (req, res) => { 
    const book = books.find(book => book.id === parseInt(req.params.id))
    if (book) {
      res.json(book)
    } else {
      res.status(404).json({message: 'Book topilmadi!'})
    }
  })

router.post('/', (req, res) => {
    const newBook = {
        id: uuid.v4(),
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    }
    if (!req.body.name || !req.body.author || !req.body.pages) {
        return res.status(400).json({message: "Iltimos hamma ma'lumotlarni kiriting!"})
    }
    books.push(newBook) 
    res.json(books)
})

  // Edit book by id
  router.get('/:id', (req, res) => { 
    const book = books.find(book => book.id === parseInt(req.params.id))
    if (book) {
      res.json(book)
    } else {
      res.status(404).json({message: 'Book topilmadi!'})
    }
  })

  
  // Edit book by id
  router.put('/:id', (req, res) => { 
    const book = books.find(book => book.id === parseInt(req.params.id))
    if (book) {
      const updateBook = req.body
      books.forEach((book) => {
        if (book.id === parseInt(req.params.id)) {
          book.name = updateBook.name ? updateBook.name : book.name
          book.author = updateBook.author ? updateBook.author : book.author
          book.pages = updateBook.pages ? updateBook.pages : book.pages

          res.status(200).json({message: "Kitob ma'lumotlari yangilandi", book})
        }
      })
    } else {
      res.status(404).json({message: 'Book topilmadi!'})
    }
  })

  // Delete book by id
  router.delete('/:id', (req, res) => {
    const book = books.some(book => book.id === parseInt(req.params.id))

    if (book) {
      res.json({
        message: "Book o'chirildi",
        bookd: books.filter(book => book.id !== parseInt(req.params.id))
      })
    } else {
      res.status(404).json({message: 'Book topilmadi'})
    }
  })

module.exports = router