import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'

import PageHeader from '../../../components/pageHeader/pageHeader'
import DownloadsBlock from '../../../components/pageModels/downloadsBlock'
import ImagesOtherList from '../../../components/pageModels/imagesOtherList'
import RadiatorInfo from '../../../components/pageRadiator/radiatorInfo'
import PageTitle from '../../../components/pageTitle/pageTitle'

import getColorsData from '../../../api_utils/getColorsData'
import getConnectionsData from '../../../api_utils/getConnectionsData'
import getModelsData from '../../../api_utils/getModelsData'

import { ColorOrigin } from '../../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../../models/connectionOrigin.model'
import { ModelOrigin } from '../../../models/modelOrigin.model'

import GeneralTextAboutArboniaProps from '../../../components/generalTextAboutArbonia'
import global from '../../../variables/global'

import * as styles from '../../../styles/styles'

type RadiatorProps = {
	model: ModelOrigin
	color: ColorOrigin
	connection: ConnectionOrigin
	sectionQnty: number
}

const Radiator: NextPage<RadiatorProps> = ({
	model,
	color,
	connection,
	sectionQnty,
}) => {
	const [tab, setTab] = useState<string>('docs')
	const handleChangeTab = (event: React.SyntheticEvent, newTab: string) => {
		setTab(newTab)
	}

	const radiatorTitle = `Радиатор Arbonia ${model.nameShort}-${sectionQnty}, ${color.nameShort}, ${connection.nameShort}`

	return (
		<Box
			itemScope
			itemType='https://schema.org/IndividualProduct'
		>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{
						title: `Arbonia ${model.nameShort}, ${color.nameShort}, ${connection.nameShort}`,
						link: `/models/${model.id}`,
					},
				]}
			/>
			<Box sx={{ ...global.pagePadding }}>
				{/* Shit code! */}

				{model.id.startsWith('2180') && (
					<Box>
						<Link href='/models/2180'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 2180
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('2050') && (
					<Box>
						<Link href='/models/2050'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 2050
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('3030') && (
					<Box>
						<Link href='/models/3030'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 3030
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('2057') && (
					<Box>
						<Link href='/models/2057'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 2057
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('3180') && (
					<Box>
						<Link href='/models/3180'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 3180
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('3057') && (
					<Box>
						<Link href='/models/3057'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 3057
								</Typography>
							</a>
						</Link>
					</Box>
				)}

				{model.id.startsWith('3050') && (
					<Box>
						<Link href='/models/3050'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}
								>
									все складские модели Arbonia 3050
								</Typography>
							</a>
						</Link>
					</Box>
				)}
				{/* Shit code end */}
				<PageHeader
					title={`Arbonia ${model.nameShort}-${sectionQnty} ${color.nameShort} ${connection.nameShort} | купить выгодно`}
					description={`Arbonia ${model.nameShort}-${sectionQnty}, ${
						model.nameShort[0]
					}-трубчатая модель, ${color.nameShort}, ${connection.nameShort}, ${
						model.height
					}x${model.width}x${
						parseInt(model.lengthSection) * sectionQnty + 26
					} мм. ${
						parseInt(model.dt60) * sectionQnty
					} Вт (при dT=60C). Выгодные цены. Гарантия 10 лет.`}
				/>
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
						{radiatorTitle}
					</Typography>
				</Box>
				<RadiatorInfo
					model={model}
					color={color}
					connection={connection}
					sectionQnty={sectionQnty}
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
						{model.imagesOther && (
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
				{tab === 'images' && model.imagesOther && (
					<Box>
						<Typography
							variant='h4'
							component='h2'
							marginBottom='20px'
						>
							Дополнительные изображения
						</Typography>
						<ImagesOtherList imagesString={model.imagesOther} />
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

export default Radiator

export async function getStaticProps(context: {
	params: { id: string; sections: string }
}) {
	const modelId = context.params.id
	const sectionQnty = +context.params.sections

	const models: ModelOrigin[] = await getModelsData()
	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	const model = models.find(x => x.id === modelId) || models[0]
	const colorId = model.color || colors[0]
	const connectionId = model.connection || connections[0]

	const color = colors.find(x => x.id === colorId) || colors[0]
	const connection =
		connections.find(x => x.id === connectionId) || connections[0]

	return {
		props: {
			model,
			connection,
			color,
			sectionQnty,
		},
	}
}

export async function getStaticPaths() {
	const models: ModelOrigin[] = await getModelsData()
	const paths = models
		.map(model => {
			if (!model.inStockSections) return []
			return model.inStockSections.split(',').map(sections => {
				return { params: { id: model.id, sections: sections.trim() } }
			})
		})
		.flat()

	return {
		paths: paths,
		fallback: false, // See the "fallback" section below
	}
}
