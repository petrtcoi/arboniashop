import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

import * as styles from '../../styles/styles'

type CatalogHubId =
	| 'standard'
	| 'low-models'
	| 'high-models'
	| 'ral9016'
	| 'stalnye-trubchatye-radiatory'
	| 'radiatory-dlya-panoramnyh-okon'
	| 'arbonia-s-nizhnim-podklyucheniem'

type CatalogPopularLinksProps = {
	current?: CatalogHubId
}

const catalogLinks: { id: CatalogHubId; href: string; title: string }[] = [
	{
		id: 'stalnye-trubchatye-radiatory',
		href: '/catalog/stalnye-trubchatye-radiatory',
		title: 'Стальные трубчатые радиаторы Arbonia',
	},
	{ id: 'standard', href: '/catalog/standard', title: 'Радиаторы под окно (склад)' },
	{ id: 'low-models', href: '/catalog/low-models', title: 'Низкие радиаторы (склад)' },
	{ id: 'high-models', href: '/catalog/high-models', title: 'Вертикальные радиаторы (склад)' },
	{ id: 'ral9016', href: '/catalog/ral9016', title: 'Arbonia RAL 9016 (склад)' },
	{
		id: 'radiatory-dlya-panoramnyh-okon',
		href: '/catalog/radiatory-dlya-panoramnyh-okon',
		title: 'Радиаторы для панорамных окон',
	},
	{
		id: 'arbonia-s-nizhnim-podklyucheniem',
		href: '/catalog/arbonia-s-nizhnim-podklyucheniem',
		title: 'Arbonia с нижним подключением №69 ТВВ',
	},
]

const CatalogPopularLinks: React.FC<CatalogPopularLinksProps> = ({ current }) => {
	const links = catalogLinks.filter(link => link.id !== current)

	return (
		<Box marginTop='60px'>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
				>
					<Divider
						variant='fullWidth'
						textAlign='left'
					>
						<Typography
							component='h2'
							sx={{ ...styles.standardText, color: '#ef7d00' }}
						>
							Популярные подборки
						</Typography>
					</Divider>
				</Grid>
				{links.map(link => (
					<Grid
						item
						xs={12}
						md={6}
						key={link.id}
					>
						<Box paddingLeft='10px'>
							<a
								style={{ textDecoration: 'none' }}
								href={link.href}
							>
								<Typography sx={{ ...styles.standartTextThinLink }}>{link.title}</Typography>
							</a>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default CatalogPopularLinks
