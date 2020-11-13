import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
	return (
		<React.Fragment>
			<nav>
				<Link to="/blog/">Blog</Link>
				<Link to="https://www.gatsbyjs.org" target="_blank">
					Gatsby Website
				</Link>
			</nav>
			<h1>This is the Home Page</h1>
		</React.Fragment>
	);
}
