import React from 'react'

const OfferMetadata: React.FC<{ inStock: boolean; url?: string }> = ({ inStock, url }) => (
	<>
		<link itemProp='availability' href={`https://schema.org/${inStock ? 'InStock' : 'PreOrder'}`} />
		<link itemProp='itemCondition' href='https://schema.org/NewCondition' />
		{url && <link itemProp='url' href={url} />}
		<span itemProp='seller' itemScope itemType='https://schema.org/Organization' itemID='https://arboniashop.ru/#organization'>
			<meta itemProp='name' content='ArboniaShop' />
			<link itemProp='url' href='https://arboniashop.ru/' />
		</span>
	</>
)

export default OfferMetadata
