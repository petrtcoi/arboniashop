import { Box, Button, Grid, Typography } from '@mui/material'
import Script from 'next/script'
import React from 'react'

import Hero from '../../components/hero/hero'
import ModelBlock from '../../components/modelBlock/modelBlock'
import PageHeader from '../../components/pageHeader/pageHeader'

import { SetComponentProps } from '../../models/setComponentProps.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'
import CatalogPopularLinks from './catalogPopularLinks'

const faqItems = [
	{
		question: 'Какие модели Arbonia подходят под стандартное окно?',
		answer:
			'Для стандартного окна чаще всего рассматривают Arbonia 2050, 2057, 3050 и 3057. Модели 2050 и 2057 тоньше, модели 3050 и 3057 мощнее.',
	},
	{
		question: 'Что выбрать: Arbonia 2050 или 3050?',
		answer:
			'Arbonia 2050 - 2-трубчатая и более тонкая модель, глубина 65 мм. Arbonia 3050 - 3-трубчатая и более мощная, глубина 105 мм. Если важна небольшая глубина, смотрите 2050. Если нужна большая теплоотдача, чаще подходит 3050.',
	},
	{
		question: 'Что выбрать: Arbonia 2057 или 3057?',
		answer:
			'Arbonia 2057 стоит выбирать, когда нужен более тонкий радиатор высотой 57 см. Arbonia 3057 - когда нужна большая мощность и глубина 105 мм не мешает установке.',
	},
	{
		question: 'Какая модель лучше для замены старой чугунной батареи?',
		answer:
			'Чаще всего для замены рассматривают Arbonia 3057, потому что это универсальная 3-трубчатая модель с хорошей мощностью и межосевым расстоянием 500 мм при боковом подключении. Но в некоторых случаях лучше подойдёт 2057, если важна меньшая глубина.',
	},
	{
		question: 'Можно ли заменить старую батарею без переноса труб?',
		answer:
			'Иногда можно, но это зависит от межосевого расстояния, подключения и размеров старого радиатора. Перед заказом лучше прислать фото старой батареи и места установки.',
	},
	{
		question: 'Боковое или нижнее подключение выбрать?',
		answer:
			'Для замены старых батарей часто удобнее боковое подключение №12 - оно совпадает с уже существующей разводкой. Для нового ремонта и скрытой подводки труб чаще выбирают нижнее подключение №69 ТВВ.',
	},
	{
		question: 'Хватит ли радиатора 50 см для комнаты?',
		answer:
			'Не всегда. Высота - только один параметр. Нужно считать мощность по помещению и выбирать число секций. Если мощности не хватает, можно увеличить длину, выбрать 3-трубчатую модель или рассмотреть другую высоту.',
	},
	{
		question: 'Можно ли заказать стандартный радиатор Arbonia в цвет стены?',
		answer: 'Да, можно выбрать белый вариант RAL 9016 в наличии или рассмотреть покраску по RAL под интерьер.',
	},
	{
		question: 'Что делать, если подоконник низкий?',
		answer:
			'Если стандартная модель 50-57 см не помещается, стоит посмотреть низкие радиаторы Arbonia или отправить размеры на расчёт - подскажем, какая высота пройдёт с учётом подключения и монтажных зазоров.',
	},
]

const quickPickRows: { situation: string; pick: string; why: string }[] = [
	{
		situation: 'Нужен тонкий радиатор под окно',
		pick: 'Arbonia 2050 / 2057',
		why: '2-трубчатые модели глубиной 65 мм',
	},
	{
		situation: 'Нужна большая мощность',
		pick: 'Arbonia 3050 / 3057',
		why: '3-трубчатые модели глубиной 105 мм',
	},
	{
		situation: 'Замена старой батареи',
		pick: 'Arbonia 2057 / 3057',
		why: 'высота 57 см, межосевое 500 мм при боковом подключении',
	},
	{
		situation: 'Мало места по высоте',
		pick: 'Arbonia 2050 / 3050',
		why: 'высота 50 см',
	},
	{
		situation: 'Нужно боковое подключение',
		pick: 'версии №12',
		why: 'удобно при замене старых батарей',
	},
	{
		situation: 'Нужно нижнее подключение',
		pick: 'версии №69 ТВВ',
		why: 'аккуратная подводка труб снизу',
	},
	{
		situation: 'Не знаете число секций',
		pick: 'расчёт через /request',
		why: 'подберём по помещению',
	},
]

