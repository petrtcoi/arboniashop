import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import { NextPage } from 'next'
import Script from 'next/script'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

const siteUrl = 'https://arboniashop.ru'

const metaTitle = 'Трубчатые радиаторы Arbonia: плюсы, минусы и как выбрать модель'
const metaDescription =
	'Разбираем, чем хороши трубчатые радиаторы Arbonia, какие есть минусы и как выбрать высоту, число труб, подключение, цвет и модель под окно, панорамное остекление или узкий простенок. Поможем рассчитать мощность и подобрать радиатор под вашу задачу.'

type LinkItem = { label: string; href: string }

const quickPickRows: { situation: string; criteria: string; links: LinkItem[] }[] = [
	{
		situation: 'Радиатор под обычное окно',
		criteria: 'высота 50-60 см, 2-3 трубки',
		links: [
			{ label: 'радиаторы под окно', href: '/catalog/standard' },
			{ label: '2050', href: '/models/2050' },
			{ label: '3050', href: '/models/3050' },
			{ label: '3057', href: '/models/3057' },
		],
	},
	{
		situation: 'Низкий подоконник',
		criteria: 'высота до 40 см',
		links: [
			{ label: 'низкие радиаторы', href: '/catalog/low-models' },
			{ label: '3030', href: '/models/3030' },
		],
	},
	{
		situation: 'Узкий простенок или мало места по ширине',
		criteria: 'вертикальная модель высотой 180 см',
		links: [
			{ label: 'высокие радиаторы', href: '/catalog/high-models' },
			{ label: '2180', href: '/models/2180' },
			{ label: '3180', href: '/models/3180' },
		],
	},
	{
		situation: 'Нужен белый радиатор в наличии',
		criteria: 'цвет RAL 9016',
		links: [{ label: 'RAL 9016 в наличии', href: '/catalog/ral9016' }],
	},
	{
		situation: 'Нужен цвет под интерьер',
		criteria: 'покраска в любой RAL',
		links: [{ label: 'покраска в RAL', href: '/coloring' }],
	},
	{
		situation: 'Непонятно, сколько секций нужно',
		criteria: 'расчёт мощности',
		links: [
			{ label: 'заявка на расчёт', href: '/request' },
			{ label: 'как считать мощность', href: '/articles/calculate' },
		],
	},
]

const modelRows: { model: string; when: string; href: string }[] = [
	{ model: 'Arbonia 2180', when: 'высокий узкий радиатор для простенка или панорамного окна', href: '/models/2180' },
	{ model: 'Arbonia 3180', when: 'высокий радиатор с большей мощностью при той же ширине', href: '/models/3180' },
	{ model: 'Arbonia 3030', when: 'низкий радиатор под низкий подоконник', href: '/models/3030' },
	{ model: 'Arbonia 2050', when: 'стандартная высота, 2-трубчатый вариант под окно', href: '/models/2050' },
	{ model: 'Arbonia 3050', when: 'стандартная высота, 3-трубчатый вариант с большей мощностью', href: '/models/3050' },
	{ model: 'Arbonia 3057', when: 'замена старых батарей, высота около 57 см', href: '/models/3057' },
]

const faqItems: { question: string; answer: string }[] = [
	{
		question: 'Чем трубчатые радиаторы отличаются от обычных батарей?',
		answer:
			'Конструкцией и внешним видом: вместо секций сложной формы у трубчатого радиатора несколько прямых стальных трубок между верхним и нижним коллектором. У Arbonia дополнительно можно отдельно выбирать высоту, глубину, число труб и цвет, а не покупать готовую неизменную модель.',
	},
	{
		question: 'Подходят ли трубчатые радиаторы Arbonia для квартиры?',
		answer:
			'Да, но перед покупкой нужно учитывать систему отопления, рабочее давление, тип подключения и требуемую мощность конкретной комнаты - выбор нельзя делать только по внешнему виду.',
	},
	{
		question: 'Что выбрать: 2-трубчатый или 3-трубчатый радиатор?',
		answer:
			'2-трубчатый радиатор компактнее по глубине, поэтому его проще вписать под узкий подоконник. 3-трубчатый обычно даёт заметно больше мощности при той же высоте и длине.',
	},
	{
		question: 'Можно ли поставить трубчатый радиатор вместо старой чугунной батареи?',
		answer:
			'Да, но нужно проверить высоту, межосевое расстояние, тип подключения и тепловую мощность старого прибора - совпадение по ширине не гарантирует такую же теплоотдачу.',
	},
	{
		question: 'Что лучше под панорамное окно: низкий или вертикальный радиатор?',
		answer:
			'Зависит от планировки. Низкий радиатор ставят вдоль подоконника, если он есть. Вертикальный - на свободный простенок рядом, если под самим остеклением места нет.',
	},
	{
		question: 'Можно ли заказать Arbonia в цвет стены?',
		answer:
			'Да. Есть складской белый RAL 9016, антрацит и другие тёмные оттенки, а также покраска в любой цвет по RAL под конкретный интерьер.',
	},
	{
		question: 'Как понять, сколько секций нужно?',
		answer:
			'Нужен расчёт по площади и высоте потолков помещения, теплопотерям, температурному режиму системы отопления и месту установки радиатора. Точнее всего - прислать эти данные на расчёт.',
	},
	{
		question: 'Чем трубчатые радиаторы Arbonia отличаются от алюминиевых и биметаллических?',
		answer:
			'Алюминиевые и биметаллические радиаторы собираются из стандартных секций фиксированного шага. Стальной трубчатый радиатор Arbonia проектируется под конкретную высоту, глубину и число труб, поэтому его проще точно подобрать под задачу и интерьер.',
	},
]

