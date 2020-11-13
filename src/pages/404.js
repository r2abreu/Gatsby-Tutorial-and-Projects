import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
	return (
		<Layout>
			<p>
				That page doesn't exist, so go <Link to="/">back</Link>.
			</p>
		</Layout>
	);
};
