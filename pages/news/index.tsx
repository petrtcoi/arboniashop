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
			<PageHeader title={'Новости Arbonia'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Новости Arbonia'}
			/>
			<Box
				sx={{ ...global.pagePadding }}
				marginTop='20px'
			>
				<Typography sx={styles.standardText}>
					2025: Последние актуальные новости от Arbonia. Оставайтесь в курсе всех событий и акций.
				</Typography>
				<Box mt={2}>
					<Link href='/news/2025-report'>
						<Typography sx={styles.standardTextLinkUnderline}>Смена руководства в MBT Climate и Kermi GmbH</Typography>
					</Link>
				</Box>

				<Box mt={2}>
					<Link href='/news/2024-report'>
						<Typography sx={styles.standardTextLinkUnderline}>
							2024: Отчет о полугодовых результатах Arbonia за 2024 год
						</Typography>
					</Link>
				</Box>

				<Box mt={2}>
					<Link href='/news/2024-midea'>
						<Typography sx={styles.standardTextLinkUnderline}>
							2024: Arbonia продает подразделение Climate за 760 миллионов евро компании Midea
						</Typography>
					</Link>
				</Box>

				<Box mt={2}>
					<Link href='/news/2023-design'>
						<Typography sx={styles.standardTextLinkUnderline}>
							2023: Arbonia повышает конкурентоспособность за счет консолидации производства дизайнерских радиаторов
						</Typography>
					</Link>
				</Box>

				<Box mt={2}>
					<Link href='/news/redox'>
						<Typography sx={styles.standardTextLinkUnderline}>
							2023: Запуск системы хранения энергии на основе редокс-аккумуляторов
						</Typography>
					</Link>
				</Box>

				<Box mt={2}>
					<Link href='/news/circle'>
						<Typography sx={styles.standardTextLinkUnderline}>
							2020: THE CIRCLE – крупнейшая строительная площадка в Швейцарии
						</Typography>
					</Link>
				</Box>
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
