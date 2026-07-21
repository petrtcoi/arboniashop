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
const slug = 'mezhosevoe-rasstoyanie-500-mm-arbonia'
const keyword = 'межосевое расстояние 500 мм Arbonia'
const h1 = 'Межосевое расстояние 500 мм Arbonia - замена батареи'
const metaTitle = 'Межосевое расстояние 500 мм Arbonia - замена'
const metaDescription =
	'Межосевое расстояние 500 мм у Arbonia 2057 и 3057: как измерить старые трубы, выбрать модель, мощность и боковое подключение без ошибок при замене.'

const quickPickRows = [
	{
		condition: 'Старые выводы имеют 500 мм между осями',
		choice: 'Arbonia 2057 или 3057 с боковым подключением',
		check: 'Координаты труб, сторону подачи, резьбу, арматуру и мощность',
	},
	{
		condition: 'Нужен более тонкий прибор',
		choice: 'Arbonia 2057, глубина 65 мм',
		check: 'Хватит ли длины для расчетного числа секций',
	},
	{
		condition: 'Длина под окном ограничена',
		choice: 'Arbonia 3057, глубина 105 мм',
		check: 'Допустима ли большая глубина и расстояние от стены',
	},
	{
		condition: 'Трубы планируются заново из пола',
		choice: 'Модель с нижним подключением',
		check: 'Межосевой размер старых боковых выводов уже не определяет выбор',
	},
	{
		condition: 'Текущие трубы не совпадают по высоте или стороне',
		choice: 'Переразводка или другая высота радиатора',
		check: 'Проектную гидравлику, байпас и согласование работ',
	},
]

const faqItems = [
	{
		question: 'Какие радиаторы Arbonia имеют межосевое расстояние 500 мм?',
		answer:
			'В рассматриваемой складской программе это Arbonia 2057 и Arbonia 3057 высотой 570 мм с боковым подключением. Число 57 в обозначении указывает на высоту около 57 см, а расстояние между центрами боковых присоединений составляет 500 мм. У вариантов с нижним подключением выбор определяет другая схема присоединения. Перед заказом надо сверить точный артикул и чертеж конкретной комплектации.',
	},
	{
		question: 'Можно ли заменить старую батарею без переноса труб?',
		answer:
			'Иногда можно, если совпадают не только 500 мм между осями, но и положение труб относительно стены, сторона подключения и размер резьбы. Также должны помещаться краны, термостат, переходники и байпас. Старые выводы нередко имеют отклонение по уровню или разную глубину, поэтому одного замера рулеткой недостаточно. Возможность монтажа без переделки подтверждают по фотографиям, размерам и осмотру монтажника.',
	},
	{
		question: 'Что выбрать - Arbonia 2057 или 3057?',
		answer:
			'Arbonia 2057 имеет глубину 65 мм и подходит, когда важен тонкий корпус. Arbonia 3057 имеет глубину 105 мм и дает больше мощности на одну секцию, поэтому при той же нагрузке получается короче. По техническому каталогу для режима 75/65/20 указано 42 Вт на элемент у 2057 и 58 Вт у 3057. Выбор делают после проверки доступной глубины, длины и реального температурного режима системы.',
	},
	{
		question: 'Как правильно измерить межосевое расстояние?',
		answer:
			'Межосевое расстояние измеряют между центрами подающей и обратной трубы или присоединительных отверстий радиатора. Если центр определить трудно, измеряют от одинакового края одной трубы до такого же края другой - результат равен расстоянию между осями при одинаковом диаметре. Размер записывают в миллиметрах и дополняют высотой выводов от чистового пола. Для проверки полезно сделать фронтальное фото с рулеткой и отдельное фото глубины труб относительно стены.',
	},
	{
		question: 'Совпадение 500 мм гарантирует ту же мощность?',
		answer:
			'Нет, межосевое расстояние описывает геометрию подключения, а не тепловую мощность. Старый чугунный, алюминиевый или панельный прибор может иметь другую отдачу при том же размере. Новый радиатор рассчитывают по тепловой нагрузке помещения и температуре воды, затем проверяют число секций и длину. Только после этого геометрию выбранной модели сопоставляют с существующими трубами.',
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
	<a href={href} style={{ textDecoration: 'none' }}>
		<Typography sx={{ ...styles.standardTextRedLink }} component='span'>
			{children}
		</Typography>
	</a>
)

const Paragraph = ({ children, marginTop = '14px' }: { children: React.ReactNode; marginTop?: string }) => (
	<Typography component='p' marginTop={marginTop} sx={{ ...styles.standardText }}>
		{children}
	</Typography>
)

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
	<Typography component='h2' variant='h5' marginTop='44px' marginBottom='12px'>
		{children}
	</Typography>
)

