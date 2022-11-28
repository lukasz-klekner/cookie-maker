const express = require('express')
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies')
const { handlebarsHelpers } = require('../handlebars-helpers')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    const { cookieBase } = req.cookies
    const sum = cookieBase ? handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), cookieBase): 0 +
    ['coconut', 'sprinkles', 'honey'].reduce((prev, current) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS) ,current), 0)

    res.render('home/index', {
    cookie: {
        base: cookieBase,
        addons: ['coconut', 'sprinkles', 'honey']
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    sum,

})})

module.exports = {
    homeRouter
}