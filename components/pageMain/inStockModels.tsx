import { Box, Divider, Grid, Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as styles from '../../styles/styles'

export function InStockModels() {
	return (
		<Box marginTop='70px'>
			<Typography
				variant='h5'
				component='h2'
				id='in_stock_section'
				textAlign='left'
				// sx={{ textTransform: 'uppercase' }}
			>
				Складские модели Arbonia
			</Typography>

			<Box
				marginTop='20px'
				maxWidth='700px'
			>
				<Typography sx={{ ...styles.standardText }}>
					В наличии поддерживаются наиболее популярные модели трубчатых
					радиаторов Arbonia. Сюда входят как невысокие модели высотой 30 см,
					так и вертикальные батареи 180 см. Склады находятся в Москве и в
					Санкт-Петербурге. В другие регионы доставка осуществляется
					транспортными компаниями. Ниже представлен{' '}
					<a
						href='#all-models'
						style={{ textDecoration: 'none' }}
					>
						{' '}
						<Typography
							sx={{ ...styles.smallTextDotted, ...styles.standardText }}
							component={'span'}
						>
							полный каталог моделей
						</Typography>
					</a>
					, доступных для заказа.
				</Typography>
			</Box>

			{/* Стандартная высота */}
			<Box marginTop='40px'>
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
								component='h3'
								sx={{ ...styles.standardText, color: '#ef7d00' }}
							>
								Стандартная высота (50-60 см)
							</Typography>
						</Divider>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Боковое подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box id='2050-9016-69tvv'>
								<Link href='/models/2050-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2050
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='2057-9016-69tvv'>
								<Link href='/models/2057-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2057
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='3050-9016-69tvv'>
								<Link href='/models/3050-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3050
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='3057-9016-69tvv'>
								<Link href='/models/3057-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3057
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Нижнее подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box id='2050-9016-12'>
								<Link href='/models/2050-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2050
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='2057-9016-12'>
								<Link href='/models/2057-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2057
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='3050-9016-12'>
								<Link href='/models/3050-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3050
										</Typography>
									</a>
								</Link>
							</Box>
							<Box id='3057-9016-12'>
								<Link href='/models/3057-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3057
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>

			{/* Высокие */}
			<Box marginTop='40px'>
				<Divider
					variant='fullWidth'
					textAlign='left'
				>
					<Typography
						component='h3'
						sx={{ ...styles.standardText, color: '#ef7d00' }}
					>
						Высокие радиаторы (от 150 см)
					</Typography>
				</Divider>
				{/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
              Такие радиаторы уже нельзя поставить под окна. Но они отлично подходят для установки на узкие ниши. Занимая мало места, высокие радиаторы обеспечивают высокую тепловую мощность.
          </Typography> */}
				<Grid
					container
					spacing={2}
					marginTop={'5px'}
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Боковое подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box
								id='2180-9016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-7016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-7016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (RAL 7016)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-sf3-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-sf3-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (SF-3 Anthrazit metallic)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-9005-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-9005-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (RAL 9005 matt)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-9016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-7016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-7016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180 (RAL 7016)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-sf3-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-sf3-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180 (SF-3 Anthrazit metallic)
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Нижнее подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box
								id='2180-9016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-7016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-7016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (RAL 7016)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-sf3-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-sf3-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (SF-3 Anthrazit metallic)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='2180-9005-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2180-9005-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2180 (RAL 9005 matt)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-9016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-7016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-7016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180 (RAL 7016)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3180-sf3-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3180-sf3-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3180 (SF-3 Anthrazit metallic)
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>

			{/* Низкие радиаторы */}
			<Box marginTop='40px'>
				<Divider
					variant='fullWidth'
					textAlign='left'
				>
					<Typography
						component='h3'
						sx={{ ...styles.standardText, color: '#ef7d00' }}
					>
						Невысокие радиаторы (до 40 см)
					</Typography>
				</Divider>
				{/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
              Радиаторы для установки под окна с низкими подоконниками (50-60 см), а также для монтажа на ножки перед панорамными окнами
          </Typography> */}
				<Grid
					container
					spacing={2}
					marginTop={'5px'}
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Боковое подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box
								id='2030-9016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/2030-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 2030
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3030-9016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3030-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3030
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3037-9016-12'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3037-9016-12'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3037
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Typography sx={{ ...styles.standardText }}>
							Нижнее подключение
						</Typography>
						<Box paddingLeft='10px'>
							<Box
								id='3030-9016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3030-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3030
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3030-9005-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3030-9005-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3030 (RAL 9005 matt)
										</Typography>
									</a>
								</Link>
							</Box>
							<Box
								id='3037-9016-69tvv'
								paddingTop='50px'
								marginTop='-50px'
							>
								<Link href='/models/3037-9016-69tvv'>
									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standartTextThinLink }}>
											Arbonia 3037
										</Typography>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>

			{/* Популярные подборки */}
			<Box marginTop='40px'>
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
								component='h3'
								sx={{ ...styles.standardText, color: '#ef7d00' }}
							>
								Популярные подборки
							</Typography>
						</Divider>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						{/* <Typography sx={ { ...styles.standardText } }>
                              По цвету
                          </Typography> */}
						<Box paddingLeft='10px'>
							<Link href='/catalog/low-models'>
								<a style={{ textDecoration: 'none' }}>
									<Typography sx={{ ...styles.standartTextThinLink }}>
										Низкие радиаторы (склад)
									</Typography>
								</a>
							</Link>
							<Link href='/catalog/high-models'>
								<a style={{ textDecoration: 'none' }}>
									<Typography sx={{ ...styles.standartTextThinLink }}>
										Высокие радиаторы (склад)
									</Typography>
								</a>
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Box paddingLeft='10px'>
							<Link href='/catalog/ral9016'>
								<a style={{ textDecoration: 'none' }}>
									<Typography sx={{ ...styles.standartTextThinLink }}>
										Arbonia RAL 9016 (склад)
									</Typography>
								</a>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
