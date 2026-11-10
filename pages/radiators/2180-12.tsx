import OfferMetadata from '../../components/seo/OfferMetadata'
import ProductMetadata from '../../components/seo/ProductMetadata'
import { Box, Grid, Typography } from '@mui/material'
import Image from "next/legacy/image"
import Link from 'next/link'
import React, { useContext, useRef } from 'react'

import Hero from '../../components/hero/hero'
import PageHeader from '../../components/pageHeader/pageHeader'

import { SetComponentProps } from '../../models/setComponentProps.model'

import getColorsData from '../../api_utils/getColorsData'
import getConnectionsData from '../../api_utils/getConnectionsData'
import getModelsData from '../../api_utils/getModelsData'
import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import AddToCartButton from '../../components/addToCartButton/addToCartButton'
import DownloadsBlock from '../../components/pageModels/downloadsBlock'
import ImagesOtherList from '../../components/pageModels/imagesOtherList'
import { CurrencyContext } from '../../contexts/currencyContext'
import calcRadiatorCost from '../../utils/calcRadiatorCost'
import getRadiatorData from '../../utils/getRadiatorData'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

// -------------------------------

type Props = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
}

// -------------------------------

const SECTIONS_QNTY = 12
const SECTIONS_STRING = '12'
const SECTIONS_POSTFIX = 'секций'

// -------------------------------

