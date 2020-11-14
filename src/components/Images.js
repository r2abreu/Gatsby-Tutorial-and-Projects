import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import img from '../images/desert.jpeg';
import styles from '../../src/styles.css';

const getData = graphql`
	{
		fixed: file(relativePath: { eq: "astronaut.jpeg" }) {
			childImageSharp {
				fixed {
					src
					...GatsbyImageSharpFixed
				}
			}
		}
		fluid: file(relativePath: { eq: "space.jpeg" }) {
			childImageSharp {
				fluid {
					src
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default () => {
	// const { fixed: { childImageSharp: { fixed: { src } } } } = data;
	const data = useStaticQuery(getData);
	return (
		<React.Fragment>
			<h1>Images Example</h1>
			<section>
				<article>
					<figure>
						<img src={img} alt="this is a desert" title="Arizona Desert" />
						<figcaption>Normal React Image import</figcaption>
					</figure>
					<figure>
						<Image fixed={data.fixed.childImageSharp.fixed} alt="astronaut" title="Astronaut" />
						<figcaption>Fixed Gatsby Image with Blur lazy load</figcaption>
					</figure>
					<figure>
						<Image fluid={data.fluid.childImageSharp.fluid} alt="space" title="Space" />
						<figcaption>Fluid Gatsby image with SVG lazy load</figcaption>
					</figure>
				</article>
			</section>
		</React.Fragment>
	);
};
