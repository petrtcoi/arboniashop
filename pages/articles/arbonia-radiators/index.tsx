import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Трубчатые радиаторы Arbonia: преимущества и недостатки'}
				description={
					'Трубчатые радиаторы Arbonia - один из признанных лидеров европейского и россйиского рынка, когда речь заходит о дизайнерских отопительных приборах. Разбираем, чем они так хороши и какие недостатки у них все же имеются.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Преимущества и недостатки трубчатых радиаторов Arbonia',
						link: '/articles/arbonia-radiators',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Преимущества и недостатки трубчатых радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Arbonia является один из лидеров в производстве стальных трубчатых радиаторов. Бренд имеет давнюю историю и
					хорошо зарекомендовал себя на российском рынке. Рассмотрим особенности, преимущества и недостатки Arbonia
					Column.
				</Typography>
				<Typography
					marginTop='40px'
					variant='h5'
					component={'h2'}
				>
					Преимущества
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								<Link href='/'>
									<a style={{ textDecoration: 'none' }}>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Трубчатые радиаторы Arbonia
										</Typography>
									</a>
								</Link>
								&#160; представляют из себя цельную конструкцию: все секции сварены между собой на заводе. Радиаторы
								приходят в Россию уже полностью готовые к эксплуатации. Здесь нет соединений через ниппеля, а потому и
								исключен риск протечки между секциями
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Данные радиаторы могут быть изготовлены практически любых габаритов, а потому для любой ниши можно
								подобрать подходящую модель.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Большое число радиаторов Arbonia поддерживается в наличии в России. Наиболее популярные модели: 3030,
								3037, 2057, 3057, 2180, 3180 и др. Складские модели подходят для подавляющего большинства квартир и
								домов.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Гигиеничность. Радиаторы Arbonia не имеют закрытых частей и легко доступны для уборки. Уборку также
								облегчает гладкое покрытие. Данный аспект может быть очень важен, если в доме проживают люди, страдающие
								аллергией.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Высокое премиальное качество. Производство полностью автоматизировано. Радиаторы покрыты высококлассной
								порошковой краской, которая долгие годы сохраняет внешний вид и защищает радиатор.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Универсальность: трубчатые радиаторы одинаково хорошо вписываются и в современные интерьеры, и в
								интерьеры, выполненные в ретро-стиле.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Гарантия 10 лет - одна из самых больших среди радиаторов данного класса.
							</Box>
						</li>
					</ul>
				</Typography>
				<Typography
					marginTop='40px'
					variant='h5'
					component={'h2'}
				>
					Недостатки
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Основным недостатком трубчатых радиаторов является их более высокая цена по сравнению с бюджетными
								алюминиевыми, биметаллическими или панельными радиаторами. Но, при этом, трубчатые радиаторы стоят и
								заметно меньше, чем эксклюзивные дизайн-радиаторы. По соотношению цена / качество - это одно из лучших
								предложений на рынке.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Меньшая теплоотдача по сравнению с панельными радиаторами аналогичных габаритов. При замене старых
								панельных радиаторов на трубчатые, необходимо иметь запас по размерам ниши, так как новый радиатор будет
								немного длиннее, выше или толще, чем старый панельный или алюминиевый радиатор.
							</Box>
						</li>
					</ul>
				</Typography>

				<Box textAlign={'center'}>
					<img
						src='/images/articles/1.jpg'
						alt='Радиатор Arbonia 2-трубчатый со встроенным термовентилем'
						width={500}
						height={500}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
