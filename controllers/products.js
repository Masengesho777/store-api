const product = require('../models/products')  //guhamagara models kugirango tuyikoreshe

const getAllproductsStatic = async (req, res) => {
  //throw new Error('testing async error');
  const products = await product.find({})

  res.status(200).json(products)
}

const getAllproducts = async (req, res) => {
  const { featured, company, name } = req.query
  const queryObject = {}
  queryObject.featured = featured === 'true' ? true : false

  if (company) {
    queryObject.company = company    
  }
  if (name) {
    queryObject.name = name          
  }

  const products = await product.find(queryObject)    
  res.status(200).json({products , nHints :product.length})    

}


module.exports = {
  getAllproducts,
  getAllproductsStatic
}