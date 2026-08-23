import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Script from 'next/script'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import tableStyle from './index.module.css'

const metaTitle = 'Стандартные радиаторы Arbonia под окно'
const metaDescription =
	'Стандартные радиаторы Arbonia высотой 50-57 см: модели 2050, 2057, 3050 и 3057. Разбираем, какую высоту, число труб и подключение выбрать под обычное окно и замену старой батареи.'

const quickPickRows: { situation: string; pick: string; why: string }[] = [
	{
		situation: 'Нужен тонкий радиатор под стандартное окно',
		pick: 'Arbonia 2050 или 2057',
		why: '2-трубчатая конструкция, глубина 65 мм, аккуратный внешний вид',
	},
	{
		situation: 'Нужна большая мощность под окном',
		pick: 'Arbonia 3050 или 3057',
		why: '3-трубчатая конструкция, больше теплоотдача при той же длине',
	},
	{
		situation: 'Меняете старую батарею без серьёзной переделки труб',
		pick: 'Arbonia 2057 или 3057',
		why: 'высота 57 см, удобный формат для замены старых приборов',
	},
	{
		situation: 'Под окном мало глубины',
		pick: 'Arbonia 2050 или 2057',
		why: 'тонкая 2-трубчатая модель легче вписывается в нишу',
	},
	{
		situation: 'Нужно больше тепла в комнате',
		pick: 'Arbonia 3050 или 3057',
		why: '3-трубчатая модель даёт больше мощности на секцию',
	},
	{
		situation: 'Нужно боковое подключение',
		pick: 'модели с подключением №12',
		why: 'подходит для многих сценариев замены старых батарей',
	},
	{
		situation: 'Нужно нижнее подключение',
		pick: 'модели с подключением №69 ТВВ',
		why: 'трубы можно аккуратно вывести снизу, радиатор выглядит чище',
	},
	{
		situation: 'Не знаете, сколько секций нужно',
		pick: 'заявка на расчёт',
		why: 'подберём мощность по площади, окнам, потолкам и системе отопления',
	},
]

const faqItems: { question: string; answer: string }[] = [
	{
		question: 'Какие модели Arbonia подходят под стандартное окно?',
		answer:
			'Для стандартного окна чаще всего рассматривают Arbonia 2050, 2057, 3050 и 3057. Модели 2050 и 2057 тоньше, модели 3050 и 3057 мощнее.',
	},
	{
		question: 'Что выбрать: Arbonia 2050 или 3050?',
		answer:
			'Arbonia 2050 - 2-трубчатая и более тонкая модель. Arbonia 3050 - 3-трубчатая и более мощная. Если важна небольшая глубина, смотрите 2050. Если нужна большая теплоотдача, чаще подходит 3050.',
	},
	{
		question: 'Что выбрать: Arbonia 2057 или 3057?',
		answer:
			'Arbonia 2057 стоит выбирать, когда нужен более тонкий радиатор высотой 57 см. Arbonia 3057 - когда нужна большая мощность и глубина 105 мм не мешает установке.',
	},
	{
		question: 'Какая модель лучше для замены старой чугунной батареи?',
		answer:
			'Чаще всего для замены рассматривают Arbonia 3057, потому что это универсальная 3-трубчатая модель с хорошей мощностью. Но в некоторых случаях лучше подойдёт 2057, если важна меньшая глубина.',
	},
	{
		question: 'Можно ли заменить старую батарею без переноса труб?',
		answer:
			'Иногда можно, но это зависит от межосевого расстояния, подключения и размеров старого радиатора. Перед заказом лучше прислать фото старой батареи и места установки.',
	},
	{
		question: 'Боковое или нижнее подключение лучше?',
		answer:
			'Для замены старых батарей часто удобнее боковое подключение. Для нового ремонта и скрытой подводки труб чаще выбирают нижнее подключение. Правильный вариант зависит от вашей разводки.',
	},
	{
		question: 'Хватит ли радиатора 50 см для комнаты?',
		answer:
			'Не всегда. Высота - только один параметр. Нужно считать мощность по помещению и выбирать число секций. Если мощности не хватает, можно увеличить длину, выбрать 3-трубчатую модель или рассмотреть другую высоту.',
	},
	{
		question: 'Можно ли заказать стандартный радиатор Arbonia в цвет стены?',
		answer: 'Да, можно выбрать белый вариант RAL 9016 или рассмотреть покраску по RAL под интерьер.',
	},
	{
		question: 'Что делать, если подоконник низкий?',
		answer:
			'Если стандартная модель 50-57 см не помещается, смотрите низкие радиаторы Arbonia или отправьте размеры на расчёт. Мы подскажем, какая высота пройдёт с учётом подключения и монтажных зазоров.',
	},
]

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

