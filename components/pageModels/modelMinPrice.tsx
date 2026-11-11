import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'

import { ModelOrigin } from '../../models/modelOrigin.model'

import formatPrice from '../../utils/formatPrice'
import OfferMetadata from '../seo/OfferMetadata'

import * as styles from '../../styles/styles'

type ModelMinPriceProps = {
	model: ModelOrigin
	minPrice: number
	setTabBuy: () => void
}

const ModelMinPrice: React.FC<ModelMinPriceProps> = ({ model, minPrice, setTabBuy }) => {
	const [hidePriceOffer, setHidePriceOffer] = useState<boolean>(true)
	const handlePriceOffer = () => {
		setHidePriceOffer(false)
	}

	return (
        <Box>
            <Box sx={{
                marginRight: '10px'
            }}>
				<Typography
                    sx={[{
                        display: 'inline'
                    }, styles.standardText]}>
					Цена от:{' '}
				</Typography>
				<Typography
                    sx={{
                        display: 'inline',
                        fontSize: '30px',
                        fontWeight: 600
                    }}>
					<span
						itemProp='offers'
						itemScope
						itemType='https://schema.org/Offer'
					>
						<OfferMetadata
							inStock={model.inStock === 'true'}
							url={model.inStock === 'true' ? `https://arboniashop.ru/models/${model.id}/${model.inStockSections?.split(',')[0] || 4}` : `https://arboniashop.ru/models/${model.id}`}
						/>
						<meta
							itemProp='priceCurrency'
							content='RUB'
						/>
						<meta
							itemProp='price'
							content={minPrice.toString().replace(',', '').trim()}
						/>
						&nbsp;{formatPrice(minPrice)} руб
					</span>
				</Typography>
			</Box>
            <Box sx={{
                display: 'inline'
            }}>
				<Button
					variant='contained'
					onClick={() => setTabBuy()}
					href='#buy-section'
				>
					Купить
				</Button>
			</Box>

            <Box sx={{
                marginTop: '30px'
            }}>
				<a onClick={() => handlePriceOffer()}>
					<Typography sx={styles.smallTextGreenUnderline}>
						<span style={{ textDecorationStyle: 'dotted' }}> Нашли дешевле? Сделаем дополнительную скидку</span>
					</Typography>
				</a>
			</Box>

            {hidePriceOffer === false && (
				<Box sx={{
                    marginTop: '10px'
                }}>
					<Typography sx={styles.smallText}>
						Мы всегда стремимся дать выгодные цены для наших покупателей. Если вы нашли радиаторы Arbonia по более
						низким ценам, то свяжитесь с нашими специалистами и предоставьте ссылку на соответствущую страницу или готовое
						коммерческое предложение.
					</Typography>
					<Box sx={{
                        marginTop: '10px'
                    }}>
						<Divider variant='middle' />
					</Box>
				</Box>
			)}
        </Box>
    );
}

export default ModelMinPrice
