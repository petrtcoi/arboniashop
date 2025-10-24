import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
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
				title={'Замена чугунных радиаторов на Arbonia 3057'}
				description={
					'Трехтрубчатая модель радиатора Arbonia 3057 является главным кандидатом при замене старых чугунных или алюминиевых радиаторов в домах с вертикальной разводкой труб отопления (через стояки). Замена на него требует минимального объема работ и может быть произведена даже без перекрытия стояка отопления.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Замена чугунных радиаторов на Arbonia 3057',
						link: '/articles/arbonia-3057',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Замена чугунных радиаторов на Arbonia 3057'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Отопление является одним из важнейших аспектов комфорта в жилом помещении. Чтобы система работала надежно и
					эффективно, важно выбрать правильное оборудование и правильно его установить. В данной статье мы рассмотрим
					особенности установки и замены трубчатых радиаторов Arbonia вместо старых чугунных или алюминиевых радиаторов.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Одной из основных проблем при замене старых радиаторов на новые является несоответствие размеров. Неудачно
					подобранная модель отопительного прибора может породить необходимость в проведении дополнительных работ, что
					может привести к значительным затратам как финансомым,так и временным. Например, изменение межосевого
					расстояния может потребовать слива стояка отопления, которое не всегда возможно в холодное время года.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Именно поэтому, &#160;
					<a
						style={{ textDecoration: 'none' }}
						href='/models/3057'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							трубчатые радиаторы Arbonia 3057
						</Typography>
					</a>
					&#160; являются наиболее популярными при замене старых радиаторов. Они имеют те же размеры, что и старые
					чугунные радиаторы, и могут быть установлены на тех же местах, что и старые радиаторы. Также они имеют те же
					размеры, что и алюминиевые радиаторы, что позволяет их устанавливать на тех же местах, что и старые радиаторы.
					Стандартное межосевое расстояние 500 мм позволяет устанавливать радиаторы на старые трубы, оставшиеся после
					демонтажа старых батарей.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Кроме того, радиаторы Arbonia - один из немногих вариантов радиаторов премиум-класса, обладающих диамтером
					подключение 3/4, необходимым для установки в старые однотрубные системы отопления.
				</Typography>
				<Box textAlign={'center'}>
					<img
						src='/images/articles/20230222.jpg'
						alt='Радиатор Arbonia 3057'
						width={400}
						height={400}
					/>
				</Box>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Заметим,что более плоская модель Arbonia 2057 также имеет подходящее межосевое расстояние, но меньшая
					мощность, а также толщина радиатора, скорее всего потребуют переноса труб под большую длину и более близкое
					расоложение батареи к стене. Из-за этого 2-трубчатый радиатор редко выбирается на роль замены старых
					радиаторов в подобных случаях.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Альтернативой являются также вертикальные модели Arbonia 2180 и Arbonia 3180. Однако, под них не всегда
					находится достаточно места на стене (обычно это узкий участок между стояком отопления и откосом окна). Также с
					ними сложнее организовать аккуратный байпас, чтобы вы могли контролировать мощность работы радиаторов только в
					своей квартире, а не по всему стояку отопления.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					Для установки трубчатых радиаторов Arbonia важно обращаться к профессионалам. Это позволит избежать ошибок и
					сделать установку максимально эффективной.
				</Typography>
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
