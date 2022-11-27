const express = require('express')
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => res.render('home/index', {
    cookie: {
        base: 'light',
        addons: ['coconut', 'sprinkles', 'honey']
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),

}))

module.exports = {
    homeRouter
}