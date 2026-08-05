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
const slug = 'delta-t-teplootdacha'
const keyword = 'теплоотдача радиатора'
const h1 = 'Теплоотдача радиатора - как влияет ΔT'
const metaTitle = 'Теплоотдача радиатора Arbonia - влияние ΔT'
const metaDescription =
	'Почему теплоотдача радиатора Arbonia меняется при ΔT: как сравнивать паспортную мощность, учитывать температурный график и выбрать число секций без ошибки.'

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
		image: `${siteUrl}/images/arbonia-schema.jpg`,
		datePublished: '2026-08-05',
		dateModified: '2026-08-05',
		mainEntityOfPage: `${siteUrl}/articles/${slug}`,
		about: keyword,
		keywords: [keyword, 'ΔT радиатора', 'мощность радиатора', 'температурный график отопления'],
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
				id='delta-t-teplootdacha-article-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Script
				id='delta-t-teplootdacha-breadcrumb-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			<PageHeader
				title={metaTitle}
				description={metaDescription}
				type='article'
				image='/images/arbonia-schema.jpg'
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
					Теплоотдача радиатора зависит не только от размеров и числа секций, но и от <strong>температурного напора
					ΔT</strong> - разницы между средней температурой воды и воздухом в комнате. <strong>Паспортная мощность
					Arbonia</strong> указана для конкретного режима - чаще всего ΔT=50 или ΔT=60 - поэтому ее нельзя механически
					переносить на теплый пол или низкотемпературный котел. Когда температура подачи падает, прибор не становится
					неисправным, но отдает меньше тепла, чем при паспортном режиме. Это нормальное следствие работы при меньшей
					разнице температур, а не признак того, что радиатор выбран неправильно.
				</Paragraph>

				<Paragraph>
					Для корректного подбора сначала определяют температурный график системы, затем сравнивают мощность при
					одинаковом ΔT и только после этого выбирают длину и число секций. При замене старой батареи полезно уточнить
					не только ее размеры, но и температуру воды в стояке, потому что от нее зависит фактический запас мощности.
					В новом частном доме эти данные обычно есть в проекте отопления или в настройках котла. Если график неизвестен,
					безопаснее прислать параметры на <LinkText href='/request'>расчет</LinkText>, чем ориентироваться на цифру из
					карточки товара.
				</Paragraph>

				<SectionHeading>Быстрый ориентир по ΔT</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Режим системы</th>
								<th style={headCellStyle}>Примерный ΔT</th>
								<th style={headCellStyle}>Как читать паспортную мощность</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={cellStyle}>75/65/20</td>
								<td style={cellStyle}>50</td>
								<td style={cellStyle}>Один из стандартных режимов, удобный для сравнения моделей между собой.</td>
							</tr>
							<tr>
								<td style={cellStyle}>90/70/20</td>
								<td style={cellStyle}>60</td>
								<td style={cellStyle}>Дает более высокую цифру мощности, но подходит не для каждой реальной системы.</td>
							</tr>
							<tr>
								<td style={cellStyle}>55/45/20</td>
								<td style={cellStyle}>30</td>
								<td style={cellStyle}>Типичен для низкотемпературных сценариев, где нужна проверка мощности по паспорту.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Температуры неизвестны</td>
								<td style={cellStyle}>Нельзя определить</td>
								<td style={cellStyle}>Не выбирать прибор по площади на глаз, а уточнить проект, котел или данные управляющей компании.</td>
							</tr>
						</tbody>
					</table>
				</Box>

				<SectionHeading>Что означает ΔT в паспорте радиатора</SectionHeading>
				<Paragraph>
					ΔT не равен только температуре подачи, потому что вода успевает остыть внутри радиатора и отдает тепло воздуху
					в комнате. Для расчета берут среднюю температуру подачи и обратки, а затем вычитают комнатную температуру.
					Например, в режиме 75/65/20 средняя температура воды равна 70 °C, воздух в комнате имеет 20 °C, поэтому ΔT
					составляет 50. <strong>Чем больше эта разница, тем выше теплоотдача</strong> и тем больше цифра в технической
					таблице. Именно поэтому два одинаковых по размеру радиатора могут показывать разную реальную мощность в доме
					со старой высокотемпературной системой и в новом доме с котлом, настроенным на экономичный режим.
				</Paragraph>

				<SectionHeading>Почему паспортная и реальная мощность могут различаться</SectionHeading>
				<Paragraph>
					Паспортная мощность нужна, чтобы сравнивать модели в одинаковых условиях, а не чтобы обещать постоянный
					результат для любой квартиры или дома. Если в карточке Arbonia указана мощность при ΔT=60, а система работает
					ближе к ΔT=50 или ΔT=30, фактическая теплоотдача будет ниже. Ошибка возникает не из-за радиатора, а из-за
					сравнения разных температурных режимов как будто они одинаковы. <strong>Сопоставлять мощность можно только
					при одном и том же ΔT</strong>, иначе более высокая цифра не доказывает, что модель действительно мощнее.
				</Paragraph>

				<Paragraph>
					Это правило одинаково важно для выбора новой модели и для замены старого прибора. Перед сравнением двух
					карточек найдите рядом с мощностью температурный режим и приведите показатели к одному условию по паспорту
					производителя. Такой подход защищает от недостатка тепла после монтажа и от переплаты за избыточную длину
					радиатора. Для общего выбора по площади используйте <LinkText href='/articles/calculate'>основной гид по
					расчету радиаторов Arbonia</LinkText>, а для технического подбора всегда проверяйте режим из проекта.
				</Paragraph>

				<Subheading>ΔT=50 и ΔT=60 - не конкурирующие значения</Subheading>
				<Paragraph>
					Нельзя назвать ΔT=60 более правильным, а ΔT=50 менее правильным, потому что оба значения описывают разные
					условия работы. ΔT=60 часто встречается в таблицах складских моделей и показывает, какую теплоотдачу даст
					прибор при более горячем теплоносителе. ΔT=50 используют в распространенном европейском режиме 75/65/20 и
					часто применяют для сопоставления технических характеристик. Пользователю важно не выбирать более красивую
					цифру, а <strong>выяснить реальный режим системы отопления</strong>. При замене старой батареи
					это особенно важно, потому что температура воды в стояке может отличаться от значений в рекламной таблице.
				</Paragraph>

				<SectionHeading>Теплоотдача радиатора при выборе Arbonia</SectionHeading>
				<Paragraph>
					После определения ΔT становится понятно, сколько мощности можно получить с одной секции и какая длина прибора
					поместится в доступном месте. Если стену нельзя расширить, увеличить теплоотдачу можно не только числом
					секций, но и глубиной модели - например, <strong>3-трубчатый радиатор обычно мощнее 2-трубчатого</strong> при
					равной высоте и длине. Наглядное сравнение глубины и мощности есть в статье про <LinkText href='/articles/2-3-columns'>2- и
					3-трубчатые модели Arbonia</LinkText>. Для вертикальных 2180 и 3180 дополнительно важны высота прибора,
					свободная длина стены и распределение тепла в комнате, поэтому для них полезен отдельный
					<LinkText href='/articles/vertical-radiator-power'> расчет мощности вертикального радиатора</LinkText>. Цвет,
					подключение и тип кронштейна не заменяют расчет, но их также нужно проверить до заказа, чтобы выбранная мощность
					реально работала после монтажа.
				</Paragraph>

				<Box textAlign='center' marginY='30px'>
					<img
						src='/images/arbonia-schema.jpg'
						alt='Схема глубины трубчатых радиаторов Arbonia'
						style={{ maxWidth: '100%', height: 'auto' }}
						width={720}
					/>
				</Box>

				<Subheading>Низкая температура не означает, что радиатор не подходит</Subheading>
				<Paragraph>
					В системе с конденсационным котлом, тепловым насосом или теплым полом температура подачи часто ниже, чем в
					традиционной системе, и это нормальный проектный режим. В таком случае радиатор может потребовать большую
					длину, больше секций или более глубокую модель, чтобы отдать ту же расчетную мощность. <strong>Низкая
					температура требует большего теплообмена</strong>, а не случайного запаса в характеристиках. Нельзя компенсировать
					эту разницу случайным запасом или выбором первой модели с высокой паспортной цифрой, потому что она может быть
					указана для другого ΔT. Для низкого подоконника вопрос особенно чувствителен: длина ограничена окном, поэтому
					мощность приходится проверять вместе с высотой и глубиной прибора. Такой сценарий подробно разобран в материале
					про <LinkText href='/articles/radiator-pod-nizkiy-podokonnik'>радиатор под низкий подоконник</LinkText>.
				</Paragraph>

				<SectionHeading>Как не ошибиться при сравнении мощности</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Ситуация</th>
								<th style={headCellStyle}>Риск ошибки</th>
								<th style={headCellStyle}>Что проверить</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={cellStyle}>Сравнение двух карточек товара</td>
								<td style={cellStyle}>Взять большую цифру, указанную при другом ΔT</td>
								<td style={cellStyle}>Сверьте ΔT рядом с каждой цифрой мощности.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Замена старой батареи</td>
								<td style={cellStyle}>Ориентироваться только на площадь комнаты</td>
								<td style={cellStyle}>Уточните мощность старого прибора, температуру стояка и схему подключения.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Новый частный дом</td>
								<td style={cellStyle}>Не учесть настройки котла и низкотемпературные контуры</td>
								<td style={cellStyle}>Запросите проектный график, теплопотери и ограничения по месту установки.</td>
							</tr>
							<tr>
								<td style={cellStyle}>Длинный или высокий радиатор</td>
								<td style={cellStyle}>Не проверить влияние подключения и монтажных ограничений</td>
								<td style={cellStyle}>Проверьте паспортную схему, длину стены, арматуру и возможность монтажа.</td>
							</tr>
						</tbody>
					</table>
				</Box>

				<SectionHeading>Что прислать для точного подбора</SectionHeading>
				<Paragraph>
					Для точного подбора достаточно начать не с длинного технического задания, а с понятных исходных данных по
					помещению и системе. Если часть данных еще не определена, это не причина откладывать заявку - специалист
					подскажет, что уточнить у застройщика, проектировщика или управляющей компании. Для замены старой батареи
					особенно важны геометрия подводящих труб и размеры текущего прибора. Для нового ремонта ключевым документом
					будет проектный температурный график или информация о настройках котла.
				</Paragraph>

				<Box component='ul' sx={{ pl: 3, mt: 1, mb: 1 }}>
					<li>Площадь комнаты, высота потолка и фотография места установки.</li>
					<li>Тип отопления и температурный график подачи и обратки, если он известен.</li>
					<li>Размеры старого радиатора и межосевое расстояние - при замене.</li>
					<li>Фотография подводящих труб и пожелания по расположению, цвету или подключению.</li>
				</Box>

				<Paragraph>
					Такого набора достаточно, чтобы проверить мощность, габариты и совместимость с существующей разводкой.
					Он позволяет сравнить несколько моделей по реальному температурному режиму, а не только по площади комнаты.
					Если данных о ΔT пока нет, можно начать с фото и размеров, а остальные параметры уточнить в процессе.
					Отправьте информацию через <LinkText href='/request'>форму расчета ArboniaShop</LinkText>, чтобы получить
					варианты с понятной мощностью, длиной и подключением.
				</Paragraph>
			</Box>
		</Box>
	)
}

export default ArticlePage
