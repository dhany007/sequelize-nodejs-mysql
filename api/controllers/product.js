const model = require('../db/models');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const { count, rows } = await model.products.findAndCountAll();
      res.json({
        status: 'Success',
        code: 200,
        message: 'Success get all data products',
        count,
        data: rows,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getOneProduct: async (req, res) => null,
};
