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
			<PageHeader title={'Отчет о полугодовых результатах Arbonia за 2024 год'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
					{ title: 'Отчет за полугодие 2024', link: '/news/2023-report' },
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
					Отчет о полугодовых результатах Arbonia за 2024 год
				</Typography>
				<Box mt={2}>
					<Typography
						style={{ ...styles.standardText }}
						component='div'
					>
						<p>27.08.2024</p>
						<p>Основные финансовые показатели:</p>
						<ul>
							<li>
								<strong>Выручка:</strong> CHF 278,2 млн, практически на уровне прошлого года (CHF 279,7 млн), с
								органическим снижением на -5,4%.
							</li>
							<li>
								<strong>EBITDA:</strong> CHF 47,4 млн (2023: CHF 17,5 млн), рост на CHF 30 млн, из которых CHF 26,2 млн
								- единовременные эффекты (продажа участка и реструктуризация).
							</li>
							<li>
								<strong>EBITDA margin:</strong> увеличилась с 6,3% до 17,0%.
							</li>
							<li>
								<strong>EBIT:</strong> CHF 24,3 млн (2023: CHF -4,1 млн).
							</li>
							<li>
								<strong>Чистая прибыль:</strong> CHF 40,9 млн (2023: CHF -2,0 млн).
							</li>
						</ul>

						<p>Развитие дверного направления:</p>
						<ul>
							<li>
								<strong>Выручка:</strong> CHF 263,6 млн (2023: CHF 265,6 млн), снижение органического роста на -6,9%.
							</li>
							<li>
								<strong>EBITDA:</strong> увеличилась на 20,3%, до CHF 25,5 млн (2023: CHF 21,2 млн).
							</li>
							<li>
								<strong>EBITDA margin:</strong> выросла с 8,0% до 9,7%.
							</li>
							<li>
								<strong>EBIT:</strong> CHF 4,5 млн (2023: CHF 2,0 млн).
							</li>
						</ul>

						<p>Влияние продаж и приобретений:</p>
						<ul>
							<li>Продажа участка Zelgstrasse обеспечила прибыль в размере CHF 28,8 млн.</li>
							<li>
								Приобретение Dimoldura (Испания) и Lignis (Чехия) добавит более CHF 75 млн к выручке и более CHF 11 млн
								к EBITDA в 2024 году.
							</li>
							<li>Укрепление дверного направления позволит снизить зависимость от рынка Германии с 60% до 50%.</li>
						</ul>

						<p>Текущее состояние строительного рынка:</p>
						<ul>
							<li>
								Рынок Европы сталкивается с низким объемом нового строительства из-за высоких ставок и инфляции затрат.
							</li>
							<li>
								Снижение интереса к строительству компенсируется увеличением объемов ремонта, особенно в Восточной
								Европе.
							</li>
						</ul>

						<p>Прогноз на 2024 год:</p>
						<ul>
							<li>Ожидается сохранение уровня выручки на уровне 2023 года.</li>
							<li>Увеличение EBITDA и EBIT без учета единовременных эффектов, улучшение маржинальности.</li>
							<li>Постепенная стабилизация строительной отрасли в кратко- и среднесрочной перспективе.</li>
						</ul>

						<p>
							Arbonia продолжает сосредотачиваться на дверном бизнесе, завершая продажу климатического подразделения
							группе Midea.
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
