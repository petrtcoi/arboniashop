import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'

import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlesListPageProps = {}

const ArticlesListPage: NextPage<ArticlesListPageProps> = () => {
	return (
		<Box>
			<PageHeader title={'THE CIRCLE – крупнейшая строительная площадка в Швейцарии'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
					{ title: 'The Circle', link: '/news/circle' },
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
					THE CIRCLE – крупнейшая строительная площадка в Швейцарии
				</Typography>
				<Box mt={2}>
					<Typography
						style={{ ...styles.standardText }}
						component='div'
					>
						<p>
							На территории аэропорта Цюриха идет строительство шести зданий и парка общей площадью 180 000 квадратных
							метров. Здесь планируется разместить медицинский центр Университетской больницы Цюриха, два отеля, офисы и
							конгресс-центр, рассчитанный на 2 500 человек. В реализации проекта участвуют более 1 000 строителей,
							ежедневно осваивающих около миллиона швейцарских франков. Владельцами этого многомиллиардного проекта
							являются компании Flughafen Zürich AG и Swiss Life AG. Проект был запущен в 2015 году, закладка фундамента
							состоялась в 2017 году, а церемония установки кровли – в 2019 году. Если всё пойдет по плану, THE CIRCLE
							начнет функционировать уже в 2020 году.
						</p>
						<p>
							Генеральный подрядчик, компания HRS Real Estate AG, поручила RWD Schlatter установить более 8 000 дверей
							для THE CIRCLE. Все двери производятся в автоматизированном режиме на заводе в Роггвиле. Кроме того,
							дочерние компании группы Arbonia, Prolux и Arbonia Solutions, поставили радиаторы и конвекторы для
							проекта. Менеджеры проекта получают выгоду от комплексного обслуживания со стороны Arbonia Group.
							Швейцарские компании группы Arbonia тесно сотрудничают друг с другом, а взаимодействие с заказчиком
							осуществляется через единую точку контакта. Особенностью этого крупного проекта стали ограниченные
							пространства на строительной площадке – при этом на всех этапах строго соблюдаются актуальные правила
							дистанцирования. Это создает значительные логистические вызовы, и каждая доставка тщательно планируется.
						</p>
					</Typography>
					<Image
						src='/news/circle.webp'
						width={800}
						height={533}
						alt='The Circle'
						style={{ borderRadius: '5px' }}
					/>
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
