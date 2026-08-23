import { Box, Button, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { NextPage } from 'next'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

const siteUrl = 'https://arboniashop.ru'
const slug = 'arbonia-2050-ili-3050'
const keyword = 'Arbonia 2050 или 3050'
const h1 = 'Arbonia 2050 или 3050 - какой радиатор выбрать'
const metaTitle = 'Arbonia 2050 или 3050 - сравнение радиаторов'
const metaDescription =
	'Arbonia 2050 или 3050: сравниваем глубину 65 и 105 мм, мощность, число секций, длину и место под окном, чтобы выбрать двух- или трехтрубную модель.'

const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '14px' }
const cellStyle: React.CSSProperties = { border: '1px solid #dddddd', padding: '10px 12px', verticalAlign: 'top' }
const headCellStyle: React.CSSProperties = { ...cellStyle, background: '#f7f7f7', fontWeight: 700 }

const LinkText = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<a href={href} style={{ textDecoration: 'none' }}><Typography sx={{ ...styles.standardTextRedLink }} component='span'>{children}</Typography></a>
)

const Paragraph = ({ children, marginTop = '14px' }: { children: React.ReactNode; marginTop?: string }) => (
	<Typography component='p' marginTop={marginTop} sx={{ ...styles.standardText }}>{children}</Typography>
)

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
	<Typography component='h2' variant='h5' marginTop='44px' marginBottom='12px'>{children}</Typography>
)

const Subheading = ({ children }: { children: React.ReactNode }) => (
	<Typography component='h3' variant='h6' marginTop='30px' marginBottom='10px'>{children}</Typography>
)

