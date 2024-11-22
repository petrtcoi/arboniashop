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
			<PageHeader title={'Запуск системы хранения энергии на основе редокс-аккумуляторов'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Новости', link: '/news' },
					{ title: 'Система хранения энергии', link: '/news/redox' },
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
					Запуск системы хранения энергии на основе редокс-аккумуляторов
				</Typography>
				<Box mt={2}>
					<Typography
						style={{ ...styles.standardText }}
						component='div'
					>
						<p>
							Компания Prolux Solutions, входящая в группу Arbonia, представила на рынке долговечную систему хранения
							энергии для частных домов. Новая система STORAC основана на негорючей технологии редокс-аккумуляторов и
							производится в Европе, что позволяет сократить сроки доставки. Модель с емкостью 6 кВт⋅ч прошла
							практическое тестирование, а версия на 10 кВт⋅ч находится в разработке.
						</p>
						<p>
							На создание системы ушло более трех лет, включая многоступенчатые полевые испытания. Редокс-аккумуляторы
							давно доказали свою надежность в промышленности, и задача команды Arbonia заключалась в том, чтобы сделать
							эту технологию доступной для частных домов. Устройство сохраняет почти полную емкость даже спустя 20–30
							лет эксплуатации.
						</p>
						<p>
							Для поддержки клиентов по всей стране Arbonia создала отдельное направление Battery Storage. В рамках
							этого направления обеспечиваются разработка, управление продуктом, продажи и сервис. Уже на этапе запуска
							функционируют три региональных офиса в Германии.
						</p>
						<p>
							Дизайн системы STORAC оптимизирован для удобной установки и обслуживания. Устройство высотой 200 см и
							основанием 60×60 см можно установить вдвоем. Оно оснащено приложением для мониторинга, а обслуживание
							осуществляется удаленно через интернет. Технология системы включает два бака с ванадиевым электролитом,
							насосы, стек и управляющую электронику. Электролит на 92% состоит из воды. Устройство обеспечивает 100%
							глубину разряда, поддерживает аварийное питание и может быть каскадировано для увеличения емкости.
						</p>
					</Typography>
					<Image
						src='/news/redox.webp'
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
