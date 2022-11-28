const express = require('express')
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies')
const { handlebarsHelpers } = require('../handlebars-helpers')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    const sum = handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), 'light') +
    ['coconut', 'sprinkles', 'honey'].reduce((prev, current) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS) ,current), 0)

    res.render('home/index', {
    cookie: {
        base: 'light',
        addons: ['coconut', 'sprinkles', 'honey']
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    sum,

})})

module.exports = {
    homeRouter
}