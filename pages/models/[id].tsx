import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useContext, useState } from 'react'

import PageHeader from '../../components/pageHeader/pageHeader'
import DownloadsBlock from '../../components/pageModels/downloadsBlock'
import ImagesOtherList from '../../components/pageModels/imagesOtherList'
import ModelMainSection from '../../components/pageModels/modelMainSection'
import RadiatorAllOptions from '../../components/pageModels/radiatorAllOptions'
import RadiatorInCartList from '../../components/pageModels/radiatorInCartList'
import PageTitle from '../../components/pageTitle/pageTitle'
import RadiatorList from '../../components/radiatorList/radiatorList'

import getColorsData from '../../api_utils/getColorsData'
import getConnectionsData from '../../api_utils/getConnectionsData'
import getModelsData from '../../api_utils/getModelsData'

import { CurrencyContext } from '../../contexts/currencyContext'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import Link from 'next/link'
import GeneralTextAboutArboniaProps from '../../components/generalTextAboutArbonia'
import global from '../../variables/global'
import * as styles from './../../styles/styles'

type ModelProps = {
	modelCurr: ModelOrigin
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
	modelTitle: string
	metaTitle: string
	colorTitle: string
	connectionTitle: string
	colorInit: ColorOrigin | null
	connectionInit: ConnectionOrigin | null
}

const Model: NextPage<ModelProps> = ({
	modelCurr,
	models,
	colors,
	connections,
	modelTitle,
	metaTitle,
	colorTitle,
	connectionTitle,
	colorInit,
	connectionInit,
}) => {
	const [tab, setTab] = useState<string>('buy')
	const handleChangeTab = (event: React.SyntheticEvent, newTab: string) => {
		setTab(newTab)
	}
	const [colorCurr, _setColorCurr] = useState<ColorOrigin>(colorInit === null ? colors[0] : colorInit)
	const [connectionCurr, _setConnectionCurr] = useState<ConnectionOrigin>(
		connectionInit === null ? connections[0] : connectionInit
	)

	const { rateEuro, isFetching } = useContext(CurrencyContext)

	const setTabBuy = () => {
		setTab('buy')
	}

	return (
		<Box
			itemScope
			itemType='https://schema.org/ProductModel'
		>
			<meta
				itemProp='countryOfOrigin'
				content='Чехия'
			/>
			<meta
				itemProp='material'
				content='Сталь'
			/>

			<PageHeader
				title={`${metaTitle} | выгодно`}
				description={`${metaTitle} - ${modelCurr.nameShort[0]}-трубчатая модель (ширина ${modelCurr.width} мм) высотой ${modelCurr.height} мм. Гарантия 10 лет. 🚚 Доставка в любой город России. Выгодные условия покупки.`}
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{
						title: `Arbonia ${modelCurr.nameShort}`,
						link: `/models/${modelCurr.id}`,
					},
				]}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '1200px', margin: 'auto' }}>
				{/* Shit code! */}

				{modelCurr.id.startsWith('2180') && (
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
				)}

				{modelCurr.id.startsWith('3030') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/3030'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 3030
							</Typography>
						</a>
					</Box>
				)}

				{modelCurr.id.startsWith('2057') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/2057'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 2057
							</Typography>
						</a>
					</Box>
				)}

				{modelCurr.id.startsWith('3057') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/3057'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 3057
							</Typography>
						</a>
					</Box>
				)}

				{modelCurr.id.startsWith('2050') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/2050'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 2050
							</Typography>
						</a>
					</Box>
				)}

				{modelCurr.id.startsWith('3180') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/3180'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 3180
							</Typography>
						</a>
					</Box>
				)}

				{modelCurr.id.startsWith('3050') && (
					<Box>
						<a
							style={{ textDecoration: 'none' }}
							href='/models/3050'
						>
							<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
								все складские модели Arbonia 3050
							</Typography>
						</a>
					</Box>
				)}

				{/* Shit code end */}

				<Box
					marginBottom={'50px'}
					marginTop={'20px'}
				>
					<Typography
						variant='h5'
						component='h1'
						gutterBottom
						textAlign='center'
						itemProp='name'
					>
						{modelTitle}
					</Typography>
				</Box>
				<ModelMainSection
					modelCurr={modelCurr}
					colorCurr={colorCurr}
					connectionCurr={connectionCurr}
					modelTitle={modelTitle}
					colorTitle={colorTitle}
					connectionTitle={connectionTitle}
					handleBuyButton={setTabBuy}
				/>
				<Box marginTop='40px'>
					<Divider variant='middle' />
				</Box>
				{/* ВКЛАДКИ С ИНФОРМАЦИЕЙ */}
				<Box
					marginTop='20px'
					marginBottom='40px'
				>
					<Tabs
						value={tab}
						onChange={handleChangeTab}
					>
						<Tab
							label='Купить'
							value='buy'
							sx={styles.smallText}
						/>
						{modelCurr.imagesOther && (
							<Tab
								label='Изображения'
								value='images'
								sx={styles.smallText}
							/>
						)}
						<Tab
							label='Документы'
							value='docs'
							sx={styles.smallText}
						/>
					</Tabs>
				</Box>
				{tab === 'buy' && (
					<Box>
						<Box id='buy-section'>
							<Typography
								variant='h4'
								component='h2'
								marginBottom='20px'
							>
								Купить {modelCurr.name}
							</Typography>

							<Box visibility={isFetching ? 'hidden' : 'hidden'}>
								<Typography sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}>
									подождите, обновляется курс валют...
								</Typography>
							</Box>

							<Box marginTop='20px'>
								{modelCurr.inStock === 'true' && colorCurr !== null && connectionCurr !== null ? (
									<RadiatorList
										model={modelCurr}
										color={colorCurr}
										connection={connectionCurr}
										currencyRate={rateEuro}
									/>
								) : (
									<>
										<RadiatorAllOptions
											modelInit={modelCurr ? modelCurr : models[0]}
											connectionInit={connections[0]}
											colorInit={colors[0]}
											models={models}
											colors={colors}
											connections={connections}
										/>
										<RadiatorInCartList
											modelCurrentId={modelCurr.id}
											models={models}
											colors={colors}
											connections={connections}
										/>
									</>
								)}
							</Box>
						</Box>
					</Box>
				)}
				{tab === 'images' && modelCurr.imagesOther && (
					<Box>
						<Typography
							variant='h4'
							component='h2'
							marginBottom='20px'
						>
							Дополнительные изображения
						</Typography>
						<ImagesOtherList imagesString={modelCurr.imagesOther} />
					</Box>
				)}
				{tab === 'docs' && (
					<Box>
						<Typography
							variant='h4'
							component='h2'
							marginBottom='20px'
						>
							Документы для скачивания
						</Typography>
						<DownloadsBlock />
					</Box>
				)}
				<GeneralTextAboutArboniaProps />
			</Box>
		</Box>
	)
}

