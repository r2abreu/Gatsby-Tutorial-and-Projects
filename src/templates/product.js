import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Image from 'gatsby-image';

export default ({ data }) => {
	const { contentfulProduct: { id, title, price, description: { description }, image: { fluid } } } = data;
	return (
		<Layout>
			<div className="product">
				<Link to="/products">Back to products</Link>
				<h1>{title}</h1>
				<h2>{price}</h2>
				<figure>
					<Image fluid={fluid} alt={title} title={title} />
				</figure>
				<p>{description}</p>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleProduct($slug: String) {
		contentfulProduct(slug: { eq: $slug }) {
			id
			title
			price
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			description {
				description
			}
		}
	}
`;
