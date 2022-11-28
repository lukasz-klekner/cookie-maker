const handlebarsHelpers = {
    'find-price': (entries, selectedItem) => {
        const foundItem = entries.find(([name] ) => name === selectedItem)

        if(!foundItem){
            throw new Error('Cannot find price of ${selectedItem}')
        }

        const [,price] = foundItem
        return price
    },
    pricify: price => price.toFixed(2)
}

module.exports = {
    handlebarsHelpers
}