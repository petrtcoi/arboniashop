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
		question: 'Что означает подключение Arbonia №69 ТВВ?',
		answer:
			'Это нижнее подключение с межосевым расстоянием выводов 50 мм и встроенным термовентилем. Трубы подходят снизу, поэтому разводку можно заранее скрыть в полу или стене.',
	},
	{
		question: 'Входит ли узел подключения в комплект радиатора?',
		answer:
			'Комплектация зависит от выбранной позиции. Нижний узел, термостатическая головка и запорная арматура часто приобретаются отдельно. Перед оплатой мы фиксируем состав заказа, чтобы монтажнику было понятно, какие элементы уже включены.',
	},
	{
		question: 'Можно ли перепутать подачу и обратку?',
		answer:
			'Да, поэтому направление потока и расположение подающего вывода нужно проверить по документации конкретной модификации до монтажа. Ошибочная подводка способна вызвать шум и ухудшить регулирование.',
	},
	{
		question: 'Подходит ли №69 ТВВ для замены старой батареи?',
		answer:
			'Подходит, если трубы можно перенести к нижним выводам. При простой замене без ремонта чаще удобнее боковое подключение №12, совпадающее с существующей разводкой.',
	},
	{
		question: 'Нужна ли термоголовка?',
		answer:
			'Для автоматического поддержания температуры на встроенный клапан устанавливают совместимую термостатическую головку. Возможность и правила регулирования зависят от схемы системы отопления; в однотрубной системе особенно важно не нарушить циркуляцию по стояку.',
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

const cellStyle: React.CSSProperties = { border: '1px solid #dddddd', padding: '10px 12px', verticalAlign: 'top' }

const SetBottomConnectionModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const white = colors.find(item => item.id === '9016') || colors[0]
	const bottom = connections.find(item => item.id === '69tvv') || connections[0]

	return (
		<Box>
			<Head><link key='canonical' rel='canonical' href='https://arboniashop.ru/catalog/arbonia-s-nizhnim-podklyucheniem' /></Head>
			<Script id='bottom-connection-faq-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			<PageHeader
				title='Радиаторы Arbonia с нижним подключением №69 ТВВ — цены и наличие'
				description='Радиаторы Arbonia с нижним подключением №69 ТВВ и встроенным термовентилем: низкие, стандартные и вертикальные модели. Цены, наличие, подбор узла и доставка по России.'
			/>
			<Hero
				imgPath='/images/sliders/slide.jpeg'
				header='Arbonia с нижним подключением №69 ТВВ'
				subheader='Модели со встроенным термовентилем для скрытой подводки труб'
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='24px'>
					<Typography sx={{ ...styles.standardText }}>
						Нижнее подключение Arbonia №69 ТВВ выбирают для нового ремонта, когда трубы отопления заранее прокладывают
						в полу или стене и хотят оставить боковые части радиатора свободными. Два вывода расположены снизу с
						межосевым расстоянием 50 мм, а в корпус встроен термовентиль. После установки совместимой термоголовки
						температуру в комнате можно регулировать автоматически в пределах возможностей системы отопления.
					</Typography>
				</Box>
				<Box marginTop='18px'>
					<Typography sx={{ ...styles.standardText }}>
						В каталоге собраны низкие, стандартные и вертикальные складские модели в RAL 9016. Цена зависит от серии,
						числа секций и комплектации. Нижний узел, термоголовка и часть монтажной арматуры могут поставляться
						отдельно, поэтому перед оплатой мы проверяем не только радиатор, но и схему подводки, сторону подачи и список
						необходимых деталей.
					</Typography>
				</Box>
				<Box marginTop='28px' display='flex' flexWrap='wrap' gap='12px'>
					<a href='/request' style={{ textDecoration: 'none' }}><Button variant='contained' color='secondary'>Подобрать радиатор и комплект</Button></a>
					<a href='#models' style={{ textDecoration: 'none' }}><Button variant='outlined' color='secondary'>Модели №69 ТВВ</Button></a>
				</Box>

				<Box marginTop='48px'>
					<Typography component='h2' variant='h5'>Когда нижнее подключение удобно</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '18px' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
							<thead><tr><th style={{ ...cellStyle, background: '#f6f6f6' }}>Ситуация</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Рекомендация</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Почему</th></tr></thead>
							<tbody>
								<tr><td style={cellStyle}>Новый дом или капитальный ремонт</td><td style={cellStyle}>Заранее вывести трубы под №69 ТВВ</td><td style={cellStyle}>Подводка остаётся компактной и не занимает боковые зоны</td></tr>
								<tr><td style={cellStyle}>Трубы уже выходят из пола с шагом 50 мм</td><td style={cellStyle}>Сверить ось радиатора и сторону подачи</td><td style={cellStyle}>Даже совпадающий шаг не гарантирует правильное расположение выводов</td></tr>
								<tr><td style={cellStyle}>Замена батареи без переделки труб</td><td style={cellStyle}>Сравнить с боковым №12</td><td style={cellStyle}>Существующая разводка часто рассчитана на боковое подключение</td></tr>
								<tr><td style={cellStyle}>Нужна автоматическая регулировка</td><td style={cellStyle}>Добавить совместимую термоголовку</td><td style={cellStyle}>Она управляет встроенным клапаном по температуре воздуха</td></tr>
								<tr><td style={cellStyle}>Однотрубный стояк в квартире</td><td style={cellStyle}>Согласовать схему с инженером</td><td style={cellStyle}>Нельзя перекрывать циркуляцию по общему стояку; может потребоваться байпас</td></tr>
							</tbody>
						</table>
					</Box>
				</Box>

				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Что означает №69 ТВВ</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Это обозначение варианта присоединения, а не отдельной серии радиаторов. Один и тот же типоразмер Arbonia
						может выпускаться с боковыми патрубками или с нижними выводами и встроенным клапаном. У версии №69 ТВВ
						подключения находятся снизу и разнесены на 50 мм. Их точное положение относительно края прибора необходимо
						брать из монтажной схемы конкретной модели: общая высота, число секций и сторона клапана влияют на разметку.
					</Typography>
				</Box>
				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Узел, клапан и термостатическая головка</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Нижний узел соединяет выводы радиатора с трубами и позволяет перекрыть прибор для обслуживания. Встроенный
						термовентиль регулирует расход теплоносителя, а термоголовка воздействует на шток клапана в зависимости от
						температуры воздуха. Это три разных элемента, и не каждый из них обязательно входит в цену радиатора.
						Термоголовку нельзя закрывать плотной шторой или мебелью: в замкнутом тёплом пространстве она будет
						неправильно оценивать температуру комнаты. Для сложного размещения используют решения с выносным датчиком.
					</Typography>
				</Box>
				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Подача, обратка и монтаж</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						До стяжки и чистовой отделки монтажник должен получить схему радиатора и отметить оси выводов. Важно не
						поменять местами подачу и обратку: неправильный поток через клапан может ухудшить регулирование и вызвать
						шум. Трубы выводят с запасом для подключения, но так, чтобы узел не оказался под нагрузкой. После монтажа
						систему опрессовывают, удаляют воздух и проверяют герметичность соединений. Только после этого устанавливают
						термоголовку и выполняют настройку.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '12px' }}>
						Подробный чек-лист, схема выбора арматуры и типичные ошибки есть в статье «<a href='/articles/connections'>нижнее
						подключение Arbonia №69 ТВВ</a>».
					</Typography>
				</Box>

				<Box id='models' marginTop='54px'><Typography component='h2' variant='h4'>Популярные радиаторы с подключением №69 ТВВ</Typography></Box>
				<ModelBlock
					title='Arbonia 3030 RAL 9016, №69 ТВВ'
					description='Низкий трёхтрубчатый радиатор для невысокого подоконника или зоны остекления. До заказа учитывают высоту нижнего узла и доступ для монтажа.'
					model={models.find(item => item.id === '3030-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 3037 RAL 9016, №69 ТВВ'
					description='Низкая модель высотой около 37 см с большей теплоотдачей, чем двухтрубчатые варианты сопоставимой длины.'
					model={models.find(item => item.id === '3037-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 2050 RAL 9016, №69 ТВВ'
					description='Тонкая двухтрубчатая модель высотой около 50 см для стандартной оконной ниши и скрытой подводки труб.'
					model={models.find(item => item.id === '2050-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 3050 RAL 9016, №69 ТВВ'
					description='Трёхтрубчатый радиатор высотой около 50 см. Даёт больше мощности на сопоставимой длине, но требует больше места по глубине.'
					model={models.find(item => item.id === '3050-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 2180 RAL 9016, №69 ТВВ'
					description='Высокий двухтрубчатый радиатор с нижним подключением для узкого простенка. Подходит для нового ремонта с заранее подготовленными выводами.'
					model={models.find(item => item.id === '2180-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>

				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Чек-лист до заказа</Typography>
					<Typography component='div' sx={{ ...styles.standardText, marginTop: '14px' }}>
						<ol>
							<li>Определить модель и число секций по тепловому расчёту.</li>
							<li>Получить монтажный чертёж именно выбранной модификации.</li>
							<li>Проверить расположение подачи и обратки, расстояние 50 мм между осями.</li>
							<li>Выбрать узел подключения с подходящим типом присоединения к трубам.</li>
							<li>Уточнить, входят ли кронштейны, клапанная вставка и термоголовка в комплектацию.</li>
							<li>Согласовать схему с монтажником до вывода труб и выполнения стяжки.</li>
						</ol>
					</Typography>
				</Box>
				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Частые вопросы</Typography>
					{faqItems.map(item => <Box key={item.question} marginTop='22px'><Typography component='h3' variant='h6'>{item.question}</Typography><Typography sx={{ ...styles.standardText, marginTop: '8px' }}>{item.answer}</Typography></Box>)}
				</Box>
				<CatalogPopularLinks current='arbonia-s-nizhnim-podklyucheniem' />
			</Box>
		</Box>
	)
}

export default SetBottomConnectionModel
