// Create pages progamatically
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
        query GetProducs {
            products: allContentfulProduct {
            nodes {
                slug
            }
        }
    }
  `);
	result.data.products.nodes.forEach((product) => {
		createPage({
			path: `/products/${product.slug}`,
			component: path.resolve('src/templates/product.js'),
			context: {
				slug: product.slug
			}
		});
	});
};
