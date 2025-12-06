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
				title={'Arbonia 2180 vs 3180: чем отличаются и когда что выбрать'}
				description={
					'Сравниваем 2- и 3-трубчатые модели высотой 1,8 м: толщина, мощность, где уместнее 2180, а где лучше 3180. Практические сценарии и советы под подбор.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Сравнение 2180 и 3180',
						link: '/articles/2180-3180',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Arbonia 2180 vs 3180: чем отличаются и когда что выбрать'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Ищете высокие трубчатые решения Arbonia высотой 1,8 м и сомневаетесь между 2180 и 3180? Мы сравнили
					теплоотдачу, толщину и сценарии применения. Для выбора и покупки переходите в каталог{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							Вертикальные радиаторы Arbonia
						</Typography>
					</a>
					. Ниже - именно разбор различий и практические кейсы.
				</Typography>

				<Typography
					marginTop='40px'
					variant='h5'
					component={'h2'}
				>
					Когда выбирать форм-фактор 1,8 м (высокие узкие радиаторы)
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Высокие радиаторы не «прячутся» под окнами, а становятся заметным элементом интерьера, создавая ощущение
					гармонии и завершённости пространства. Их вытянутая форма визуально увеличивает высоту помещения, а строгий,
					но изящный силуэт органично вписывается как в современные, так и в классические интерьеры.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Помимо эстетики, такие радиаторы отличаются высокой тепловой эффективностью. Благодаря вертикальной
					конструкции они обеспечивают мощный поток тёплого воздуха при минимальной занимаемой площади на стене.
					Например, модель Arbonia 3180 с 12 секциями и длиной всего 57 см способна обогреть комнату площадью около 27
					м², сохраняя при этом аккуратный и лёгкий внешний вид.
				</Typography>

				<Typography
					marginTop='40px'
					variant='h5'
					component={'h2'}
				>
					2180 или 3180? Что выбрать?
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Модели Arbonia 2180 и Arbonia 3180 относятся к одной серии, но различаются по конструкции и, как следствие, по
					тепловым характеристикам. Основное отличие заключается в числе трубок: радиатор 2180 - двухтрубчатый, а 3180 -
					трёхтрубчатый.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					При одинаковой высоте 1,8 метра радиатор Arbonia 2180 имеет толщину всего 65 мм, в то время как более мощная
					версия 3180 - 105 мм. Дополнительная трубка в каждой секции повышает теплоотдачу, поэтому модель 3180
					обеспечивает более интенсивный прогрев воздуха и лучше подходит для помещений с большими теплопотерями или
					высокими потолками.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Тем не менее, выбор не всегда очевиден. Если площадь комнаты позволяет установить радиатор с большей шириной и
					тепловой мощности модели 2180 достаточно для комфортного обогрева, именно она станет оптимальным решением. Эта
					модель легче, визуально изящнее и универсальнее в установке - её можно монтировать даже в узких пространствах,
					где каждый сантиметр важен.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Радиатор Arbonia 2180 имеет следующие преимущества перед своим 3-трубчатым “родственником”:
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								<strong>Более доступная цена при схожей мощности</strong>. Благодаря оптимальной конструкции 2-трубчатый
								радиатор обходится дешевле при практически одинаковом тепловом эффекте. Это особенно важно при установке
								нескольких приборов по всему дому.
							</Box>
						</li>
						<li>
							<Box
								sx={{ ...styles.standardText }}
								paddingTop='10px'
							>
								<strong>Меньшая глубина корпуса</strong>. Разница в 4 см может показаться незначительной, но при монтаже
								рядом с дверными проёмами, в узких проходах или возле мебели она становится ощутимой. Радиатор 2180
								компактнее и аккуратнее смотрится в небольших помещениях.
							</Box>
						</li>
						<li>
							<Box
								sx={{ ...styles.standardText }}
								paddingTop='10px'
							>
								<strong>Простота ухода и чистки</strong>. Меньшее количество трубок облегчает доступ к внутренним
								поверхностям. Пыль и загрязнения удаляются быстрее, что особенно актуально в городских квартирах и
								помещениях с pets-friendly интерьером.
							</Box>
						</li>
					</ul>
					Если вы не уверены, какая модель будет оптимальной именно для ваших условий, можно заказать расчёт теплоотдачи
					для обоих вариантов. Сравнение в цифрах поможет принять точное решение, исходя из площади, высоты потолков и
					особенностей планировки.
				</Typography>
				<Box sx={{ mt: 4, p: 2, border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
					<Typography sx={{ ...styles.standardText }}>Нужны цены, наличие и варианты подключений?</Typography>
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography sx={{ ...styles.standardTextRedLink }}>
							Перейти в каталог вертикальных радиаторов Arbonia
						</Typography>
					</a>
				</Box>
				<Box
					textAlign={'center'}
					marginTop={'30px'}
				>
					<img
						src='/images/articles/30.jpeg'
						alt='Вертикальные радиаторы Arbonia'
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
