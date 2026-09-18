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
		question: 'Какой радиатор поставить рядом с панорамным окном?',
		answer:
			'Если перед стеклом есть невысокая непрозрачная часть или свободное место, можно использовать низкий радиатор Arbonia 2030, 3030 или 3037. Если закрывать обзор нельзя, чаще выбирают вертикальную модель 2180 или 3180 на ближайшем простенке. Решение проверяют расчётом теплопотерь.',
	},
	{
		question: 'Можно ли заменить внутрипольный конвектор настенным радиатором?',
		answer:
			'Иногда можно, но приборы создают разные воздушные потоки и предъявляют разные требования к монтажу. Нужно проверить теплопотери зоны остекления, расположение мебели и возможность переноса труб. Автоматическая замена один к одному без расчёта нежелательна.',
	},
	{
		question: 'Низкий или вертикальный радиатор лучше для панорамного окна?',
		answer:
			'Низкий радиатор формирует восходящий поток ближе к стеклу, но занимает место вдоль окна. Вертикальный освобождает остекление, зато его ставят сбоку и отдельно проверяют распределение тепла. Выбор зависит от планировки и доступной мощности.',
	},
	{
		question: 'Как рассчитать длину радиатора для панорамного окна?',
		answer:
			'Длину определяют после расчёта мощности. На результат влияют площадь и характеристики стеклопакета, наружная температура, высота потолка, температура теплоносителя и модель радиатора. Правило «по ширине окна» можно использовать только как предварительный ориентир.',
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

const SetPanoramicModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const white = colors.find(item => item.id === '9016') || colors[0]
	const side = connections.find(item => item.id === '12') || connections[0]
	const bottom = connections.find(item => item.id === '69tvv') || connections[0]

	return (
		<Box>
			<Head><link key='canonical' rel='canonical' href='https://arboniashop.ru/catalog/radiatory-dlya-panoramnyh-okon' /></Head>
			<Script id='panoramic-radiators-faq-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			<PageHeader
				title='Радиаторы для панорамных окон — низкие и вертикальные Arbonia'
				description='Радиаторы Arbonia для панорамных окон: низкие модели 2030, 3030, 3037 и вертикальные 2180, 3180. Сравнение решений, цены, мощность, подключение и подбор по теплопотерям.'
			/>
			<Hero
				imgPath='/images/sliders/high.jpeg'
				header='Радиаторы для панорамных окон'
				subheader='Низкие модели перед остеклением и вертикальные радиаторы на простенке'
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='24px'>
					<Typography sx={{ ...styles.standardText }}>
						Панорамное остекление даёт больше света, но усложняет размещение отопления: привычного подоконника нет,
						холодная поверхность стеклопакета велика, а радиатор не должен перекрывать проход и обзор. Для таких
						помещений обычно рассматривают два решения Arbonia: низкий трубчатый радиатор вдоль окна или вертикальный
						радиатор на соседнем простенке. Эта страница помогает выбрать тип прибора и сразу перейти к доступным
						размерам, но окончательная модель определяется после расчёта теплопотерь.
					</Typography>
				</Box>
				<Box marginTop='18px'>
					<Typography sx={{ ...styles.standardText }}>
						Низкие Arbonia 2030, 3030 и 3037 сохраняют обзор и создают восходящий поток воздуха ближе к стеклу.
						Вертикальные 2180 и 3180 не занимают место перед остеклением и подходят для узкого участка стены. Для
						обоих вариантов доступны модификации с боковым и нижним подключением. В наличии чаще поддерживается белый
						RAL 9016; другие цвета и нестандартные размеры можно заказать после согласования срока.
					</Typography>
				</Box>
				<Box marginTop='28px' display='flex' flexWrap='wrap' gap='12px'>
					<a href='/request' style={{ textDecoration: 'none' }}><Button variant='contained' color='secondary'>Рассчитать радиатор</Button></a>
					<a href='#models' style={{ textDecoration: 'none' }}><Button variant='outlined' color='secondary'>Посмотреть модели</Button></a>
				</Box>

				<Box marginTop='48px'>
					<Typography component='h2' variant='h5'>Какое решение выбрать</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '18px' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
							<thead><tr><th style={{ ...cellStyle, background: '#f6f6f6' }}>Условия</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Решение</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Особенности</th></tr></thead>
							<tbody>
								<tr><td style={cellStyle}>Есть место вдоль нижней части окна</td><td style={cellStyle}>Низкие 2030, 3030, 3037</td><td style={cellStyle}>Поток тёплого воздуха формируется ближе к стеклу; нужно оставить проход и монтажные зазоры</td></tr>
								<tr><td style={cellStyle}>Остекление должно оставаться полностью открытым</td><td style={cellStyle}>Вертикальные 2180, 3180</td><td style={cellStyle}>Прибор переносится на простенок; важно проверить распределение тепла по комнате</td></tr>
								<tr><td style={cellStyle}>Очень мало места по глубине</td><td style={cellStyle}>Двухтрубчатые 2030 или 2180</td><td style={cellStyle}>Глубина меньше, но для требуемой мощности может понадобиться больше секций</td></tr>
								<tr><td style={cellStyle}>Ограничена длина стены</td><td style={cellStyle}>Трёхтрубчатые 3030, 3037 или 3180</td><td style={cellStyle}>Больше тепла на сопоставимой длине, но прибор глубже</td></tr>
								<tr><td style={cellStyle}>Трубы спрятаны в полу</td><td style={cellStyle}>Версии №69 ТВВ</td><td style={cellStyle}>Нужно заранее задать сторону подачи и комплект нижнего подключения</td></tr>
							</tbody>
						</table>
					</Box>
				</Box>

				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Почему одной площади комнаты недостаточно</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						При панорамном остеклении доля теплопотерь через окно может быть существенно выше, чем в комнате с
						обычным проёмом. Поэтому упрощённый расчёт по квадратным метрам легко даёт ошибку. Для подбора нужны площадь
						и коэффициент теплопередачи стеклопакета, размеры наружных стен, высота потолка, расчётная температура на
						улице и температурный график отопления. Каталожная мощность радиатора указывается для заданного температурного
						напора; в низкотемпературной системе фактическая отдача будет ниже. Если помещение проектируется вместе с
						тёплым полом, мощность двух систем считают совместно.
					</Typography>
				</Box>
				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Низкий радиатор перед стеклом</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Такое размещение близко к классической схеме «радиатор под окном»: нагретый воздух поднимается возле
						холодной поверхности. Но радиатор нельзя прижимать к стеклу или полу. Необходимо оставить расстояние для
						конвекции, доступа к арматуре и уборки. При выборе проверьте не только высоту корпуса, но и высоту ножек или
						кронштейнов, расположение труб и глубину прибора. Длинный радиатор также не должен мешать открыванию двери на
						террасу. Для маршрута прохода особенно важны общая глубина и выступ термостатической головки.
					</Typography>
				</Box>
				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Вертикальный радиатор на простенке</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Вертикальная модель использует высоту стены и позволяет оставить панорамное окно открытым. Arbonia 2180
						тоньше, а 3180 глубже и мощнее при сопоставимой ширине. Прибор размещают так, чтобы он не конфликтовал со
						шторами, выключателями, дверью и мебелью. Стена и крепёж должны соответствовать массе заполненного радиатора.
						Если источник тепла удалён от остекления, проектировщик проверяет циркуляцию воздуха и отсутствие холодной
						зоны у стекла; иногда оптимальным становится сочетание радиатора с тёплым полом или конвектором.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '12px' }}>
						Больше вариантов расстановки и типичные ошибки разобраны в статье «<a href='/articles/panorama'>как
						отапливать комнату с панорамными окнами</a>».
					</Typography>
				</Box>

				<Box id='models' marginTop='54px'><Typography component='h2' variant='h4'>Модели Arbonia для зоны остекления</Typography></Box>
				<ModelBlock
					title='Arbonia 2030 RAL 9016 — низкий и тонкий'
					description='Двухтрубчатая модель высотой около 30 см и глубиной 65 мм. Подходит, если приоритетом остаются небольшая высота и минимальный выступ от линии остекления.'
					model={models.find(item => item.id === '2030-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3030 RAL 9016 — низкий и более мощный'
					description='Трёхтрубчатая модель высотой около 30 см. Её выбирают, когда двухтрубчатого варианта недостаточно по мощности, а увеличить высоту нельзя.'
					model={models.find(item => item.id === '3030-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 3037 RAL 9016 — низкая модель высотой около 37 см'
					description='Компромисс между очень низкими сериями и стандартными радиаторами. Подходит для невысокого парапета или подоконника, если монтажные зазоры позволяют эту высоту.'
					model={models.find(item => item.id === '3037-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 2180 RAL 9016 — высокий двухтрубчатый'
					description='Тонкая вертикальная модель для узкого простенка рядом с панорамным окном. Итоговую ширину набирают числом секций после расчёта мощности.'
					model={models.find(item => item.id === '2180-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3180 RAL 9016 — высокий трёхтрубчатый'
					description='Вертикальный вариант повышенной глубины и мощности для ограниченного по ширине участка стены. Требует проверки места под кронштейны и подводку труб.'
					model={models.find(item => item.id === '3180-9016-12') || models[0]}
					color={white}
					connection={side}
				/>

				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Данные для точного подбора</Typography>
					<Typography component='div' sx={{ ...styles.standardText, marginTop: '14px' }}>
						<ul>
							<li>план и площадь комнаты, высота потолка;</li>
							<li>ширина и высота панорамного окна, характеристики стеклопакета;</li>
							<li>город или расчётная наружная температура;</li>
							<li>температура подачи и обратки, тип системы отопления;</li>
							<li>размер свободного места, фотографии стены и расположение труб;</li>
							<li>желательный цвет и вариант подключения.</li>
						</ul>
					</Typography>
				</Box>
				<Box marginTop='50px'>
					<Typography component='h2' variant='h5'>Частые вопросы</Typography>
					{faqItems.map(item => <Box key={item.question} marginTop='22px'><Typography component='h3' variant='h6'>{item.question}</Typography><Typography sx={{ ...styles.standardText, marginTop: '8px' }}>{item.answer}</Typography></Box>)}
				</Box>
				<CatalogPopularLinks current='radiatory-dlya-panoramnyh-okon' />
			</Box>
		</Box>
	)
}

export default SetPanoramicModel
