/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Projecto Gatsby',
		description: 'Projecto de prueba, tutorial Gatsby',
		author: 'Arturo Abreu',
		data: [ 'item1', 'item2' ],
		person: {
			name: 'Arturo',
			age: '28'
		}
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `3mem05h15i4q`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: '7oRYmkwTlIGQfWuESLyczZzImUCIB8RPnPIaxUv_BCo'
			}
		}
	]
};
