import React from 'react'
import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

import PageTitle from '../../../components/pageTitle/pageTitle'
import PageHeader from '../../../components/pageHeader/pageHeader'
import Hero from '../../../components/hero/hero'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Сертификат EPD для трубчатых радиаторов Arbonia'}
				description={
					'Сертификат EPD, выданный в соответствии со стандартами ISO 14025 и EN 15804, предоставляет экологический баланс строительных изделий и превышает текущие законодательные требования. '
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Сертификат EPD',
						link: '/articles/epd',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Сертификат EPD для трубчатых радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<p>
						Arbonia получили сертификат Environmental Product Declaration (EPD)
						на все свои стальные радиаторы. Этот сертификат присваивается
						Институтом строительства и окружающей среды (IBU e.V.) и
						предоставляет возможность оценить экологическое воздействие
						продукции на всех этапах её жизненного цикла. Покупатели могут
						использовать этот сертификат для подтверждения экологических
						характеристик, которые становятся всё более важными для участия в
						тендерах и получения грантов.
					</p>
					<p>
						Это дает конкурентное преимущество и позволяет реализовывать более
						экологичные строительные проекты. Сертификат EPD, выданный в
						соответствии со стандартами ISO 14025 и EN 15804, предоставляет
						экологический баланс строительных изделий и превышает текущие
						законодательные требования. Вы получили этот сертификат на все свои
						стальные радиаторы, будь то полотенцесушители или панельные
						радиаторы. Благодаря этому сертификату радиаторы Arbonia уже
						соответствуют будущим обязательным требованиям, которые будут
						действовать по всей Европе в ближайшие годы.
					</p>
					<p>
						Для получения дополнительной информации о программе EPD вы можете
						посетить веб-сайт Института строительства и окружающей среды (IBU
						e.V.).
					</p>
				</Typography>
				<Box textAlign={'center'}>
					<img
						src='/images/articles/epd2.jpg'
						alt='Сертификат EPD для трубчатых радиаторов Arbonia'
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
