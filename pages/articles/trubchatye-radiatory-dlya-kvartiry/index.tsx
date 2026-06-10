import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import { NextPage } from 'next'
import Script from 'next/script'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

const siteUrl = 'https://arboniashop.ru'

const modelRows = [
	{
		situation: 'Замена радиатора под стандартным окном',
		model: 'Arbonia 2057',
		href: '/models/2057',
		reason: 'Компактный горизонтальный вариант для привычной установки под подоконником.',
	},
	{
		situation: 'Нужна большая теплоотдача в той же нише',
		model: 'Arbonia 3057',
		href: '/models/3057',
		reason: 'Более мощный горизонтальный радиатор для комнаты с повышенными теплопотерями.',
	},
	{
		situation: 'Панорамное окно или узкий простенок',
		model: 'Arbonia 2180',
		href: '/models/2180',
		reason: 'Вертикальная модель для квартиры, где под окном нет места или важна экономия ширины.',
	},
	{
		situation: 'Нужна максимальная мощность на небольшой ширине',
		model: 'Arbonia 3180',
		href: '/models/3180',
		reason: 'Вертикальный 3-трубчатый радиатор для более сложных по теплопотерям помещений.',
	},
]

const faqItems = [
	{
		question: 'Какие трубчатые радиаторы лучше выбрать для квартиры?',
		answer:
			'Для квартиры чаще всего выбирают модели под стандартный подоконник или вертикальные радиаторы для нестандартных зон. Если нужно заменить старую батарею без серьёзной переделки труб, обычно начинают с моделей высотой 500 мм. Если под окном нет места, есть панорамное остекление или нужен дизайнерский акцент, рассматривают вертикальные модели.',
	},
	{
		question: 'Подойдут ли Arbonia 2057 и 3057 для замены старой батареи?',
		answer:
			'Arbonia 2057 и 3057 подходят для сценария, когда радиатор нужен под стандартный подоконник. Перед покупкой нужно проверить межосевое расстояние, доступную ширину, тип подключения и требуемую мощность. Нельзя выбирать только по размеру старой батареи, потому что теплоотдача разных конструкций отличается.',
	},
	{
		question: 'Когда в квартире лучше ставить вертикальный радиатор?',
		answer:
			'Вертикальный радиатор лучше рассматривать, если под окном нет места, окно панорамное, подоконник низкий или радиатор нужно разместить в узком простенке. В линейке Arbonia для таких задач есть 2180 и 3180. Выбор между ними зависит от нужной мощности, глубины и количества секций.',
	},
	{
		question: 'Можно ли ставить трубчатые радиаторы в квартиру с центральным отоплением?',
		answer:
			'Трубчатые радиаторы можно рассматривать для квартиры с центральным отоплением, если конкретная модель подходит по рабочим параметрам и условиям эксплуатации. Перед покупкой нужно уточнить давление, подключение, монтажные ограничения и требования к установке.',
	},
	{
		question: 'Что важнее: межосевое расстояние или мощность?',
		answer:
			'Важны оба параметра. Межосевое расстояние помогает понять, насколько радиатор подходит к существующей подводке, а мощность показывает, сможет ли радиатор обогреть помещение.',
	},
	{
		question: 'Как рассчитать количество секций для квартиры?',
		answer:
			'Для расчёта нужно знать площадь помещения, высоту потолков, размер окна, тип отопления, место установки и особенности комнаты. Количество секций зависит не только от ширины стены, но и от требуемой теплоотдачи.',
	},
]

const tableStyle: React.CSSProperties = {
	width: '100%',
	borderCollapse: 'collapse',
	marginTop: '12px',
	fontSize: '16px',
}

const cellStyle: React.CSSProperties = {
	border: '1px solid #dddddd',
	padding: '12px 14px',
	verticalAlign: 'top',
}

