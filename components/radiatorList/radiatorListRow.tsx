import { Box, Hidden, TableCell, TableRow, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

import AddToCartButton from '../addToCartButton/addToCartButton'
import OfferMetadata from '../seo/OfferMetadata'

import getRadiatorData from '../../utils/getRadiatorData'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import * as styles from '../../styles/styles'

type RadiatorListRowProps = {
	model: ModelOrigin
	color: ColorOrigin
	connection: ConnectionOrigin
	sectionQnty: number
	price: number
}

const RadiatorListRow: NextPage<RadiatorListRowProps> = ({ model, color, connection, sectionQnty, price }) => {
	const { titleString, skuString, lengthString, dt50String, dt60String, priceString, oldPriceString } = getRadiatorData({
		model,
		color,
		connection,
		sectionQnty,
		price,
	})

	return (
		<TableRow
			sx={{ '&:hover': { backgroundColor: '#eeeeee' } }}
			itemProp='offers'
			itemScope
			itemType='https://schema.org/Offer'
		>
			<Hidden smDown>
				<TableCell
					align='left'
					sx={styles.smallText}
				>
					{skuString}
				</TableCell>
			</Hidden>
			<TableCell
				component='th'
				scope='row'
			>
				<Box padding={{ xs: '5px', sm: '5px', md: '0px' }}>
					<Typography sx={{ ...styles.smallText }}>
						<a
							style={{ textDecoration: 'none' }}
							href={`/models/${model.id}/${sectionQnty}`}
						>
							<Typography
								sx={{ ...styles.smallTextRedLink }}
								component='span'
							>
								{titleString}
							</Typography>
						</a>
					</Typography>
					{/* <Typography sx={ styles.smallTextRed }></Typography> */}
					<Hidden mdUp>
						<Typography
							sx={styles.smallTextThin}
							component='span'
						>
							{lengthString} мм, {dt60String} Вт&#42;
						</Typography>
					</Hidden>
				</Box>
			</TableCell>
			<Hidden mdDown>
				<TableCell
					component='th'
					scope='row'
					sx={styles.smallText}
					align='center'
				>
					{lengthString}
				</TableCell>
			</Hidden>
			<Hidden mdDown>
				<TableCell
					component='th'
					scope='row'
					sx={styles.smallText}
					align='center'
				>
					{dt50String}
				</TableCell>
			</Hidden>
			<Hidden mdDown>
				<TableCell component='th' scope='row' sx={styles.smallText} align='center'>
					{dt60String}
				</TableCell>
			</Hidden>
			<TableCell
				component='th'
				scope='row'
				sx={styles.smallText}
				align='right'
			>
				<Typography
					sx={{
						...styles.smallText,
						color: 'gray',
						textDecoration: 'line-through',
						fontWeight: 200,
					}}
					display='inline'
					marginRight='10px'
				>
					{oldPriceString}
				</Typography>
				<span>
					<OfferMetadata inStock={model.inStock === 'true'} url={`https://arboniashop.ru/models/${model.id}/${sectionQnty}`} />
					<meta
						itemProp='priceCurrency'
						content='RUB'
					/>
					<meta
						itemProp='price'
						content={priceString.replace(/[^0-9]/g, '').trim()}
					/>
					{priceString.replace(',', '').replace(' ', '').trim()}
				</span>
			</TableCell>
			<TableCell
				component='th'
				scope='row'
				sx={styles.smallText}
				align='center'
			>
				<Box paddingLeft='20px'>
					<AddToCartButton
						model={model}
						colorId={color.id}
						connectionId={connection.id}
						sectionQnty={sectionQnty}
						qnty={1}
						buttonSize={'small'}
						buttonType={'text'}
						buttonColor={'dark'}
					/>
				</Box>
			</TableCell>
		</TableRow>
	)
}

export default RadiatorListRow
