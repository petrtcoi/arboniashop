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
		question: 'Какой высоты бывают низкие радиаторы Arbonia?',
		answer:
			'В складской подборке представлены модели высотой около 30 и 37 см: Arbonia 2030, 3030 и 3037. При выборе нужно учитывать не только корпус, но и зазоры до пола и подоконника, кронштейны и арматуру.',
	},
	{
		question: 'Чем Arbonia 2030 отличается от 3030?',
		answer:
			'Обе модели имеют высоту около 30 см. Arbonia 2030 двухтрубчатая и тоньше, а 3030 трёхтрубчатая, глубже и при одинаковом числе секций мощнее.',
	},
	{
		question: 'Подойдёт ли низкий радиатор для панорамного окна?',
		answer:
			'Да, если есть безопасное место перед нижней частью остекления и радиатор обеспечивает расчётную мощность. При полностью открытом стекле альтернативой может быть вертикальная модель на простенке.',
	},
	{
		question: 'Можно ли выбрать нижнее подключение?',
		answer:
			'Для моделей 3030 и 3037 доступны складские версии №69 ТВВ с нижними выводами и встроенным термовентилем. Arbonia 2030 в текущей складской подборке показана с боковым подключением.',
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

const SetLowModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const white = colors.find(item => item.id === '9016') || colors[0]
	const side = connections.find(item => item.id === '12') || connections[0]
	const bottom = connections.find(item => item.id === '69tvv') || connections[0]

	return (
		<Box>
			<Head><link key='canonical' rel='canonical' href='https://arboniashop.ru/catalog/low-models' /></Head>
			<Script id='low-radiators-faq-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			<PageHeader
				title='Низкие радиаторы Arbonia 30–37 см — цены, размеры и наличие'
				description='Низкие трубчатые радиаторы Arbonia 2030, 3030 и 3037 высотой 30–37 см: цены, мощность, боковое и нижнее подключение. Для низких подоконников и панорамных окон.'
			/>
			<Hero
				imgPath='/images/sliders/slide.jpeg'
				header='Низкие радиаторы Arbonia'
				subheader='Складские модели высотой 30–37 см для низких подоконников и остекления'
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='24px'>
					<Typography sx={{ ...styles.standardText }}>
						Низкие радиаторы Arbonia применяют там, где стандартный прибор высотой 50–57 см не помещается: под
						невысоким подоконником, перед остеклением, в мансарде или в нише. В складскую программу входят Arbonia
						2030, 3030 и 3037 в белом цвете RAL 9016. Их высота составляет около 30–37 см, однако монтажную возможность
						нельзя оценивать только по высоте корпуса — нужны зазоры для движения воздуха, кронштейнов, труб и арматуры.
					</Typography>
				</Box>
				<Box marginTop='18px'>
					<Typography sx={{ ...styles.standardText }}>
						Модель 2030 — двухтрубчатая и глубиной 65 мм. Модели 3030 и 3037 — трёхтрубчатые, поэтому глубже и
						мощнее при одинаковой длине. Низкая высота сама по себе не означает низкую мощность: можно увеличить число
						секций или выбрать трёхтрубчатую конструкцию. Но слишком длинный прибор не должен перекрывать проход,
						дверь на балкон или доступ к окну, поэтому подбор всегда связывает тепловой расчёт с планировкой.
					</Typography>
				</Box>
				<Box marginTop='26px' display='flex' flexWrap='wrap' gap='12px'>
					<a href='/request' style={{ textDecoration: 'none' }}><Button variant='contained' color='secondary'>Подобрать низкий радиатор</Button></a>
					<a href='/articles/panorama' style={{ textDecoration: 'none' }}><Button variant='outlined' color='secondary'>Как выбрать для панорамного окна</Button></a>
				</Box>

				<Box marginTop='46px'>
					<Typography component='h2' variant='h5'>Сравнение моделей 2030, 3030 и 3037</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '18px' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
							<thead><tr><th style={{ ...cellStyle, background: '#f6f6f6' }}>Модель</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Конструкция</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Когда выбирать</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Подключение в подборке</th></tr></thead>
							<tbody>
								<tr><td style={cellStyle}>Arbonia 2030</td><td style={cellStyle}>2 трубки, высота около 30 см, глубина 65 мм</td><td style={cellStyle}>Когда особенно важна небольшая глубина</td><td style={cellStyle}>Боковое №12</td></tr>
								<tr><td style={cellStyle}>Arbonia 3030</td><td style={cellStyle}>3 трубки, высота около 30 см, глубина 105 мм</td><td style={cellStyle}>Когда нужна большая мощность без увеличения высоты</td><td style={cellStyle}>Боковое №12 и нижнее №69 ТВВ</td></tr>
								<tr><td style={cellStyle}>Arbonia 3037</td><td style={cellStyle}>3 трубки, высота около 37 см</td><td style={cellStyle}>Когда ниша чуть выше и важна увеличенная теплоотдача</td><td style={cellStyle}>Боковое №12 и нижнее №69 ТВВ</td></tr>
							</tbody>
						</table>
					</Box>
				</Box>

				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Как измерить нишу</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Измеряйте расстояние от чистового пола до нижней поверхности подоконника или рамы. Из этой величины нужно
						вычесть зазор снизу и сверху: без свободного прохода воздуха теплоотдача ухудшается. Отдельно проверьте
						ширину ниши, глубину подоконника, плинтус, откосы и выступающие ручки. Для нижнего подключения добавьте место
						под узел и подводку труб. Если чистовой пол ещё не уложен, учитывайте его будущую отметку, иначе выбранный
						радиатор может не поместиться после завершения ремонта.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '12px' }}>
						Пошаговые замеры приведены в руководстве «<a href='/articles/radiator-pod-nizkiy-podokonnik'>как выбрать
						радиатор под низкий подоконник</a>», а различия близких моделей — в сравнении «<a href='/articles/arbonia-3030-vs-3037'>Arbonia 3030 или 3037</a>».
					</Typography>
				</Box>
				<Box marginTop='42px'>
					<Typography component='h2' variant='h5'>Мощность и размещение у стекла</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '14px' }}>
						Чем ниже радиатор, тем больше секций обычно требуется для той же тепловой нагрузки. При панорамном
						остеклении расчёт особенно важен: большая площадь стеклопакета увеличивает теплопотери, а каталожная
						мощность зависит от температурного напора. Низкий прибор у стекла помогает организовать восходящий поток
						тёплого воздуха, но не должен мешать проходу и открыванию створок. Если сохранить свободное пространство
						перед окном важнее, сравните низкий радиатор с вертикальной моделью 2180 или 3180 на простенке.
					</Typography>
				</Box>

				<Box marginTop='52px'><Typography component='h2' variant='h4'>Низкие модели в наличии</Typography></Box>
				<ModelBlock
					title='Arbonia 2030 RAL 9016, боковое подключение 3/4'
					description='Самая тонкая низкая модель складской подборки: высота около 30 см и глубина 65 мм. Подходит для небольших ниш, если расчётной мощности достаточно.'
					model={models.find(item => item.id === '2030-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3030 RAL 9016, боковое подключение 3/4'
					description='Трёхтрубчатая модель высотой около 30 см. Глубже Arbonia 2030, но передаёт больше тепла при сопоставимой длине.'
					model={models.find(item => item.id === '3030-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3030 RAL 9016, №69 ТВВ'
					description='Версия со встроенным термовентилем и нижними выводами для заранее подготовленной скрытой подводки труб.'
					model={models.find(item => item.id === '3030-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>
				<ModelBlock
					title='Arbonia 3037 RAL 9016, боковое подключение 3/4'
					description='Трёхтрубчатый радиатор высотой около 37 см. При боковом подключении имеет межосевое расстояние 300 мм, но перед заменой старой батареи размеры нужно перемерить.'
					model={models.find(item => item.id === '3037-9016-12') || models[0]}
					color={white}
					connection={side}
				/>
				<ModelBlock
					title='Arbonia 3037 RAL 9016, №69 ТВВ'
					description='Низкая трёхтрубчатая модель с нижним подключением для разводки из пола или стены. Узел и термоголовка подбираются по комплектации проекта.'
					model={models.find(item => item.id === '3037-9016-69tvv') || models[0]}
					color={white}
					connection={bottom}
				/>

				<Box marginTop='48px'>
					<Typography component='h2' variant='h5'>Частые вопросы</Typography>
					{faqItems.map(item => <Box key={item.question} marginTop='22px'><Typography component='h3' variant='h6'>{item.question}</Typography><Typography sx={{ ...styles.standardText, marginTop: '8px' }}>{item.answer}</Typography></Box>)}
				</Box>
				<CatalogPopularLinks current='low-models' />
			</Box>
		</Box>
	)
}

export default SetLowModel
