import React from 'react';
import { Link } from 'gatsby';

export default () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blog/">Blog</Link>
				</li>
				<li>
					<Link to="/products/">Products</Link>
				</li>
			</ul>
		</nav>
	);
};
