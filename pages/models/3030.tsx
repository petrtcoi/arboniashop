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

const Model3030: React.FC<SetComponentProps> = ({ models, colors, connections }: Props) => {
	const refLateral = useRef<HTMLElement>(null)
	const refBottom = useRef<HTMLElement>(null)
	const refBottom9005 = useRef<HTMLElement>(null)
	const refOrder = useRef<HTMLElement>(null)

	const model = models.find(model => model.id === '3030')
	if (!model) return null

	return (
		<Box
			itemScope
			itemType='https://schema.org/ProductModel'
		>
			<meta
				itemProp='name'
				content='Радиаторы Arbonia 3030'
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
				title={'Радиаторы Arbonia 3030 | Выгодные цены | Гарантия'}
				description='Низкие радиаторы Arbonia 3030 в наличии (высота 30 см). 📦 Склады в Мск и СПб. 🛡️ Официальная гарантия 10 лет. 🚚 Доставка в любой город России.'
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Купить стальной трубчатый радиатор Arbonia 3030'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Arbonia 3030', link: '/models/3030' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Радиаторы Arbonia 3030'}
				subheader={'Низкие трёхтрубчатые радиаторы Arbonia высотой 30 см в наличии'}
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
							Радиаторы Arbonia 3030 с боковым подключением
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
							Радиаторы Arbonia 3030 с нижним подключением
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
							Радиаторы Arbonia 3030 69 ТВВ RAL 9005
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
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
							Радиаторы Arbonia 3030 под заказ
						</Typography>
					</Box>
				</Box>

				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						<p>
							Радиатор Arbonia 3030 - это 3-трубчатая модель высотой всего 30 см Это наиболее низкая модель из имеющихся
							в наличии. При небольших габаритах, она обладает достаточно высокой тепловой мощностью и может
							самостоятельно отапливать небольшие и средние помещения. Радиатор является безальтернативным выбором при
							отоплении отоплении в современных домах с большими окнами и низкими подоконниками.
						</p>

						<h2 style={{ marginTop: '40px' }}>Технические характеристики радиаторов Arbonia 3030</h2>
						<p>
							<span style={{ ...styles.smallTextBold }}>Высота секции: 30 см.</span> Небольшая высота позволяет
							устанавливать радиатор под подоконники высотой всего 50 см, оставляя сверху и снизу необходимые 10 см
							пространства для лучшей конвекции теплого воздуха.
						</p>
						<p>
							<span style={{ ...styles.smallTextBold }}>Глубина секции: 105 мм.</span> Радиатор имеет стандартную
							глубину, сопоставимую с большинством современных моделей.
						</p>
						<p>
							<span style={{ ...styles.smallTextBold }}>Мощность секции: 41 Вт (ΔT=60°).</span> При среднем расчете 100
							Вт/м2, такой секции будет достаточно для обогрева 0.4 кв.м. В случае хорошей теплоизоляции дома, одной
							секции может быть достаточно для обогрева 1.2 кв.м.
						</p>
					</Typography>
				</Box>

				{/* 3030 боковое*/}
				<Box
					marginTop='40px'
					ref={refLateral}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 3030 с боковым подключением</h2>
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
									src='/images/models/3030-12.jpeg'
									alt='Белый радиатор Arbonia 3030 с боковым подключением'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={400}
									// height={400}
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
								<p>Межосевое расстояние радиатора при боковом подключении составляет 23 см.</p>
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
							model={models.find(x => x.id === '3030-9016-12') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 3030 нижнее*/}
				<Box
					marginTop='80px'
					ref={refBottom}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 3030 с нижним подключением</h2>
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
									src='/images/models/3030-5.jpeg'
									alt='Радиатор Arbonia 3030 69 ТВВ'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={400}
									// height={400}
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
									В наличии поддерживаются радиаторы Arbonia 3030 с нижним подключением 69 ТВВ. Это одностороннее
									подключением слева или справа под стандартный узел с межосевым расстоянием 50 мм. Так как радиатор
									симметричный, то не имеет значения, с какой стороны требуется подключение. ТВВ означает, что в модели
									предусмотрен верхний термовентиль, отвечающий за автоматическую регулировку мощности радиатора. Для
									него подходит любой термостат с резьбой 30х1,5.
								</p>
								<p>
									Высота радиатора всего 50 см, что позволяет ему легко размещаться под подоконниками высотой от 70 см
									(остается по 10 см сверху и снизу - минимальное рекомендуемое расстояние для подвода труб и лучшей
									конвекции теплого воздуха).
								</p>
							</Grid>
						</Grid>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '3030-9016-69tvv') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 3030 нижнее RAL9005*/}
				<Box
					marginTop='80px'
					ref={refBottom9005}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 3030 69 ТВВ в черном цвете RAL 9005 matt</h2>
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
									src='/images/models/3030-9005.jpg'
									alt='Трубчатый радиатор Arbonia 3030 69 ТВВ RAL 9005 matt'
									width={400}
									height={400}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={8}
							>
								<p>
									Черный цвет - это стильное современное решение. Он столь же универсален, как и белый цвет, но придает
									интерьеру больше изысканности и оригинальности.
								</p>
							</Grid>
						</Grid>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '3030-9005-69tvv') || models[0]}
							color={colors.find(x => x.id === '9005') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				<Box marginTop='50px'>
					<Typography sx={{ ...styles.standardText }}>
						Здесь мы отобразили все модели Arbonia 3030 доступные к покупке со склада. Если среди предложенных вариантов
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
					<h2>Купить радиаторы Arbonia 3030 под заказ</h2>
					<Typography sx={{ ...styles.standardText }}>
						Если вы не нашли подходящего варианта из складской программы, то радиаторы Arbonia 3030 можно заказать на
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
					<h2>Дополнительные изображения трубчатых радиаторов Arbonia 3030</h2>
					<ImagesOtherList imagesString={model.imagesOther || ''} />
				</Box>
				<Box marginTop='80px'>
					<h2>Документы для скачивания</h2>
					<DownloadsBlock />
				</Box>
				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Полезные материалы
					</Typography>

					<ul>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/arbonia-3030-vs-3037`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 3030 против 3037: как выбрать идеальный радиатор под низкий подоконник
								</Typography>
							</a>
						</li>
					</ul>
				</Box>
			</Box>
		</Box>
	)
}

export default Model3030

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
