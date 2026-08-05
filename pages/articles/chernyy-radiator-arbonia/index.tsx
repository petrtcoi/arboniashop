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
const slug = 'chernyy-radiator-arbonia'
const keyword = 'черные радиаторы Arbonia'
const h1 = 'Черные радиаторы Arbonia - выбор цвета и модели'
const metaTitle = 'Черные радиаторы Arbonia - RAL 9005 или SF-3'
const metaDescription =
	'Черные радиаторы Arbonia: чем отличаются RAL 9005, RAL 7016 и SF-3, какие модели доступны и как подобрать цвет, подключение и мощность для интерьера.'

const tableStyle: React.CSSProperties = {
	width: '100%',
	borderCollapse: 'collapse',
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

const Paragraph = ({ children, marginTop = '14px' }: { children: React.ReactNode; marginTop?: string }) => (
	<Typography
		component='p'
		marginTop={marginTop}
		sx={{ ...styles.standardText }}
	>
		{children}
	</Typography>
)

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
	<Typography
		component='h2'
		variant='h5'
		marginTop='44px'
		marginBottom='12px'
	>
		{children}
	</Typography>
)

const Subheading = ({ children }: { children: React.ReactNode }) => (
	<Typography
		component='h3'
		variant='h6'
		marginTop='30px'
		marginBottom='10px'
	>
		{children}
	</Typography>
)

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: h1,
		description: metaDescription,
		image: `${siteUrl}/images/models/2180-9005.jpeg`,
		datePublished: '2026-08-05',
		dateModified: '2026-08-05',
		mainEntityOfPage: `${siteUrl}/articles/${slug}`,
		about: keyword,
		keywords: [keyword, 'черный радиатор', 'антрацитовый радиатор', 'RAL 9005', 'SF-3 Anthrazit metallic'],
		author: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
		publisher: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
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

	return (
		<Box>
			<Head>
				<link
					rel='canonical'
					href={`${siteUrl}/articles/${slug}`}
				/>
			</Head>
			<Script
				id='chernyy-radiator-arbonia-article-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Script
				id='chernyy-radiator-arbonia-breadcrumb-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			<PageHeader
				title={metaTitle}
				description={metaDescription}
				type='article'
				image='/images/models/2180-9005.jpeg'
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{ title: h1, link: `/articles/${slug}` },
				]}
			/>

			<Box
				component='article'
				sx={{ ...global.pagePadding, maxWidth: '920px', margin: 'auto', ...styles.standardText }}
				marginTop='20px'
			>
				<Typography
					component='h1'
					variant='h4'
					marginTop='10px'
					marginBottom='24px'
				>
					{h1}
				</Typography>

				<Paragraph marginTop='0'>
					Черные радиаторы Arbonia выбирают, когда отопительный прибор должен стать частью интерьера, а не просто
					оставаться нейтральной деталью у стены. Для такого эффекта важен не только сам темный цвет, но и его оттенок:
					глубокий RAL 9005 выглядит почти графичным, RAL 7016 дает спокойный антрацитовый тон, а SF-3 добавляет
					металлизированную глубину. Выбирать цвет нужно вместе с высотой модели, освещением, арматурой и способом
					подключения, потому что темная вертикальная конструкция всегда заметнее белой. Практичный путь - сначала
					определить роль радиатора в комнате, затем сравнить доступные оттенки и только после этого подобрать мощность.
					Если нужен вариант под конкретный интерьер, отправьте фотографии и размеры на
					<LinkText href='/request'> подбор ArboniaShop</LinkText>.
				</Paragraph>

				<SectionHeading>Быстрый выбор темного оттенка</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Задача в интерьере</th>
								<th style={headCellStyle}>Что рассматривать</th>
								<th style={headCellStyle}>Почему</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={cellStyle}>Нужен четкий контраст на светлой стене</td>
								<td style={cellStyle}>RAL 9005 matt</td>
								<td style={cellStyle}>Матовый черный дает самую заметную графику без лишних бликов.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Интерьер с серым камнем, бетоном или темным деревом</td>
								<td style={cellStyle}>RAL 7016 или SF-3</td>
								<td style={cellStyle}>Антрацит читается мягче черного и легче связывается с серыми материалами.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Радиатор должен быть выразительным, но не тяжелым</td>
								<td style={cellStyle}>SF-3 Anthrazit metallic</td>
								<td style={cellStyle}>Металлизированная поверхность меняется в разном свете и добавляет глубину.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Низкий радиатор под окном</td>
								<td style={cellStyle}>RAL 9005 у Arbonia 3030</td>
								<td style={cellStyle}>Темная горизонтальная линия подчеркивает окно и не требует высокого акцента.</td>
							</tr>
						</tbody>
					</table>
				</Box>

				<SectionHeading>Какие черные радиаторы Arbonia есть в палитре</SectionHeading>
				<Paragraph>
					Темные радиаторы Arbonia не ограничиваются одним универсальным черным цветом, поэтому их не стоит выбирать
					только по маленькому образцу в каталоге. RAL 9005 matt - это глубокий матовый черный, который дает чистый
					контраст и почти не отражает свет. RAL 7016 относится к темным серо-антрацитовым оттенкам и воспринимается
					мягче, особенно рядом с камнем, деревом и серыми стенами. SF-3 Anthrazit metallic также не является просто
					черным: металлизированная поверхность делает его объемнее и заметно меняет впечатление при дневном и вечернем
					освещении. До заказа полезно посмотреть фотографию нужной модели и решить, должен ли радиатор раствориться в
					палитре или стать контрастной вертикальной линией.
				</Paragraph>

				<Subheading>RAL 9005 matt - когда нужен именно черный</Subheading>
				<Paragraph>
					Матовый RAL 9005 подходит для интерьеров, где уже есть темные рамы, светильники, дверная фурнитура или
					черные детали мебели. Он дает сильный контраст на светлой стене и хорошо работает как самостоятельный акцент,
					поэтому особенно заметен у вертикальных моделей высотой 180 см. Матовая поверхность не создает ярких бликов,
					но требует аккуратного сочетания с термоголовкой, вентилями и подводкой, иначе инженерные детали могут
					выглядеть случайно. В маленькой или плохо освещенной комнате такой цвет лучше использовать там, где радиатор
					поддержан другими темными элементами, а не остается единственным массивным пятном. Для белых стен и строгого
					минимализма RAL 9005 часто выглядит убедительнее, чем промежуточный серый тон.
				</Paragraph>

				<Subheading>RAL 7016 и SF-3 - антрацитовая альтернатива</Subheading>
				<Paragraph>
					RAL 7016 подойдет, если нужен темный радиатор без жесткого контраста чистого черного цвета. Этот оттенок
					сохраняет графичность, но лучше сочетается с серой штукатуркой, натуральным деревом, бетоном и матовым
					металлом. SF-3 отличается от обычного антрацита металлизированным эффектом, поэтому его поверхность может
					казаться светлее или глубже в зависимости от направления света. В интерьере с кирпичом, камнем или сложной
					фактурной стеной такая подвижность цвета выглядит органично, а на совсем гладкой светлой стене она превращает
					радиатор в заметный дизайнерский объект. Если выбор идет только между белым и SF-3 для модели 3180, посмотрите
					отдельное <LinkText href='/articles/arbonia-3180-ral-9016-vs-anthracite'>сравнение RAL 9016 и Anthracite
					Metallic</LinkText>.
				</Paragraph>

				<Box textAlign='center' marginY='30px'>
					<img
						src='/images/models/2180-9005.jpeg'
						alt='Черный радиатор Arbonia 2180 в цвете RAL 9005 matt'
						style={{ maxWidth: '100%', height: 'auto' }}
						width={600}
					/>
				</Box>

				<SectionHeading>Как выбрать модель для темного радиатора</SectionHeading>
				<Paragraph>
					Темный цвет не меняет паспортную мощность, рабочее давление или способ работы радиатора, но усиливает его
					визуальный масштаб. Вертикальные модели 2180 и 3180 занимают немного места по ширине, зато становятся
					заметной линией от пола почти до потолка, поэтому их чаще выбирают для гостиной, прихожей или узкого
					простенка. Низкая <LinkText href='/models/3030'>Arbonia 3030</LinkText> в RAL 9005, напротив, работает как
					горизонтальная графика под окном и хорошо подходит для помещений с низким подоконником. Если черный цвет нужен
					только как завершающий слой в уже
					подобранной системе, сначала определите размеры и требуемую мощность, а затем выбирайте оттенок. Вопросы
					расчета и температуры теплоносителя разобраны в статье
					<LinkText href='/articles/delta-t-teplootdacha'> о теплоотдаче радиатора и ΔT</LinkText>.
				</Paragraph>

				<Subheading>Arbonia 2180 и 3180 для вертикального акцента</Subheading>
				<Paragraph>
					Arbonia 2180 - более тонкая 2-трубчатая вертикальная модель глубиной 65 мм, поэтому она помогает сохранить
					легкость на узкой стене. Arbonia 3180 глубже и мощнее при сопоставимой высоте, а темный цвет сильнее
					подчеркивает ее объем и ритм труб. Обе модели стоит рассматривать вместе с доступной длиной стены, местом
					подключения и расчетной нагрузкой, а не только как декоративный объект. Полная складская подборка доступна в
					разделе <LinkText href='/catalog/high-models'>высоких радиаторов Arbonia</LinkText>, а конкретные варианты
					можно посмотреть на страницах <LinkText href='/models/2180'>2180</LinkText> и{' '}
					<LinkText href='/models/3180'>3180</LinkText>. Для темной модели важно оставить свободный фон и не
					перегружать соседнюю стену крупной мебелью, иначе дизайнерский акцент превратится в тяжелое пятно.
				</Paragraph>

				<Subheading>Arbonia 3030 под низкое окно</Subheading>
				<Paragraph>
					Arbonia 3030 высотой 300 мм позволяет сделать темный радиатор частью линии подоконника, а не центральным
					объектом комнаты. В RAL 9005 matt модель хорошо поддерживает черные оконные рамы, плинтусы или нижнюю часть
					кухонного гарнитура, особенно когда под окном достаточно свободной ширины. При этом компактная высота не
					отменяет расчет: если мощность ограничена длиной ниши, может понадобиться больше секций или другая глубина
					прибора. Перед заказом нужно проверить монтажные зазоры и тип подводки, потому что нижний узел занимает часть
					высоты под радиатором. О выборе низкой модели, доступной высоте и подключении читайте в материале
					<LinkText href='/articles/radiator-pod-nizkiy-podokonnik'> про радиатор под низкий подоконник</LinkText>.
				</Paragraph>

				<SectionHeading>Освещение, стена и арматура</SectionHeading>
				<Paragraph>
					Темный радиатор воспринимается не изолированно, а вместе со стеной, светом и всеми видимыми деталями
					подключения. На теплой белой или светло-серой стене RAL 9005 выглядит наиболее контрастно, а на темно-сером
					фоне он может почти исчезнуть и оставить в интерьере только фактуру труб. SF-3 и RAL 7016 лучше раскрываются
					при боковом свете от окна, бра или трековых светильников, потому что тогда становятся заметны оттенок и
					фактура покрытия. Термоголовку, вентиль и трубу лучше продумать заранее: белая арматура рядом с черным
					радиатором станет отдельным контрастом, а темная соберет композицию в единый объект. Если требуется точное
					совпадение с цветом стены или мебели, используйте <LinkText href='/coloring'>покраску по каталогу RAL</LinkText>
					и согласуйте оттенок до изготовления или заказа.
				</Paragraph>

				<Box textAlign='center' marginY='30px'>
					<img
						src='/images/articles/sf-3-0.jpeg'
						alt='Радиатор Arbonia в цвете SF-3 Anthrazit metallic'
						style={{ maxWidth: '100%', height: 'auto', width: '600px' }}
					/>
				</Box>

				<SectionHeading>Как избежать ошибки с темным цветом</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Ошибка</th>
								<th style={headCellStyle}>Что происходит</th>
								<th style={headCellStyle}>Как сделать правильно</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={cellStyle}>Выбрать черный без учета света</td>
								<td style={cellStyle}>Радиатор выглядит тяжелее, чем ожидалось, и поглощает детали стены.</td>
								<td style={cellStyle}>Сравнить образец с отделкой при дневном и вечернем освещении.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Подобрать цвет раньше мощности</td>
								<td style={cellStyle}>Красивый прибор не помещается по длине или не покрывает теплопотери.</td>
								<td style={cellStyle}>Сначала рассчитать габариты и теплоотдачу, затем согласовать покрытие.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Оставить арматуру случайного цвета</td>
								<td style={cellStyle}>Видимые трубы и термоголовка разбивают цельную композицию.</td>
								<td style={cellStyle}>Подобрать арматуру и выводы труб одновременно с радиатором.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Считать SF-3 и RAL 9005 одинаковыми</td>
								<td style={cellStyle}>Ожидать матовый черный эффект от металлизированного антрацита.</td>
								<td style={cellStyle}>Смотреть фото конкретной модели и учитывать фактуру, а не только название цвета.</td>
							</tr>
						</tbody>
					</table>
				</Box>

				<SectionHeading>Подбор черного радиатора под помещение</SectionHeading>
				<Paragraph>
					Чтобы подобрать черный или антрацитовый радиатор без компромиссов, нужны размеры помещения, фото стены и
					данные о системе отопления. Для замены старой батареи также важны расположение труб, межосевое расстояние и
					схема подключения, а для нового ремонта - место будущей мебели и тип подводки. По этим данным можно
					одновременно проверить мощность, глубину, число секций и доступность нужного цвета, а не решать каждый вопрос
					отдельно. Если интерьер еще не завершен, темный оттенок лучше согласовать с образцами пола, стен и арматуры,
					потому что на экране его восприятие всегда условно. Отправьте параметры через
					<LinkText href='/request'> форму заявки</LinkText>, и мы предложим модели Arbonia, которые будут работать
					технически и выглядеть цельно в интерьере.
				</Paragraph>
			</Box>
		</Box>
	)
}

export default ArticlePage
