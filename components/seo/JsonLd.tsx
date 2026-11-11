import React from 'react'

// React escapes script children as HTML. JSON-LD must contain raw JSON, while
// escaping '<' prevents content from prematurely closing the script element.
const JsonLd: React.FC<{ data: unknown; id?: string }> = ({ data, id }) => (
	<script
		id={id}
		type='application/ld+json'
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
	/>
)

export default JsonLd
