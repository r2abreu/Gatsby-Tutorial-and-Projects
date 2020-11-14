import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';

export default class products extends Component {
	render() {
		const data = this.props.data.allContentfulProduct.nodes;
		console.log(data);
		const renderedList = data.map((node) => {
			return (
				<div key={node.id}>
					<h2>{node.title}</h2>
					<figure>
						<Image fluid={node.image.fluid} alt={node.title} title={node.title} />
					</figure>
					<h3>&euro;{node.price}</h3>
					<Link to={`/products/${node.slug}`}>More Information</Link>
				</div>
			);
		});
		return (
			<Layout>
				<h1>This are our products</h1>
				<article>{renderedList}</article>
			</Layout>
		);
	}
}

export const query = graphql`
	{
		allContentfulProduct {
			nodes {
				id
				title
				slug
				price
				image {
					fluid {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;
