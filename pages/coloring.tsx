import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

import { Box, Grid, Typography } from '@mui/material'

import PageHeader from '../components/pageHeader/pageHeader'
import PageTitle from '../components/pageTitle/pageTitle'

import trackEvent from '../utils/trackEvent'

import type { NextPage } from 'next'

import Hero from '../components/hero/hero'
import * as styles from '../styles/styles'
import global from '../variables/global'

type PageRequestProps = {}

const PageRequest: NextPage<PageRequestProps> = () => {
	const [show, setShow] = useState<boolean>(false)
	const toggleShow = () => setShow(!show)

	return (
		<Box>
			<PageTitle
				header={'Покраска Arbonia в ваш цвет с гарантией'}
				subheader={'Радиаторы Arbonia любого цвета на ваш выбор'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Покраска радиаторов Arbonia', link: '/coloring' },
				]}
			/>
			<PageHeader
				title={'Покраска Arbonia в ваш цвет с гарантией'}
				description='Покраска радиаторов Arbonia в любой цвет по вашему выбору с сохранением гарантии. Оживите интерьер своего дома.'
			/>
			<Hero
				imgPath={'/images/sliders/slide-colors.jpg'}
				header={'Покраска радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box sx={{ maxWidth: '900px', margin: 'auto' }}>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						В складскую программу входят только наиболее популярные цвета радиаторов Arbonia. Если вы не нашли нужный
						вам цвет,то мы можем разместить заказ на заводе и доставить радиатор в требуемом цвете. Обычно, выполнение
						заказа и доставка могут занимать от 2 до 4 месяцев, в зависимости от загруженности завода.Актуальные сроки
						уточняйте у менеджеров магазина.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						Если радиаторы требуются быстрее, то можно наша компания может осуществить покраску радиаторов из наличия в{' '}
						<span style={{ ...styles.standardTextRed }}>любой цвет из палитры RAL</span>. Срок выполнения заказа
						составит <span style={{ ...styles.standardTextRed }}>не более 1-2 недель</span>. Свяжитесь с нами любым
						удобным для вас способом для уточнения актуальных на данный момент сроков покраски, наличия и стоимости
						радиаторов. Также, вы можете заполнить форму ниже, указав в комментариях желаемый цвет радиаторов.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}></Typography>
				</Box>
				<Box marginY={'30px'}>
					<Typography
						variant='h4'
						component='h2'
						gutterBottom
						textAlign='center'
						sx={{ textTransform: 'uppercase' }}
					>
						Запрос на подбор и покраску радиаторов
					</Typography>
				</Box>
				<Box
					marginY='20px'
					padding='10px'
					sx={{ backgroundColor: '#333333', borderRadius: '10px' }}
				>
					<Grid
						container
						spacing={2}
						alignItems={'center'}
					>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								тел.:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`tel:${global.phone495}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.phone495String}
								</Typography>
							</a>
							<Typography
								sx={{ ...styles.standardText, color: 'white' }}
								display='inline'
							>
								<br />
								<Typography
									sx={{ ...styles.smallText, color: '#333333' }}
									display='inline'
									component='span'
								>
									тел.:&ensp;
								</Typography>
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`tel:${global.phone812}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.phone812String}
								</Typography>
							</a>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								email:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`mailto:${global.email}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.email}
								</Typography>
							</a>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								whatsapp:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`https://wa.me/${global.whatsApp}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.whatsAppString}
								</Typography>
							</a>
						</Grid>
					</Grid>
				</Box>
				<Typography
					sx={{ ...styles.standardText }}
					textAlign='center'
				>
					Также вы можете заполнить форму, представленную ниже.
				</Typography>
				<Box marginTop='20px'>
					<a onClick={() => toggleShow()}>
						<Typography
							sx={styles.smallTextGreenUnderline}
							textAlign='center'
						>
							<span style={{ textDecorationStyle: 'dotted' }}>Какая информация нам нужна</span>
						</Typography>
					</a>
				</Box>

				{show && (
					<Box
						padding='20px'
						sx={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}
					>
						<Typography
							sx={{ ...styles.standardText }}
							component={'span'}
						>
							Информация, которая нужна для правильного побора радиаторов: (если каких-то данных пока нет - то можно
							отправить то, что уже известно)
							<ul>
								<li>Размеры помещений, высота потолков</li>
								<li>
									Желаемое место расположения радиаторов. Доступные габариты. Например, если радиатор ставится под окно,
									то: высота подоконника и длина окна
								</li>
								<li>Если возможно - план квартиры / дома, что упростит общение</li>
								<li>
									Тип подключения радиаторов в вашем доме: индивидуальная разводка труб по полу или общий стояк
									отопления
								</li>
								<li>Город доставки</li>
							</ul>
							Любую иную информацию, которая вам кажется важной и которую нам необходимо учесть. Оставьте ваши
							контактные данные, чтобы мы могли связаться с вами и получить дополнительную информацию в случае
							необходимости.
						</Typography>
					</Box>
				)}

				<Box
					id='leadWidget'
					marginTop='24px'
				/>
				<Script
					src='/widgets/lead-widget.js'
					data-mount='#leadWidget'
					data-store='ArboniaShop.ru'
					data-primary='#ef7d00'
					data-border='#ef7d00'
					data-success-url='/success'
					data-privacy-url='/privacy'
					strategy='afterInteractive'
				/>
			</Box>
		</Box>
	)
}

export default PageRequest

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
