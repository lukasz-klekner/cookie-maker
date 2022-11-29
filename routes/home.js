const express = require('express')
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies')
const { getAddonsFromRequest } = require('../utils/get-addons-from-request')
const { handlebarsHelpers } = require('../utils/handlebars-helpers')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    const { cookieBase } = req.cookies
    const addons = getAddonsFromRequest(req)

    const sum = (cookieBase ? handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), cookieBase) : 0) + addons.reduce((prev, current) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS) ,current), 0)

    res.render('home/index', {
    cookie: {
        base: cookieBase,
        addons: addons
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    sum,

})})

module.exports = {
    homeRouter
}