const ArticlePage: NextPage = () => {
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
			<Script
				id='radiatory-arbonia-pod-okno-faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<PageHeader
				title={metaTitle}
				description={metaDescription}
				type='article'
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Стандартные радиаторы Arbonia под окно',
						link: '/articles/radiatory-arbonia-pod-okno',
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
					Стандартные радиаторы Arbonia высотой 50-57 см выбирают для установки под обычное окно, замены старых
					чугунных, панельных, алюминиевых или биметаллических батарей и аккуратного подбора отопления без сложной
					переделки интерьера. В <LinkText href='/catalog/standard'>разделе стандартных радиаторов Arbonia под окно</LinkText>{' '}
					собраны складские модели Arbonia 2050, 2057, 3050 и 3057: 2-трубчатые варианты меньшей глубины и 3-трубчатые
					модели с большей теплоотдачей. Если не уверены в высоте, числе секций или подключении,{' '}
					<LinkText href='/request'>оставьте заявку</LinkText> - мы рассчитаем мощность, проверим совместимость с вашей
					системой отопления и предложим подходящий радиатор.
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
					<table className={tableStyle.table}>
						<thead>
							<tr>
								<th>Задача</th>
								<th>Что выбрать</th>
								<th>Почему</th>
							</tr>
						</thead>
						<tbody>
							{quickPickRows.map(row => (
								<tr key={row.situation}>
									<td>{row.situation}</td>
									<td>{row.pick}</td>
									<td>{row.why}</td>
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
					Какие радиаторы входят в этот раздел
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					В <LinkText href='/catalog/standard'>разделе стандартных радиаторов Arbonia под окно</LinkText> собраны
					базовые горизонтальные трубчатые радиаторы для установки под окно:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							<LinkText href='/models/2050'>Arbonia 2050</LinkText> - 2-трубчатая модель высотой 50 см;
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							<LinkText href='/models/2057'>Arbonia 2057</LinkText> - 2-трубчатая модель высотой 57 см;
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							<LinkText href='/models/3050'>Arbonia 3050</LinkText> - 3-трубчатая модель высотой 50 см;
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							<LinkText href='/models/3057'>Arbonia 3057</LinkText> - 3-трубчатая модель высотой 57 см.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Это базовые модели для стандартного подоконника, обычной оконной зоны и замены старых батарей. Они
					отличаются высотой, глубиной, мощностью и подключением. Поэтому выбирать их лучше не только по внешнему
					виду, а по задаче: сколько тепла нужно, сколько места есть под окном, какие трубы уже выведены и нужно ли
					сохранять существующее подключение.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Когда подходят стандартные радиаторы Arbonia
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Стандартные модели Arbonia под окно стоит рассматривать, если радиатор нужен в привычном месте - под
					подоконником. Такой вариант подходит для квартир, частных домов, кухонь, гостиных, спален, детских,
					кабинетов и помещений, где важно сохранить классическую схему отопления вдоль оконной зоны.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Обычно этот раздел подходит в четырёх случаях.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Первый случай - замена старых батарей. Если сейчас под окном стоит чугунный, панельный, алюминиевый или
					биметаллический радиатор, можно подобрать трубчатую модель Arbonia близкой высоты и нужного подключения.
					Важно заранее проверить расстояние между трубами, высоту подоконника и требуемую мощность.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Второй случай - ремонт или новый интерьер. Трубчатые радиаторы выглядят аккуратнее многих стандартных
					батарей, поэтому их часто выбирают, когда отопительный прибор должен не портить интерьер, а спокойно
					вписываться в него.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Третий случай - нужно больше вариантов по длине и мощности. У Arbonia можно подобрать число секций, а
					значит точнее попасть в нужную теплоотдачу под конкретное помещение.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Четвёртый случай - нужен белый радиатор в наличии или радиатор под покраску. Базовый вариант - белый RAL
					9016. Если нужно попасть в цвет стены, мебели или дизайн-проекта, можно рассмотреть{' '}
					<LinkText href='/coloring'>покраску по RAL</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Arbonia 2050
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Arbonia 2050 - стандартная 2-трубчатая модель высотой 50 см. Её выбирают, когда нужен аккуратный радиатор
					под окно с небольшой глубиной. Это хороший вариант для комнат, где радиатор не должен сильно выступать от
					стены или где 3-трубчатая модель кажется слишком глубокой.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Arbonia 2050 подходит для стандартных оконных зон, небольших и средних помещений, а также для ситуаций,
					когда радиатор ставится по всей ширине окна и не нужна чрезмерная мощность. За счёт глубины 65 мм модель
					выглядит легче и спокойнее в интерьере.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Коротко:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>высота: 50 см;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип: 2-трубчатый;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>глубина: 65 мм;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>сценарий: тонкий радиатор под стандартное окно;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							когда выбирать: если важны компактность по глубине и аккуратный внешний вид.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Перейти к модели: <LinkText href='/models/2050'>Arbonia 2050</LinkText>
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Arbonia 2057
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Arbonia 2057 - 2-трубчатая модель высотой 57 см. Её часто рассматривают для замены старых батарей и
					установки под стандартное окно, когда нужна небольшая глубина, но высота 50 см кажется недостаточной.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Модель 2057 особенно полезна, если нужно сохранить более привычную высоту радиатора и при этом не ставить
					более глубокую 3-трубчатую модель. Она подходит для помещений, где радиатор должен выглядеть тонко, но
					занимать нормальную высоту под подоконником.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Коротко:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>высота: 57 см;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип: 2-трубчатый;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>глубина: 65 мм;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							сценарий: тонкий радиатор под окно или на замену старой батареи;
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							когда выбирать: если нужна высота ближе к классической батарее, но без лишней глубины.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Перейти к модели: <LinkText href='/models/2057'>Arbonia 2057</LinkText>
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Arbonia 3050
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Arbonia 3050 - 3-трубчатая модель высотой 50 см. Её выбирают, когда нужна большая теплоотдача, чем у
					2-трубчатой модели такой же высоты, но при этом важно сохранить стандартную установку под окном.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					За счёт 3-трубчатой конструкции Arbonia 3050 глубже, чем 2050, зато даёт больше мощности при той же длине.
					Это хороший вариант для комнат, где подоконник не позволяет поставить более высокий радиатор, но по теплу
					нужен запас.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Коротко:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>высота: 50 см;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип: 3-трубчатый;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>глубина: 105 мм;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>сценарий: мощный радиатор под стандартное окно;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							когда выбирать: если 2-трубчатой модели недостаточно по мощности.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Перейти к модели: <LinkText href='/models/3050'>Arbonia 3050</LinkText>
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Arbonia 3057
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Arbonia 3057 - одна из самых универсальных стандартных моделей Arbonia для установки под окно. Это
					3-трубчатый радиатор высотой 57 см и глубиной 105 мм. Его часто используют как базовый вариант при замене
					старых батарей, когда нужна хорошая мощность и привычная высота.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Arbonia 3057 стоит рассматривать, если помещение требует больше тепла, чем может дать тонкая 2-трубчатая
					модель, или если нужно заменить старый радиатор без ухода в низкие или вертикальные модели. Это сильный
					вариант для гостиных, спален, кухонь, детских и других стандартных помещений.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Коротко:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>высота: 57 см;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип: 3-трубчатый;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>глубина: 105 мм;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>сценарий: универсальная замена старой батареи под окном;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							когда выбирать: если нужна повышенная мощность и стандартная высота.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Перейти к модели: <LinkText href='/models/3057'>Arbonia 3057</LinkText>
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					2050, 2057, 3050 или 3057: что выбрать
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Если нужен самый аккуратный и тонкий вариант, начните с <LinkText href='/models/2050'>Arbonia 2050</LinkText>{' '}
					или <LinkText href='/models/2057'>2057</LinkText>. Эти модели меньше выступают от стены и хорошо подходят
					для спокойного интерьера.
				</Typography>
				<Typography component='p' sx={{ ...styles.standardText }}>
					Если высота 500 мм уже определена, используйте детальное <LinkText href='/articles/arbonia-2050-ili-3050'>
						сравнение Arbonia 2050 и 3050
					</LinkText>. В нем показано, сколько длины экономит трехтрубчатая модель при той же мощности и какой полный
					вылет от стены нужно проверить у двухтрубчатого и трехтрубчатого вариантов.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если главная задача - мощность, смотрите <LinkText href='/models/3050'>Arbonia 3050</LinkText> или{' '}
					<LinkText href='/models/3057'>3057</LinkText>. Они глубже, но дают больше тепла при сопоставимой длине.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если высота под подоконником ограничена, чаще выбирают модели 50 см: Arbonia 2050 или Arbonia 3050.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если идёт замена старой батареи и высота позволяет поставить радиатор 57 см, чаще рассматривают Arbonia
					2057 или Arbonia 3057.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если нужно сохранить визуальную лёгкость - 2050/2057. Если нужно получить больше тепла - 3050/3057.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Точный выбор лучше делать после расчёта: одна и та же модель может подойти в одной комнате и оказаться
					слабой или избыточной в другой. Сравнение моделей по высоте подробнее разобрано в статье{' '}
					<LinkText href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'>
						Arbonia 3050 или 3057 - какую высоту выбрать
					</LinkText>
					.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Стандартный радиатор под окно или низкая модель
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Не всегда под окно нужна именно стандартная высота 50-57 см. Если подоконник низкий, окно начинается близко
					к полу или радиатор не помещается по высоте, лучше смотреть{' '}
					<LinkText href='/catalog/low-models'>низкие модели Arbonia</LinkText>.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Стандартные радиаторы подходят, когда под подоконником есть достаточно места для корпуса, подключения и
					нормального воздухообмена. Низкие модели выбирают для низких подоконников, панорамного остекления и
					ситуаций, где стандартная батарея физически не помещается.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если сомневаетесь, измерьте расстояние от пола до подоконника, сфотографируйте место установки и пришлите
					данные на <LinkText href='/request'>расчёт</LinkText>. Мы подскажем, стоит ли смотреть стандартные модели
					или лучше перейти к низким радиаторам.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Смотреть <LinkText href='/catalog/low-models'>низкие радиаторы</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Стандартный радиатор под окно или вертикальный радиатор
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Вертикальные радиаторы Arbonia выбирают, когда под окном нет места, окно панорамное или нужно освободить
					стену под мебель. Но если под подоконником есть нормальное место, стандартная установка под окном часто
					остаётся самым понятным и эффективным решением.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Радиатор под окном помогает работать с холодной зоной у остекления и привычен для большинства систем
					отопления. Вертикальную модель лучше рассматривать, если обычный радиатор мешает планировке или не
					помещается по высоте и длине.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Смотреть <LinkText href='/catalog/high-models'>высокие радиаторы</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Боковое или нижнее подключение
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Стандартные радиаторы Arbonia могут быть с боковым или нижним подключением.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Боковое подключение часто удобно при замене старых батарей, когда трубы уже выведены сбоку. В этом случае
					важно проверить межосевое расстояние, сторону подключения и диаметр труб.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Нижнее подключение выбирают, когда трубы выходят из пола или стены снизу, а также когда хочется сделать
					радиатор визуально более аккуратным. Варианты с нижним подключением позволяют спрятать подводку и лучше
					подходят для нового ремонта.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Перед заказом нужно понять не только модель и число секций, но и тип подключения. Ошибка в подключении
					может привести к лишней переделке труб или невозможности установить радиатор без дополнительных работ.
					Подробнее о подключении - в статье{' '}
					<LinkText href='/articles/connections'>радиаторы Arbonia с боковым и нижним подключением</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Замена старых батарей на Arbonia
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Для замены старых батарей чаще всего рассматривают модели{' '}
					<LinkText href='/models/2057'>Arbonia 2057</LinkText> и{' '}
					<LinkText href='/models/3057'>Arbonia 3057</LinkText>. Они ближе к привычной высоте стандартных радиаторов
					и подходят для многих оконных зон.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Но просто выбрать похожую по размеру модель недостаточно. Нужно проверить:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>высоту от пола до подоконника;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>расстояние между трубами;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип подключения;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>ширину доступного места;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>требуемую тепловую мощность;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>состояние стояков и запорной арматуры;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>можно ли менять радиатор без переделки труб.</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если старая батарея грела хорошо, можно использовать её как ориентир по мощности, но лучше всё равно
					пересчитать помещение. Новые радиаторы отличаются по теплоотдаче, глубине, числу секций и режиму работы
					системы отопления.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Статья про замену: <LinkText href='/articles/arbonia-3057'>замена чугунных радиаторов на Arbonia 3057</LinkText>
					. Расчёт по старым батареям:{' '}
					<LinkText href='/articles/calc-radiators-by-old-ones'>
						подбор радиаторов на основе уже установленных батарей
					</LinkText>
					.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Как рассчитать количество секций
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Количество секций нельзя выбирать только "на глаз" или по длине окна. Радиатор должен покрывать
					теплопотери помещения. На расчёт влияют площадь комнаты, высота потолков, количество наружных стен, размер
					окна, тип стеклопакета, этаж, регион, температура теплоносителя и желаемая температура в помещении.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Ориентировочно можно начать с расчёта по площади, но для заказа лучше проверить мощность точнее. Особенно
					это важно для угловых комнат, панорамных окон, высоких потолков и помещений после перепланировки.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Чтобы мы рассчитали радиатор, пришлите:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>площадь помещения;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>высоту потолков;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>размеры окна или ниши;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>фото места установки;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>фото текущего подключения, если радиатор меняется;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>тип дома или системы отопления, если известен;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>пожелания по цвету и подключению.</Typography>
					</li>
				</Box>
				<div className='cta'>
					Получить расчёт мощности, числа секций и цены Arbonia под ваше окно.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Получить расчёт →</div>
					</a>
				</div>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Цвет стандартных радиаторов Arbonia
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Самый универсальный вариант - <LinkText href='/catalog/ral9016'>белый RAL 9016</LinkText>. Он подходит для
					большинства интерьеров, спокойно смотрится под белыми окнами и не конфликтует со стенами.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Если радиатор должен стать акцентом, можно рассмотреть тёмные оттенки, антрацит или{' '}
					<LinkText href='/coloring'>покраску по RAL</LinkText>. Если задача обратная - сделать радиатор почти
					незаметным, его можно подобрать ближе к цвету стены. Больше идей - в статье{' '}
					<LinkText href='/articles/tsvet-radiatorov-v-interiere'>цвет радиаторов в интерьере</LinkText>.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Когда стандартный радиатор Arbonia может не подойти
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Стандартная модель под окно не всегда будет лучшим решением. Она может не подойти, если:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>подоконник слишком низкий;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>окно панорамное и начинается почти от пола;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>под окном будет мебель или встроенная конструкция;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>радиатор не помещается по длине;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>не хватает мощности при доступной длине;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							трубы выведены так, что проще поставить другую модель;
						</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>
							дизайнерское решение требует вертикальный радиатор на простенке.
						</Typography>
					</li>
				</Box>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					В таких случаях стоит рассмотреть <LinkText href='/catalog/low-models'>низкие модели</LinkText>,{' '}
					<LinkText href='/catalog/high-models'>вертикальные радиаторы</LinkText> или индивидуальный подбор по
					размерам.
				</Typography>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Почему стоит заказать подбор у нас
				</Typography>
				<Typography
					component='p'
					sx={{ ...styles.standardText }}
				>
					Arbonia - модульная система: одна и та же модель может быть разной по числу секций, подключению, цвету и
					мощности. Поэтому важно подобрать не просто "радиатор 50 см", а конкретную конфигурацию под помещение.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Мы поможем:
				</Typography>
				<Box
					component='ul'
					sx={{ pl: 3, mt: 1 }}
				>
					<li>
						<Typography sx={{ ...styles.standardText }}>выбрать между 2050, 2057, 3050 и 3057;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>рассчитать число секций;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>проверить боковое или нижнее подключение;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>подобрать радиатор под замену старой батареи;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>учесть высоту подоконника и глубину ниши;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>предложить белый вариант в наличии или покраску;</Typography>
					</li>
					<li>
						<Typography sx={{ ...styles.standardText }}>подготовить цену и сроки поставки.</Typography>
					</li>
				</Box>
				<div className='cta'>
					Оставьте заявку, и мы подберём стандартный радиатор Arbonia под окно с учётом вашего помещения, подключения
					и бюджета.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Получить расчёт и цену →</div>
					</a>
				</div>

				<Typography
					component='h2'
					variant='h5'
					marginTop='40px'
					marginBottom='10px'
				>
					Частые вопросы
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
					Стандартные радиаторы Arbonia под окно - это базовый выбор для квартиры, дома, ремонта и замены старых
					батарей. Если нужен тонкий и аккуратный радиатор, смотрите 2050 или 2057. Если нужна большая мощность,
					выбирайте 3050 или 3057. Чтобы не ошибиться с высотой, числом секций и подключением,{' '}
					<LinkText href='/request'>отправьте данные помещения на расчёт</LinkText> - мы подберём подходящую модель и
					подготовим предложение.
				</Typography>
				<Typography
					component='p'
					marginTop='14px'
					sx={{ ...styles.standardText }}
				>
					Смотреть все стандартные радиаторы:{' '}
					<LinkText href='/catalog/standard'>стандартные радиаторы Arbonia под окно</LinkText>.
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
