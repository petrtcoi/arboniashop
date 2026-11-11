import OfferMetadata from '../seo/OfferMetadata'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'

import AddToCartButton from '../addToCartButton/addToCartButton'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import { CurrencyContext } from '../../contexts/currencyContext'

import calcRadiatorCost from '../../utils/calcRadiatorCost'
import getRadiatorData from '../../utils/getRadiatorData'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

// import FeaturesTable from './featuresTable'

type ModelMainSectionProps = {
	model: ModelOrigin
	color: ColorOrigin
	connection: ConnectionOrigin
	sectionQnty: number
}

const RadiatorInfo: React.FC<ModelMainSectionProps> = ({ model, color, connection, sectionQnty }) => {
	const imagePrimaryPath = global.imagesModelPath + model.imagePrimary
	const { rateEuro, isFetching } = useContext(CurrencyContext)

	const { price } = calcRadiatorCost({
		model,
		color,
		connection,
		sectionQnty,
		currencyRate: rateEuro,
	})
	const { skuString, lengthString, dt50String, dt60String, priceString, oldPriceString } = getRadiatorData({
		model,
		color,
		connection,
		sectionQnty,
		price: price.noConsole,
	})

	return (
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
							alt={`Трубчатый радиатор ${model.name}`}
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
						{/* АРТИКУЛ */}
						<Box>
							<Typography
								sx={{ ...styles.smallTextThin }}
								itemProp='sku'
							>
								арт.: {skuString}
							</Typography>
						</Box>

						{/* БЛОК ЦЕНЫ */}

						<Box
                            sx={{
                                marginTop: '10px',
                                padding: '10px',
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
									Цена:{' '}
								</Typography>

								<Typography
                                    itemProp='offers'
                                    itemScope
                                    itemType='https://schema.org/Offer'
                                    sx={{
                                        display: 'inline',
                                        fontSize: '30px',
                                        fontWeight: 600
                                    }}>
									<OfferMetadata inStock={model.inStock === 'true'} />
									<span>
										<meta
											itemProp='priceCurrency'
											content='RUB'
										/>
										<meta
											itemProp='price'
											content={priceString.replace(/[^0-9]/g, '')}
										/>
										{priceString}
									</span>{' '}
									руб
								</Typography>
								<Typography
                                    sx={{
                                        display: 'inline',
                                        marginX: '15px',
                                        fontSize: '24px',
                                        fontWeight: 200,
                                        textDecoration: 'line-through',
                                        color: 'gray'
                                    }}>
									{oldPriceString} руб
								</Typography>
							</Box>

							<Box sx={{
                                marginTop: '10px'
                            }}>
								<AddToCartButton
									model={model}
									colorId={color.id}
									connectionId={connection.id}
									sectionQnty={sectionQnty}
									qnty={1}
									buttonSize={'medium'}
									buttonColor={'dark'}
									align={'left'}
								/>
							</Box>
						</Box>

						{/* БЛОК ХАРАКТЕРИСТИК */}
						<Box sx={{
                            marginTop: '30px'
                        }}>
							<Box>
								<Typography sx={{ ...styles.smallTextThin }}>Общие характеристики</Typography>
								<Box sx={{
                                    paddingLeft: '30px'
                                }}>
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
											{color.nameShort}
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
											{connection.name}
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
											{sectionQnty}
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
							</Box>

							<Box sx={{
                                marginTop: '30px'
                            }}>
								<Typography sx={{ ...styles.smallTextThin }}>Габариты</Typography>
								<Box sx={{
                                    paddingLeft: '30px'
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
											{lengthString} мм
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
							</Box>

							<Box sx={{
                                marginTop: '30px'
                            }}>
								<Typography sx={{ ...styles.smallTextThin }}>Мощность</Typography>
								<Box sx={{
                                    paddingLeft: '30px'
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
											{dt50String} Вт
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
											{dt60String} Вт
										</Typography>
									</Box>
								</Box>
							</Box>

							<Box sx={{
                                marginTop: '30px'
                            }}>
								<Typography sx={{ ...styles.smallTextThin }}>Другое</Typography>
								<Box sx={{
                                    paddingLeft: '30px'
                                }}>
									<Box>
										<Typography
                                            sx={[{
                                                display: 'inline'
                                            }, styles.smallText]}>
											Вес (без воды):&nbsp;
										</Typography>
										<Typography
                                            itemProp='weight'
                                            sx={[{
                                                display: 'inline'
                                            }, styles.smallTextBold]}>
											{Math.floor(+model.weightSection * sectionQnty * 100) / 100} кг
										</Typography>
									</Box>
									<Box>
										<Typography
                                            sx={[{
                                                display: 'inline'
                                            }, styles.smallText]}>
											Экспонента n:&nbsp;
										</Typography>
										<Typography
                                            sx={[{
                                                display: 'inline'
                                            }, styles.smallTextBold]}>
											{model.exponentN}
										</Typography>
									</Box>
								</Box>
							</Box>

							<Box sx={{
                                marginTop: '20px'
                            }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
            {model.description && (
				<Box
                    sx={{
                        marginTop: '40px',
                        marginLeft: '20px'
                    }}>
					<Typography
						sx={styles.standardText}
						itemProp='description'
					>
						{model.description}
					</Typography>
				</Box>
			)}
        </Box>
    );
}

export default RadiatorInfo