const headCellStyle: React.CSSProperties = {
	...cellStyle,
	background: '#f7f7f7',
	fontWeight: 700,
}

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: 'Трубчатые радиаторы для квартиры: какие модели Arbonia выбрать',
		description:
			'Как выбрать трубчатый радиатор для квартиры: модели Arbonia под окна с межосевым 500 мм, вертикальные радиаторы для ниш и панорамных окон, расчёт секций.',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${siteUrl}/articles/trubchatye-radiatory-dlya-kvartiry`,
		},
		author: {
			'@type': 'Organization',
			name: 'ArboniaShop',
		},
		publisher: {
			'@type': 'Organization',
			name: 'ArboniaShop',
			url: siteUrl,
		},
		inLanguage: 'ru-RU',
	}

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map(item => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	}

	const LinkText = ({ href, children }: { href: string; children: React.ReactNode }) => (
		<a
			href={href}
			style={{ textDecoration: 'none' }}
		>
			<Typography
				sx={{ ...styles.standardTextRedLink }}
				component='span'
			>
				{children}
			</Typography>
		</a>
	)

	return (
		<Box>
			<Head>
				<link
					rel='canonical'
					href={`${siteUrl}/articles/trubchatye-radiatory-dlya-kvartiry`}
				/>
			</Head>
			<Script
				id='article-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Script
				id='faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<PageHeader
				title={'Трубчатые радиаторы для квартиры - какие модели выбрать'}
				description={
					'Как выбрать трубчатый радиатор для квартиры: модели Arbonia под окна с межосевым 500 мм, вертикальные радиаторы для ниш и панорамных окон, расчёт секций.'
				}
				type='article'
				image='/images/articles/underwindow.jpeg'
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Трубчатые радиаторы для квартиры',
						link: '/articles/trubchatye-radiatory-dlya-kvartiry',
					},
				]}
			/>
			<Hero
				imgPath={'/images/articles/underwindow.jpeg'}
				header={'Трубчатые радиаторы для квартиры: какие модели Arbonia выбрать'}
			/>
			<Box
				component='article'
				sx={{
					...global.pagePadding,
					maxWidth: '920px',
					margin: 'auto',
					...styles.standardText,
				}}
				marginTop='20px'
			>
				<Typography
					component='h1'
					variant='h4'
					marginTop='10px'
					marginBottom='24px'
				>
					Трубчатые радиаторы для квартиры: какие модели Arbonia выбрать
				</Typography>

				<Typography
					component='p'
					marginBottom='20px'
					sx={{ ...styles.standardText }}
				>
					Трубчатый радиатор для квартиры выбирают не по внешнему виду в отрыве от задачи, а по месту установки,
					мощности, размерам и типу подключения. Если нужен общий принцип выбора, сначала посмотрите материал{' '}
					<LinkText href='/articles/arbonia-kak-vybrat-trubchatyj-radiator'>как выбрать трубчатый радиатор Arbonia</LinkText>
					, а здесь мы разбираем именно квартирные сценарии: установка под окном, замена старой батареи, работа в
					квартирах с центральным отоплением и выбор вертикальной модели для узких ниш или панорамных окон.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Какие трубчатые радиаторы подходят для квартиры?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Для квартиры подходят трубчатые радиаторы, которые можно подобрать по мощности, высоте, глубине,
					количеству секций и типу подключения. Сам по себе формат &quot;трубчатый радиатор&quot; не гарантирует правильный
					выбор: одну модель удобно поставить под стандартное окно, другую - в узкий простенок рядом с панорамным
					остеклением, третью - использовать как интерьерный акцент в кухне-гостиной или спальне. Поэтому начинать
					лучше не с цвета и не с внешнего вида, а с места установки и параметров системы отопления.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					В ассортименте Arbonia для квартир закрыты два наиболее практичных сценария. Первый - установка под
					стандартный подоконник, где важны высота, количество секций и возможность вписаться в существующую нишу.
					Второй - вертикальная установка, когда под окном нет места, окно начинается почти от пола, радиатор нужно
					поставить в простенок или хочется сделать отопительный прибор частью дизайна. Такой подход удобен для
					многоквартирных домов, потому что он учитывает и старый жилищный фонд с привычной разводкой, и современные
					планировки с панорамными окнами и ограниченным пространством у наружных стен.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Почему для российских квартир часто выбирают межосевое расстояние 500 мм?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Межосевое расстояние 500 мм остаётся одним из самых востребованных параметров для квартир, потому что многие
					старые радиаторы и подводки были рассчитаны именно на установку под окном. Когда владелец квартиры хочет
					заменить чугунную батарею, панельный радиатор или старый секционный прибор без серьёзной переделки труб, ему
					важно сохранить привычную логику монтажа. В таких случаях модели с высотой около 50-57 см проще рассматривать
					как базовый вариант: они ставятся под подоконник, не ломают интерьер и обычно лучше вписываются в существующую
					схему отопления.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Для квартир с заменой под окном особенно полезен материал{' '}
					<LinkText href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'>
						Arbonia 3050 или 3057 - какую высоту радиатора выбрать
					</LinkText>
					. Там подробно разобраны нюансы высоты, межосевого расстояния и монтажа в нише под стандартным подоконником.
					Если вы меняете старую батарею и хотите сохранить установку под окном, именно эта связка обычно становится
					первой точкой выбора.
				</Typography>

				<Box
					sx={{
						mt: 3,
						p: 2.5,
						border: '1px solid #e5e5e5',
						borderRadius: '12px',
						backgroundColor: '#fafafa',
						textAlign: 'center',
					}}
				>
					<Typography sx={{ ...styles.standardText }}>
						Не уверены, какая модель Arbonia подойдёт для вашей квартиры? Пришлите площадь комнаты, высоту потолков,
						размеры окна и тип подключения - мы рассчитаем секции и подберём радиатор.
					</Typography>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								mt: 2,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								minWidth: '260px',
								padding: '12px 18px',
								borderRadius: '10px',
								backgroundColor: '#111111',
								color: '#ffffff',
								fontWeight: 600,
							}}
						>
							Рассчитать радиатор
						</Box>
					</a>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Когда для квартиры лучше выбрать вертикальный трубчатый радиатор?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Вертикальный трубчатый радиатор выбирают для квартиры тогда, когда стандартная установка под окном неудобна
					или невозможна. Это частая ситуация в современных квартирах с панорамным остеклением, низкими подоконниками,
					французскими окнами, объединёнными кухнями-гостиными и узкими простенками. В таких помещениях обычный
					радиатор под окном может мешать, выглядеть тяжело или просто не помещаться по высоте. Вертикальная модель
					позволяет перенести отопительный прибор на свободный участок стены и при этом сохранить нормальную
					теплоотдачу за счёт высоты и количества секций.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Для таких сценариев лучше ориентироваться на{' '}
					<LinkText href='/catalog/high-models'>вертикальные радиаторы Arbonia</LinkText>. В линейке компании есть
					модели, которые работают как функциональный прибор и как выразительный элемент интерьера. Но выбирать
					вертикальный радиатор только по внешнему виду нельзя: для квартиры всё равно нужно считать мощность,
					учитывать площадь остекления и понимать, где именно радиатор будет подключаться.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если вам важен именно сценарий вертикальной установки, полезны и сопутствующие материалы:{' '}
					<LinkText href='/articles/vertical-vs-horizontal'>вертикальный или горизонтальный радиатор</LinkText>,
					<LinkText href='/articles/panorama'>радиаторы Arbonia для панорамных окон</LinkText> и{' '}
					<LinkText href='/articles/vertical-radiator-power'>мощность вертикального радиатора Arbonia</LinkText>.
					Они помогают понять, где вертикальная модель действительно уместна, а где лучше оставить классическую схему
					под окном.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Какие модели Arbonia выбрать для квартиры?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Выбор модели Arbonia для квартиры зависит от того, где будет стоять радиатор и какую задачу он должен
					решить. Если нужно заменить старую батарею под окном, логичнее начать с моделей 500 мм. Если в квартире
					панорамное окно, узкий простенок или дизайнерская планировка, лучше рассматривать вертикальные модели. Если
					помещение требует больше тепла, стоит смотреть 3-трубчатые варианты, а если важна меньшая глубина и более
					аккуратный внешний вид - 2-трубчатые.
				</Typography>

				<Box sx={{ overflowX: 'auto', marginTop: '12px' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Ситуация в квартире</th>
								<th style={headCellStyle}>Какая модель Arbonia подойдёт</th>
								<th style={headCellStyle}>Почему</th>
							</tr>
						</thead>
						<tbody>
							{modelRows.map(row => (
								<tr key={row.model}>
									<td style={cellStyle}>{row.situation}</td>
									<td style={cellStyle}>
										<a
											href={row.href}
											style={{ textDecoration: 'none' }}
										>
											<Typography
												sx={{ ...styles.standardTextRedLink }}
												component='span'
											>
												{row.model}
											</Typography>
										</a>
									</td>
									<td style={cellStyle}>{row.reason}</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>

				<Typography
					component='p'
					marginTop='18px'
					sx={{ ...styles.standardText }}
				>
					Эта таблица помогает выбрать направление, но не заменяет расчёт. В квартире важно учитывать не только площадь
					комнаты, но и высоту потолков, тип дома, размер окна, угловое расположение помещения, температуру
					теплоносителя и состояние существующей разводки. Например, две комнаты одинаковой площади могут требовать
					разной мощности, если одна из них угловая, а другая находится внутри тёплого контура.
				</Typography>

				<Box
					sx={{
						mt: 3,
						p: 2.5,
						border: '1px solid #e5e5e5',
						borderRadius: '12px',
						backgroundColor: '#fafafa',
						textAlign: 'center',
					}}
				>
					<Typography sx={{ ...styles.standardText }}>
						Если вы меняете старую батарею и хотите сохранить установку под окном, пришлите межосевое расстояние,
						ширину ниши и фото подключения. Мы подскажем, подойдёт ли Arbonia 2057 или Arbonia 3057.
					</Typography>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								mt: 2,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								minWidth: '300px',
								padding: '12px 18px',
								borderRadius: '10px',
								backgroundColor: '#111111',
								color: '#ffffff',
								fontWeight: 600,
							}}
						>
							Подобрать замену батареи
						</Box>
					</a>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Подойдут ли трубчатые радиаторы для квартиры с центральным отоплением?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Трубчатые радиаторы можно рассматривать для квартиры с центральным отоплением, но выбор нужно делать
					внимательнее, чем для автономной системы в частном доме. В центральном отоплении важны рабочее давление,
					качество монтажа, совместимость с существующей разводкой и условия эксплуатации конкретного дома. Нельзя
					выбирать радиатор только по внешнему виду, потому что красивый прибор должен ещё подходить к системе,
					выдерживать рабочие условия и обеспечивать нужную теплоотдачу.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если квартира с центральным отоплением, полезно свериться с материалом{' '}
					<LinkText href='/articles/connections'>о подключениях радиаторов Arbonia</LinkText> и с{' '}
					<LinkText href='/articles/faq'>ответами на частые вопросы</LinkText>. Там можно быстро уточнить, как
					работают боковые и нижние подключения, а также что важно проверить перед покупкой.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Что выбрать для замены старой батареи в квартире?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Для замены старой батареи в квартире чаще всего смотрят радиаторы, которые можно установить в привычную
					зону под окном. Это удобно, потому что именно там обычно уже есть подводка, а радиатор работает в зоне
					наибольших теплопотерь. Если существующая разводка рассчитана на стандартную высоту ниши, модели{' '}
					<LinkText href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'>Arbonia 3050 и 3057</LinkText>{' '}
					становятся наиболее логичным направлением выбора.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Выбор между горизонтальными моделями зависит от требуемой мощности и ограничений по глубине. Если комната
					небольшая, подоконник невысокий, а интерьер требует более лёгкого вида, можно рассматривать 2-трубчатый
					вариант. Если помещение больше, окно шире или нужна повышенная теплоотдача, чаще смотрят 3-трубчатый
					вариант. Но даже при замене &quot;на то же место&quot; нельзя просто повторять ширину старой батареи: у разных
					типов радиаторов отличается теплоотдача, поэтому количество секций нужно пересчитывать.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Подойдут ли вертикальные радиаторы для маленькой квартиры?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Вертикальные радиаторы могут подойти для маленькой квартиры, если в ней мало свободного места под окнами или
					нужно освободить стену для мебели. В небольших помещениях часто приходится выбирать между удобной планировкой
					и правильным расположением отопительного прибора, особенно если окно большое, подоконник низкий или рядом
					стоит шкаф, диван или рабочий стол. Вертикальная модель позволяет использовать узкий участок стены и не
					занимать длинную зону под окном.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					При этом вертикальный радиатор не всегда означает &quot;лучше&quot; или &quot;мощнее&quot;. Его нужно подбирать по расчёту,
					потому что теплоотдача зависит от модели, количества секций, глубины, температуры теплоносителя и условий
					помещения. Если узкий простенок позволяет поставить только небольшой радиатор, может потребоваться более
					мощная вертикальная модель или другой расчёт секций.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Как выбрать количество секций для квартиры?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Количество секций для квартиры нужно выбирать не по принципу &quot;сколько поместится&quot;, а по требуемой мощности
					помещения. Приблизительная оценка по площади может помочь на первом этапе, но для точного подбора нужно
					учитывать больше факторов. Важны высота потолков, количество наружных стен, размер окна, наличие панорамного
					остекления, этаж, тип дома и температура теплоносителя. Если помещение угловое, с большим окном или
					объединённой кухней-гостиной, стандартной оценки может быть недостаточно.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Для расчёта желательно подготовить исходные данные:
				</Typography>
				<Box component='ul' sx={{ pl: 3, mt: 1 }}>
					<li>
						<Typography sx={{ ...styles.standardText }}>площадь комнаты;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>высоту потолков;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>размер окна;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип помещения;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>количество наружных стен;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>место установки радиатора;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип отопления;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>желаемую модель или ограничение по размеру;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип подключения;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>необходимость вертикального или горизонтального формата.</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					После этого можно понять, какая модель подходит лучше: Arbonia 2057, Arbonia 3057, Arbonia 2180 или
					Arbonia 3180. В некоторых квартирах правильнее поставить стандартный радиатор под окном, в других -
					вертикальную модель в простенок. Иногда решающим фактором становится не только мощность, но и глубина
					радиатора, потому что он не должен мешать проходу, мебели или шторам.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Частые ошибки при выборе трубчатого радиатора для квартиры
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Главная ошибка - выбирать трубчатый радиатор для квартиры как декоративный объект, забывая, что это часть
					отопительной системы. Радиатор может красиво выглядеть на визуализации, но не подойти по высоте, мощности,
					глубине или подключению. Вторая частая ошибка - ориентироваться на старую батарею без пересчёта теплоотдачи:
					если новый радиатор имеет другую конструкцию, простое совпадение по ширине не гарантирует такой же результат.
					Третья ошибка - не учитывать существующую разводку, особенно при замене радиатора без ремонта.
				</Typography>
				<Box component='ul' sx={{ pl: 3, mt: 1 }}>
					<li>
						<Typography sx={{ ...styles.standardText }}>выбор радиатора только по фотографии;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>покупка без расчёта количества секций;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>игнорирование межосевого расстояния;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>выбор вертикальной модели без проверки мощности;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>попытка заменить старую батарею без учёта подключения;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>отказ от консультации, если помещение нестандартное;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>выбор слишком маленького радиатора ради дизайна.</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Эти ошибки особенно заметны в квартирах с панорамными окнами, нестандартными нишами и объединёнными
					пространствами. В таких помещениях радиатор должен быть не просто красивым, а правильно рассчитанным. Если
					мощности не хватит, интерьерный эффект не компенсирует холодную комнату.
				</Typography>

				<Box
					sx={{
						mt: 3,
						p: 2.5,
						border: '1px solid #e5e5e5',
						borderRadius: '12px',
						backgroundColor: '#fafafa',
						textAlign: 'center',
					}}
				>
					<Typography sx={{ ...styles.standardText }}>
						Для квартиры важно подобрать не просто красивый радиатор, а модель с нужной мощностью и подходящим
						подключением. Отправьте параметры помещения - мы предложим подходящий вариант Arbonia.
					</Typography>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								mt: 2,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								minWidth: '260px',
								padding: '12px 18px',
								borderRadius: '10px',
								backgroundColor: '#111111',
								color: '#ffffff',
								fontWeight: 600,
							}}
						>
							Отправить параметры
						</Box>
					</a>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Итог: какой трубчатый радиатор выбрать для квартиры?
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Для квартиры в первую очередь стоит рассматривать те трубчатые радиаторы, которые соответствуют реальным
					сценариям установки. Если нужно заменить старую батарею под окном и сохранить привычную схему, логично
					начать с горизонтальных моделей. Если в квартире панорамное окно, узкий простенок, низкий подоконник или
					дизайнерская планировка, лучше смотреть вертикальные Arbonia 2180 и 3180.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Окончательный выбор нужно делать после расчёта мощности и проверки подключения. Для квартиры важны не только
					высота и внешний вид, но и рабочие условия системы отопления, межосевое расстояние, количество секций и место
					установки. Если вы не уверены, какая модель подойдёт, пришлите параметры помещения: площадь, высоту
					потолков, размер окна, тип отопления и желаемое место установки. Мы рассчитаем секции, подберём модель
					Arbonia и предложим подходящий вариант подключения.
				</Typography>

				<Box
					sx={{
						mt: 3,
						p: 2.5,
						border: '1px solid #e5e5e5',
						borderRadius: '12px',
						backgroundColor: '#fafafa',
						textAlign: 'center',
					}}
				>
					<Typography sx={{ ...styles.standardText }}>
						Не уверены, какая модель Arbonia подойдёт для вашей квартиры? Пришлите площадь комнаты, высоту потолков,
						размеры окна и тип подключения - мы рассчитаем секции и подберём радиатор.
					</Typography>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								mt: 2,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								minWidth: '260px',
								padding: '12px 18px',
								borderRadius: '10px',
								backgroundColor: '#111111',
								color: '#ffffff',
								fontWeight: 600,
							}}
						>
							Рассчитать радиатор
						</Box>
					</a>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					FAQ
				</Typography>
				<Box>
					{faqItems.map(item => (
						<Box
							key={item.question}
							marginBottom='26px'
						>
							<Typography
								component='h3'
								variant='h6'
								marginBottom='10px'
							>
								{item.question}
							</Typography>
							<Typography
								component='p'
								sx={{ ...styles.standardText }}
							>
								{item.answer}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {},
	}
}
