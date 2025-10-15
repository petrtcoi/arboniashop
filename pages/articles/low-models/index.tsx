import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
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
				title={'Невысокие модели радиаторов Arbonia в наличии'}
				description={
					'Радиаторы небольшой высоты набирают всю большую популярность в нашей стране. Поэтому, радиаторы Arbonia высотой до 40 см входят в нашу складскую программу. Ведь дома с большими окнами - это чаще всего дома бизнес- или премиум-класса.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Невысокие модели радиаторов Arbonia в наличии',
						link: '/articles/low-models',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Невысокие модели радиаторов Arbonia в наличии'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Радиаторы небольшой высоты набирают всю большую популярность в нашей стране. Связано это с тем, что в
						современных домах все чаще устанавливают большие окна с низкими подоконниками, под которыми батарею
						стандартной высоты разместить уже не получится. В то же время, расположение радиаторов под окнами является
						наиболее эффективным, так как именно здесь в помещение поступает холодный воздух, передача тепла которому
						происходит максимально эффективно. Кроме того, место под окном может оказаться единственно доступным для
						установки радиатора.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Поэтому, радиаторы Arbonia высотой до 40 см входят в нашу складскую программу. Ведь дома с большими окнами -
						это чаще всего дома бизнес- или премиум-класса.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						В наличии мы поддерживаем трубчатые радиаторы белого цвета:
						<ul>
							<li>
								<Link href='/models/2030-9016-12'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										Arbonia 2030
									</Typography>
								</Link>
								. Двухтрубчатый радиатор высотой 30 см. Доступен с боковым подключением.
							</li>
							<li>
								Arbonia 3030. Трехтрубчатая модель высотой 30 см. В наличии поддерживаются &#160;
								<Link href='/models/3030-9016-12'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										радиаторы как с боковым
									</Typography>
								</Link>
								, так и с &#160;
								<Link href='/models/3030-9016-69tvv'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										нижним подключением
									</Typography>
								</Link>
								.
							</li>
							<li>
								Arbonia 3037. Также трехтрубчатый радиатор высотой 37 см. Подключения доступны &#160;
								<Link href='/models/3037-9016-12'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										боковое
									</Typography>
								</Link>
								&#160; и &#160;
								<Link href='/models/3037-9016-69tvv'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										нижнее
									</Typography>
								</Link>
								.
							</li>
						</ul>
					</Typography>
				</Box>
				<Box textAlign={'center'}>
					<img
						src='/images/articles/20230126-1.jpg'
						alt='Радиатор Arbonia 2030'
						width={600}
						height={300}
					/>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Приведенные выше радиаторы расположены в порядке убывания стоимости в пересчете на 100 Вт. То есть, при
						одинаковой мощности, радиатор Arbonia 3037 будет стоить дешевле (и иметь меньшую длину / меньшее число
						секций), чем радиатор Arbonia 3030. А он, в свою очередь, будет дешевле 2-трубчатого Arbonia 2030.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Какие еще доводы могут быть в пользу выбора той или иной модели Arbonia?
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Радиатор Arbonia 2030 имеет смысл рассматривать когда есть ограничения по глубине радиатора (например, узкий
						проход в коридоре), либо радиаторы рассматриваются как дополнительный источник тепла.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Радиаторы Arbonia 3030 имеют наиболее оптимальные для данного класса радиаторов габариты: 3-трубчатые модели
						не слишком толстые, но обладают уже достаточной мощностью, чтобы обогревать помещения небольшой площадью. В
						то же время, высота 30 см позволяет разместить их под большинство низких подоконников, имеющих высоту
						порядка 50 см. Особенно актуальным это становится при установки радиаторов с нижним подключением, требующим,
						как минимум, 10 см внизу для подключения к трубам.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Радиатор Arbonia 3037 обладает наибольшей теплоотдачей из рассматриваемых здесь моделей. Но дополнительные 7
						см высоты могут сделать затруднительным его установку. Например, при нижнем подключении и высоте от пола до
						подоконника 50 см, у вас не получится разместить радиатор по центру - между полом и окном. Он будет смещен к
						подоконнику. Тем не менее, благодаря своей мощности, данная модель может оказаться оптимальной. Особенно
						если речь идет о боковом подключении - ведь межосевое расстояние здесь 300 мм, а потому такой радиатор можно
						легко установить вместо старых алюминиевых или чугунных батарей, имеющих такое же расстояние между трубами,
						их не придется переносить.
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginY='20px'
					>
						Если попытаться составить универсальное правило, то в качестве базовой модели стоит рассматривать Arbonia
						3030. Переходить на 2-трубчатые радиаторы, когда мощность не столь важная и более плоская и лаконичная форма
						играет более существенную роль. Выбирайте Arbonia 3037 если требуется максимальная мощность или если вы
						меняете старые радиаторы с боковым подключением.
					</Typography>
				</Box>
				<Box textAlign={'center'}>
					<img
						src='/images/articles/20230126_0.jpg'
						alt='Радиатор Arbonia 3030'
						width={600}
						height={600}
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
