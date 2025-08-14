import { Box, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Hero from '../../components/hero/hero'
import PageHeader from '../../components/pageHeader/pageHeader'
import PageTitle from '../../components/pageTitle/pageTitle'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

type ArticlesListPageProps = {}

const ArticlesListPage: NextPage<ArticlesListPageProps> = () => {
	return (
		<Box>
			<PageHeader title={'Полезная информация Arbonia'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Полезная информация Arbonia'}
			/>
			<Box
				sx={{ ...global.pagePadding }}
				marginTop='50px'
			>
				<Grid
					container
					spacing={5}
				>
					<Grid
						item
						md={6}
					>
						<Box sx={{ backgroundColor: '#EEE', borderRadius: '8px' }}>
							<Link href='/articles/care'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20250814.jpg'
											alt='Правильный уход за радиаторами Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Правильный уход за радиаторами Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Трубчатые радиаторы Arbonia — это не только эффективный источник тепла, но и важный элемент
											интерьера. Их высококачественное покрытие рассчитано на десятилетия службы...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box sx={{ backgroundColor: '#EEE', borderRadius: '8px' }}>
							<Link href='/articles/montazh-radiatorov-arbonia-rekomendacii'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/3030.jpg'
											alt='Монтаж радиатороа Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Рекомендации по монтажу радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Чтобы радиаторы Arbonia работали эффективно и служили долго, установка должна проводиться с
											соблюдением всех технических требований...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box sx={{ backgroundColor: '#EEE', borderRadius: '8px' }}>
							<Link href='/articles/faq'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/sf-3-0.jpeg'
											alt='Высокий радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Ответы на часто задаваемые вопросы
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Подборка частых вопросов про радиаторы Arbonia и ответом на них. Где производятся? Какие давление
											держат? И т.д...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/termostat'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2050-12-2.jpeg'
											alt='Трубчатый радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Правильная установка термостата на радиаторы Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Подборка частых вопросов про радиаторы Arbonia и ответом на них. Где производятся? Какие давление
											держат? И т.д...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/high-arbonia'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2022122702.jpg'
											alt='Высокий радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Высокие радиаторы Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Высокие радиаторы, которые мы определяем как устройства отопления с высотой от 1 метра и выше,
											становятся все более популярными в современных архитектурных и дизайнерских решениях...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/panorama'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/panorama/arbonia-00.jpg'
											alt='Вертикальный радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Радиаторы Arbonia для панорамных окон
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Окна с панорамным видом - отличное решение для создания уютной атмосферы в помещении, поскольку
											они обеспечивают больше естественного света и открывают потрясающий вид. Одной из ключевых задач,
											которую необходимо решить, является выбор подходящих отопительных приборов...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/column-radiators'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/models/sf-3-0.jpeg'
											alt='Трубчатые радиаторы'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Трубчатые радиаторы. Особенности, преимущества и недостатки.
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Трубчатые радиаторы являются одним из самых востребованных видов отопительного оборудования в
											России, сочетая в себе практичность, долговечность и высокую теплоотдачу. Современные технологии
											лазерной сварки, используемые при производстве, гарантируют высокую надёжность и стабильность этих
											радиаторов...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/epd'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/epd.jpg'
											alt='Сертификат EPD для трубчатых радиаторов Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Сертификат EPD для трубчатых радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Arbonia получили сертификат Environmental Product Declaration (EPD) на все свои стальные
											радиаторы. Этот сертификат присваивается Институтом строительства и окружающей среды (IBU e.V.) и
											предоставляет возможность оценить экологическое воздействие продукции на всех этапах её жизненного
											цикла...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/arbonia-3057'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230222.jpg'
											alt='Радиатор Arbonia 3057'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Замена чугунных радиаторов на Arbonia 3057
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Отопление является одним из важнейших аспектов комфорта в жилом помещении. Чтобы система работала
											надежно и эффективно, важно выбрать правильное оборудование и правильно его установить. В данной
											статье мы рассмотрим особенности установки и замены трубчатых радиаторов Arbonia вместо старых
											чугунных или алюминиевых радиаторов...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/low-models'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230126_0.jpg'
											alt='Радиатор Arbonia 3030'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Невысокие модели радиаторов Arbonia в наличии
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Радиаторы небольшой высоты набирают всю большую популярность в нашей стране. Связано это с тем,
											что в современных домах все чаще устанавливают большие окна с низкими подоконниками, под которыми
											батарею стандартной высоты разместить уже не получится. Поэтому, радиаторы Arbonia высотой до 40
											см входят в нашу складскую программу. Ведь дома с большими окнами - это чаще всего дома бизнес-
											или премиум-класса...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/convection-radiaton-arbonia'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230110_0.jpg'
											alt='Вертикальный радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Что такое конвекция и тепловое излучение радиатора
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Все радиаторы отопления, без исключения, обогревают помещение за счет двух физических явлений:
											конвекция воздуха и тепловое (инфракрасное) излучение. Разные конструкции и модели радиаторов
											обладают разным соотношением доли тепла, передаваемой тем или иным способом...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/calc-radiators-by-old-ones'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2022122701.jpg'
											alt='3-трубчатый белый радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Подбор радиаторов Arbonia на основе уже установленных радиаторов
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Правильно определить требуемую тепловую мощность радиаторов очень важно. Ведь недостаточная
											мощность приведет к тому, что в доме или квартире будет просто некомфортно жить в холодное время
											года. С другой стороны...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/2-3-columns'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/90-1.jpeg'
											alt='3-трубчатый радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Отличия 2-трубчатых радиаторов Arbonia от 3-трубчатых
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Мы стараемся поддерживать в наличии наиболее популярные модели радиаторов Arbonia. Это наиболее
											универсальные модели, которые подходят для большинства случаев...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/arbonia-radiators'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/1.jpg'
											alt='Трубчатый радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Преимущества и недостатки трубчатых радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Arbonia является один из лидеров в производстве стальных трубчатых радиаторов. Бренд имеет давнюю
											историю и хорошо зарекомендовал себя на российском рынке...
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/consoles'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20.jpg'
											alt='Нижний упор Arbonia ZB0280'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Регулируемые кронштейны W161 или фиксирующий зажим ZB0281
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Радиаторы Arbonia чаще всего комплектуются одним из двух вариантов кронштейнов: W161 + ZB0280 и
											ZB0280/ZB0281/ZB0282
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/2180-3180'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/30.jpeg'
											alt='Вертикальный радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Вертикальные радиаторы Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Вертикальные трубчатые радиаторы Arbonia - один из наиболее популярных вариантов отопления
											помещений. Именно поэтому, в складскую программу входят сразу 2 модели высотой 1.8 м.
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/connections'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/100.jpg'
											alt='Радиатор Arbonia'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Радиаторы Arbonia с боковым и нижним подключением
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Два наиболее используемых варианта подключения для радиаторов Arbonia: боковое ¾” и нижнее со
											встроенным термовентилем. Именно они входят в нашу складскую программу.
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<Link href='/articles/calculate'>
								<a style={{ textDecoration: 'none' }}>
									<Box textAlign={'center'}>
										<img
											src='/images/models/2-columns-3.jpeg'
											alt='Как подбирать радиаторы Zehnder Charleston по мощности'
											width={300}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Как подбирать радиаторы Arbonia по мощности
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Трубчатые радиаторы Arbonia предоставляют широкие возможности по подбору конкретных моделей под
											каждый случай: практически любая высота и длина доступны для изготовления.
										</Typography>
									</Box>
								</a>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default ArticlesListPage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
