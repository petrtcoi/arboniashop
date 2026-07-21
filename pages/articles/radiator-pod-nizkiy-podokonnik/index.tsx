import { Box, Button, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { NextPage } from 'next'
import Script from 'next/script'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

const siteUrl = 'https://arboniashop.ru'
const slug = 'radiator-pod-nizkiy-podokonnik'
const keyword = 'радиатор под низкий подоконник'
const h1 = 'Радиатор под низкий подоконник - как выбрать Arbonia'
const metaTitle = 'Радиатор под низкий подоконник - выбор Arbonia'
const metaDescription =
	'Как выбрать радиатор под низкий подоконник: расчет доступной высоты, сравнение Arbonia 2030 и 3030, мощность, подключение и монтажные зазоры.'

const quickPickRows = [
	{
		situation: 'От пола до подоконника около 500 мм',
		pick: 'Arbonia 2030 или 3030 высотой 300 мм',
		reason: 'Остается около 200 мм на верхний и нижний зазоры вместе',
	},
	{
		situation: 'Ниша неглубокая или радиатор не должен выступать',
		pick: 'Arbonia 2030',
		reason: '2-трубчатая модель имеет глубину 65 мм',
	},
	{
		situation: 'Мало места по длине, но нужна большая мощность',
		pick: 'Arbonia 3030',
		reason: '3-трубчатая модель глубиной 105 мм мощнее при той же длине',
	},
	{
		situation: 'Трубы уже подходят сбоку',
		pick: 'Боковое подключение',
		reason: 'Можно сохранить понятную схему и не занимать место узлом снизу',
	},
	{
		situation: 'Трубы выводятся из пола в новом ремонте',
		pick: 'Нижнее подключение 69 ТВВ',
		reason: 'Подводка получается компактной, но ее высоту надо учесть заранее',
	},
]

const faqItems = [
	{
		question: 'Какой высоты должен быть радиатор при подоконнике 50 см?',
		answer:
			'При расстоянии 500 мм от чистового пола до нижней плоскости подоконника обычно рассматривают прибор высотой 300 мм. Оставшиеся 200 мм распределяют между нижним и верхним зазорами с учетом кронштейнов и подключения. Это не универсальный монтажный размер, потому что геометрия подводки и требования проекта отличаются. До заказа нужно зафиксировать чистовой уровень пола и проверить схему с монтажником.',
	},
	{
		question: 'Что выбрать под низкий подоконник - Arbonia 2030 или 3030?',
		answer:
			'Arbonia 2030 выбирают ради глубины 65 мм и более легкого вида, а Arbonia 3030 - ради большей мощности при той же высоте 300 мм. По данным технического каталога производителя, при стандартном режиме 75/65/20 мощность элемента составляет 24 Вт у 2030 и 33 Вт у 3030. Поэтому 3030 требует меньше секций для одной и той же нагрузки. Окончательный выбор зависит от доступной глубины, длины стены и температуры теплоносителя.',
	},
	{
		question: 'Можно ли поставить низкий радиатор вплотную к полу?',
		answer:
			'Ставить прибор вплотную к полу не следует, потому что снизу нужен доступ воздуха и место для уборки. Слишком маленький зазор также усложняет монтаж кронштейнов и нижней подводки. Точный размер задают инструкция, тип крепления и проект отопления, а не только высота корпуса. Перед покупкой полезно нанести на стену контур радиатора вместе с арматурой и трубами.',
	},
	{
		question: 'Как рассчитать число секций низкого радиатора?',
		answer:
			'Сначала определяют расчетную тепловую нагрузку комнаты, затем делят ее на мощность одной секции при реальном температурном режиме. Паспортная мощность при 75/65/20 не равна мощности в низкотемпературной системе, поэтому для теплого пола и конденсационного котла нужен пересчет. Результат округляют вверх и проверяют, помещается ли полученная длина под окном. Если длины не хватает, выбирают более глубокую модель или распределяют нагрузку между двумя приборами.',
	},
	{
		question: 'Боковое или нижнее подключение лучше при малой высоте?',
		answer:
			'Боковое подключение часто дает больше свободы по высоте, потому что под радиатором не нужно размещать весь нижний узел. Нижнее подключение удобно при скрытой разводке из пола и аккуратно выглядит в новом интерьере. Однако трубы, мультифлекс и термовентиль все равно занимают место, которое надо заложить в монтажный габарит. Выбор делают после сопоставления чертежа прибора с фактическим выводом труб.',
	},
]

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

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: h1,
		description: metaDescription,
		image: `${siteUrl}/images/models/3030-0.jpeg`,
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		mainEntityOfPage: `${siteUrl}/articles/${slug}`,
		about: keyword,
		keywords: [keyword, 'низкие радиаторы Arbonia', 'Arbonia 2030', 'Arbonia 3030'],
		author: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
		publisher: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
		citation: 'https://arbonia.hlk.digital/arbonia/prospekte-preislisten/de/anti_pl_roehrenradiator_ch_de.pdf',
		inLanguage: 'ru-RU',
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
				id='radiator-pod-nizkiy-podokonnik-article-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Script
				id='radiator-pod-nizkiy-podokonnik-faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<Script
				id='radiator-pod-nizkiy-podokonnik-breadcrumb-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			<PageHeader
				title={metaTitle}
				description={metaDescription}
				type='article'
				image='/images/models/3030-0.jpeg'
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
					Радиатор под низкий подоконник выбирают по фактическому расстоянию от чистового пола до нижней плоскости
					подоконника, а не только по высоте корпуса. Для ниши около 500 мм практичной отправной точкой служат низкие
					Arbonia 2030 и 3030 высотой 300 мм. Модель 2030 занимает 65 мм в глубину, а 3030 - 105 мм и дает больше тепла
					при той же длине. Из доступной высоты нужно вычесть место для циркуляции воздуха, креплений, арматуры и труб.
					Если этих данных нет, безопаснее сначала сделать замер и <LinkText href='/request'>получить расчет</LinkText>, а
					не выбирать число секций по площади на глаз.
				</Paragraph>

				<SectionHeading>Быстрый выбор</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Ситуация</th>
								<th style={headCellStyle}>Что рассматривать</th>
								<th style={headCellStyle}>Логика выбора</th>
							</tr>
						</thead>
						<tbody>
							{quickPickRows.map(row => (
								<tr key={row.situation}>
									<td style={cellStyle}>{row.situation}</td>
									<td style={cellStyle}>{row.pick}</td>
									<td style={cellStyle}>{row.reason}</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>

				<SectionHeading>Как выбрать радиатор под низкий подоконник по размерам</SectionHeading>
				<Paragraph marginTop='0'>
					Первый замер - расстояние от чистового пола до нижней плоскости подоконника в нескольких точках, потому что
					пол и подоконник могут быть не параллельны. Если ремонт не завершен, к уровню пола надо прибавить толщину
					покрытия, подложки и клея, иначе готовая ниша окажется ниже расчета. Затем из полученного размера вычитают
					высоту прибора, монтажные зазоры и габарит узла подключения. Например, при нише 500 мм и радиаторе высотой
					300 мм остается 200 мм на пространство сверху и снизу вместе, но это еще не означает автоматическую
					совместимость. Итоговый чертеж должен учитывать кронштейны, положение труб и возможность снять прибор для
					обслуживания.
				</Paragraph>
				<Paragraph>
					Глубина ниши не менее важна, чем высота. Двухтрубчатый{' '}
					<LinkText href='/models/2030-9016-12'>Arbonia 2030</LinkText> имеет глубину 65 мм, поэтому меньше
					выступает из стены и подходит для узкого подоконника или прохода рядом с окном. Трехтрубчатый Arbonia 3030
					имеет глубину 105 мм, зато отдает больше тепла на элемент и позволяет сократить длину прибора. К глубине
					корпуса нужно добавить расстояние до стены, которое задает выбранный кронштейн. Посмотреть складские варианты
					обеих моделей можно в каталоге <LinkText href='/catalog/low-models'>низких радиаторов Arbonia</LinkText>.
				</Paragraph>

				<Box textAlign='center' marginTop='28px'>
					<img
						src='/images/models/3030-0.jpeg'
						alt='Низкий радиатор Arbonia 3030 под подоконником'
						width={760}
						style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
					/>
				</Box>

				<SectionHeading>Arbonia 2030 или 3030 - сравнение по мощности</SectionHeading>
				<Paragraph marginTop='0'>
					В техническом каталоге Arbonia для режима 75/65/20 и высоты 300 мм указано 24 Вт на элемент у модели 2030 и
					33 Вт у модели 3030. При одинаковом числе секций 3030 дает примерно на 38% больше номинальной мощности, но
					занимает на 40 мм больше в глубину. Для условной нагрузки 900 Вт при том же температурном режиме расчет дает
					38 секций 2030 или 28 секций 3030 после округления вверх. Это иллюстрация разницы, а не готовый подбор для
					комнаты, потому что мощность меняется вместе с температурой подачи, обратки и воздуха. Для реального объекта
					нужен <LinkText href='/articles/calculate'>расчет радиатора по мощности</LinkText> с поправкой на режим системы.
				</Paragraph>
				<Paragraph>
					Низкий прибор нередко приходится делать длиннее стандартной батареи, и это нормально, если он помещается в
					оконной зоне. Более длинный радиатор перекрывает большую часть холодного остекления и равномернее распределяет
					тепло вдоль него. Однако длина не должна мешать шторам, дверям на балкон, мебели и доступу к запорной арматуре.
					Если рассчитанное число секций не помещается, простое уменьшение прибора приведет к дефициту мощности. В такой
					ситуации переходят с 2030 на <LinkText href='/models/3030'>Arbonia 3030</LinkText>, добавляют второй радиатор или
					переносят часть нагрузки на другой отопительный прибор.
				</Paragraph>

				<SectionHeading>Боковое и нижнее подключение в низкой нише</SectionHeading>
				<Paragraph marginTop='0'>
					Боковое подключение удобно, когда трубы уже выходят из стены или проходят вдоль нее. Для низкой ниши оно часто
					оказывается компактнее по вертикали, потому что под корпусом не размещается соединительный узел целиком.
					Нижнее подключение 69 ТВВ логично при разводке из пола и новом ремонте, когда трубы можно вывести точно по
					чертежу. При этом под радиатором остаются мультифлекс, фитинги и участок трубы, поэтому нижнее подключение нельзя
					считать способом поставить прибор вплотную к полу. Подробно варианты разобраны в материале про
					<LinkText href='/articles/connections'>боковое и нижнее подключение Arbonia</LinkText>.
				</Paragraph>
				<Paragraph>
					Перед заказом нужно определить не только направление подводки, но и сторону подачи, расположение термовентиля и
					возможность перекрыть прибор без нарушения работы стояка. В квартире с однотрубной системой особенно важно
					сохранить проектную гидравлику и исправный байпас. В частном доме надо проверить, сможет ли система обеспечить
					расчетный расход через длинный низкий радиатор. Диаметр резьбы сам по себе не гарантирует совместимость старой и
					новой схемы. Финальное решение по арматуре должен подтвердить монтажник до оформления заказа.
				</Paragraph>

				<SectionHeading>Когда низкий радиатор подходит лучше вертикального</SectionHeading>
				<Paragraph marginTop='0'>
					Низкий радиатор сохраняет источник тепла в оконной зоне, где он перехватывает нисходящий поток охлажденного
					воздуха. Это полезно при низком подоконнике, длинном окне и остеклении, вдоль которого есть свободная стена.
					Вертикальная модель на простенке освобождает место под окном, но переносит тепловой прибор в сторону и меняет
					распределение температуры. Поэтому решение принимают не по фотографии интерьера, а после сравнения теплопотерь,
					доступной длины и размещения мебели. Для панорамного окна стоит также изучить отдельный разбор
					<LinkText href='/articles/panorama'>радиаторов Arbonia для панорамного остекления</LinkText>.
				</Paragraph>

				<SectionHeading>Ошибки при подборе</SectionHeading>
				<Paragraph marginTop='0'>
					Большинство ошибок появляется еще до расчета секций, когда в заказ передают только площадь комнаты и примерную
					высоту подоконника. Для надежного подбора нужен единый комплект исходных данных, который позволяет проверить
					геометрию, мощность и подключение одновременно. Измерения лучше сопровождать фотографиями стены с рулеткой и
					общим планом оконной зоны. Отдельно фиксируют, завершен ли чистовой пол и будет ли радиатор закрыт экраном или
					плотной шторой. Перед заявкой проверьте следующие позиции:
				</Paragraph>
				<Box component='ul' sx={{ pl: 3, mt: 1 }}>
					<li>расстояние от чистового пола до нижней плоскости подоконника в миллиметрах;</li>
					<li>доступную длину и глубину ниши с учетом штор, мебели и откосов;</li>
					<li>тип системы отопления и расчетный температурный режим;</li>
					<li>нужную мощность помещения и допустимое число секций;</li>
					<li>тип, сторону и фактические координаты подключения;</li>
					<li>материал стены и выбранный способ крепления.</li>
				</Box>

				<SectionHeading>Частые вопросы</SectionHeading>
				{faqItems.map(item => (
					<Box key={item.question} marginTop='24px'>
						<Typography component='h3' variant='h6' sx={{ fontSize: '17px' }}>
							{item.question}
						</Typography>
						<Paragraph marginTop='8px'>{item.answer}</Paragraph>
					</Box>
				))}

				<Box marginTop='52px' padding='25px' sx={{ backgroundColor: '#f6f6f6', border: '1px solid #e5e5e5' }}>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs={12} md={8}>
							<Typography component='h2' variant='h5'>
								Получить расчет низкого радиатора
							</Typography>
							<Paragraph marginTop='10px'>
								Пришлите высоту от чистового пола до подоконника, доступную длину, фото труб и данные помещения. Мы
								проверим, помещается ли Arbonia 2030 или 3030, рассчитаем число секций и подготовим схему подключения.
								Если ремонт еще идет, отметьте толщину будущего пола и положение чистовой стены. Это позволит согласовать
								реальный монтажный габарит до покупки, а не исправлять выводы труб после доставки.
							</Paragraph>
						</Grid>
						<Grid item xs={12} md={4}>
							<a href='/request' style={{ textDecoration: 'none' }}>
								<Button variant='contained' color='secondary'>
									Запросить подбор
								</Button>
							</a>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}

export default ArticlePage
