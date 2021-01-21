const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('productos')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// const controller = {
// 	root: (req, res) => {
// 		res.render('pc-Gaming');
// 	}
// };

const controller = {
	root: (req, res) => {
		const productos = productModel.leerJson(producto =>{
			return producto
		})

		// const product_pcg = productModel.filterBySomething(producto =>{
		// 	return producto.promocion == 'promo-teclado';
		// })
        
		return res.render('pc-gaming', {productos});
	},

	byCategory: (req, res) =>{
		const all = productModel.leerJson(producto =>{
			return producto
		})

		const productos = productModel.filterBySomething(producto => {
			return producto.category == req.params.category;
		})

		return res.render('pc-gaming', {productos})

	}
};


module.exports = controller;