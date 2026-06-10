import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useRef } from 'react'

import Hero from '../../components/hero/hero'
import ModelBlock from '../../components/modelBlock/modelBlock'
import PageHeader from '../../components/pageHeader/pageHeader'

import { SetComponentProps } from '../../models/setComponentProps.model'

import getColorsData from '../../api_utils/getColorsData'
import getConnectionsData from '../../api_utils/getConnectionsData'
import getModelsData from '../../api_utils/getModelsData'
import DownloadsBlock from '../../components/pageModels/downloadsBlock'
import ImagesOtherList from '../../components/pageModels/imagesOtherList'
import RadiatorAllOptions from '../../components/pageModels/radiatorAllOptions'
import RadiatorInCartList from '../../components/pageModels/radiatorInCartList'
import PageTitle from '../../components/pageTitle/pageTitle'
import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'
import * as styles from '../../styles/styles'
import global from '../../variables/global'

type Props = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
}

const Model2050: React.FC<SetComponentProps> = ({ models, colors, connections }: Props) => {
	const refLateral = useRef<HTMLElement>(null)
	const refBottom = useRef<HTMLElement>(null)
	const refOrder = useRef<HTMLElement>(null)

	const model = models.find(model => model.id === '2050')
	if (!model) return null

	return (
		<Box
			itemScope
			itemType='https://schema.org/ProductModel'
		>
			<meta
				itemProp='name'
				content='Радиатор Arbonia 2050'
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
				title={'Радиаторы Arbonia 2050 | Выгодные цены | Гарантия'}
				description='Двухтрубчатые радиаторы Arbonia 2050 в наличии (высота 50 см). 📦 Склады в Мск и СПб. 🛡️ Официальная гарантия 10 лет. 🚚 Доставка по России.'
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Купить стальной трубчатый радиатор Arbonia 2050'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Радиаторы под окно', link: '/catalog/standard' },
					{ title: 'Arbonia 2050', link: '/models/2050' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Радиаторы Arbonia 2050 '}
				subheader={'Двухтрубчатые радиаторы Arbonia высотой 50 см'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '1200px', margin: 'auto' }}>
				<Box
					marginBottom='30px'
					display='flex'
					flexDirection='row'
					gap='15px'
					flexWrap='wrap'
				>
					<Box
						onClick={() => {
							if (!refLateral.current) return
							refLateral.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
							Радиаторы Arbonia 2050 с боковым подключением
						</Typography>
					</Box>
					<Box
						onClick={() => {
							if (!refBottom.current) return
							refBottom.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
							Радиаторы Arbonia 2050 с нижним подключением
						</Typography>
					</Box>
					<Box
						onClick={() => {
							if (!refOrder.current) return
							refOrder.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>Arbonia 2050 под заказ</Typography>
					</Box>
				</Box>

				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						<p>
							Трубчатый радиатор Arbonia 2050 - двухтрубчатый радиатор высотой 50 см. Он идеально подойдет для установки
							под стандартные окна, оставляя достаточно места для подключения снизу и под подоконником. Толщина
							радиатора составляет всего 65 мм, что придает ему изысканный внешний вид. При небольших габаритах,
							радиатор обладает достаточно высокой тепловой мощностью: 49 Вт (ΔT=60°). Модель доступна в наличии с
							боковым и с нижним подключением. Если вас интересует радиатор чуть большей мощности или с межосевым
							расстоянием при боковом подключении 50 см, то обратите внимание на модель &#160;
							<a
								style={{ textDecoration: 'none' }}
								href='/models/2057-9016-12'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 2057 с боковым подключением
								</Typography>
							</a>
							&#160;и&#160;
							<a
								style={{ textDecoration: 'none' }}
								href='/models/2057-9016-69tvv'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 2057 с нижним подключением
								</Typography>
							</a>
							.
						</p>

						<h2 style={{ marginTop: '40px' }}>Технические характеристики радиаторов Arbonia 2050</h2>
						<p>
							<span style={{ ...styles.smallTextBold }}>Высота секции: 50 см.</span> Радиатор подходит для установки под
							стандартные окна (высота подоконника от 70 см)
						</p>
						<p>
							<span style={{ ...styles.smallTextBold }}>Глубина секции: 65 мм.</span> Важно отметить, то радиатор
							располагается на некотором расстоянии от стены, в зависимости от модели кронштейна. Поэтому закладывайте
							полную глубину радиатора как 9-10 см и тогда вы точно не ошибетесь.
						</p>
						<p>
							<span style={{ ...styles.smallTextBold }}>Мощность секции: 49 Вт (ΔT=60°).</span> При среднем расчете 100
							Вт/м2, такой секции будет достаточно для обогрева 0.5 кв.м. В случае хорошей теплоизоляции дома, одной
							секции может быть достаточно для обогрева 1.5 кв.м.
						</p>
					</Typography>
				</Box>

				{/* 2050 белый*/}
				<Box
					marginTop='40px'
					ref={refLateral}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 2050 с боковым подключением</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={4}
							>
								<img
									itemProp='image'
									src='/images/models/2050-12-2.jpeg'
									alt='Белый трубчатый радиатор Arbonia 2050 с боковым подключением'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={'400px'}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={8}
							>
								<p>
									Боковое подключение является универсальным, так как подходит для установки в домах с вертикальной
									разводкой труб, а также для установки в квартирах с разводкой труб по полу. В наличии поддерживаются
									модели с боковым подключением 3/4, подходящим для российских домов.
								</p>
								<p>
									Стоит упомянуть, что данный вид подключения является базовым и поставляется без наценки. Поэтому,
									стоимость может стать дополнительным аргументом в пользу бокового подключения.
								</p>
							</Grid>
						</Grid>

						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2050-9016-12') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 2050 нижнее*/}
				<Box
					marginTop='80px'
					ref={refBottom}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 2050 с нижним подключением</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={4}
							>
								<img
									src='/images/models/2050-69.jpg'
									alt='Радиатор Arbonia 2050 69 ТВВ'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={'400px'}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={8}
							>
								<p>
									Нижнее подключение является стандартом для всех современных домов. Оно позволяет более свободно
									размещать радиаторы внутри помещения, исходя из ваших нужд, а не из расположения стояков отопления.
								</p>
								<p>
									В наличии поддерживаются радиаторы Arbonia 2050 с нижним подключением 69 ТВВ. Это одностороннее
									подключением слева или справа под стандартный узел с межосевым расстоянием 50 мм. Так как радиатор
									симметричный, то не имеет значения, с какой стороны требуется подключение. ТВВ означает, что в модели
									предусмотрен верхний термовентиль, отвечающий за автоматическую регулировку мощности радиатора. Для
									него подходит любой термостат с резьбой 30х1,5.
								</p>
							</Grid>
						</Grid>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2050-9016-69tvv') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				<Box marginTop='50px'>
					<Typography sx={{ ...styles.standardText }}>
						Здесь мы отобразили все модели Arbonia 2050 доступные к покупке со склада. Если среди предложенных вариантов
						не нашлось нужного цвета, то через нас вы можете как заказать радиатор в нужном исполнении на заводе. Также
						доступна опция с&#160;
						<a
							style={{ textDecoration: 'none' }}
							href='/coloring'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								покраской белого радиатора Arbonia в любой цвет по шкале RAL
							</Typography>
						</a>
						&#160;на ваш выбор. Покраска производится на профессиональном оборудовании с сохранением официальной
						гарантии. Мы будем поддерживать список доступных вариантов в актуальном состоянии.
					</Typography>
				</Box>
				<Box
					marginTop='60px'
					ref={refOrder}
				>
					<h2>Купить радиаторы Arbonia 2050 под заказ</h2>
					<Typography sx={{ ...styles.standardText }}>
						Если вы не нашли подходящего варианта из складской программы, то радиаторы Arbonia 2050 можно заказать на
						заводе в любом доступном исполнении.
					</Typography>
					<RadiatorAllOptions
						modelInit={model}
						connectionInit={connections[0]}
						colorInit={colors[0]}
						models={models}
						colors={colors}
						connections={connections}
					/>
					<RadiatorInCartList
						models={models}
						colors={colors}
						connections={connections}
					/>
				</Box>
				<Box marginTop='80px'>
					<h2>Дополнительные изображения радиаторов Arbonia 2050</h2>
					<ImagesOtherList imagesString={model.imagesOther || ''} />
				</Box>
				<Box marginTop='80px'>
					<h2>Документы для скачивания</h2>
					<DownloadsBlock />
				</Box>
			</Box>
		</Box>
	)
}

export default Model2050

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
