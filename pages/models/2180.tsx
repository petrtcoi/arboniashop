import ProductMetadata from '../../components/seo/ProductMetadata'
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

const Model2180: React.FC<SetComponentProps> = ({ models, colors, connections }: Props) => {
	const ref9016 = useRef<HTMLElement>(null)
	const refSf3 = useRef<HTMLElement>(null)
	const ref7016 = useRef<HTMLElement>(null)
	const refOrder = useRef<HTMLElement>(null)

	const model = models.find(model => model.id === '2180')
	if (!model) return null

	return (
		<Box
			itemScope
			itemType='https://schema.org/ProductModel'
		>
			<ProductMetadata description={`Стальной трубчатый радиатор Arbonia 2180: высота ${model.height} мм, глубина ${model.width} мм, боковое и нижнее подключение. Размеры, мощность и цены по числу секций.`} sku='2180' />
			<meta
				itemProp='name'
				content='Радиатор Arbonia 2180'
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
				title={'Arbonia 2180 — вертикальный радиатор 180 см: цены и наличие'}
				description='Вертикальные радиаторы Arbonia 2180 в наличии (2-трубчатые). Большой выбор моделей. 🛡️ Официальная гарантия 10 лет. 🚚 Доставка в любой город России.'
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Купить стальной трубчатый радиатор Arbonia 2180'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Arbonia 2180', link: '/models/2180' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Радиаторы Arbonia 2180 '}
				subheader={'Двухтрубчатые вертикальные радиаторы Arbonia (высота 180 см)'}
			/>
			{/* <Box>
				<Typography
					variant='h4'
					component={'h1'}
					align='center'
					sx={{ marginTop: '50px' }}
				>
					Радиаторы <span style={{ color: '#EF7D00', fontWeight: 600 }}>Arbonia 2180</span>
				</Typography>
				<Typography style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.9 }}>
					Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ
				</Typography>
			</Box> */}
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
							if (!ref9016.current) return
							ref9016.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>Arbonia 2180 RAL9016</Typography>
					</Box>
					<Box
						onClick={() => {
							if (!ref7016.current) return
							ref7016.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>Arbonia 2180 RAL7016</Typography>
					</Box>
					<Box
						onClick={() => {
							if (!refSf3.current) return
							refSf3.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
							Arbonia 2180 в цвете SF-3 Antrazit metallic
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
							Радиаторы Arbonia 2180 под заказ
						</Typography>
					</Box>
				</Box>

				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						<p>
							Радиатор Arbonia 2180 - это самая популярная модель от данного производителя. Она сочетает в себе высокую
							тепловую мощность (одна секция может обогреть в среднем от 1.5 до 3 кв.м.) и компактные размеры (толщина
							радиатора всего 65 мм). Если вас интересуют также 3-трубчатые модели, то посмотрите нашу подборку&#160;
							<a
								style={{ textDecoration: 'none' }}
								href='/catalog/high-models'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									вертикальных радиаторов Arbonia
								</Typography>
							</a>
							, входящих в складскую программу.
						</p>

						<h2 style={{ marginTop: '40px' }}>Технические характеристики радиаторов Arbonia 2180</h2>
						<p>
							<span style={{ ...styles.standardTextRed }}>Высота секции: 180 см.</span> Это идеальный размер для
							большинства современных квартир и домов. Радиаторы этой высоты не затеряются в просторных помещениях с
							высокими потолками, но и не будут слишком громоздкими в небольших комнатах.
						</p>
						<p>
							<span style={{ ...styles.standardTextRed }}>Глубина секции: 65 мм.</span> Радиатор довольно плоский,
							поэтому его можно ставить даже в узких коридорах. Частым сценарием для использования радиаторов Arbonia
							2180 является установка рядом с окном в спальне. Если кровать располагается близко от окна, то несколько
							сантиметров выигрыша по глубине могут быть существенными, ведь нужно еще оставить место для прикроватной
							тумбочки. Важно отметить, то радиатор располагается на некотором расстоянии от стены, в зависимости от
							модели кронштейна. Поэтому закладывайте полную глубину радиатора как 9-10 см и тогда вы точно не
							ошибетесь.
						</p>
						<p>
							<span style={{ ...styles.standardTextRed }}>Мощность секции: 164 Вт (ΔT=60°).</span> При среднем расчете
							100 Вт/м2, такой секции будет достаточно для обогрева 1.6 кв.м. Если сравнивать с другими радиаторами, то
							ее мощность близка к мощности одной секции чугунного или алюминиевого радиатора, которые толще и длиннее.
							Если радиатор устанавливается в современном доме с хорошей теплоизоляцией или, наоборот, в старом
							кирпичном доме с толстыми стенами и хорошими стеклопакетами, то одна секция вполне может обогреть и 3-4
							кв.м.
						</p>
					</Typography>
				</Box>

				{/* 2180 белый*/}
				<Box
					marginTop='40px'
					ref={ref9016}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 2180 RAL 9016</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={5}
							>
								<img
									itemProp='image'
									src='/images/models/2180-1.jpeg'
									alt='Белый радиатор Arbonia 2180'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={600}
									// height={600}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={7}
							>
								<p>
									Белый свет по прежнему остается наиболее актуальным и востребованным, когда речь идет о радиаторах
									отопления. Ведь это самый нейтральный цвет. Он легко сочетается с любой цветовой схемой помещения.
									Гармонично смотрится даже в интерьерах, выполненных в темный тонах. Хотите беспроигрышный вариант -
									берите трубчатый радиатор Arbonia 2180 в белом цвете.
								</p>
								<h3 style={{ marginTop: '40px' }}>Боковое подключение 3/4</h3>
								<p>
									В наличии поддерживаются модели на 4, 6, 8, 10 и 12 секций. Базовым вариантом является боковое
									подключение с диаметром внутренней резьбы 3/4". Это адаптация под российский рынок, где часто
									используется вертикальная разводка отопления через один стояк. Классические соединения на 1/2" здесь
									не подойдут, так как не позволяют сделать эффективный байпас без потери в мощности радиатора.
								</p>
							</Grid>
						</Grid>

						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-9016-12') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
						<h3 style={{ marginTop: '40px' }}>Нижнее подключение №69 ТВВ</h3>
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
									src='/images/models/2180-tvv.jpeg'
									alt='Белый радиатор Arbonia 2180 69 ТВВ'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={600}
									// height={600}
								/>
							</Grid>

							<Grid
								item
								xs={12}
								md={8}
							>
								<p>
									Хотя боковое подключение можно использовать и при современной разводке труб по полу, часто оно
									является не целесообразным и использование радиаторов с нижним подключением является более
									предпочтительным.
								</p>
								<p>
									Радиаторы Arbonia с нижним подключением имеют выходы под стандартный узел с межосевым расстоянием 50
									мм. Так как радиатор симметричный, то здесь нет разницы, слева или справа подключатся радиатор, его
									можно просто развернуть нужной стороной. Важно помнить, что подача воды всегда осуществляется в
									крайнюю секцию. В нашем сообществе Вконтакте есть кроткая заметка о том, как&#160;
									<a
										style={{ textDecoration: 'none' }}
										href='https://vk.com/lovehomekomfort?w=wall-86767719_2238'
										rel='nofollow'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											лучше подключать радиаторы с нижним подключением
										</Typography>
									</a>
									.
								</p>
								<p>
									С той же стороны, где подключаются теплоноситель, расположен встроенный термовентиль под стандартный
									термостат с резьбой 30х1.5. Здесь подойдет термоголовка от любого производителя, например, от
									Oventrop, Herz, Giacomini, Danfoss и других. Пытаться найти термоголовку именно от Arbonia не имеет
									смысла, так как она будет стоить дороже и произведена одним из перечисленных выше производителей,
									просто с другим логотипом.
								</p>
							</Grid>
						</Grid>

						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-9016-69tvv') || models[0]}
							color={colors.find(x => x.id === '9016') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 2180 RAL 7016*/}
				<Box
					marginTop='80px'
					ref={ref7016}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 2180 RAL 7016</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={5}
							>
								<img
									src='/images/models/7016-0.jpeg'
									alt='Трубчатый радиатор Arbonia 2180 RAL 7016'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={600}
									// height={600}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={7}
							>
								<p>
									Цвет можно охарактеризовать как темно-серый. Это не стандартный белый цвет и, в то же время, не совсем
									черный. Он хорошо сочетается с темными оттенками пола и мебели, а также с белыми стенами. В отличие от
									белого или черного цвета, темно-серый не требует частой уборки и не выглядит грязным, если на нем
									появляются пыль. В то же время, он не такой темный, как черный, и не создает впечатления того, что в
									комнате слишком мало света.
								</p>
								<p>
									Как и с белым цветом, для вас доступны четные секции от 4 до 12. Боковое и нижнее подключение. Цветные
									радиаторы стоят дороже белых. Но не стоит забывать, что цветные радиаторы выглядят дороже и за
									относительно небольшую доплату вы значительно повышаете внешний вид вашего интерьера.
								</p>
							</Grid>
						</Grid>
						<p style={{ marginTop: '40px' }}>Боковое подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-7016-12') || models[0]}
							color={colors.find(x => x.id === '7016') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
						<p style={{ marginTop: '40px' }}>Нижнее подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-7016-69tvv') || models[0]}
							color={colors.find(x => x.id === '7016') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 2180 SF-3*/}
				<Box
					marginTop='80px'
					ref={refSf3}
				>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиатор Arbonia 2180 SF-3 Antrazit metallic</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={5}
							>
								<img
									src='/images/models/sf-3-2.jpeg'
									alt='Радиатор Arbonia 2180 (SF-3 Anthrazit metallic)'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={600}
									// height={600}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={7}
							>
								<p>
									Да - это еще один темный, но не черный цвет. От предыдущего он отличается тем, что имеет
									металлизированный блеск и внешне выглядит более светлым. Данный вариант отлично подойдет, например,
									для интерьеров в стиле лофт.
								</p>
								<p>
									Популярным сценарием использования радиаторов Arbonia 2180 именно в этом цвете - замена радиаторов,
									выполненных в цвете прозрачный лак. С одной стороны - внешне он похож, хотя и не имеет характерных
									видимых следов сварки и шлифовки. С другой - радиатор имеет полноценного покрытие, надежно защищающее
									его от проникновения влаги, чему подвержены радиаторы, покрытые только прозрачным лаком. Более того,
									равномерная покраска радиатора делает его более предсказуемым: вам проще спланировать и встроить его в
									интерьер.
								</p>
								<p>Традиционно: доступные боковое подключение 3/4 и нижнее со встроенным термовентилем.</p>
							</Grid>
						</Grid>
						<p style={{ marginTop: '40px' }}>Боковое подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-sf3-12') || models[0]}
							color={colors.find(x => x.id === 'sf3') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
						<p style={{ marginTop: '40px' }}>Нижнее подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-sf3-69tvv') || models[0]}
							color={colors.find(x => x.id === 'sf3') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>

				{/* 2180 RAL 9005*/}
				<Box marginTop='80px'>
					<Typography sx={{ ...styles.standardText }}>
						<h2>Радиаторы Arbonia 2180 RAL 9005</h2>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={5}
							>
								<img
									src='/images/models/2180-9005.jpeg'
									alt='Радиатор Arbonia 2180 RAL9005 matt'
									style={{ maxWidth: '100%', height: 'auto' }}
									width={600}
									// height={600}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={7}
							>
								<p>
									Черный матовый цвет также является одним из самых популярных для радиаторов Arbonia. Как и белый,
									черный цвет легко встраивается в любой интерьер, а его матовость придает ему особый шарм. Радиатор не
									дает таких бликов, как модели с глянцевым покрытием, а потому лучше сливается с окружающим его
									пространством.
								</p>

								<p>Модель поддерживается на складе с боковым и нижним подключением.</p>
							</Grid>
						</Grid>
						<p style={{ marginTop: '40px' }}>Боковое подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-9005-12') || models[0]}
							color={colors.find(x => x.id === '9005') || colors[0]}
							connection={connections.find(x => x.id === '12-34') || connections[0]}
						/>
						<p style={{ marginTop: '40px' }}>Нижнее подключение:</p>
						<ModelBlock
							title={''}
							description={''}
							onlyTable={true}
							model={models.find(x => x.id === '2180-9005-69tvv') || models[0]}
							color={colors.find(x => x.id === '9005') || colors[0]}
							connection={connections.find(x => x.id === '69tvv') || connections[0]}
						/>
					</Typography>
				</Box>
				<Box marginTop='50px'>
					<Typography sx={{ ...styles.standardText }}>
						Здесь мы отобразили все модели радиаторов Arbonia 2180 доступные к покупке со склада. Если среди
						предложенных вариантов не нашлось нужного цвета, то через нас вы можете как заказать радиатор в нужном
						исполнении на заводе. Также доступна опция с&#160;
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
					<h2>Радиаторы Arbonia 2180 под заказ</h2>
					<Typography sx={{ ...styles.standardText }}>
						Если вы не нашли подходящего варианта из складской программы, то радиаторы Arbonia 2180 можно заказать на
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
					<h2>Популярные запросы на радиаторы Arbonia 2180</h2>
					<ul>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/radiators/2180-04'
							>
								<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
									Радиаторы Arbonia 2180 04 секции
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/radiators/2180-06'
							>
								<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
									РадиаторыArbonia 2180 06 секций
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/radiators/2180-08'
							>
								<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
									Радиаторы Arbonia 2180 08 секций
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/radiators/2180-10'
							>
								<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
									Радиаторы Arbonia 2180 10 секций
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/radiators/2180-12'
							>
								<Typography sx={{ ...styles.smallTextRedLink, cursor: 'pointer' }}>
									Радиаторы Arbonia 2180 12 секций
								</Typography>
							</a>
						</li>
					</ul>
				</Box>
				<Box marginTop='80px'>
					<h2>Дополнительные изображения трубчатых радиаторов Arbonia 2180</h2>
					<ImagesOtherList imagesString={model.imagesOther || ''} />
				</Box>
				<Box marginTop='80px'>
					<h2>Документы для скачивания</h2>
					<DownloadsBlock />
				</Box>

				<Box marginTop='60px'>
					<h2>Полезные материалы</h2>

					<ul>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/arbonia-2180-calc`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Сколько секций радиатора Arbonia 2180 нужно для комнаты 10–20 м²
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/montazh-arbonia-2180-na-gkl`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Монтаж радиатора Arbonia 2180 на гипсокартон: правила и расчеты
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/arbonia-2180-po-ploshadi`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Калькулятор секций Arbonia 2180 по площади и температуре
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/arbonia-2180-interior`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 2180 в интерьере: как вертикальный радиатор меняет пространство
								</Typography>
							</a>
						</li>
					</ul>
				</Box>
			</Box>
		</Box>
	)
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