const Model2180: React.FC<SetComponentProps> = ({ models, colors, connections }: Props) => {
	const refPrices = useRef<HTMLElement>(null)
	const { rateEuro, isFetching } = useContext(CurrencyContext)

	const model = models.find(model => model.id === '2180')
	if (!model) return null

	// -------------------------------

	const power = Math.floor(SECTIONS_QNTY * +model.dt60)
	const power50 = Math.floor(SECTIONS_QNTY * +model.dt50)
	const square = Math.round(power / 100)

	const width = Math.round(SECTIONS_QNTY * +model.lengthSection + 26)

	const imagePrimaryPath = global.imagesModelPath + model.imagePrimary

	const color9016 = colors.find(x => x.id === '9016')
	const color7016 = colors.find(x => x.id === '7016')
	const colorSf3 = colors.find(x => x.id === 'sf3')
	const color9005 = colors.find(x => x.id === '9005')

	const conn12 = connections.find(x => x.id === '12-34')
	const conn69 = connections.find(x => x.id === '69tvv')

	if (!color9016 || !color7016 || !colorSf3 || !color9005 || !conn12 || !conn69) return null

	// RAL 9016 боковое

	const rad_12_9016 = calcRadiatorCost({
		model,
		color: color9016,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_12_9016_data = getRadiatorData({
		model,
		color: color9016,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		price: rad_12_9016.price.noConsole,
	})

	// RAL 9016 нижнее

	const rad_69_9016 = calcRadiatorCost({
		model,
		color: color9016,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_69_9016_data = getRadiatorData({
		model,
		color: color9016,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		price: rad_69_9016.price.noConsole,
	})

	// RAL 7016 боковое

	const rad_12_7016 = calcRadiatorCost({
		model,
		color: color7016,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_12_7016_data = getRadiatorData({
		model,
		color: color7016,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		price: rad_12_7016.price.noConsole,
	})

	// RAL 7016 нижнее

	const rad_69_7016 = calcRadiatorCost({
		model,
		color: color7016,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_69_7016_data = getRadiatorData({
		model,
		color: color7016,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		price: rad_69_7016.price.noConsole,
	})

	// SF-3 боковое

	const rad_12_sf3 = calcRadiatorCost({
		model,
		color: colorSf3,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_12_sf3_data = getRadiatorData({
		model,
		color: colorSf3,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		price: rad_12_sf3.price.noConsole,
	})

	// RAL SF-3 нижнее

	const rad_69_sf3 = calcRadiatorCost({
		model,
		color: colorSf3,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_69_sf3_data = getRadiatorData({
		model,
		color: colorSf3,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		price: rad_69_sf3.price.noConsole,
	})

	// RAL 9905 боковое

	const rad_12_9005 = calcRadiatorCost({
		model,
		color: color9005,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_12_9005_data = getRadiatorData({
		model,
		color: color9005,
		connection: conn12,
		sectionQnty: SECTIONS_QNTY,
		price: rad_12_9005.price.noConsole,
	})

	// RAL SF-3 нижнее

	const rad_69_9005 = calcRadiatorCost({
		model,
		color: color9005,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		currencyRate: rateEuro,
	})
	const rad_69_9005_data = getRadiatorData({
		model,
		color: color9005,
		connection: conn69,
		sectionQnty: SECTIONS_QNTY,
		price: rad_69_9005.price.noConsole,
	})

	// -------------------------------

	return (
        <Box
			itemScope
			itemType='https://schema.org/ProductModel'
		>
            <ProductMetadata description={`Вертикальный трубчатый радиатор Arbonia 2180, ${SECTIONS_QNTY} секций, высота 1800 мм, глубина 65 мм. Боковое и нижнее подключение, цвета RAL 9016, RAL 7016, SF-3 и RAL 9005.`} sku={`2180-${SECTIONS_STRING}`} />
            <meta
				itemProp='name'
				content={`Arbonia 2180 ${SECTIONS_STRING}`}
			/>
            <meta
				itemProp='countryOfOrigin'
				content='Чехия'
			/>
            <meta
				itemProp='material'
				content='Сталь'
			/>
            <PageHeader
				title={`Arbonia 2180 ${SECTIONS_STRING} ${SECTIONS_POSTFIX} | 1800х65х${width} мм | ${power} Вт | Выгодные цены | Гарантия`}
				description={`Вертикальный радиатор Arbonia 2180 ${SECTIONS_STRING} ${SECTIONS_POSTFIX}: 1800 х 65 х ${width} мм. Мощность ${power} Вт. Боковое и нижнее подключение. 🛡️ Официальная гарантия 10 лет. 🚚 Доставка в любой город России.`}
			/>
            <Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={`Радиатор Arbonia 2180 ${SECTIONS_STRING} ${SECTIONS_POSTFIX}`}
				subheader={'Боковое и нижнее (№69 ТВВ) подключение в наличии'}
			/>

            <Box sx={{ ...global.pagePadding }}>
				<Box>
					<Grid
						container
						spacing={2}
					>
						{/* ИЗОБРАЖЕНИЕ */}
						<Grid
                            size={{
                                xs: 12,
                                sm: 6
                            }}>
							<Box
                                sx={{
                                    textAlign: 'center',
                                    marginTop: '20px'
                                }}>
								<img
									width={500}
									height={500}
									sizes={'500px'}
									src={imagePrimaryPath}
									itemProp='image'
									alt={`Трубчатый радиатор ${model.name} ${SECTIONS_STRING} ${SECTIONS_POSTFIX}`}
								/>
							</Box>
						</Grid>
						<Grid
                            size={{
                                xs: 12,
                                sm: 6
                            }}>
							<Box
                                sx={{
                                    marginTop: '30px',
                                    marginLeft: '20px'
                                }}>
								{/* БЛОК ЦЕНЫ */}
								<Box>
									<a
										style={{ textDecoration: 'none' }}
										href='/models/2180'
									>
										<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
											все складские модели Arbonia 2180
										</Typography>
									</a>
								</Box>

								<Typography component='div' sx={{ ...styles.standardText }}>
									<p>
										Радиатор Arbonia 2180 12 секций - компактный вертикальный радиатор шириной {width} мм. Радиатор
										может являться единственным источником тепла при обогреве средних и даже больших помещений. В
										остальных ситуациях, Arbonia 2180 12 должен работать как дополнительный источник тепла. Например,
										его можно разместить у выхода на балкон.
									</p>
									<p>
										Мощность радиатора составляет {power} Вт при ΔT=60°С. В зависимости от уровня теплоизоляции дома, а
										также температуры воды в трубах, он может обогреть от {square} до {square * 2} м². Свяжитесь с нами
										для уточнения требуемой мощности для вашего дома или квартиры.
									</p>
								</Typography>

								<Box
                                    sx={{
                                        marginTop: '10px',
                                        textAlign: 'left'
                                    }}>
									<Box sx={{
                                        visibility: isFetching ? 'hidden' : 'hidden'
                                    }}>
										<Typography sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}>
											подождите, обновляется курс валют...
										</Typography>
									</Box>

									<Box>
										<Typography
                                            sx={[{
                                                display: 'inline'
                                            }, styles.standardText]}>
											Цена от:{' '}
											<Typography component='span'
                                                itemProp='offers'
                                                itemScope
                                                itemType='https://schema.org/Offer'
                                                sx={{
                                                    display: 'inline',
                                                    fontSize: '22px',
                                                    fontWeight: 600
                                                }}>
												<span>
													<OfferMetadata inStock={true} />
													<meta
														itemProp='priceCurrency'
														content='RUB'
													/>
													<meta
														itemProp='price'
														content={rad_12_9016_data.priceString.replace(/[^0-9]/g, '')}
													/>
													{rad_12_9016_data.priceString}
												</span>{' '}
												руб
											</Typography>
											<Typography component='span'
                                                sx={{
                                                    display: 'inline',
                                                    marginX: '15px',
                                                    fontSize: '16px',
                                                    fontWeight: 200,
                                                    textDecoration: 'line-through',
                                                    color: 'gray'
                                                }}>
												{rad_12_9016_data.oldPriceString} руб
											</Typography>
										</Typography>
										<Box
                                            sx={{
                                                marginBottom: '30px',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '15px',
                                                flexWrap: 'wrap'
                                            }}>
											<Box
												onClick={() => {
													if (!refPrices.current) return
													refPrices.current.scrollIntoView({
														behavior: 'smooth',
														block: 'start',
													})
												}}
												sx={{
                                                    marginTop: '10px'
                                                }}
											>
												<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>перейти к ценам</Typography>
											</Box>
										</Box>
									</Box>
								</Box>

								{/* БЛОК ХАРАКТЕРИСТИК */}
								<Box sx={{
                                    marginTop: '30px'
                                }}>
									<Box>
										<Box>
											<Typography
                                                itemProp='model'
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Модель:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{model.nameShort}
											</Typography>
										</Box>
										<Box>
											<Typography
                                                itemProp='color'
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Цвет:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												белый RAL 9016, RAL 7016, RAL 9005 matt и SF-3
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Подключение:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												боковое 3/4" или нижнее №69 ТВВ
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Число секций:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{SECTIONS_QNTY}
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Рабочее давление:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												10 бар
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Испытательное давление:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												15 бар
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Гарантия:&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												10 лет
											</Typography>
										</Box>
									</Box>

									<Box sx={{
                                        marginTop: '10px'
                                    }}>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Длина:&nbsp;
											</Typography>
											<Typography
                                                itemProp='width'
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{width} мм
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Высота:&nbsp;
											</Typography>
											<Typography
                                                itemProp='height'
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{model.height} мм
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Глубина:&nbsp;
											</Typography>
											<Typography
                                                itemProp='depth'
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{model.width} мм
											</Typography>
										</Box>
									</Box>

									<Box sx={{
                                        marginTop: '10px'
                                    }}>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Мощность (ΔT=50°):&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{power50} Вт
											</Typography>
										</Box>
										<Box>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallText]}>
												Мощность (ΔT=60°):&nbsp;
											</Typography>
											<Typography
                                                sx={[{
                                                    display: 'inline'
                                                }, styles.smallTextBold]}>
												{power} Вт
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box ref={refPrices}></Box>

				{/* 2180 белый*/}
				<Box sx={{
                    marginTop: '40px'
                }}>
					<Typography component='div' sx={{ ...styles.standardText }}>
						<h2>Arbonia 2180 {SECTIONS_STRING} в цвете RAL 9016</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 5
                                }}>
								<img
									itemProp='image'
									src='/images/models/2180-1.jpeg'
									alt={`Белый радиатор Arbonia 2180 ${SECTIONS_STRING} ${SECTIONS_POSTFIX}`}
									width={600}
									height={600}
								/>
							</Grid>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 7
                                }}>
								<p>
									Белый свет по прежнему остается наиболее актуальным и востребованным, когда речь идет о радиаторах
									отопления. Ведь это самый нейтральный цвет. Он легко сочетается с любой цветовой схемой помещения.
									Гармонично смотрится даже в интерьерах, выполненных в темный тонах. Хотите беспроигрышный вариант -
									берите Arbonia 2180 в белом цвете.
								</p>

								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Боковое подключение 3/4"</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_12_9016_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_12_9016_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_12_9016_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color9016.id}
											connectionId={conn12.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Нижнее подключение №69 ТВВ</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_69_9016_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_69_9016_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_69_9016_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color9016.id}
											connectionId={conn69.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Typography>
				</Box>

				{/* 2180 RAL 7016*/}
				<Box sx={{
                    marginTop: '80px'
                }}>
					<Typography component='div' sx={{ ...styles.standardText }}>
						<h2>Arbonia 2180 {SECTIONS_STRING} в темном цвете RAL7016</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 5
                                }}>
								<img
									src='/images/models/7016-0.jpeg'
									alt={`Радиатор Arbonia 2180 ${SECTIONS_STRING} ${SECTIONS_POSTFIX} RAL 7016`}
									width={600}
									height={600}
								/>
							</Grid>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 7
                                }}>
								<p>
									Цвет можно охарактеризовать как темно-серый. Это не стандартный белый цвет и, в то же время, не совсем
									черный. Он хорошо сочетается с темными оттенками пола и мебели, а также с белыми стенами. В отличие от
									белого или черного цвета, темно-серый не требует частой уборки и не выглядит грязным, если на нем
									появляются пыль. В то же время, он не такой темный, как черный, и не создает впечатления того, что в
									комнате слишком мало света.
								</p>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Боковое подключение 3/4"</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_12_7016_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_12_7016_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_12_7016_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color7016.id}
											connectionId={conn12.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Нижнее подключение №69 ТВВ</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_69_7016_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_69_7016_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_69_7016_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color7016.id}
											connectionId={conn69.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Typography>
				</Box>

				{/* 2180 SF-3*/}
				<Box sx={{
                    marginTop: '80px'
                }}>
					<Typography component='div' sx={{ ...styles.standardText }}>
						<h2>Arbonia 2180 {SECTIONS_STRING} в металлизированном цвете SF-3</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 5
                                }}>
								<img
									src='/images/models/sf-3-2.jpeg'
									alt={`Радиатор Arbonia 2180 ${SECTIONS_QNTY} (SF-3 Anthrazit metallic)`}
									width={600}
									height={600}
								/>
							</Grid>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 7
                                }}>
								<p>
									Да - это еще один темный, но не черный цвет. От предыдущего он отличается тем, что имеет
									металлизированный блеск и внешне выглядит более светлым. Данный вариант отлично подойдет, например,
									для интерьеров в стиле лофт.
								</p>
								<p>
									Популярным сценарием использования радиаторов Arbonia именно в этом цвете - замена радиаторов,
									выполненных в цвете прозрачный лак. С одной стороны - внешне он похож, хотя и не имеет характерных
									видимых следов сварки и шлифовки. С другой - радиатор имеет полноценного покрытие, надежно защищающее
									его от проникновения влаги, чему подвержены радиаторы, покрытые только прозрачным лаком. Более того,
									равномерная покраска радиатора делает его более предсказуемым: вам проще спланировать и встроить его в
									интерьер.
								</p>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Боковое подключение 3/4"</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_12_sf3_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_12_sf3_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_12_sf3_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={colorSf3.id}
											connectionId={conn12.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Нижнее подключение №69 ТВВ</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_69_sf3_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_69_sf3_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_69_sf3_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={colorSf3.id}
											connectionId={conn69.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Typography>
				</Box>

				{/* 2180 RAL 9005*/}
				<Box sx={{
                    marginTop: '80px'
                }}>
					<Typography component='div' sx={{ ...styles.standardText }}>
						<h2>Arbonia 2180 {SECTIONS_QNTY} в черном цвете RAL9005</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 5
                                }}>
								<img
									src='/images/models/2180-9005.jpeg'
									alt={`Радиатор Arbonia 2180 ${SECTIONS_QNTY} ${SECTIONS_POSTFIX} RAL9005 matt`}
									width={600}
									height={600}
								/>
							</Grid>
							<Grid
                                size={{
                                    xs: 12,
                                    md: 7
                                }}>
								<p>
									Черный матовый цвет также является одним из самых популярных для радиаторов Arbonia. Как и белый,
									черный цвет легко встраивается в любой интерьер, а его матовость придает ему особый шарм. Радиатор не
									дает таких бликов, как модели с глянцевым покрытием, а потому лучше сливается с окружающим его
									пространством.
								</p>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Боковое подключение 3/4"</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_12_9005_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_12_9005_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_12_9005_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color9005.id}
											connectionId={conn12.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
								<h3 style={{ marginTop: '40px', fontWeight: 200 }}>Нижнее подключение №69 ТВВ</h3>
								<Box>
									<Typography
                                        sx={[{
                                            display: 'inline'
                                        }, styles.standardText]}>
										Цена:{' '}
										<Typography component='span'
                                            itemProp='offers'
                                            itemScope
                                            itemType='https://schema.org/Offer'
                                            sx={{
                                                display: 'inline',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}>
											<span>
												<OfferMetadata inStock={true} />
												<meta
													itemProp='priceCurrency'
													content='RUB'
												/>
												<meta
													itemProp='price'
													content={rad_69_9005_data.priceString.replace(/[^0-9]/g, '')}
												/>
												{rad_69_9005_data.priceString}
											</span>{' '}
											руб
										</Typography>
										<Typography component='span'
                                            sx={{
                                                display: 'inline',
                                                marginX: '15px',
                                                fontSize: '16px',
                                                fontWeight: 200,
                                                textDecoration: 'line-through',
                                                color: 'gray'
                                            }}>
											{rad_69_9005_data.oldPriceString} руб
										</Typography>
									</Typography>
									<Box
                                        sx={{
                                            marginTop: '15px',
                                            marginBottom: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            flexWrap: 'wrap',
                                            width: '100%'
                                        }}>
										<AddToCartButton
											model={model}
											colorId={color9005.id}
											connectionId={conn69.id}
											sectionQnty={SECTIONS_QNTY}
											qnty={1}
											buttonSize={'small'}
											buttonColor={'primary'}
											align={'center'}
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Typography>
				</Box>

				<Box sx={{
                    marginTop: '80px'
                }}>
					<h2>Дополнительные изображения радиаторов Arbonia 2180</h2>
					<ImagesOtherList imagesString={model.imagesOther || ''} />
				</Box>
				<Box sx={{
                    marginTop: '80px'
                }}>
					<h2>Документы для скачивания</h2>
					<DownloadsBlock />
				</Box>
			</Box>
        </Box>
    );
}

export default Model2180

export async function getStaticProps(): Promise<{ props: Props }> {
	const models: ModelOrigin[] = await getModelsData()
	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	return {
		props: {
			models,
			colors,
			connections,
		},
	}
}
