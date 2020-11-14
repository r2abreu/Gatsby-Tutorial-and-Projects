import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const getData = graphql`
	{
		site {
			siteMetadata {
				title
				description
				author
				data
				person {
					name
					age
				}
			}
		}
	}
`;
export default () => {
	const { site: { siteMetadata: { title, description, author } } } = useStaticQuery(getData);

	return (
		<div>
			<h2>StaticQuery Hook</h2>
			<h3>Titulo: {title}</h3>
			<h3>Descripcion: {description}</h3>
			<h3>Autor: {author}</h3>
		</div>
	);
};
