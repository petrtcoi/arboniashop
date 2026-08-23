import { Box, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
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
			<PageHeader title={'Полезная информация Arbonia'} />
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Полезная информация Arbonia'}
			/>
			<Box
				sx={{ ...global.pagePadding }}
				marginTop='50px'
			>
				<Grid
					container
					spacing={5}
				>
					<Grid item md={6}>
						<Box sx={{ borderRadius: '8px' }}>
							<a style={{ textDecoration: 'none' }} href='/articles/kak-vybrat-cvet-radiatora-pod-interer'>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/sliders/slide-colors.jpg'
											alt='Выбор цвета радиатора Arbonia для интерьера'
											width={300}
											height={174}
											style={{ borderRadius: '8px', objectFit: 'cover' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Как выбрать цвет радиатора Arbonia под интерьер
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Фон или акцент, RAL 9016, антрацит и покраска по RAL - проверяем свет, образцы, модель и арматуру до заказа.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid item md={6}>
						<Box sx={{ borderRadius: '8px' }}>
							<a style={{ textDecoration: 'none' }} href='/articles/arbonia-2050-ili-3050'>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/models/2050-0.jpg'
											alt='Сравнение радиаторов Arbonia 2050 и 3050'
											width={300}
											height={174}
											style={{ borderRadius: '8px', objectFit: 'cover' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Arbonia 2050 или 3050 - какой радиатор выбрать
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Глубина 65 или 105 мм, мощность при одинаковом ΔT, число секций и длина под окном - сравнение на конкретном расчете.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/delta-t-teplootdacha'
							>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/arbonia-schema.jpg'
											alt='Схема трубчатых радиаторов Arbonia'
											width={300}
											height='auto'
											style={{ borderRadius: '8px' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Теплоотдача радиатора - как влияет ΔT
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Почему одна и та же модель Arbonia дает разную мощность при разных температурах воды и как
											сравнивать паспортные характеристики без ошибки.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/chernyy-radiator-arbonia'
							>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/models/2180-9005.jpeg'
											alt='Черный радиатор Arbonia в цвете RAL 9005'
											width={300}
											height='auto'
											style={{ borderRadius: '8px' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Черные радиаторы Arbonia - выбор цвета и модели
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Сравниваем RAL 9005, RAL 7016 и SF-3, выбираем модель и заранее учитываем свет,
											арматуру, подключение и мощность.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/radiator-pod-nizkiy-podokonnik'
							>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/models/3030-0.jpeg'
											alt='Радиатор под низкий подоконник Arbonia'
											width={300}
											height='auto'
											style={{ borderRadius: '8px' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Радиатор под низкий подоконник - как выбрать Arbonia
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Замер ниши, сравнение Arbonia 2030 и 3030, мощность, число секций и выбор подключения
											для подоконника высотой около 50 см.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/mezhosevoe-rasstoyanie-500-mm-arbonia'
							>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/articles/20230222.jpg'
											alt='Межосевое расстояние 500 мм Arbonia'
											width={300}
											height={300}
											style={{ borderRadius: '8px' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Межосевое расстояние 500 мм Arbonia - замена батареи
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Как измерить старые выводы, сравнить Arbonia 2057 и 3057 и проверить возможность
											замены без переноса труб.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/kogda-vertikalnyy-radiator-arbonia-ne-podkhodit'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/sf-3-01.jpg'
											alt='Расчет мощности вертикального радиатора Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Когда вертикальный радиатор Arbonia не подходит - честный разбор
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Вертикальный радиатор Arbonia не всегда является лучшим решением, даже если внешне он идеально
											подходит к интерьеру. Главная причина в том, что высокий и узкий прибор распределяет тепло иначе,
											чем классический горизонтальный радиатор под окном...
										</Typography>
									</Box>
										</div>
									</a>
								</Box>
							</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/trubchatye-radiatory-dlya-kvartiry'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/underwindow-thumb.jpeg'
											alt='Трубчатые радиаторы для квартиры'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Трубчатые радиаторы для квартиры: какие модели выбрать
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Разбираем квартирные сценарии: установка под окном, замена старой батареи, вертикальные модели для
											ниш и панорамных окон, а также расчёт секций.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-kak-vybrat-trubchatyj-radiator'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2050-12-2.jpeg'
											alt='Как выбрать трубчатый радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Как выбрать трубчатый радиатор Arbonia для квартиры и дома
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Разбор мощности, размеров, подключения и типичных ошибок при выборе трубчатого радиатора Arbonia
											для квартиры и частного дома.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/2-columns-3.jpeg'
											alt='Радиатор под окном'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Arbonia 3050 или 3057 - какую высоту радиатора выбрать
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Разбираемся, какой радиатор лучше под низкий подоконник и как сохранить межосевое расстояние 50 см
											без переделки труб.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/vertical-radiator-power'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/sf-3-01.jpg'
											alt='Расчет мощности вертикального радиатора Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Как рассчитать мощность вертикального радиатора Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Простая формула расчета, таблица мощности по площади комнаты и рекомендации по подбору
											вертикальной модели Arbonia с учетом окон, потолков и теплопотерь...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-2180-po-ploshadi'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2180-4.jpeg'
											alt='Подбор радиатора Arbonia 2180 по площади'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
										sx={{ maxWidth: '420px', margin: 'auto' }}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Подбор Arbonia 2180 по площади: как рассчитать мощность без переплаты
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Подробно разбираем, почему расчет по площади является ориентиром, как сверяться с данными УК и
											радиаторами от застройщика, и почему большой запас мощности часто не нужен...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3180-ral-9016-vs-anthracite'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/3180-1.jpeg'
											alt='Трубчатый радиатор Arbonia 3180'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Arbonia 3180: RAL 9016 или Anthracite Metallic - какой цвет выбрать
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Если вы рассматриваете Arbonia 3180, вы выбираете не просто радиатор, а заметный вертикальный
											элемент интерьера. При высоте около 180 см эта модель всегда остается в поле зрения и работает как
											архитектурная линия на стене..
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/belye-radiatory-v-temnom-interiere'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/belye-radiatory-v-temnom-interiere.jpeg'
											alt='Кронштейны радиаторов Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Белый радиатор на темной стене: ошибка или осознанный стиль?
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Многие боятся, что белый радиатор на темной стене будет выглядеть «больнично», случайно или просто
											дешево. Есть страх, что он станет тем самым «белым пятном»...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/montazh-arbonia-2180-na-gkl'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/montazh-arbonia-2180-na-gkl.avif'
											alt='Кронштейны радиаторов Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Монтаж радиатора Arbonia 2180 на гипсокартон: правила и расчеты
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Вертикальный радиатор Arbonia 2180 относится к категории тяжелых отопительных приборов, и его
											установка на гипсокартонную стену требует инженерного подхода...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/montazh-vysokih-radiatorov-arbonia-instrukciya'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/montazh-vysokih-radiatorov-arbonia-instrukciya-1.avif'
											alt='Кронштейны радиаторов Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Монтаж высоких радиаторов Arbonia: требования и расчет кронштейнов
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Техническое руководство по установке радиаторов Arbonia 2180 и 3180. Расчет количества креплений,
											допустимые нагрузки на стены и правила гидравлического пуска...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3030-vs-3037'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/3030-3037.jpg'
											alt='Низкий радиатор Arbonia 3030'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Arbonia 3030 против 3037: как выбрать идеальный радиатор под низкий подоконник
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Подробное сравнение радиаторов Arbonia высотой 300 и 370 мм. Что лучше для панорамных окон, как
											сэкономить на секциях и сохранить эстетику интерьера...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/radiator-postoyanno-vyklyuchaetsya'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/radiator-postoyanno-vyklyuchaetsya.webp'
											alt='Почему радиатор постоянно выключается'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Почему радиатор постоянно выключается - причины и решения
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Если радиатор постоянно выключается, это означает, что подача горячей воды в прибор периодически
											прерывается из-за работы клапанов, настроек котла или проблем внутри системы отопления. В
											большинстве случаев причину можно определить по симптомам и устранить самостоятельно за 10-30
											минут...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/tsvet-radiatorov-v-interiere'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/tsvet-radiatorov-v-interiere.jpg'
											alt='Цвет радиаторов в интерьере'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Цвет радиаторов в интерьере: как выбрать оттенок для дизайна и комфорта
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Цвет радиатора давно перестал быть чем-то второстепенным. Современные дизайнерские модели
											выпускаются в десятках оттенков: от спокойных белых и серых до выразительных глубоких цветовых
											акцентов...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/vertical-vs-horizontal'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/vertical-vs-horizontal.jpg'
											alt='Вертикальный и горизонтальный радиаторы Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Какой радиатор выбрать: вертикальный или горизонтальный
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Вертикальные и горизонтальные радиаторы отличаются прежде всего способом размещения:
											горизонтальные лучше подходят для установки под окнами, дают более равномерный прогрев и проще в
											замене без переделки труб...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/gde-razmestit-radiator-otopleniya'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/underwindow-thumb.jpeg'
											alt='Радиатор Arbonia под окном'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Где разместить радиатор отопления: лучшие места и советы
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Большинство людей привыкли видеть радиаторы под окном и считают, что другого варианта просто нет.
											Однако современные технологии, двойные стеклопакеты и новые форматы приборов отопления дают
											гораздо больше свободы...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/ral-9016-pochemu-vybirayut-arkhitektory'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/ral9016.jpg'
											alt='RAL 9016 - универсальный белый цвет для интерьера и радиаторов'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											RAL 9016 - универсальный белый цвет для интерьера и радиаторов
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Белый цвет RAL 9016 - стандарт архитектуры и дизайна. Узнайте, почему его выбирают для радиаторов
											Arbonia и современных минималистичных интерьеров...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-2180-calc'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2180-4.jpeg'
											alt='Трубчатый радиатор отопления Arbonia 2180'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
										sx={{ maxWidth: '420px', margin: 'auto' }}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Сколько секций радиатора Arbonia 2180 нужно для комнаты 10–20 м²
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Разбираемся, как рассчитать количество секций радиатора Arbonia 2180 для помещений разной площади.
											Примеры расчетов, коэффициенты и советы по выбору...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/care'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20250814.jpg'
											alt='Правильный уход за радиаторами Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Правильный уход за радиаторами Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Трубчатые радиаторы Arbonia - это не только эффективный источник тепла, но и важный элемент
											интерьера. Их высококачественное покрытие рассчитано на десятилетия службы...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/montazh-radiatorov-arbonia-rekomendacii'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/3030.jpg'
											alt='Монтаж радиатороа Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Рекомендации по монтажу радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Чтобы радиаторы Arbonia работали эффективно и служили долго, установка должна проводиться с
											соблюдением всех технических требований...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box sx={{ borderRadius: '8px' }}>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/faq'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/sf-3-0.jpeg'
											alt='Высокий радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Ответы на часто задаваемые вопросы
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Подборка частых вопросов про радиаторы Arbonia и ответом на них. Где производятся? Какие давление
											держат? И т.д...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/termostat'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2050-12-2.jpeg'
											alt='Трубчатый радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Правильная установка термостата на радиаторы Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Подборка частых вопросов про радиаторы Arbonia и ответом на них. Где производятся? Какие давление
											держат? И т.д...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/high-arbonia'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2022122702.jpg'
											alt='Высокий радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Высокие радиаторы Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Высокие радиаторы, которые мы определяем как устройства отопления с высотой от 1 метра и выше,
											становятся все более популярными в современных архитектурных и дизайнерских решениях...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/panorama'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/panorama/arbonia-00.jpg'
											alt='Вертикальный радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Радиаторы Arbonia для панорамных окон
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Окна с панорамным видом - отличное решение для создания уютной атмосферы в помещении, поскольку
											они обеспечивают больше естественного света и открывают потрясающий вид. Одной из ключевых задач,
											которую необходимо решить, является выбор подходящих отопительных приборов...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/column-radiators'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/sf-3-0.jpeg'
											alt='Трубчатые радиаторы'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Трубчатые радиаторы Arbonia: плюсы, минусы и как выбрать модель.
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Разбираем плюсы и минусы трубчатых радиаторов Arbonia и помогаем выбрать высоту, число труб,
											подключение, цвет и конкретную модель под окно, панорамное остекление или узкий простенок...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/epd'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/epd.jpg'
											alt='Сертификат EPD для трубчатых радиаторов Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Сертификат EPD для трубчатых радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Arbonia получили сертификат Environmental Product Declaration (EPD) на все свои стальные
											радиаторы. Этот сертификат присваивается Институтом строительства и окружающей среды (IBU e.V.) и
											предоставляет возможность оценить экологическое воздействие продукции на всех этапах её жизненного
											цикла...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3057'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230222.jpg'
											alt='Радиатор Arbonia 3057'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Замена чугунных радиаторов на Arbonia 3057
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Отопление является одним из важнейших аспектов комфорта в жилом помещении. Чтобы система работала
											надежно и эффективно, важно выбрать правильное оборудование и правильно его установить. В данной
											статье мы рассмотрим особенности установки и замены трубчатых радиаторов Arbonia вместо старых
											чугунных или алюминиевых радиаторов...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/low-models'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230126_0.jpg'
											alt='Радиатор Arbonia 3030'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Невысокие модели радиаторов Arbonia в наличии
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Радиаторы небольшой высоты набирают всю большую популярность в нашей стране. Связано это с тем,
											что в современных домах все чаще устанавливают большие окна с низкими подоконниками, под которыми
											батарею стандартной высоты разместить уже не получится. Поэтому, радиаторы Arbonia высотой до 40
											см входят в нашу складскую программу. Ведь дома с большими окнами - это чаще всего дома бизнес-
											или премиум-класса...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/convection-radiaton-arbonia'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20230110_0.jpg'
											alt='Вертикальный радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Что такое конвекция и тепловое излучение радиатора
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Все радиаторы отопления, без исключения, обогревают помещение за счет двух физических явлений:
											конвекция воздуха и тепловое (инфракрасное) излучение. Разные конструкции и модели радиаторов
											обладают разным соотношением доли тепла, передаваемой тем или иным способом...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/calc-radiators-by-old-ones'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/2022122701.jpg'
											alt='3-трубчатый белый радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Подбор радиаторов Arbonia на основе уже установленных радиаторов
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Правильно определить требуемую тепловую мощность радиаторов очень важно. Ведь недостаточная
											мощность приведет к тому, что в доме или квартире будет просто некомфортно жить в холодное время
											года. С другой стороны...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/2-3-columns'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/90-1.jpeg'
											alt='3-трубчатый радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Отличия 2-трубчатых радиаторов Arbonia от 3-трубчатых
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Мы стараемся поддерживать в наличии наиболее популярные модели радиаторов Arbonia. Это наиболее
											универсальные модели, которые подходят для большинства случаев...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-radiators'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/1.jpg'
											alt='Трубчатый радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Преимущества и недостатки трубчатых радиаторов Arbonia
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Arbonia является один из лидеров в производстве стальных трубчатых радиаторов. Бренд имеет давнюю
											историю и хорошо зарекомендовал себя на российском рынке...
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/consoles'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/20.jpg'
											alt='Нижний упор Arbonia ZB0280'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Регулируемые кронштейны W161 или фиксирующий зажим ZB0281
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Радиаторы Arbonia чаще всего комплектуются одним из двух вариантов кронштейнов: W161 + ZB0280 и
											ZB0280/ZB0281/ZB0282
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/2180-3180'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/30.jpeg'
											alt='Arbonia 2180 vs 3180: чем отличаются и когда что выбрать'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Arbonia 2180 vs 3180: чем отличаются и когда что выбрать
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Сравниваем 2- и 3-трубчатые модели высотой 1,8 м: толщина, мощность, где уместнее 2180, а где
											лучше 3180.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/connections'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/articles/100.jpg'
											alt='Радиатор Arbonia'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Радиаторы Arbonia с боковым и нижним подключением
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Два наиболее используемых варианта подключения для радиаторов Arbonia: боковое ¾” и нижнее со
											встроенным термовентилем. Именно они входят в нашу складскую программу.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/calculate'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/2-columns-3.jpeg'
											alt='Как подбирать радиаторы Arbonia по мощности'
											width={300}
											style={{ borderRadius: '8px' }}
											height={300}
										/>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Как подбирать радиаторы Arbonia по мощности
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText }}
											component='span'
										>
											Трубчатые радиаторы Arbonia предоставляют широкие возможности по подбору конкретных моделей под
											каждый случай: практически любая высота и длина доступны для изготовления.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
					>
						<Box>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/radiatory-arbonia-pod-okno'
							>
								<div>
									<Box textAlign={'center'}>
										<img
											src='/images/models/3057-1.jpeg'
											alt='Стандартные радиаторы Arbonia под окно'
											width={300}
											style={{ borderRadius: '8px' }}
											height={'auto'}
										/>
									</Box>
									<Box
										textAlign={'center'}
										marginTop='10px'
									>
										<Typography
											sx={{ ...styles.standardTextRedLink }}
											component='span'
										>
											Стандартные радиаторы Arbonia под окно
										</Typography>
									</Box>
									<Box
										textAlign={'justify'}
										marginTop='10px'
										maxWidth={360}
										margin={'auto'}
									>
										<Typography
											sx={{ ...styles.smallText, lineHeight: 0.3 }}
											component='span'
										>
											Модели 2050, 2057, 3050 и 3057 высотой 50-57 см: как выбрать высоту, число труб и подключение
											под обычное окно или замену старой батареи.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>
				</Grid>
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
