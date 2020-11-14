import React from 'react';
import Layout from '../components/Layout';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import { graphql } from 'gatsby';

export default ({ data }) => {
	const { site: { siteMetadata: { person: { name, age } } } } = data;
	return (
		<Layout>
			<Header />
			<HeaderStatic />
			<hr />
			<h2>Page Query</h2>
			<h3>{name}</h3>
			<h3>{age}</h3>
		</Layout>
	);
};

export const query = graphql`
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
