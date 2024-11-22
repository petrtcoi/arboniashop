import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlesListPageProps = {}

const ArticlesListPage: NextPage<ArticlesListPageProps> = () => {
	return (
		<Box>
			<PageHeader title={'Arbonia продает подразделение Climate за 760 миллионов евро компании Midea'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
					{ title: 'Сделка с Midea', link: '/news/2024-midea' },
				]}
			/>

			<Box
				sx={{ ...global.pagePadding, maxWidth: '800px', margin: 'auto' }}
				marginTop='20px'
			>
				<Typography
					variant='h6'
					component='h1'
					gutterBottom
					sx={{ textTransform: 'uppercase' }}
				>
					Arbonia продает подразделение Climate за 760 миллионов евро компании Midea
				</Typography>
				<Box mt={2}>
					<Typography
						style={{ ...styles.standardText }}
						component='div'
					>
						<p>18.04.2024</p>
						<p>
							18 апреля 2024 года компания Arbonia объявила о продаже своего подразделения Climate компании Midea
							Electrics Netherlands B.V., входящей в состав Midea Group, за 760 миллионов евро.
						</p>
						<p>
							После завершения сделки, при условии одобрения регулирующими органами, Arbonia планирует вернуть
							акционерам до 400 миллионов швейцарских франков. Оставшиеся средства будут направлены на укрепление
							дверного бизнеса и снижение чистого долга компании. Стратегия развития дверного направления
							предусматривает как органический рост, так и приобретения, с целью стать ведущим европейским
							производителем деревянных и стеклянных дверей.
						</p>
						<p>
							Эта сделка подчеркивает стремление Arbonia сосредоточиться на ключевых направлениях и укрепить свои
							позиции на рынке строительных компонентов.
						</p>
					</Typography>
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
