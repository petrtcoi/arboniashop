import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

import Hero from '../hero/hero'
import ModelBlock from '../modelBlock/modelBlock'
import PageHeader from '../pageHeader/pageHeader'
import { SetComponentProps } from '../../models/setComponentProps.model'
import * as styles from '../../styles/styles'
import global from '../../variables/global'
import CatalogPopularLinks from './catalogPopularLinks'

const faqItems = [
	{
		question: 'Что значит «трубчатый радиатор»?',
		answer:
			'Нагревательные секции такого радиатора собраны из стальных трубок, соединённых коллекторами. У Arbonia секции свариваются в единый прибор, а число рядов трубок обозначается первой цифрой модели: например, 2050 — двухтрубчатый, 3050 — трёхтрубчатый радиатор.',
	},
	{
		question: 'Какая модель Arbonia лучше: двухтрубчатая или трёхтрубчатая?',
		answer:
			'Двухтрубчатые модели тоньше и меньше выступают от стены. Трёхтрубчатые глубже, но при той же высоте и длине дают больше тепла. Выбор делают по расчётной мощности и доступной глубине ниши.',
	},
	{
		question: 'Можно ли установить трубчатый радиатор Arbonia в квартире?',
		answer:
			'Можно, если рабочие параметры выбранной модели соответствуют проектным параметрам системы отопления дома. Для центрального отопления до покупки нужно уточнить давление, схему подключения и требования управляющей организации.',
	},
	{
		question: 'Есть ли трубчатые радиаторы Arbonia в наличии?',
		answer:
			'На складе поддерживаются популярные низкие, стандартные и вертикальные модели в белом RAL 9016, а часть моделей — также в тёмных цветах. Актуальное наличие и цену конкретного размера лучше подтвердить перед оплатой.',
	},
	{
		question: 'Как выбрать число секций?',
		answer:
			'Число секций определяют не только по площади. В расчёте учитывают теплопотери помещения, высоту потолка, площадь остекления, температуру теплоносителя и место установки. Мы можем подобрать размер по плану или исходным данным комнаты.',
	},
]

const faqJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqItems.map(item => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: { '@type': 'Answer', text: item.answer },
	})),
}

const cellStyle: React.CSSProperties = {
	border: '1px solid #dddddd',
	padding: '10px 12px',
	verticalAlign: 'top',
}

const SetTubularModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const white = colors.find(item => item.id === '9016') || colors[0]
	const side = connections.find(item => item.id === '12') || connections[0]
	const bottom = connections.find(item => item.id === '69tvv') || connections[0]

	return (
		<Box>
			<Head>
				<link
					key='canonical'
					rel='canonical'
					href='https://arboniashop.ru/catalog/stalnye-trubchatye-radiatory'
				/>
			</Head>
			<Script
				id='tubular-radiators-faq-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<PageHeader
				title='Стальные трубчатые радиаторы Arbonia — купить в Москве, цены и размеры'
				description='Стальные трубчатые радиаторы Arbonia: низкие, под окно и вертикальные модели, боковое и нижнее подключение. Цены, размеры, мощность, наличие, подбор секций и доставка по России.'
			/>
			<Hero
				imgPath='/images/sliders/slide.jpeg'
				header='Стальные трубчатые радиаторы Arbonia'
				subheader='Складские модели для квартиры и дома: подбор по мощности, размерам и подключению'
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='24px'>
					<Typography sx={{ ...styles.standardText }}>
						Стальные трубчатые радиаторы Arbonia выбирают, когда отопительный прибор должен не только обогревать
						помещение, но и аккуратно вписываться в интерьер. В отличие от типовой панельной батареи, конструкция
						набирается из узких секций. Поэтому можно подобрать высоту, длину и глубину под конкретную нишу: поставить
						низкую модель перед остеклением, стандартную — под окно, а вертикальную — на свободный простенок.
					</Typography>
				</Box>
				<Box marginTop='18px'>
					<Typography sx={{ ...styles.standardText }}>
						В каталоге ниже показаны основные складские серии в белом цвете RAL 9016. Цена зависит от модели, числа
						секций, типа подключения и цвета. Чтобы не покупать радиатор «по площади на глаз», пришлите план комнаты,
						размер места установки, сведения об остеклении и температурном режиме системы. Мы сверим мощность,
						габариты, наличие и подготовим понятный вариант комплектации.
					</Typography>
				</Box>
				<Box
					marginTop='28px'
					display='flex'
					flexWrap='wrap'
					gap='12px'
				>
					<a href='/request' style={{ textDecoration: 'none' }}>
						<Button variant='contained' color='secondary'>Получить расчёт и цену</Button>
					</a>
					<a href='#models' style={{ textDecoration: 'none' }}>
						<Button variant='outlined' color='secondary'>Перейти к моделям</Button>
					</a>
				</Box>

				<Box marginTop='48px'>
					<Typography component='h2' variant='h5'>Как выбрать трубчатый радиатор Arbonia</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '16px' }}>
						Маркировка помогает быстро понять конструкцию. Первая цифра показывает количество трубок в глубину, а
						последние цифры — приблизительную высоту в сантиметрах. Например, Arbonia 2050 — двухтрубчатая модель
						высотой около 50 см, а 3180 — трёхтрубчатая вертикальная модель высотой около 180 см. Точные монтажные
						размеры нужно проверять в карточке выбранной модификации.
					</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '18px' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
							<thead><tr><th style={{ ...cellStyle, background: '#f6f6f6' }}>Задача</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Подходящие серии</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Что проверить</th></tr></thead>
							<tbody>
								<tr><td style={cellStyle}>Под обычное окно</td><td style={cellStyle}>2050, 2057, 3050, 3057</td><td style={cellStyle}>Высоту ниши, требуемую мощность и межосевое расстояние труб</td></tr>
								<tr><td style={cellStyle}>Под низкий подоконник</td><td style={cellStyle}>2030, 3030, 3037</td><td style={cellStyle}>Монтажные зазоры сверху и снизу, место для арматуры</td></tr>
								<tr><td style={cellStyle}>На узкий простенок</td><td style={cellStyle}>2180, 3180</td><td style={cellStyle}>Ширину стены, высоту помещения и возможность подвести трубы</td></tr>
								<tr><td style={cellStyle}>Скрытая разводка по полу</td><td style={cellStyle}>Версии №69 ТВВ</td><td style={cellStyle}>Сторону подачи, узел подключения и совместимую термоголовку</td></tr>
								<tr><td style={cellStyle}>Замена старой батареи</td><td style={cellStyle}>2057 или 3057 с №12</td><td style={cellStyle}>Фактическое межосевое расстояние и состояние существующих труб</td></tr>
							</tbody>
						</table>
					</Box>
				</Box>

				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Два или три ряда трубок</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Двухтрубчатые модели серий 20 и 21 имеют меньшую глубину и визуально легче. Они удобны в проходных зонах,
						узких нишах и там, где радиатор не должен заметно выступать от стены. Трёхтрубчатые серии 30 и 31 глубже,
						но передают больше тепла при сопоставимой высоте и длине. Это не делает один тип универсально лучше
						другого: сначала определяют тепловую нагрузку, затем выбирают компоновку, которая помещается в отведённое
						пространство. Если длина стены ограничена, более глубокая трёхтрубчатая модель часто позволяет получить
						нужную мощность меньшим числом секций.
					</Typography>
				</Box>

				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Боковое или нижнее подключение</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Боковое подключение №12 обычно выбирают при замене существующей батареи: подающие трубы уже выведены из
						стены или стояка. Нижнее подключение №69 ТВВ удобно в новом ремонте, когда трубы заранее прокладывают в
						полу или стене. У таких версий встроен термовентиль, но узел подключения и термостатическая головка
						подбираются отдельно. До заказа важно согласовать сторону подачи и размеры выводов — это дешевле, чем
						переделывать чистовую отделку после доставки радиатора.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '12px' }}>
						Подробная схема и монтажные проверки собраны в руководстве «<a href='/articles/connections'>нижнее
						подключение Arbonia №69 ТВВ</a>». Для сравнения конструкций прочитайте также материал «<a href='/articles/column-radiators'>что такое трубчатый радиатор</a>».
					</Typography>
				</Box>

				<Box id='models' marginTop='54px'>
					<Typography component='h2' variant='h4'>Популярные модели в наличии</Typography>
				</Box>
				<ModelBlock
					title='Arbonia 2050 RAL 9016 — тонкий радиатор под окно'
					description='Двухтрубчатая модель высотой около 50 см и глубиной 65 мм. Подходит для неглубоких ниш и интерьеров, где важно уменьшить выступ радиатора от стены.'
					model={models.find(item => item.id === '2050-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3050 RAL 9016 — трёхтрубчатая модель'
					description='Более глубокий и мощный вариант высотой около 50 см. Подходит, когда длина стены ограничена, а расчётная мощность двухтрубчатой модели недостаточна.'
					model={models.find(item => item.id === '3050-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3030 RAL 9016 — низкий трубчатый радиатор'
					description='Низкая трёхтрубчатая модель для невысоких подоконников и зон остекления. Перед заказом нужно оставить монтажные зазоры и проверить, что выбранного числа секций достаточно по мощности.'
					model={models.find(item => item.id === '3030-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 2180 RAL 9016 — вертикальный двухтрубчатый радиатор'
					description='Высокая и сравнительно тонкая модель для простенка, кухни-гостиной или комнаты с панорамным окном, где места под подоконником нет.'
					model={models.find(item => item.id === '2180-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3180 RAL 9016 — вертикальная модель повышенной глубины'
					description='Трёхтрубчатый вертикальный радиатор для случаев, когда на коротком участке стены требуется получить больше тепла. Итоговую ширину определяет необходимое число секций.'
					model={models.find(item => item.id === '3180-9016-12') || models[0]}
					color={white}
					connection={side}
				/>

				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Что проверить перед покупкой</Typography>
					<Typography component='div' sx={{ ...styles.standardText, marginTop: '14px' }}>
						<ol>
							<li>Рассчитать теплопотери комнаты и требуемую мощность при фактическом температурном графике.</li>
							<li>Измерить чистовую высоту и ширину места установки, оставив зазоры для движения воздуха.</li>
							<li>Согласовать боковое или нижнее подключение, сторону подачи и расположение труб.</li>
							<li>Проверить рабочее давление и требования системы отопления, особенно в многоквартирном доме.</li>
							<li>Уточнить комплектацию: кронштейны, запорная арматура, узел нижнего подключения и термоголовка.</li>
						</ol>
					</Typography>
				</Box>

				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Частые вопросы</Typography>
					{faqItems.map(item => <Box key={item.question} marginTop='22px'><Typography component='h3' variant='h6'>{item.question}</Typography><Typography sx={{ ...styles.standardText, marginTop: '8px' }}>{item.answer}</Typography></Box>)}
				</Box>
				<CatalogPopularLinks current='stalnye-trubchatye-radiatory' />
			</Box>
		</Box>
	)
}

export default SetTubularModel
