import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ComponentName = () => (
	<StaticQuery
		query={graphql`
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
		`}
		render={(data) => {
			return (
				<div>
					<hr />
					<h2>StaticQuery Component</h2>
					<h4>{data.site.siteMetadata.description}</h4>
				</div>
			);
		}}
	/>
);

export default ComponentName;
