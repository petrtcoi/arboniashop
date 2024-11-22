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
			<PageHeader
				title={'Arbonia повышает конкурентоспособность за счет консолидации производства дизайнерских радиаторов'}
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
					{ title: 'Дизайнерские радиаторы', link: '/news/2023-design' },
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
					Arbonia повышает конкурентоспособность за счет консолидации производства дизайнерских радиаторов
				</Typography>
				<Box mt={2}>
					<Typography
						style={{ ...styles.standardText }}
						component='div'
					>
						<p>20.07.2023</p>
						<p>
							Подразделение отопления, вентиляции и кондиционирования воздуха (HVAC) компании Arbonia продолжает
							укреплять свои позиции на рынке, оптимизируя производство дизайнерских радиаторов. В рамках стратегии,
							направленной на достижение статуса лучшего поставщика радиаторов, компания планирует перенести
							производство и окраску из Дильсена (Бельгия) в центр компетенций в Стршибро (Чехия). Это позволит
							увеличить загрузку мощностей, повысить производительность и сосредоточить ключевые знания и опыт в одном
							месте.
						</p>
						<p>
							Arbonia ожидает разовых расходов в размере около 10 млн швейцарских франков во второй половине 2023 года,
							связанных с закрытием и переносом производства. Однако начиная со второй половины 2024 года компания
							прогнозирует ежегодную экономию порядка 4 млн швейцарских франков благодаря этим изменениям.
						</p>
						<p>
							Данный шаг подчеркивает стремление Arbonia к эффективному управлению и долгосрочному развитию, укрепляя ее
							позиции на рынке дизайнерских радиаторов.
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
