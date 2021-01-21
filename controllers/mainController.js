const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('productos')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Cambiar nombres de productos del INDEX con JS.


const controller = {
	root: (req, res) => {
		const productos = productModel.leerJson(producto =>{
			return producto
		})

		const category = productModel.filterBySomething(producto =>{
			return producto.category == 'mouse';
		})
        
		return res.render('index', {productos, category});
	}
};

module.exports = controller;