const ArticlePage: NextPage = () => {
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: h1,
		description: metaDescription,
		image: `${siteUrl}/images/articles/20230222.jpg`,
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		mainEntityOfPage: `${siteUrl}/articles/${slug}`,
		about: keyword,
		keywords: [keyword, 'Arbonia 2057', 'Arbonia 3057', 'замена батареи без переноса труб'],
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
				<link rel='canonical' href={`${siteUrl}/articles/${slug}`} />
			</Head>
			<Script
				id='mezhosevoe-500-article-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Script
				id='mezhosevoe-500-faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<Script
				id='mezhosevoe-500-breadcrumb-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			<PageHeader
				title={metaTitle}
				description={metaDescription}
				type='article'
				image='/images/articles/20230222.jpg'
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
				<Typography component='h1' variant='h4' marginTop='10px' marginBottom='24px'>
					{h1}
				</Typography>

				<Paragraph marginTop='0'>
					Межосевое расстояние 500 мм Arbonia есть у моделей 2057 и 3057 с боковым подключением, поэтому их часто
					рассматривают для замены батареи на существующих выводах. Обе модели имеют высоту 570 мм, но отличаются
					глубиной и мощностью: 2057 - двухтрубчатая глубиной 65 мм, 3057 - трехтрубчатая глубиной 105 мм. Совпадение
					500 мм не гарантирует монтаж без переделки, потому что нужно проверить положение труб относительно стены,
					сторону подачи, резьбу, арматуру и расчетную теплоотдачу. Сначала измеряют существующую систему, затем выбирают
					модель и число секций. Для проверки по фотографиям и размерам можно <LinkText href='/request'>отправить заявку на
					подбор</LinkText>.
				</Paragraph>

				<SectionHeading>Быстрый выбор</SectionHeading>
				<Box sx={{ overflowX: 'auto' }}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={headCellStyle}>Исходная ситуация</th>
								<th style={headCellStyle}>Предварительный выбор</th>
								<th style={headCellStyle}>Что проверить</th>
							</tr>
						</thead>
						<tbody>
							{quickPickRows.map(row => (
								<tr key={row.condition}>
									<td style={cellStyle}>{row.condition}</td>
									<td style={cellStyle}>{row.choice}</td>
									<td style={cellStyle}>{row.check}</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>

				<SectionHeading>Что означает межосевое расстояние 500 мм Arbonia</SectionHeading>
				<Paragraph marginTop='0'>
					Межосевое расстояние - это размер между центрами верхнего и нижнего присоединения при боковой схеме. У Arbonia
					2057 и 3057 корпус имеет высоту 570 мм, а центры присоединений разнесены на 500 мм. Разница в 70 мм приходится
					на участки от осей подключений до верхнего и нижнего края корпуса. Этот параметр помогает сопоставить новый
					прибор со старыми трубами, но не описывает его длину, глубину или мощность. Для нижнего подключения 69 ТВВ
					используют отдельный монтажный чертеж, поэтому старый вертикальный межосевой размер там не является главным
					критерием.
				</Paragraph>
				<Paragraph>
					На практике выражение «без переноса труб» означает, что монтажник может подключить новый радиатор к существующим
					выводам с допустимыми фитингами и без изменения стояка. Для этого центры труб должны совпасть не только по
					вертикали, но и по глубине от чистовой стены. Нужно оставить место для запорной арматуры, термостата и разъемных
					соединений, а в однотрубной системе - сохранить рабочий байпас. Если старые трубы имеют уклон, перекос или
					коррозию, формальное совпадение 500 мм не отменяет ремонт участка. Общую логику замены дополняет статья про
					<LinkText href='/articles/arbonia-3057'>замену чугунного радиатора на Arbonia 3057</LinkText>.
				</Paragraph>

				<Box textAlign='center' marginTop='28px'>
					<img
						src='/images/articles/20230222.jpg'
						alt='Радиатор Arbonia 3057 с межосевым расстоянием 500 мм'
						width={720}
						style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
					/>
				</Box>

				<SectionHeading>Как измерить старые выводы до покупки</SectionHeading>
				<Paragraph marginTop='0'>
					Измерение начинают при установленной старой батарее и не разбирают соединения самостоятельно. Между центрами
					двух труб можно измерить напрямую, а если центр визуально не определяется - от верхнего края верхней трубы до
					верхнего края нижней трубы одинакового диаметра. Отдельно записывают высоту каждой оси от чистового пола и
					расстояние от центра трубы до готовой стены. Рулетка должна лежать в одной плоскости с выводами, иначе перспектива
					на фотографии даст ошибку. Каждый размер лучше снять дважды и указать в миллиметрах, а не округлять до
					сантиметров.
				</Paragraph>
				<Paragraph>
					Одновременно фиксируют диаметр и тип резьбы, сторону подачи, расположение обратки, кранов и байпаса. Полезны три
					фотографии: общий вид окна и стояка, фронтальный кадр с рулеткой и боковой кадр с глубиной труб. Если радиатор
					стоит в нише, измеряют ее ширину, высоту и глубину после будущего выравнивания стен. Также отмечают материал
					стены, потому что он влияет на крепеж, но не на межосевой размер. Такой комплект данных позволяет одновременно
					проверить геометрию подключения и возможность надежного <LinkText href='/articles/montazh-radiatorov-arbonia-rekomendacii'>монтажа радиатора Arbonia</LinkText>.
				</Paragraph>

				<SectionHeading>Arbonia 2057 или 3057 - мощность и габариты</SectionHeading>
				<Paragraph marginTop='0'>
					Обе модели имеют одинаковую высоту 570 мм и межосевое расстояние 500 мм, но разное число труб в глубину.
					Arbonia 2057 глубиной 65 мм выглядит тоньше и меньше выступает из стены. Arbonia 3057 глубиной 105 мм занимает
					на 40 мм больше, зато технический каталог для режима 75/65/20 указывает 58 Вт на элемент против 42 Вт у 2057.
					При равном числе секций это примерно на 38% больше номинальной мощности. Поэтому выбор между
					<LinkText href='/models/2057'>Arbonia 2057</LinkText> и <LinkText href='/models/3057'>Arbonia 3057</LinkText>
					обычно сводится к балансу глубины, доступной длины и тепловой нагрузки.
				</Paragraph>
				<Paragraph>
					Для условной потребности 1000 Вт при паспортном режиме потребуется 24 элемента 2057 или 18 элементов 3057
					после округления вверх. В реальной системе эти числа могут измениться, потому что при более низкой температуре
					воды одна секция отдает меньше тепла. Нельзя просто повторить число секций старой батареи: у разных конструкций
					иная мощность элемента и иной шаг по длине. Сначала определяют нагрузку помещения или проверяют мощность
					существующего прибора, затем применяют данные конкретной модели. Для второго сценария пригодится инструкция по
					<LinkText href='/articles/calc-radiators-by-old-ones'>подбору на основе установленной батареи</LinkText>.
				</Paragraph>

				<SectionHeading>Однотрубная и двухтрубная система</SectionHeading>
				<Paragraph marginTop='0'>
					В двухтрубной системе подача и обратка идут по отдельным магистралям, поэтому радиатор подключают между ними по
					проектной схеме. В однотрубном стояке теплоноситель последовательно проходит через участок системы, и неверная
					арматура может повлиять на соседние квартиры. Байпас нельзя удалять или перекрывать без инженерной проверки, а
					термостатический клапан должен соответствовать выбранной схеме. Работы на общем стояке согласуют с управляющей
					организацией и выполняют после штатного отключения участка. Межосевой размер 500 мм облегчает геометрическую
					замену, но не заменяет гидравлическую проверку.
				</Paragraph>
				<Paragraph>
					Направление потока тоже нельзя угадывать по расположению трубы. В старом доме подача может идти сверху или снизу
					в зависимости от проекта, а после прошлых ремонтов маркировка часто отсутствует. Неправильное направление через
					встроенный клапан вызывает шум и ухудшает регулирование. До заказа монтажник определяет подачу, выбирает сторону
					термоголовки и проверяет, не будет ли она закрыта шторой. Варианты арматуры и разводки подробнее разобраны в
					<LinkText href='/articles/connections'>руководстве по подключениям Arbonia</LinkText>.
				</Paragraph>

				<SectionHeading>Когда лучше перенести трубы</SectionHeading>
				<Paragraph marginTop='0'>
					Сохранение старых выводов имеет смысл, если их положение удобно, металл в хорошем состоянии, а новый прибор
					проходит по мощности и габаритам. Переразводка оправдана, когда трубы мешают правильной длине радиатора,
					выступают из стены под случайным углом или требуют набора заметных переходников. При капитальном ремонте можно
					сразу задать нижнее подключение и согласовать положение прибора с мебелью и шторами. Если высота 570 мм не
					помещается под подоконником, рассматривают <LinkText href='/catalog/low-models'>низкие радиаторы Arbonia</LinkText>,
					а не уменьшают монтажные зазоры. Если места достаточно, все складские модели высотой 50-57 см собраны в
					<LinkText href='/catalog/standard'>каталоге радиаторов Arbonia под окно</LinkText>.
				</Paragraph>

				<SectionHeading>Данные для проверки совместимости</SectionHeading>
				<Paragraph marginTop='0'>
					Для предварительного подбора недостаточно сообщения «старая батарея 500 мм». Нужны размеры, фотографии и данные
					системы, по которым можно проверить несколько ограничений одновременно. Чем точнее исходная информация, тем
					меньше переходников и непредвиденных работ понадобится на монтаже. Список особенно важен при дистанционном
					заказе, когда специалист не видит объект лично. В заявку стоит включить:
				</Paragraph>
				<Box component='ul' sx={{ pl: 3, mt: 1 }}>
					<li>межосевое расстояние и высоту обеих труб от чистового пола;</li>
					<li>расстояние от оси трубы до чистовой стены;</li>
					<li>диаметр, резьбу, сторону подачи и схему системы;</li>
					<li>ширину, высоту и глубину доступной ниши;</li>
					<li>модель или размеры старого радиатора и оценку его работы зимой;</li>
					<li>площадь, высоту потолка, остекление и желаемую температуру комнаты.</li>
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
								Проверить замену без переноса труб
							</Typography>
							<Paragraph marginTop='10px'>
								Пришлите фотографии старой батареи, межосевое расстояние, высоту выводов, размеры ниши и данные комнаты.
								Мы сравним Arbonia 2057 и 3057, рассчитаем секции и отметим, где могут потребоваться переходники или
								переразводка. Если система однотрубная, добавьте фото стояка и байпаса целиком. Финальную схему и возможность
								работ без изменения труб должен подтвердить монтажник на объекте.
							</Paragraph>
						</Grid>
						<Grid item xs={12} md={4}>
							<a href='/request' style={{ textDecoration: 'none' }}>
								<Button variant='contained' color='secondary'>
									Проверить размеры
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
