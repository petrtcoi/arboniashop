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
		question: 'Какой радиатор Arbonia поставить под окно?',
		answer:
			'Для стандартного окна чаще всего выбирают модели высотой 50-57 см: 2050, 2057, 3050 или 3057. Если нужна тонкая модель, подойдут 2050 и 2057; если важнее мощность, лучше смотреть на 3050 и 3057.',
	},
	{
		question: 'Подходит ли Arbonia на замену чугунной батареи?',
		answer:
			'Да, особенно модели высотой 57 см с боковым подключением. Arbonia 2057 и 3057 имеют межосевое расстояние 500 мм, поэтому часто ставятся вместо старых чугунных или алюминиевых батарей без переноса труб.',
	},
	{
		question: 'Что такое межосевое расстояние 500 мм?',
		answer:
			'Это расстояние между центрами верхней и нижней подводящей трубы при боковом подключении. Для старых радиаторов в российских квартирах 500 мм является самым распространенным размером.',
	},
	{
		question: 'Arbonia 2050 или 3050 - что выбрать?',
		answer:
			'2050 тоньше и легче: глубина секции 65 мм, мощность 49 Вт. 3050 глубже: 105 мм, зато мощность секции 68 Вт. При ограниченной глубине берут 2050, при нехватке мощности - 3050.',
	},
	{
		question: '50 или 57 см - какая высота лучше?',
		answer:
			'Высота 50 см удобна под подоконники 70-80 см и дает больше монтажного зазора. Высота 57 см мощнее и при боковом подключении дает межосевое 500 мм для замены старых батарей.',
	},
	{
		question: 'Боковое или нижнее подключение выбрать?',
		answer:
			'Боковое подключение чаще выбирают при замене радиаторов в домах со стояками. Нижнее подключение удобно в новых домах и частных системах, где трубы идут из пола или стены снизу.',
	},
]

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
				title={'Радиаторы Arbonia под окно (50–60 см) в наличии | ArboniaShop'}
				description='Стальные трубчатые радиаторы Arbonia высотой 50–57 см под окно. Модели 2050, 2057, 3050, 3057 в наличии, боковое и нижнее подключение, межосевое 500 мм. Доставка по России, гарантия 10 лет.'
			/>
			<Hero
				imgPath={'/images/sliders/slide.jpeg'}
				header={'Радиаторы Arbonia под окно'}
				subheader={'Складские модели высотой 50–60 см'}
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Радиаторы Arbonia высотой 50-57 см - самый универсальный формат для установки под окно. Они подходят для
						стандартных подоконников, хорошо перекрывают зону холодного воздуха у остекления и при этом не перегружают
						интерьер. В наличии поддерживаются 2-трубчатые и 3-трубчатые модели в белом цвете RAL 9016.
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
				<Box marginTop='30px'>
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant='contained'
							color='secondary'
						>
							Получить расчёт
						</Button>
					</a>
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
						секций.
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
