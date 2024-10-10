// Midleware
// logger midleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${new Date()}`)
    next()
  }

module.exports = logger