const tableStyle: React.CSSProperties = {
	width: '100%',
	borderCollapse: 'collapse',
	marginTop: '12px',
	fontSize: '14px',
}

const cellStyle: React.CSSProperties = {
	border: '1px solid #dddddd',
	padding: '10px 12px',
	verticalAlign: 'top',
}

const headCellStyle: React.CSSProperties = {
	...cellStyle,
	background: '#f7f7f7',
	fontWeight: 700,
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

const LinkList = ({ links }: { links: LinkItem[] }) => (
	<>
		{links.map((link, index) => (
			<React.Fragment key={link.href}>
				<LinkText href={link.href}>{link.label}</LinkText>
				{index < links.length - 1 ? ', ' : ''}
			</React.Fragment>
		))}
	</>
)

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: metaTitle,
		description: metaDescription,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${siteUrl}/articles/column-radiators`,
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

	return (
		<Box>
			<Head>
				<link
					rel='canonical'
					href={`${siteUrl}/articles/column-radiators`}
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
				title={metaTitle}
				description={metaDescription}
				type='article'
				image='/images/sliders/slide-5.jpeg'
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Трубчатые радиаторы Arbonia',
						link: '/articles/column-radiators',
					},
				]}
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
					{metaTitle}
				</Typography>

				<Typography
					component='p'
					marginBottom='20px'
					sx={{ ...styles.standardText }}
				>
					Трубчатые радиаторы Arbonia выбирают, когда нужен не просто источник тепла, а аккуратный стальной радиатор
					под интерьер, замену старых батарей или нестандартную зону: низкий подоконник, панорамное окно, узкий
					простенок. Это не абстрактный класс отопительных приборов, а конкретный товар -{' '}
					<LinkText href='/'>трубчатые радиаторы Arbonia</LinkText> с официальной гарантией и складским наличием в
					Москве и Санкт-Петербурге. Главное при выборе - определить высоту, число труб, подключение и нужную
					мощность. Если не уверены в секциях и модели, <LinkText href='/request'>оставьте заявку на расчёт</LinkText> -
					подберём радиатор Arbonia под размеры помещения и систему отопления.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Быстрый выбор
				</Typography>
				<Box sx={{ overflowX: 'auto', marginTop: '12px' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Задача</th>
								<th style={headCellStyle}>Что смотреть</th>
								<th style={headCellStyle}>Куда перейти</th>
							</tr>
						</thead>
						<tbody>
							{quickPickRows.map(row => (
								<tr key={row.situation}>
									<td style={cellStyle}>{row.situation}</td>
									<td style={cellStyle}>{row.criteria}</td>
									<td style={cellStyle}>
										<LinkList links={row.links} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Что такое трубчатый радиатор
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Трубчатый радиатор устроен иначе, чем секционная батарея: несколько вертикальных стальных трубок соединены
					сверху и снизу общим коллектором, через который проходит теплоноситель. Тепло отдаётся сразу двумя
					способами - конвекцией, когда нагретый воздух поднимается вдоль трубок, и излучением от металлической
					поверхности, поэтому прогрев получается более равномерным. Подробнее о том, как это работает физически,
					можно почитать в статье про{' '}
					<LinkText href='/articles/convection-radiaton-arbonia'>
						конвекцию и тепловое излучение радиаторов Arbonia
					</LinkText>
					.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					У трубчатых радиаторов Arbonia можно отдельно выбирать высоту, глубину, число труб, цвет и тип подключения -
					это не декоративный элемент, а полноценный рабочий прибор отопления для квартиры и частного дома. Каждый
					стальной радиатор Arbonia сопровождается экологическим сертификатом{' '}
					<LinkText href='/articles/epd'>EPD</LinkText> и заводской гарантией, а более подробный разбор именно
					преимуществ и недостатков бренда - в статье{' '}
					<LinkText href='/articles/arbonia-radiators'>
						трубчатые радиаторы Arbonia: преимущества и недостатки
					</LinkText>
					.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Плюсы трубчатых радиаторов Arbonia
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Аккуратный внешний вид - трубчатый радиатор не выглядит как техническая батарея и вписывается в
							современный интерьер.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Много вариантов высоты - от низких моделей до вертикальных, поэтому радиатор можно подобрать почти
							под любую стену и подоконник.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Разная глубина и число труб - от 2 до 6, что позволяет точно попасть в нужную мощность, не увеличивая
							длину радиатора.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Удобство уборки - между прямыми трубками пыль убирать проще, чем между секциями сложной формы.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Выбор цвета -{' '}
							<LinkText href='/catalog/ral9016'>белый RAL 9016 в наличии на складе</LinkText>, антрацит и{' '}
							<LinkText href='/coloring'>покраска радиаторов Arbonia в цвет RAL</LinkText> под заказ.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Подходит для замены старых батарей - особенно{' '}
							<LinkText href='/catalog/standard'>радиаторы Arbonia под окно</LinkText> высотой 50-60 см, которые
							встают в привычную нишу.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Решение для сложных зон - панорамные окна, узкие простенки, низкие подоконники, где обычная батарея
							не помещается или мешает.
						</Typography>
					</li>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Минусы трубчатых радиаторов
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Цена выше, чем у простых биметаллических или панельных радиаторов.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Нужен расчёт мощности - нельзя выбирать модель только по внешнему виду.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Для высоких моделей важны вес, крепление и тип стены.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							Для низких моделей может потребоваться больше секций по длине.
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							При замене старых батарей нужно проверить межосевое расстояние и тип подключения.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Эти ограничения обычно решаются подбором модели, числа секций и подключения. Поэтому перед заказом лучше{' '}
					<LinkText href='/request'>прислать размеры помещения</LinkText>, окна или ниши и фото существующего
					подключения - менеджер рассчитает мощность и предложит подходящие варианты Arbonia.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Как выбрать трубчатый радиатор Arbonia
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Общий алгоритм подбора подробно разобран в статье{' '}
					<LinkText href='/articles/arbonia-kak-vybrat-trubchatyj-radiator'>
						как выбрать трубчатый радиатор Arbonia
					</LinkText>
					. Здесь - короткая версия для этой статьи: сначала определяем высоту и число труб, затем подключение, и
					только в конце - цвет.
				</Typography>

				<Typography
					component='h3'
					variant='h6'
					marginTop='28px'
					marginBottom='8px'
				>
					По высоте
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Низкие модели (до 40 см) ставят под низкие подоконники, панорамные и французские окна, где нет места для
					радиатора обычной высоты - смотрите <LinkText href='/catalog/low-models'>низкие радиаторы Arbonia</LinkText>
					, например модель <LinkText href='/models/3030'>Arbonia 3030</LinkText>. Стандартные модели (50-60 см) -
					самый частый случай при замене старой батареи и установке под обычное окно:{' '}
					<LinkText href='/catalog/standard'>радиаторы Arbonia под окно</LinkText>, модели{' '}
					<LinkText href='/models/2050'>2050</LinkText>, <LinkText href='/models/3050'>3050</LinkText> и{' '}
					<LinkText href='/models/3057'>3057</LinkText>. Высокие модели (от 150 см) выручают, когда под окном места
					нет вовсе, простенок узкий, а радиатор нужно поставить вертикально - в прихожей, гостиной или рядом с
					панорамным остеклением: <LinkText href='/catalog/high-models'>высокие радиаторы Arbonia</LinkText>, модели{' '}
					<LinkText href='/models/2180'>2180</LinkText> и <LinkText href='/models/3180'>3180</LinkText>.
				</Typography>
				<Box textAlign='center'>
					<img
						src='/images/models/3030-1.jpeg'
						alt='Низкий трубчатый радиатор Arbonia с нижним подключением'
						width={480}
						height={480}
						style={{ maxWidth: '100%', height: 'auto', marginTop: '16px' }}
					/>
				</Box>

				<Typography
					component='h3'
					variant='h6'
					marginTop='28px'
					marginBottom='8px'
				>
					По числу труб
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Число труб в сечении определяет, сколько тепла даёт радиатор при той же высоте и длине. 2-трубчатые модели
					самые компактные по глубине, их проще вписать под узкий подоконник. 3-трубчатые дают заметно больше
					мощности при похожих размерах и чаще выбираются, если в комнате повышенные теплопотери. 4-6-трубчатые нужны
					для высокой теплоотдачи на ограниченной длине стены, но тогда важно заранее учесть возросшую глубину
					радиатора. Подробное сравнение - в статье{' '}
					<LinkText href='/articles/2-3-columns'>2-трубчатые и 3-трубчатые радиаторы Arbonia: в чём отличия</LinkText>
					.
				</Typography>
				<Box textAlign='center'>
					<img
						src='/images/models/5-columns.jpeg'
						alt='Многотрубчатый радиатор Arbonia с повышенной теплоотдачей'
						width={480}
						height={480}
						style={{ maxWidth: '100%', height: 'auto', marginTop: '16px' }}
					/>
				</Box>

				<Typography
					component='h3'
					variant='h6'
					marginTop='28px'
					marginBottom='8px'
				>
					По подключению
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Боковое подключение чаще выбирают при замене старой батареи - оно обычно совпадает с уже существующей
					разводкой труб. Нижнее подключение выглядит аккуратнее, если трубы подведены из пола или из стены, и его
					часто предпочитают в новых проектах. Подбирать тип подключения нужно не только по эстетике, но и по факту -
					какая разводка уже есть в помещении. Подробнее - в статье{' '}
					<LinkText href='/articles/connections'>о подключениях радиаторов Arbonia</LinkText>.
				</Typography>

				<Typography
					component='h3'
					variant='h6'
					marginTop='28px'
					marginBottom='8px'
				>
					По цвету
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Белый RAL 9016 - самый универсальный и складской вариант, подходит под большинство интерьеров:{' '}
					<LinkText href='/catalog/ral9016'>белые радиаторы Arbonia RAL 9016</LinkText>. Антрацит и другие тёмные
					оттенки хорошо смотрятся в современных интерьерах. Если нужно точно попасть в цвет стены, мебели или
					проекта дизайнера, доступна{' '}
					<LinkText href='/coloring'>покраска радиаторов Arbonia в цвет RAL</LinkText>. Больше идей по сочетанию
					цвета радиатора с интерьером - в статье{' '}
					<LinkText href='/articles/tsvet-radiatorov-v-interiere'>цвет радиаторов в интерьере</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Какие модели Arbonia посмотреть
				</Typography>
				<Box sx={{ overflowX: 'auto', marginTop: '12px' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Модель</th>
								<th style={headCellStyle}>Когда подходит</th>
								<th style={headCellStyle}>Куда перейти</th>
							</tr>
						</thead>
						<tbody>
							{modelRows.map(row => (
								<tr key={row.model}>
									<td style={cellStyle}>
										<LinkText href={row.href}>{row.model}</LinkText>
									</td>
									<td style={cellStyle}>{row.when}</td>
									<td style={cellStyle}>
										<LinkText href={row.href}>Смотреть модель →</LinkText>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Когда лучше заказать расчёт
				</Typography>
				<div className='cta'>
					Не уверены, какая высота, глубина и сколько секций нужны? Оставьте заявку на расчёт. Пришлите площадь
					помещения, высоту потолков, размеры окна или ниши и фото подключения - мы подберём подходящие модели
					Arbonia, рассчитаем мощность и предложим варианты по наличию, цвету и подключению.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Получить расчёт Arbonia →</div>
					</a>
				</div>

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

				<Typography
					component='h2'
					variant='h5'
					marginTop='20px'
					marginBottom='10px'
				>
					Вывод
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Трубчатый радиатор Arbonia стоит выбирать не по картинке, а по задаче: сначала высота и число труб, затем
					подключение, и только потом - цвет. Для обычного окна подойдут стандартные модели 2050, 3050 или 3057, для
					низкого подоконника - 3030, а для панорамного окна или узкого простенка - вертикальные 2180 и 3180.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если сомневаетесь в выборе, не нужно гадать - пришлите параметры помещения через{' '}
					<LinkText href='/request'>заявку на расчёт</LinkText>, и мы подберём подходящую модель Arbonia, посчитаем
					нужное число секций и предложим варианты по цвету и подключению.
				</Typography>
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