export default Model

export async function getStaticProps(context: { params: { id: string } }) {
	const modelId = context.params.id
	const models: ModelOrigin[] = await getModelsData()
	const modelCurr = models.find(x => x.id === modelId)

	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	let modelTitle = `Радиатор Arbonia Column ${modelCurr?.nameShort}`
	let metaTitle = `Радиатор Arbonia ${modelCurr?.nameShort}`

	let colorTitle = 'палитра Arbonia'
	let colorInit = null
	if (modelCurr != undefined && modelCurr.color) {
		const color = colors.find(x => x.id === modelCurr.color)
		if (color !== undefined) {
			colorTitle = color.name
			colorInit = color
			modelTitle += `, ${colorTitle}`
			metaTitle += ` ${color.nameShort}`
		}
	}

	let connectionTitle = 'из каталога Arbonia'
	let connectionInit = null
	if (modelCurr != undefined && modelCurr.connection) {
		const connection = connections.find(x => x.id === modelCurr.connection)
		if (connection !== undefined) {
			connectionInit = connection
			connectionTitle = connection.nameShort
			modelTitle += `, ${connectionTitle}`
			metaTitle += ` ${connection.nameShort}`
		}
	}

	return {
		props: {
			modelCurr,
			models,
			colors,
			connections,
			modelTitle,
			metaTitle,
			colorTitle,
			connectionTitle,
			connectionInit,
			colorInit,
		},
	}
}

export async function getStaticPaths() {
	const models: ModelOrigin[] = await getModelsData()
	const paths = models
		.filter(model => model.id !== '2180')
		.filter(model => model.id !== '2050')
		.filter(model => model.id !== '2057')
		.filter(model => model.id !== '3057')
		.filter(model => model.id !== '3050')
		.filter(model => model.id !== '3180')
		.filter(model => model.id !== '3030')
		.map(model => {
			return { params: model }
		})

	return {
		paths: paths,
		fallback: false, // See the "fallback" section below
	}
}
