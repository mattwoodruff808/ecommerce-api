const products = require('../products.json')

const getProduct = (req, res) => {
    const {id} = req.params

    const product = products.find(element => element.id === +id)
    if (!product) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(product)
}

module.exports = getProduct