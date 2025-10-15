import { Box, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { ModelOrigin } from '../../models/modelOrigin.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

type CatalogProps = {
	models: ModelOrigin[]
}
const MODELS_GROUPS = [
	{ firstChar: '2', title: '2-трубчатые (65 мм)' },
	{ firstChar: '3', title: '3-трубчатые (105 мм)' },
	{ firstChar: '4', title: '4-трубчатые (145 мм)' },
	{ firstChar: '5', title: '5-трубчатые (185 мм)' },
	{ firstChar: '6', title: '6-трубчатые (225 мм)' },
]

export const AllModels: NextPage<CatalogProps> = ({ models }) => {
	const outStockModels = models.filter(x => !x.inStock)

	return (
		<Box>
			<Box sx={{ ...global.pagePadding }}>
				{/* Радиаторы под заказ */}
				<Box marginTop='100px'>
					<Typography
						variant='h5'
						component='h2'
						id='out_stock_section'
						textAlign='left'
						// sx={{ textTransform: 'uppercase' }}
					>
						Купить трубчатые радиаторы Arbonia под заказ
					</Typography>
					<Box marginTop={{ xs: '20px', md: '40px' }} />
					<Grid
						container
						spacing={2}
					>
						{MODELS_GROUPS.map(group => {
							return (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									key={group.title}
								>
									<Box
										textAlign='center'
										marginTop='20px'
									>
										<div style={{ height: '150px' }}>
											<img
												// layout='fill'
												height={150}
												width={120}
												src={`/images/schemas/${group.firstChar}.png`}
												alt={`Радиаторы Arbonia ${group.title}`}
											/>
										</div>
										<Typography sx={{ ...styles.standardText }}>{group.title}</Typography>
									</Box>
									<Box
										paddingLeft='10px'
										textAlign='center'
									>
										{outStockModels
											.filter((model: ModelOrigin) => model.id[0] === group.firstChar)
											.sort((a, b) => (+a.id > +b.id ? 1 : -1))
											.map((model: ModelOrigin) => {
												return (
													<Box
														key={model.id}
														id={model.id}
														paddingTop='50px'
														marginTop='-50px'
													>
														<Link href={`/models/${model.id}`}>
															<Typography sx={{ ...styles.standartTextThinLink }}>Arbonia {model.nameShort}</Typography>
														</Link>
													</Box>
												)
											})}
									</Box>
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}
