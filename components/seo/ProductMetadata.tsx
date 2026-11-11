import React from 'react'

const ProductMetadata: React.FC<{ description: string; sku: string }> = ({ description, sku }) => (
	<>
		<span itemProp='brand' itemScope itemType='https://schema.org/Brand'>
			<meta itemProp='name' content='Arbonia' />
		</span>
		<meta itemProp='description' content={description} />
		<meta itemProp='sku' content={sku} />
	</>
)

export default ProductMetadata
