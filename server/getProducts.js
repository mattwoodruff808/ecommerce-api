const products = require('../products.json')

const getProducts  = (req, res) => {
    const {price} = req.query

    if (price) {
        const filteredPrice = products.filter(element => element.price >= +price)
        return res.status(200).send(filteredPrice)
    }
    res.status(200).send(products)
}

module.exports = getProducts