const faqItems = [
	{
		question: 'Что мощнее - Arbonia 2050 или 3050?',
		answer:
			'Arbonia 3050 мощнее при одинаковых высоте и числе секций, потому что имеет три ряда труб вместо двух. Одна секция дает 53 Вт против 39 Вт при ΔT=50 и 68 Вт против 49 Вт при ΔT=60. Сравнивать показатели можно только при одинаковом температурном режиме. Итоговый выбор делают по мощности всего прибора и доступной длине стены.',
	},
	{
		question: 'Насколько Arbonia 3050 глубже модели 2050?',
		answer:
			'Глубина корпуса Arbonia 3050 составляет 105 мм, а Arbonia 2050 - 65 мм, разница равна 40 мм. К корпусу нужно добавить расстояние до стены, которое зависит от кронштейна и монтажа. Поэтому фактический вылет проверяют по схеме конкретной комплектации. Отдельно учитывают термоголовку, шторы и мебель перед прибором.',
	},
	{
		question: 'Какая модель лучше для маленькой комнаты?',
		answer:
			'Если теплопотери невелики и под окном достаточно ширины, тонкая Arbonia 2050 обычно выглядит легче и оставляет больше свободного прохода. Если окно узкое или нужна высокая мощность, Arbonia 3050 позволяет получить ее на меньшей длине. Решение зависит не от площади как таковой, а от расчета и геометрии места. Для маленькой комнаты нет одной модели, которая автоматически подходит лучше другой.',
	},
	{
		question: 'Можно ли поставить Arbonia 2050 вместо 3050 без изменения труб?',
		answer:
			'Обе модели имеют высоту 500 мм и межосевое расстояние 430 мм при стандартном боковом подключении, поэтому базовая геометрия похожа. Но отличаются глубина корпуса, положение относительно стены, кронштейны и требуемое число секций. Совместимость выводов и арматуры должен подтвердить монтажник по схеме. До покупки также пересчитывают мощность всего нового прибора.',
	},
	{
		question: 'Как выбрать число секций Arbonia 2050 или 3050?',
		answer:
			'Сначала определяют теплопотери помещения и рабочий температурный график, затем делят нужную мощность на мощность одной секции при том же ΔT и округляют вверх. После этого проверяют длину прибора и схему подключения. Расчет только по площади дает предварительный ориентир, но не заменяет теплотехнический подбор. Если исходных данных мало, начинают с фотографии, размеров и параметров старого радиатора.',
	},
]

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: h1,
		description: metaDescription,
		image: `${siteUrl}/images/models/2050-0.jpg`,
		datePublished: '2026-08-23',
		dateModified: '2026-08-23',
		mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/articles/${slug}` },
		about: keyword,
		keywords: [keyword, 'сравнение Arbonia 2050 и 3050', 'двухтрубчатый радиатор', 'трехтрубчатый радиатор'],
		author: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
		publisher: {
			'@type': 'Organization',
			name: 'ArboniaShop',
			url: siteUrl,
			logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
		},
		inLanguage: 'ru-RU',
	}

	const breadcrumbJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
			{ '@type': 'ListItem', position: 2, name: 'Полезная информация', item: `${siteUrl}/articles` },
			{ '@type': 'ListItem', position: 3, name: h1, item: `${siteUrl}/articles/${slug}` },
		],
	}

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map(item => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer },
		})),
	}

	return (
		<Box>
			<Head>
				<link rel='canonical' href={`${siteUrl}/articles/${slug}`} />
				<script id={`${slug}-article-jsonld`} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
				<script id={`${slug}-breadcrumb-jsonld`} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
				<script id={`${slug}-faq-jsonld`} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			</Head>

			<PageHeader title={metaTitle} description={metaDescription} type='article' image='/images/models/2050-0.jpg' />
			<PageTitle breadcrumbs={[
				{ title: 'Главная', link: '/' },
				{ title: 'Полезная информация', link: '/articles' },
				{ title: h1, link: `/articles/${slug}` },
			]} />

			<Box component='article' sx={{ ...global.pagePadding, maxWidth: '920px', margin: 'auto', ...styles.standardText }} marginTop='20px'>
				<Typography component='h1' variant='h4' marginTop='10px' marginBottom='24px'>{h1}</Typography>

				<Paragraph marginTop='0'>
					Если вы выбираете <strong>Arbonia 2050 или 3050</strong>, берите 2050 для минимальной глубины и более легкого вида, а 3050 - когда нужно больше мощности на коротком участке стены. Обе модели имеют высоту 500 мм, но корпус 2050 глубиной 65 мм, а 3050 - 105 мм. При одинаковом ΔT секция 3050 мощнее примерно на 36-39%. Поэтому правильный выбор зависит от теплопотерь, доступной длины и прохода перед радиатором. Цвет и подключение сравнивают уже после расчета.
				</Paragraph>

				<SectionHeading>Arbonia 2050 или 3050 - быстрое сравнение</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead><tr><th style={headCellStyle}>Параметр</th><th style={headCellStyle}>Arbonia 2050</th><th style={headCellStyle}>Arbonia 3050</th></tr></thead>
						<tbody>
							<tr><td style={cellStyle}>Конструкция</td><td style={cellStyle}>2-трубчатая</td><td style={cellStyle}>3-трубчатая</td></tr>
							<tr><td style={cellStyle}>Высота</td><td style={cellStyle}>500 мм</td><td style={cellStyle}>500 мм</td></tr>
							<tr><td style={cellStyle}>Глубина корпуса</td><td style={cellStyle}>65 мм</td><td style={cellStyle}>105 мм</td></tr>
							<tr><td style={cellStyle}>Межосевое, боковое подключение</td><td style={cellStyle}>430 мм</td><td style={cellStyle}>430 мм</td></tr>
							<tr><td style={cellStyle}>Мощность секции при ΔT=50</td><td style={cellStyle}>39 Вт</td><td style={cellStyle}>53 Вт</td></tr>
							<tr><td style={cellStyle}>Мощность секции при ΔT=60</td><td style={cellStyle}>49 Вт</td><td style={cellStyle}>68 Вт</td></tr>
							<tr><td style={cellStyle}>Доля лучистого тепла по таблице Arbonia</td><td style={cellStyle}>49%</td><td style={cellStyle}>38%</td></tr>
							<tr><td style={cellStyle}>Главный плюс</td><td style={cellStyle}>Тоньше и визуально легче</td><td style={cellStyle}>Мощнее на той же длине</td></tr>
							<tr><td style={cellStyle}>Главный компромисс</td><td style={cellStyle}>Нужно больше секций</td><td style={cellStyle}>На 40 мм глубже</td></tr>
						</tbody>
					</table>
				</Box>

				<SectionHeading>Почему одинаковая высота не означает одинаковый радиатор</SectionHeading>
				<Paragraph>
					Название Arbonia удобно читать как короткий технический код: первая цифра показывает число рядов труб, а последние цифры - высоту модели в сантиметрах. Поэтому 2050 и 3050 одинаково помещаются под стандартное окно по высоте, но занимают разное пространство в глубину. Это различие особенно чувствуется в узкой спальне, коридоре или кухне, где перед радиатором проходит человек или открывается фасад мебели. В просторной гостиной лишние 40 мм обычно незаметны, зато более высокая мощность 3050 помогает сократить длину прибора. Сравнивать эти модели только по фотографии нельзя, потому что фронтально они выглядят похожими, а ключевое отличие раскрывается сбоку.
				</Paragraph>

				<Subheading>Arbonia 2050 - тонкий профиль и больше длины</Subheading>
				<Paragraph>
					Arbonia 2050 выбирают, когда радиатор не должен далеко выступать от стены и теплопотери позволяют использовать двухтрубчатую конструкцию. Глубина корпуса 65 мм дает более легкий силуэт, хотя к ней нужно добавить расстояние от стены до прибора по монтажной схеме. Плата за компактность - меньшая мощность одной секции, поэтому для той же нагрузки потребуется более длинный радиатор. Это не недостаток, если под окном есть свободная ширина: длинный прибор лучше перекрывает оконную зону и смотрится пропорционально широкому проему. Посмотреть складские исполнения можно на странице <LinkText href='/models/2050'>Arbonia 2050</LinkText>.
				</Paragraph>

				<Subheading>Arbonia 3050 - больше мощности на короткой стене</Subheading>
				<Paragraph>
					Arbonia 3050 имеет третий ряд труб и глубину 105 мм, поэтому при одинаковом числе секций отдает больше тепла. Модель полезна под узким окном, в угловой комнате или в помещении с повышенными теплопотерями, где длинный 2050 физически не помещается. Она выглядит плотнее и сильнее выступает в комнату, что нужно заранее проверить относительно штор, мебели и прохода. Можно конечно взять еще более длинный 2050, но это решение работает только при свободной ширине и правильном подключении. Актуальные складские варианты собраны на странице <LinkText href='/models/3050'>Arbonia 3050</LinkText>.
				</Paragraph>

				<Box textAlign='center' marginY='30px'>
					<img src='/images/models/2050-0.jpg' alt='Сравнение двухтрубчатого Arbonia 2050 и трехтрубчатого Arbonia 3050' style={{ maxWidth: '100%', height: 'auto' }} width={760} />
				</Box>

				<SectionHeading>Мощность Arbonia 2050 и 3050 без путаницы в ΔT</SectionHeading>
				<Paragraph>
					В технических таблицах одна и та же секция может иметь разные цифры мощности, потому что они рассчитаны для разных температурных режимов. Для европейского режима 75/65/20, то есть при ΔT=50, Arbonia указывает 39 Вт для 2050 и 53 Вт для 3050. В карточках складской программы проекта используется более горячий режим ΔT=60, где значения составляют 49 и 68 Вт соответственно. Оба набора корректны в своих условиях, но смешивать 49 Вт одной модели и 53 Вт другой нельзя. Подробно принцип разобран в статье <LinkText href='/articles/delta-t-teplootdacha'>о теплоотдаче и ΔT</LinkText>.
				</Paragraph>

				<Paragraph>
					Разница между моделями остается заметной при любом из этих режимов: одна секция 3050 дает примерно на 36% больше при ΔT=50 и примерно на 39% больше при ΔT=60. Это не означает, что трехтрубчатая модель всегда лучше, потому что покупателю нужна мощность всего прибора, а не рекорд одной секции. Если рассчитанный 2050 помещается под окно и не конфликтует с мебелью, дополнительная глубина может быть просто не нужна. Если длина стены ограничена, переход на 3050 становится рациональнее, чем попытка поставить слишком короткий 2050 с дефицитом мощности. Сначала определяют теплопотери и реальный режим системы, а затем считают секции.
				</Paragraph>

				<Subheading>Пример для нагрузки 1000 Вт</Subheading>
				<Paragraph>
					Возьмем условную комнату, которой требуется 1000 Вт именно при ΔT=60. Для Arbonia 2050 расчет дает 1000 / 49 = 20,4, поэтому нужно не менее 21 секции с суммарными 1029 Вт. Для Arbonia 3050 получается 1000 / 68 = 14,7, поэтому достаточно 15 секций с суммарными 1020 Вт. При стандартном шаге секций такие приборы имеют длину примерно 97 и 70 см, то есть трехтрубчатая модель экономит около 27 см стены, но выступает на 40 мм дальше. Это наглядный пример компромисса, а не готовый расчет для любой комнаты: при другом ΔT и других теплопотерях числа изменятся.
				</Paragraph>

				<SectionHeading>Глубина, шторы и мебель</SectionHeading>
				<Paragraph>
					Глубину часто замечают только после монтажа, когда штора ложится на корпус или дверца шкафа начинает задевать термоголовку. Указанные 65 и 105 мм описывают сам радиатор, а фактическое расстояние от стены до передней кромки будет больше из-за кронштейнов и монтажного зазора. Для 2050 на практике разумно закладывать ориентировочно 90-100 мм полного вылета, но точную цифру нужно брать из схемы выбранного крепления. Для 3050 к сопоставимому зазору добавляется более глубокий корпус, поэтому он требует еще более внимательного плана мебели. Фронтальная фотография ниши и замер от чистовой стены до края подоконника обычно сразу показывают, насколько критичны эти 40 мм.
				</Paragraph>

				<Paragraph>
					В комнате с широким подоконником более глубокий 3050 часто полностью остается в его проекции и визуально не мешает. В узком проходе тонкий 2050 может быть комфортнее, даже если придется занять большую часть стены. Плотная штора не должна постоянно лежать на термоголовке и перекрывать движение воздуха, поэтому длину карниза и положение текстиля планируют одновременно с радиатором. Как альтернатива подоконной модели можно рассмотреть вертикальный прибор на простенке, но это меняет распределение тепла около окна. Общий выбор места разобран в материале <LinkText href='/articles/radiatory-arbonia-pod-okno'>о радиаторах Arbonia под окно</LinkText>.
				</Paragraph>

				<SectionHeading>Подключение и замена старого прибора</SectionHeading>
				<Paragraph>
					При стандартном боковом подключении обе модели высотой 500 мм имеют межосевое расстояние 430 мм, поэтому смена числа труб не решает задачу старых выводов на 500 мм. Если нужно сохранить именно межосевое 500 мм, обычно рассматривают модели высотой 570 мм - например, Arbonia 2057 или 3057 - и отдельно проверяют всю геометрию. Для нового ремонта обе модели доступны с боковыми и нижними вариантами подключения, но сторону подачи, арматуру и координаты труб согласуют до заказа. Нижний узел не уменьшает глубину корпуса и требует места под радиатором. Детальные схемы собраны в статьях про <LinkText href='/articles/connections'>подключение Arbonia</LinkText> и <LinkText href='/articles/mezhosevoe-rasstoyanie-500-mm-arbonia'>межосевое расстояние 500 мм</LinkText>.
				</Paragraph>

				<SectionHeading>Какой вариант выбрать в реальном интерьере</SectionHeading>
				<Paragraph>
					Представьте кухню площадью 14 м2 с длинным окном, хорошим утеплением и столом рядом с радиатором. Если расчетная нагрузка помещается в доступную длину, Arbonia 2050 оставит больше пространства у стола и будет выглядеть легче. В угловой гостиной с двумя наружными стенами ситуация меняется: теплопотери выше, а часть стены занята дверью на балкон, поэтому 3050 помогает собрать нужную мощность короче. Для спальни с узким проходом можно выбрать 2050 и увеличить длину, если окно это позволяет. Ни один из вариантов нельзя назвать универсальным победителем - решающим становится ограничение конкретной комнаты.
				</Paragraph>

				<Paragraph>
					После выбора конструкции можно перейти к цвету и подключению, не опасаясь, что дизайн подменит расчет. Белый RAL 9016 делает глубокий 3050 визуально спокойнее, а темный цвет сильнее подчеркивает его объем. У тонкого 2050 темное покрытие создает более легкую графическую линию, особенно под широким окном. Для нестандартной стены доступна покраска, но сначала нужно подтвердить, что нужные секции и подключение существуют в выбранной комплектации. Практический алгоритм оттенка есть в гиде <LinkText href='/articles/kak-vybrat-cvet-radiatora-pod-interer'>как выбрать цвет радиатора Arbonia</LinkText>.
				</Paragraph>

				<SectionHeading>Ошибки при выборе между 2050 и 3050</SectionHeading>
				<Paragraph>
					Покупатель часто видит одинаковую высоту 500 мм и решает, что модели отличаются только внешним видом. На самом деле число труб одновременно меняет глубину, мощность, требуемое число секций и итоговую длину прибора. Еще одна типичная ошибка - сравнить паспортные значения при разных ΔT и получить ложное преимущество одной модели. До заказа полезно собрать все ограничения в одном месте и проверить их как единую систему. Особенно часто к переделке приводят следующие решения:
				</Paragraph>
				<Box component='ul' sx={{ pl: 3, mt: 1 }}>
					<li>выбрать 2050 только потому, что он тоньше, не проверив достаточную длину;</li>
					<li>выбрать 3050 только по мощности, не измерив проход и глубину подоконника;</li>
					<li>считать секции по 100 Вт на м2 без учета теплопотерь и температурного режима;</li>
					<li>смешать мощность при ΔT=50 и ΔT=60 в одном сравнении;</li>
					<li>не добавить к глубине корпуса кронштейн, зазор до стены и арматуру;</li>
					<li>ожидать межосевое 500 мм от модели высотой 500 мм.</li>
				</Box>

				<SectionHeading>Частые вопросы</SectionHeading>
				{faqItems.map(item => (
					<Box key={item.question} marginTop='24px'>
						<Typography component='h3' variant='h6' sx={{ fontSize: '17px' }}>{item.question}</Typography>
						<Paragraph marginTop='8px'>{item.answer}</Paragraph>
					</Box>
				))}

				<Box marginTop='52px' padding='25px' sx={{ backgroundColor: '#f6f6f6', border: '1px solid #e5e5e5' }}>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs={12} md={8}>
							<Typography component='h2' variant='h5'>Получить расчет Arbonia 2050 и 3050</Typography>
							<Paragraph marginTop='10px'>
								Пришлите размеры ниши, фотографию стены и труб, площадь, высоту потолка и температурный режим системы, если он известен. Мы посчитаем обе модели при одинаковом ΔT, покажем число секций, длину и полный вылет от стены. В результате будет видно, стоит ли экономить глубину с 2050 или длину стены с 3050. Одновременно проверим складское подключение, цвет и монтажные ограничения.
							</Paragraph>
						</Grid>
						<Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
							<a href='/request' style={{ textDecoration: 'none' }}><Button variant='contained' color='secondary'>Получить расчет</Button></a>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}

export default ArticlePage
