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
				title={'Советы по правильной установке термостатов для трубчатых радиаторов Arbonia'}
				description={
					'Термостаты, регулирующие подачу теплоносителя в трубчатый радиатор Arbonia, обеспечивают поддержание заданной температуры в комнате.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Термостаты для трубчатых радиаторов Arbonia',
						link: '/articles/termostat',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Термостаты для трубчатых радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<p>
						Термоголовки, регулирующие подачу теплоносителя в радиатор, обеспечивают поддержание заданной температуры в
						комнате. Наиболее распространённый вариант — механические термоголовки, которые реагируют на изменение
						температуры воздуха в помещении и управляют термовентилем.
					</p>
					<p>
						Сердцем термостата является сильфон — небольшой цилиндр, заполненный специальным температурным агентом.
						Когда температура воздуха повышается, агент расширяется, воздействуя на шток термовентиля, и уменьшает
						подачу теплоносителя в радиатор. Когда воздух охлаждается, процесс идёт в обратном направлении.
					</p>
					<p>Правильная установка термоголовки имеет большое значение для её работы:</p>
					<h2>Избегайте вертикальной установки термоголовки</h2>
					<p>
						Часто термостаты устанавливают вертикально, чтобы не портить внешний вид радиатора. Однако в этом случае
						термостат может перегреваться от тепла, исходящего от труб, что приведёт к некорректной работе. Чтобы этого
						избежать, рекомендуется установка термоголовки горизонтально — так она будет точнее реагировать на изменения
						температуры в помещении.
					</p>
					<p>
						Пример правильной установки: термостат направлен в сторону комнаты, обеспечивая более точное измерение
						температуры воздуха.
					</p>
					<p>
						Модели радиаторов с нижним подключением, например,{' '}
						<Link href='/models/2180'>
							<a style={{ textDecoration: 'none' }}>
								<Typography
									sx={{ ...styles.standardTextRedLink }}
									component='span'
								>
									радиатор Arbonia 2180
								</Typography>
							</a>
						</Link>{' '}
						с нижним подключением, требуют горизонтальной установки термоголовок, что исключает ошибки.
					</p>
					<h2>Неправильное размещение радиаторов Arbonia</h2>
					<p>
						Радиаторы, расположенные в неудобных местах, также могут мешать корректной работе термоголовки:
						<ul>
							<li>если радиатор находится в нише</li>
							<li>радиатор закрыт шторами</li>
							<li>на термостат падают солнечные лучи</li>
							<li>радиатор расположен слишком близко к подоконнику</li>
							<li>радиатор слишком глубокий</li>
						</ul>
						Такие факторы мешают термостату измерять реальную температуру воздуха в комнате. В этих случаях можно
						использовать выносные термостаты или ручные регулировки.
					</p>
				</Typography>
				<Box textAlign={'center'}>
					<img
						src='/images/articles/2050-12-2.jpeg'
						alt='Радиатор Arbonia с термостатом'
						width={700}
						height={'auto'}
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
