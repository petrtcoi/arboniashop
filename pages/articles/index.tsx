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

const clusterArticles = [
	{
		slug: "arbonia-3057-skolko-sektsiy-dlina-moshchnost",
		title: "Сколько секций Arbonia 3057 нужно: мощность и длина при разных температурах",
		description: "Сколько секций Arbonia 3057 нужно при 75/65/20 и 55/45/20: таблица мощности и длины, пример на 1000 Вт и проверка радиатора после снижения температуры воды.",
		image: "/images/models/3057-0.jpeg",
	},
	{
		slug: "nizkiy-arbonia-ili-vnutripolnyy-konvektor",
		title: "Низкий радиатор Arbonia или внутрипольный конвектор: что выбрать у панорамного окна",
		description: "Низкий Arbonia или внутрипольный конвектор у панорамного окна: холодный поток от стекла, размеры ниши, пример мощности KRP91, вентилятор и стоимость установки.",
		image: "/images/articles/panorama/arbonia1.jpg",
	},
	{
		slug: "zavodskoy-cvet-arbonia-ili-perekraska-iz-nalichiya",
		title: "Заводской цвет Arbonia или перекраска радиатора из наличия: как выбрать способ заказа",
		description: "Как получить выбранный цвет Arbonia: заводской заказ или перекраска радиатора из наличия официальным дилером. Комплектация, сроки, образцы и гарантия.",
		image: "/images/sliders/slide-colors.jpg",
	},

	{
		slug: 'ral-9016-9010-9003-kakoy-belyy-vybrat',
		title: 'RAL 9016, RAL 9010 или RAL 9003: какой белый выбрать для радиатора',
		description: 'Сравниваем три белых оттенка, блеск покрытия и сочетание со стеной, окнами и мебелью.',
		image: '/images/sliders/slide-colors.jpg',
	},
	{
		slug: 'arbonia-3030-skolko-sektsiy-dlina-moshchnost',
		title: 'Сколько секций Arbonia 3030 нужно: длина и мощность',
		description: 'Таблица от 10 до 32 секций, расчёты при ΔT50 и ΔT60 и проверка доступной длины.',
		image: '/images/models/3030-12.jpeg',
	},
	{
		slug: 'radiator-pod-glubokim-podokonnikom-stoleshnitsey',
		title: 'Радиатор под глубоким подоконником или столешницей',
		description: 'Проверяем размеры ниши, движение воздуха, место термоголовки и доступ для обслуживания.',
		image: '/images/articles/underwindow.jpeg',
	},
]

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
					{clusterArticles.map(article => (
						<Grid item xs={12} md={6} key={article.slug}>
							<a href={`/articles/${article.slug}`} style={{ textDecoration: 'none' }}>
								<Box textAlign='center'>
									<img src={article.image} alt={article.title} width={300} height={174}
										style={{ maxWidth: '100%', borderRadius: '8px', objectFit: 'contain' }} />
									<Typography sx={{ ...styles.standardTextRedLink, marginTop: '10px' }} component='div'>
										{article.title}
									</Typography>
								</Box>
								<Box maxWidth={360} margin='10px auto 0'>
									<Typography sx={{ ...styles.smallText }} component='p'>{article.description}</Typography>
								</Box>
							</a>
							</Grid>
					))}
					<Grid item md={6}>
						<Box sx={{ borderRadius: '8px' }}>
							<a style={{ textDecoration: 'none' }} href='/articles/trubchatye-ili-bimetallicheskie-radiatory'>
								<div>
									<Box textAlign='center'>
										<img
											src='/images/articles/underwindow.jpeg'
											alt='Сравнение трубчатых и биметаллических радиаторов'
											width={300}
											height={174}
											style={{ borderRadius: '8px', objectFit: 'cover' }}
										/>
									</Box>
									<Box textAlign='center' marginTop='10px'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
											Трубчатые или биметаллические радиаторы: что выбрать
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Сравниваем конструкцию, давление, мощность, размеры, уход, подключение и полную стоимость для квартиры и дома.
										</Typography>
									</Box>
								</div>
							</a>
						</Box>
					</Grid>

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
											Порядок согласования модели, физических образцов, блеска, арматуры и покрытия перед заказом.
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
											Радиатор под низкий подоконник: замер ниши и выбор высоты
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Чистовой пол, доступная высота и глубина ниши, подключение и монтажное пространство.
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
											Межосевое 500 мм Arbonia: измерение и геометрия подключения
										</Typography>
									</Box>
									<Box textAlign='justify' marginTop='10px' maxWidth={360} margin='auto'>
										<Typography sx={{ ...styles.smallText, lineHeight: 0.3 }} component='span'>
											Центры труб, высота осей, расстояние до стены и место арматуры для боковых 2057 и 3057.
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
											Трубчатый радиатор в квартире: совместимость с системой и подготовка замены
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
											Что проверить перед установкой трубчатого радиатора в квартире: параметры системы дома, стояк, схема подключения, мощность старого прибора и порядок работ.
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
											Мощность вертикальных Arbonia 2180 и 3180 при разных температурах
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
											Таблицы мощности Arbonia 2180 и 3180 при ΔT50 и ΔT60. Как перевести известную тепловую нагрузку в число секций и проверить ограниченную ширину простенка.
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
											Калькулятор секций Arbonia 2180
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
											Изменяем площадь, высоту потолка, условия комнаты и ΔT для предварительного подбора.
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
											Arbonia 2180 на гипсокартонной стене: закладные и передача нагрузки
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
											Как подготовить гипсокартонную стену под Arbonia 2180: определить основание, согласовать закладные с креплениями и проверить массу заполненного прибора.
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
											Монтаж Arbonia 2180 и 3180: масса, крепления и фиксация корпуса 1800 мм
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
											Как подготовить установку высоких Arbonia 2180 и 3180: масса с теплоносителем, несущая стена, совместимый комплект и фиксация от смещения.
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
											Arbonia 3030 или 3037: сравнение радиаторов высотой 300 и 370 мм
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
											Чем отличаются Arbonia 3030 и 3037: высота, межосевое расстояние, мощность при ΔT50 и ΔT60. Сравнение длины при одинаковой нагрузке и ограниченной нише.
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
											Цветные радиаторы в интерьере: сочетания со стенами, деревом и металлом
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
											Идеи сочетаний цветного радиатора со стенами, деревом, камнем и металлическими деталями. Фон, контраст и цветовой акцент в разных комнатах.
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
											RAL 9016: какой это цвет радиатора Arbonia
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
											Что означает транспортный белый и как его воспринимают рядом с отделкой и при разном освещении.
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
											Arbonia 2180: таблица секций для комнат 10–20 м²
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
											Готовые примеры при условной нагрузке 100 Вт/м² и двух температурных режимах.
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
											Монтаж радиатора Arbonia: подготовка, подключение и проверка после установки
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
											Общая последовательность монтажа Arbonia: проверка комплектации и стены, разметка, подключение, заполнение, удаление воздуха и проверка герметичности.
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
											Как выбрать высокий радиатор Arbonia для простенка и планировки комнаты
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
											Проверяем место для вертикального Arbonia: высоту и ширину простенка, открывание дверей, мебель, подводки и распределение тепла в комнате.
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
											Замена чугунного радиатора на Arbonia 3057: что проверить до демонтажа
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
											Проверка замены старой батареи на Arbonia 3057: глубина 105 мм, боковая арматура, мощность, состояние труб и порядок подготовки работ.
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
											Низкие Arbonia 2030, 3030 и 3037: сравнение высоты, глубины и мощности
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
											Сравниваем Arbonia 2030, 3030 и 3037: высота 300 или 370 мм, глубина 65 или 105 мм и мощность при ΔT50. Как выбрать модель по ограничениям ниши.
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
											Arbonia 2180 или 3180: сравнение двух вертикальных моделей
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
											Глубина 65 или 105 мм, мощность при одинаковом ΔT, масса и условия выбора.
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
											Нижнее подключение Arbonia №69 ТВВ: схема и комплект
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
											Подробно о выводах 50 мм, подаче и обратке, встроенном клапане, нижнем узле, термоголовке и типичных ошибках монтажа.
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
											Какая мощность отопления нужна комнате: проект, теплопотери и предварительная оценка
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
											Как определить требуемую тепловую нагрузку перед выбором радиатора Arbonia: данные проекта, расчёт теплопотерь, замена старого прибора и ограничения формул по площади.
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
											Arbonia под стандартное окно: выбор между 2050, 2057, 3050 и 3057
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
											Как выбрать радиатор Arbonia высотой 500 или 570 мм под обычное окно: таблица 2050, 2057, 3050, 3057, глубина, мощность при ΔT50 и место для подключения.
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
