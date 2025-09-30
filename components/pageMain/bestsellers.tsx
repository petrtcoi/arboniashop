import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'

import Link from 'next/link'
import { CurrencyContext } from '../../contexts/currencyContext'
import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'
import * as styles from '../../styles/styles'
import calcRadiatorCost from '../../utils/calcRadiatorCost'

export const linkStyle = {
	marginTop: '5px',
	marginBottom: '5px',
	fontSize: '16px',
	fontWeight: '400',
	textDecoration: 'none',
	color: '#333333',
	cursor: 'pointer',
	'&:hover': {
		textDecoration: 'underline',
	},
}

type BestsellersProps = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
}

const Bestsellers: React.FC<BestsellersProps> = props => {
	const { models, colors, connections } = props

	const { rateEuro, isFetching } = useContext(CurrencyContext)
	const color9016 = colors.find(x => x.id === '9016') || colors[0]
	const connection12 = connections.find(x => x.id === '12-34') || connections[0]

	const model2180 = models.find(x => x.id === '2180-9016-12') || models[0]
	const { price: model2180MinPrice } = calcRadiatorCost({
		model: model2180,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 4,
	})

	const model3057 = models.find(x => x.id === '3057-9016-12') || models[0]
	const { price: model3057MinPrice } = calcRadiatorCost({
		model: model3057,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 8,
	})

	const model3180 = models.find(x => x.id === '3180-9016-12') || models[0]
	const { price: model3180MinPrice } = calcRadiatorCost({
		model: model3180,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 4,
	})

	const model3030 = models.find(x => x.id === '3030-9016-12') || models[0]
	const { price: model3030MinPrice } = calcRadiatorCost({
		model: model3030,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 10,
	})

	const model2050 = models.find(x => x.id === '2050-9016-12') || models[0]
	const { price: model2050MinPrice } = calcRadiatorCost({
		model: model2050,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 8,
	})

	const model3050 = models.find(x => x.id === '3050-9016-12') || models[0]
	const { price: model3050MinPrice } = calcRadiatorCost({
		model: model3050,
		color: color9016,
		connection: connection12,
		currencyRate: rateEuro,
		sectionQnty: 8,
	})

	return (
		<Box>
			<Typography
				variant='h5'
				component='h2'
				textAlign='left'
			>
				Лидеры продаж
			</Typography>
			<Box
				marginTop='20px'
				maxWidth='700px'
			>
				<Typography sx={{ ...styles.standardText }}>
					У нас вы можете купить широкий ассортимент трубчатых радиаторов Arbonia, включая модели, поставляемые под
					заказ. Наиболее популярные модели поддерживаются в наличии на наших складах в Москве и Санкт-Петербурге и
					представлены ниже. Они могут быть поставлены в любой город России в кратчайшие сроки.
				</Typography>
			</Box>
			<Box
				marginTop='40px'
				maxWidth='1200px'
				marginX='auto'
				itemScope
				itemType='https://schema.org/ItemList'
			>
				<Grid
					container
					alignItems={'stretch'}
					spacing={4}
				>
					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box>
							<Box textAlign='center'>
								<Link href='/models/2180'>
									<a style={{ textDecoration: 'none' }}>
										<div
											style={{
												...styles.roundSquareImage,
												display: 'inline-block',
											}}
										>
											<img
												src='/images/models/2180-0.jpeg'
												width={'200px'}
												height={'200px'}
												sizes='200px'
												alt='Трубчатый радиатор Arbonia 2180'
												itemProp='image'
											/>
										</div>

										<Typography
											sx={{ ...linkStyle, fontWeight: '600' }}
											component='h3'
											itemProp='name'
										>
											Радиатор Arbonia 2180
										</Typography>
									</a>
								</Link>
							</Box>
							<Box paddingX='15px'>
								<Typography sx={{ ...styles.smallText }}>
									Самая популярная модель трубчатого радиатора Arbonia. Подходит для установки в узких нишах. Благодаря
									большой высоте обладает высокой теплоотдачей.
								</Typography>
								<Box
									marginTop='15px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Тип модели</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText }}>2-трубчатый радиатор</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Высота</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box
										sx={{ ...styles.smallText }}
										itemProp='height'
									>
										180 см
									</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Толщина</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box
										sx={{ ...styles.smallText }}
										itemProp='depth'
									>
										65 мм
									</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText }}>164 Вт</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Подключения</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText }}>белый, RAL 7016, SF-3</Box>
								</Box>
								<Box
									marginTop='7px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
								>
									<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText }}>от 4 до 12</Box>
								</Box>
								<Box
									marginTop='12px'
									display='flex'
									flexDirection={'row'}
									alignItems={'bottom'}
									width='100%'
									gap={1}
									itemProp='offers'
									itemScope
									itemType='https://schema.org/AggregateOffer'
								>
									<meta
										itemProp='priceCurrency'
										content='RUB'
									/>
									<meta
										itemProp='lowPrice'
										content={model2180MinPrice.noConsole.toString()}
									/>
									<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
									<Box
										sx={{ borderBottom: '1px dotted black' }}
										flexGrow={1}
									/>
									<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
										от {model2180MinPrice.noConsole.toLocaleString()} руб.
									</Box>
								</Box>
							</Box>
						</Box>
						<Box marginTop='25px'>
							<Button
								fullWidth
								variant='outlined'
								href='/models/2180'
							>
								Купить
							</Button>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box textAlign='center'>
							<Link href='/models/3057'>
								<a style={{ textDecoration: 'none' }}>
									<div
										style={{
											...styles.roundSquareImage,
											display: 'inline-block',
										}}
									>
										<img
											src='/images/models/3057-0.jpeg'
											width={'200px'}
											height={'200px'}
											sizes='200px'
											alt='Трубчатый радиатор Arbonia 3057'
											itemProp='image'
										/>
									</div>

									<Typography
										sx={{ ...linkStyle, fontWeight: '600' }}
										component='h3'
										itemProp='name'
									>
										Радиатор Arbonia 3057
									</Typography>
								</a>
							</Link>
						</Box>
						<Box paddingX='15px'>
							<Typography sx={{ ...styles.smallText }}>
								Трехтрубчатый горизонтальный радиатор для установки под окна. При боковом подключении имеет стандартное
								межосевое расстояние 500 мм, которое позволяет устанавливать его вместо старых алюминиевых или чугунных
								батарей.
							</Typography>
							<Box
								marginTop='15px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Тип модели</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>3-трубчатый радиатор</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Высота</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='height'
								>
									57 см
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Толщина</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='depth'
								>
									105 мм
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>78 Вт</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Подключения</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>белый</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>от 8 до 30</Box>
							</Box>
							<Box
								marginTop='12px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
								itemProp='offers'
								itemScope
								itemType='https://schema.org/AggregateOffer'
							>
								<meta
									itemProp='priceCurrency'
									content='RUB'
								/>
								<meta
									itemProp='lowPrice'
									content={model3057MinPrice.noConsole.toString()}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
									от {model3057MinPrice.noConsole.toLocaleString()} руб.
								</Box>
							</Box>
							<Box marginTop='25px'>
								<Button
									fullWidth
									variant='outlined'
									href='/models/2180'
								>
									Купить
								</Button>
							</Box>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box textAlign='center'>
							<Link href='/models/3180'>
								<a style={{ textDecoration: 'none' }}>
									<div
										style={{
											...styles.roundSquareImage,
											display: 'inline-block',
										}}
									>
										<img
											src='/images/models/3057-2.jpeg'
											width={'200px'}
											height={'200px'}
											sizes='200px'
											alt='Трубчатый радиатор Arbonia 3180'
											itemProp='image'
										/>
									</div>

									<Typography
										sx={{ ...linkStyle, fontWeight: '600' }}
										component='h3'
										itemProp='name'
									>
										Радиатор Arbonia 3180
									</Typography>
								</a>
							</Link>
						</Box>
						<Box paddingX='15px'>
							<Typography sx={{ ...styles.smallText }}>
								Трехтрубчатый вертикальный радиатор. Обладает наибольшей мощностью среди всех складских моделей Arbonia.
								Подходит для установки в больших помещениях с высокими потолками.
							</Typography>
							<Box
								marginTop='15px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Тип модели</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>3-трубчатый радиатор</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Высота</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='height'
								>
									180 см
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Толщина</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='depth'
								>
									105 мм
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>219 Вт</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Подключения</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>белый</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>от 4 до 12</Box>
							</Box>
							<Box
								marginTop='12px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
								itemProp='offers'
								itemScope
								itemType='https://schema.org/AggregateOffer'
							>
								<meta
									itemProp='priceCurrency'
									content='RUB'
								/>
								<meta
									itemProp='lowPrice'
									content={model3180MinPrice.noConsole.toString()}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
									от {model3180MinPrice.noConsole.toLocaleString()} руб.
								</Box>
							</Box>
							<Box marginTop='25px'>
								<Button
									fullWidth
									variant='outlined'
									href='/models/3180'
								>
									Купить
								</Button>
							</Box>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box textAlign='center'>
							<Link href='/models/3030'>
								<a style={{ textDecoration: 'none' }}>
									<div
										style={{
											...styles.roundSquareImage,
											display: 'inline-block',
										}}
									>
										<img
											src='/images/models/3030-0.jpeg'
											width={'200px'}
											height={'200px'}
											sizes='200px'
											alt='Трубчатый радиатор Arbonia 3030'
											itemProp='image'
										/>
									</div>

									<Typography
										sx={{ ...linkStyle, fontWeight: '600' }}
										component='h3'
										itemProp='name'
									>
										Радиатор Arbonia 3030
									</Typography>
								</a>
							</Link>
						</Box>
						<Box paddingX='15px'>
							<Typography sx={{ ...styles.smallText }}>
								Низкий 3-трубчатый радиатор. Высота: 30 см. Боковое и нижнее подключение. В наличии в белом цвете.
								Подходит для установки под окна с низкими подоконниками.
							</Typography>
							<Box
								marginTop='15px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Тип модели</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>3-трубчатый радиатор</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Высота</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='height'
								>
									30 см
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Толщина</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='depth'
								>
									105 мм
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>41 Вт</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Подключения</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>белый</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>от 10 до 32</Box>
							</Box>
							<Box
								marginTop='12px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
								itemProp='offers'
								itemScope
								itemType='https://schema.org/AggregateOffer'
							>
								<meta
									itemProp='priceCurrency'
									content='RUB'
								/>
								<meta
									itemProp='lowPrice'
									content={model3030MinPrice.noConsole.toString()}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
									от {model3030MinPrice.noConsole.toLocaleString()} руб.
								</Box>
							</Box>
							<Box marginTop='25px'>
								<Button
									fullWidth
									variant='outlined'
									href='/models/3030'
								>
									Купить
								</Button>
							</Box>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box textAlign='center'>
							<Link href='/models/2050'>
								<a style={{ textDecoration: 'none' }}>
									<div
										style={{
											...styles.roundSquareImage,
											display: 'inline-block',
										}}
									>
										<img
											src='/images/models/2050-0.jpg'
											width={'200px'}
											height={'200px'}
											sizes='200px'
											alt='Трубчатый радиатор Arbonia 2050'
											itemProp='image'
										/>
									</div>

									<Typography
										sx={{ ...linkStyle, fontWeight: '600' }}
										component='h3'
										itemProp='name'
									>
										Радиатор Arbonia 2050
									</Typography>
								</a>
							</Link>
						</Box>
						<Box paddingX='15px'>
							<Typography sx={{ ...styles.smallText }}>
								Плоский двухтрубчатый радиатор высотой. Стандартная высота 50 см - для установки под окна. Боковое и
								нижнее подключение. В наличии в белом цвете.
							</Typography>
							<Box
								marginTop='15px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Тип модели</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>2-трубчатый радиатор</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Высота</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='height'
								>
									50 см
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Толщина</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='depth'
								>
									65 мм
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>49 Вт</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Подключения</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>белый</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>от 8 до 30</Box>
							</Box>
							<Box
								marginTop='12px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
								itemProp='offers'
								itemScope
								itemType='https://schema.org/AggregateOffer'
							>
								<meta
									itemProp='priceCurrency'
									content='RUB'
								/>
								<meta
									itemProp='lowPrice'
									content={model2050MinPrice.noConsole.toString()}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
									от {model2050MinPrice.noConsole.toLocaleString()} руб.
								</Box>
							</Box>
							<Box marginTop='25px'>
								<Button
									fullWidth
									variant='outlined'
									href='/models/2050'
								>
									Купить
								</Button>
							</Box>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						display='flex'
						flexDirection={'column'}
						justifyContent={'space-between'}
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/Product'
					>
						<Box textAlign='center'>
							<Link href='/models/3050'>
								<a style={{ textDecoration: 'none' }}>
									<div
										style={{
											...styles.roundSquareImage,
											display: 'inline-block',
										}}
									>
										<img
											src='/images/models/3057-3.jpeg'
											width={'200px'}
											height={'200px'}
											sizes='200px'
											alt='Трубчатый радиатор Arbonia 3050'
											itemProp='image'
										/>
									</div>

									<Typography
										sx={{ ...linkStyle, fontWeight: '600' }}
										component='h3'
										itemProp='name'
									>
										Радиатор Arbonia 3050
									</Typography>
								</a>
							</Link>
						</Box>
						<Box paddingX='15px'>
							<Typography sx={{ ...styles.smallText }}>
								Трехтрубчатый радиатор высотой 50 см. Боковое и нижнее подключение. В наличии в белом цвете. Модель
								является более мощной, чем 2050.
							</Typography>
							<Box
								marginTop='15px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Тип модели</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>3-трубчатый радиатор</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Высота</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='height'
								>
									50 см
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Толщина</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box
									sx={{ ...styles.smallText }}
									itemProp='depth'
								>
									105 мм
								</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Мощность секции (ΔT=60°)</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>68 Вт</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Подключения</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>боковое и нижнее</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Цвета в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>белый</Box>
							</Box>
							<Box
								marginTop='7px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
							>
								<Box sx={{ ...styles.smallText }}>Число секций в наличии</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText }}>от 8 до 30</Box>
							</Box>
							<Box
								marginTop='12px'
								display='flex'
								flexDirection={'row'}
								alignItems={'bottom'}
								width='100%'
								gap={1}
								itemProp='offers'
								itemScope
								itemType='https://schema.org/AggregateOffer'
							>
								<meta
									itemProp='priceCurrency'
									content='RUB'
								/>
								<meta
									itemProp='lowPrice'
									content={model3050MinPrice.noConsole.toString()}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>Цена</Box>
								<Box
									sx={{ borderBottom: '1px dotted black' }}
									flexGrow={1}
								/>
								<Box sx={{ ...styles.smallText, fontWeight: 600 }}>
									от {model3050MinPrice.noConsole.toLocaleString()} руб.
								</Box>
							</Box>
							<Box marginTop='25px'>
								<Button
									fullWidth
									variant='outlined'
									href='/models/3050'
								>
									Купить
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Bestsellers