const quickPickTableStyle: React.CSSProperties = {
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: '14px',
}

const quickPickCellStyle: React.CSSProperties = {
	border: '1px solid #dddddd',
	padding: '10px 12px',
	verticalAlign: 'top',
}

const quickPickHeadCellStyle: React.CSSProperties = {
	...quickPickCellStyle,
	background: '#f6f6f6',
	fontWeight: 700,
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

const SetStandardModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const color9016 = colors.find(x => x.id === '9016') || colors[0]
	const lateralConnection = connections.find(x => x.id === '12') || connections[0]
	const bottomConnection = connections.find(x => x.id === '69tvv') || connections[0]

	return (
		<Box>
			<Script
				id='standard-radiators-faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<PageHeader
				title={'Стандартные радиаторы Arbonia под окно 50–57 см — 2050, 2057, 3050, 3057'}
				description='Стандартные трубчатые радиаторы Arbonia под окно: модели 2050, 2057, 3050 и 3057 высотой 50–57 см. Подбор для замены старых батарей, бокового или нижнего подключения, расчёт секций и цены.'
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Стандартные радиаторы Arbonia под окно'}
				subheader={'Складские модели высотой 50–57 см: 2050, 2057, 3050, 3057'}
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Стандартные радиаторы Arbonia высотой 50–57 см выбирают для установки под обычное окно, замены старых
						батарей и аккуратного подбора отопления без сложной переделки интерьера. В этом разделе собраны модели
						Arbonia 2050, 2057, 3050 и 3057: тонкие 2-трубчатые варианты и более мощные 3-трубчатые модели. Отправьте
						размеры помещения - рассчитаем мощность, секции, подключение и цену.
					</Typography>
				</Box>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Главный практический плюс моделей высотой 57 см - межосевое расстояние 500 мм при боковом подключении.
						Arbonia 2057 и 3057 часто можно поставить вместо старых чугунных или алюминиевых батарей без переделки труб.
						Если трубы выведены снизу, для тех же моделей доступны складские версии с нижним подключением №69 ТВВ.
					</Typography>
				</Box>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Все модели изготовлены из стали, окрашены порошковой эмалью, рассчитаны на рабочее давление 10-12 атм и
						поставляются с официальной гарантией 10 лет. Доставка выполняется по России со складов в Москве и
						Санкт-Петербурге.
					</Typography>
				</Box>
				<Box
					marginTop='30px'
					display='flex'
					flexWrap='wrap'
					gap='12px'
				>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant='contained'
							color='secondary'
						>
							Получить расчёт и цену
						</Button>
					</a>
					<a
						href='#models'
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant='outlined'
							color='secondary'
						>
							Сравнить модели
						</Button>
					</a>
				</Box>

				<Box marginTop='20px'>
					<Typography
						sx={{ ...styles.standardText }}
						component='span'
					>
						Модели 50 и 57 см, 2- и 3-трубчатые варианты, боковое и нижнее подключение, белый RAL 9016 и покраска,
						подбор по мощности.
					</Typography>
				</Box>

				<Box marginTop='50px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Быстрый выбор
					</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '16px' }}>
						<table style={quickPickTableStyle}>
							<thead>
								<tr>
									<th style={quickPickHeadCellStyle}>Задача</th>
									<th style={quickPickHeadCellStyle}>Что выбрать</th>
									<th style={quickPickHeadCellStyle}>Почему</th>
								</tr>
							</thead>
							<tbody>
								{quickPickRows.map(row => (
									<tr key={row.situation}>
										<td style={quickPickCellStyle}>{row.situation}</td>
										<td style={quickPickCellStyle}>{row.pick}</td>
										<td style={quickPickCellStyle}>{row.why}</td>
									</tr>
								))}
							</tbody>
						</table>
					</Box>
				</Box>

				<Box
					id='models'
					marginTop='60px'
				>
					<Typography
						component='h2'
						variant='h5'
					>
						Модели Arbonia под стандартное окно
					</Typography>
				</Box>

				<Box marginTop='30px'>
					<Typography
						component='h3'
						variant='h6'
					>
						Arbonia 2050
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='8px'
					>
						Высота: 500 мм · Глубина: 65 мм · Тип: 2-трубчатый · Сценарий: тонкий радиатор под окно
					</Typography>
				</Box>
				<ModelBlock
					title={'Arbonia 2050 RAL 9016, боковое подключение 3/4'}
					description={
						'Тонкий 2-трубчатый радиатор высотой 50 см и глубиной 65 мм. Хороший вариант под окно, когда важна небольшая глубина и аккуратный внешний вид. Мощность секции - 49 Вт при ΔT=60°.'
					}
					model={models.find(x => x.id === '2050-9016-12') || models[0]}
					color={color9016}
					connection={lateralConnection}
					modelLink='2050'
				/>
				<ModelBlock
					title={'Arbonia 2050 RAL 9016, №69 ТВВ'}
					description={
						'Версия Arbonia 2050 с нижним подключением и встроенным термовентилем для домов с разводкой труб по полу или скрытой подводкой снизу.'
					}
					model={models.find(x => x.id === '2050-9016-69tvv') || models[0]}
					color={color9016}
					connection={bottomConnection}
					modelLink='2050'
				/>

				<Box marginTop='50px'>
					<Typography
						component='h3'
						variant='h6'
					>
						Arbonia 2057
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='8px'
					>
						Высота: 570 мм · Глубина: 65 мм · Тип: 2-трубчатый · Сценарий: тонкая модель для замены старой батареи
					</Typography>
				</Box>
				<ModelBlock
					title={'Arbonia 2057 RAL 9016, боковое подключение 3/4'}
					description={
						'2-трубчатый радиатор высотой 57 см, глубиной 65 мм и мощностью секции 54 Вт при ΔT=60°. При боковом подключении имеет межосевое расстояние 500 мм, поэтому подходит для замены старых батарей без переноса труб.'
					}
					model={models.find(x => x.id === '2057-9016-12') || models[0]}
					color={color9016}
					connection={lateralConnection}
					modelLink='2057'
				/>
				<ModelBlock
					title={'Arbonia 2057 RAL 9016, №69 ТВВ'}
					description={
						'Тонкая модель высотой 57 см с нижним подключением. Подходит для стандартных окон в современных квартирах и частных домах с подводкой труб снизу.'
					}
					model={models.find(x => x.id === '2057-9016-69tvv') || models[0]}
					color={color9016}
					connection={bottomConnection}
					modelLink='2057'
				/>

				<Box marginTop='50px'>
					<Typography
						component='h3'
						variant='h6'
					>
						Arbonia 3050
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='8px'
					>
						Высота: 500 мм · Глубина: 105 мм · Тип: 3-трубчатый · Сценарий: мощный радиатор высотой 50 см
					</Typography>
				</Box>
				<ModelBlock
					title={'Arbonia 3050 RAL 9016, боковое подключение 3/4'}
					description={
						'3-трубчатый радиатор высотой 50 см и глубиной 105 мм. Мощность секции - 68 Вт при ΔT=60°. Выбирается под окно, когда нужна более высокая теплоотдача при той же высоте 50 см.'
					}
					model={models.find(x => x.id === '3050-9016-12') || models[0]}
					color={color9016}
					connection={lateralConnection}
					modelLink='3050'
				/>
				<ModelBlock
					title={'Arbonia 3050 RAL 9016, №69 ТВВ'}
					description={
						'Более мощная 3-трубчатая модель высотой 50 см с нижним подключением. Подходит для новых домов, где трубы подведены из пола или из стены снизу.'
					}
					model={models.find(x => x.id === '3050-9016-69tvv') || models[0]}
					color={color9016}
					connection={bottomConnection}
					modelLink='3050'
				/>

				<Box marginTop='50px'>
					<Typography
						component='h3'
						variant='h6'
					>
						Arbonia 3057
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='8px'
					>
						Высота: 570 мм · Глубина: 105 мм · Тип: 3-трубчатый · Сценарий: универсальная замена старой батареи
					</Typography>
				</Box>
				<ModelBlock
					title={'Arbonia 3057 RAL 9016, боковое подключение 3/4'}
					description={
						'Самая популярная модель стандартной высоты: 3 трубки, высота 57 см, глубина 105 мм, мощность секции 78 Вт при ΔT=60°. Межосевое 500 мм делает ее базовым вариантом для замены чугунных и алюминиевых батарей.'
					}
					model={models.find(x => x.id === '3057-9016-12') || models[0]}
					color={color9016}
					connection={lateralConnection}
					modelLink='3057'
				/>
				<ModelBlock
					title={'Arbonia 3057 RAL 9016, №69 ТВВ'}
					description={
						'Мощная складская модель под стандартное окно с нижним подключением и встроенным термовентилем. Хорошо подходит для помещений, где нужно получить больше мощности без перехода на вертикальный радиатор.'
					}
					model={models.find(x => x.id === '3057-9016-69tvv') || models[0]}
					color={color9016}
					connection={bottomConnection}
					modelLink='3057'
				/>

				<CatalogPopularLinks current='standard' />

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Как выбрать стандартный радиатор под окно
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Стандартный радиатор под окно - это горизонтальная модель высотой около 50-60 см. Такой размер обычно
						оставляет рабочие монтажные зазоры снизу и сверху, не мешает открывать окно и сохраняет привычное размещение
						отопительного прибора в зоне максимальных теплопотерь.
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Высота 50 см удобна для подоконников 70-80 см: радиатор легче вписать в нишу и оставить место для
						конвекции. Высота 57 см дает больше мощности и, при боковом подключении, стандартное межосевое расстояние
						500 мм. Поэтому 2057 и 3057 чаще выбирают для замены старых батарей, а 2050 и 3050 - когда критична высота
						подоконника.
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						2-трубчатые модели Arbonia 2050 и 2057 тоньше: глубина секции 65 мм. Они визуально легче и меньше выступают
						от стены. 3-трубчатые Arbonia 3050 и 3057 глубже: 105 мм, зато заметно мощнее. Если расчетная мощность
						помещения высокая, 3-трубчатая модель позволяет не растягивать радиатор по длине.
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Боковое подключение обычно выбирают в домах со стояками и при замене старых радиаторов. Нижнее подключение
						удобно в новостройках и частных домах, где трубы идут из пола или скрыты в стене. При сомнениях лучше
						отправить фото текущего подключения и размеры ниши: по ним можно быстро определить модель, высоту и число
						секций. Подробнее о вариантах подключения - в статье{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/connections'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								радиаторы Arbonia с боковым и нижним подключением
							</Typography>
						</a>
						. Для точного расчёта мощности и количества секций смотрите статью{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/calculate'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								как подбирать радиаторы Arbonia по мощности
							</Typography>
						</a>
						, а разницу по высоте между 3050 и 3057 разбирает статья{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								Arbonia 3050 или 3057 - какую высоту выбрать
							</Typography>
						</a>
						.
					</Typography>
				</Box>

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Для замены старых батарей
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Стандартные модели Arbonia часто выбирают вместо старых чугунных, панельных, алюминиевых или
						биметаллических батарей. Но нельзя выбирать радиатор только по внешнему размеру - перед заказом стоит
						проверить:
					</Typography>
					<Box
						component='ul'
						sx={{ pl: 3, mt: 1 }}
					>
						<li>
							<Typography sx={{ ...styles.standardText }}>межосевое расстояние и сторону подключения;</Typography>
						</li>
						<li>
							<Typography sx={{ ...styles.standardText }}>тип подключения - боковое №12 или нижнее №69 ТВВ;</Typography>
						</li>
						<li>
							<Typography sx={{ ...styles.standardText }}>требуемую тепловую мощность помещения;</Typography>
						</li>
						<li>
							<Typography sx={{ ...styles.standardText }}>
								место под подоконником для корпуса и монтажных зазоров.
							</Typography>
						</li>
					</Box>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Arbonia 2057 и 3057 особенно важны для сценария замены: высота 57 см и межосевое расстояние 500 мм при
						боковом подключении часто позволяют поставить радиатор без переделки труб. До заказа проверьте не только этот
						размер, но и глубину выводов, резьбу, сторону подачи и мощность по руководству{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/mezhosevoe-rasstoyanie-500-mm-arbonia'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								межосевое расстояние 500 мм Arbonia
							</Typography>
						</a>
						. Если старая батарея грела
						нормально, можно использовать её как ориентир по мощности, но лучше пересчитать помещение - подробнее в
						статье{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/arbonia-3057'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								замена чугунных радиаторов на Arbonia 3057
							</Typography>
						</a>{' '}
						и{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/articles/calc-radiators-by-old-ones'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								подбор радиаторов на основе уже установленных батарей
							</Typography>
						</a>
						.
					</Typography>
					<Box marginTop='20px'>
						<a
							href='/request'
							style={{ textDecoration: 'none' }}
						>
							<Button
								variant='contained'
								color='secondary'
							>
								Получить расчёт для замены батареи
							</Button>
						</a>
					</Box>
				</Box>

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Когда стандартная модель не подходит
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='20px'
					>
						Если подоконник низкий, окно начинается близко к полу или радиатор физически не помещается по высоте,
						смотрите{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/catalog/low-models'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								низкие радиаторы Arbonia
							</Typography>
						</a>
						.
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='14px'
					>
						Если под окном нет места, окно панорамное или нужно освободить стену под мебель, рассмотрите{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/catalog/high-models'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								вертикальные радиаторы Arbonia
							</Typography>
						</a>
						.
					</Typography>
					<Typography
						sx={{ ...styles.standardText }}
						marginTop='14px'
					>
						Если нужен цвет под интерьер, а не только складской белый, смотрите{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/catalog/ral9016'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								белые радиаторы Arbonia RAL 9016
							</Typography>
						</a>{' '}
						или{' '}
						<a
							style={{ textDecoration: 'none' }}
							href='/coloring'
						>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								покраску радиаторов в цвет RAL
							</Typography>
						</a>
						.
					</Typography>
				</Box>

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Частые вопросы
					</Typography>
					{faqItems.map(item => (
						<Box
							marginTop='25px'
							key={item.question}
						>
							<Typography
								component='h3'
								variant='h6'
								sx={{ fontSize: '16px' }}
							>
								{item.question}
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginTop='10px'
							>
								{item.answer}
							</Typography>
						</Box>
					))}
				</Box>

				<Box
					marginTop='60px'
					padding='25px'
					sx={{ backgroundColor: '#f6f6f6', border: '1px solid #e5e5e5' }}
				>
					<Grid
						container
						spacing={2}
						alignItems='center'
					>
						<Grid
							item
							xs={12}
							md={8}
						>
							<Typography
								component='h2'
								variant='h5'
							>
								Получить расчёт
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginTop='10px'
							>
								Пришлите размеры ниши, фото подключения и площадь помещения. Подберём модель, число секций и вариант
								подключения под вашу систему отопления.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
						>
							<a
								href='/request'
								style={{ textDecoration: 'none' }}
							>
								<Button
									variant='contained'
									color='secondary'
								>
									Перейти к запросу
								</Button>
							</a>
						</Grid>
					</Grid>
				</Box>

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Полезные статьи
					</Typography>
					<ul>
						<li>
							<a style={{ textDecoration: 'none' }} href='/articles/arbonia-2050-ili-3050'>
								<Typography sx={{ ...styles.standardTextLinkUnderline }} component='span'>
									Arbonia 2050 или 3050 - сравнение глубины и мощности
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/radiatory-arbonia-pod-okno'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Стандартные радиаторы Arbonia под окно
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 3050 или 3057 - какую высоту выбрать
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/arbonia-3057'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Замена чугунных радиаторов на Arbonia 3057
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/mezhosevoe-rasstoyanie-500-mm-arbonia'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Межосевое расстояние 500 мм Arbonia - проверка замены
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/connections'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Радиаторы Arbonia с боковым и нижним подключением
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/calculate'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Как подбирать радиаторы Arbonia по мощности
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href='/articles/calc-radiators-by-old-ones'
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Подбор радиаторов на основе уже установленных батарей
								</Typography>
							</a>
						</li>
					</ul>
				</Box>
			</Box>
		</Box>
	)
}

export default SetStandardModel
