import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'
import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

const faqItems = [
	{
		question: 'Какой радиатор лучше поставить у панорамного окна?',
		answer:
			'Если перед стеклом есть место, низкий радиатор помогает сформировать восходящий поток рядом с остеклением. Если обзор и проход должны оставаться свободными, используют вертикальную модель на простенке. Оба варианта проверяют тепловым расчётом.',
	},
	{
		question: 'Обязательно ли ставить радиатор по всей ширине окна?',
		answer:
			'Нет. Ширина окна — лишь ориентир для распределения тёплого воздуха. Длину прибора определяют по его мощности в фактическом температурном режиме, планировке и доступному месту.',
	},
	{
		question: 'Что выбрать: низкий радиатор или внутрипольный конвектор?',
		answer:
			'Низкий радиатор проще обслуживать и он остаётся видимым. Внутрипольный конвектор сохраняет свободный обзор, но требует ниши в полу, регулярной очистки и корректного проекта. Сравнивают мощность, шум, глубину пола, монтаж и сервис.',
	},
	{
		question: 'Можно ли обойтись только тёплым полом?',
		answer:
			'Иногда можно, если его допустимой мощности достаточно для расчётных теплопотерь и температура поверхности остаётся комфортной. При большой площади стекла часто используют комбинированную систему.',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: 'Радиаторы для панорамных окон: низкие, вертикальные или внутрипольные',
	description:
		'Как выбрать отопление для панорамного окна: расчёт теплопотерь, низкие и вертикальные радиаторы Arbonia, внутрипольные конвекторы, тёплый пол и монтажные зазоры.',
	mainEntityOfPage: 'https://arboniashop.ru/articles/panorama',
	author: { '@type': 'Organization', name: 'ArboniaShop' },
	publisher: { '@type': 'Organization', name: 'ArboniaShop' },
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

const cellStyle: React.CSSProperties = { border: '1px solid #dddddd', padding: '10px 12px', verticalAlign: 'top' }

const ArticlePage: NextPage = () => {
	return (
		<Box>
			<Head><link key='canonical' rel='canonical' href='https://arboniashop.ru/articles/panorama' /></Head>
			<Script id='panorama-article-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
			<Script id='panorama-faq-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			<PageHeader
				title='Радиаторы для панорамных окон: низкие или вертикальные'
				description='Как выбрать отопление для панорамного окна: низкие и вертикальные радиаторы Arbonia, расчёт теплопотерь, размещение, подключение, сравнение с конвектором и тёплым полом.'
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{ title: 'Радиаторы для панорамных окон', link: '/articles/panorama' },
				]}
			/>
			<Hero
				imgPath='/images/sliders/high.jpeg'
				header='Радиаторы для панорамных окон'
				subheader='Как сохранить обзор и компенсировать теплопотери большой площади остекления'
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '920px', margin: 'auto' }}>
				<Typography sx={{ ...styles.standardText }} marginTop='28px'>
					Панорамное окно меняет привычную схему отопления: подоконника нет, стекло начинается почти от пола, а
					обычная батарея перекрывает вид или проход. При этом наружное остекление остаётся одной из основных зон
					теплопотерь. Задача проекта — не просто найти «самый низкий» прибор, а компенсировать нагрузку, организовать
					комфортное движение воздуха и сохранить доступ к двери, шторам и арматуре.
				</Typography>
				<Typography sx={{ ...styles.standardText }} marginTop='18px'>
					Для Arbonia обычно сравнивают два решения: низкие модели 2030, 3030 и 3037 перед нижней частью окна или
					вертикальные 2180 и 3180 на ближайшем простенке. В сложном проекте к ним добавляют внутрипольный конвектор
					или тёплый пол. Ни одно решение не выбирают только по фотографии: сначала нужен расчёт теплопотерь, затем
					проверка мощности прибора в реальном температурном режиме.
				</Typography>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Почему зона остекления требует отдельного расчёта</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Через современный стеклопакет теряется меньше тепла, чем через старое одинарное окно, но обычно больше, чем
						через утеплённую стену той же площади. Чем выше и шире витраж, тем заметнее влияние его коэффициента
						теплопередачи. На результат также влияют ориентация фасада, ветер, расчётная температура региона, высота
						потолка, наружные стены и инфильтрация воздуха через двери.
					</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Мощность радиатора в каталоге указана для определённого температурного напора. Если котёл или тепловой насос
						работает при более низкой температуре воды, фактическая отдача уменьшается. Поэтому нельзя просто взять
						значение «100 Вт на квадратный метр» и выбрать ближайшую длину. Проектировщик считает помещение, задаёт
						режим подачи и обратки, после чего переводит требуемую мощность в число секций конкретной модели.
					</Typography>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Четыре варианта отопления у панорамного окна</Typography>
					<Box sx={{ overflowX: 'auto', marginTop: '18px' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
							<thead><tr><th style={{ ...cellStyle, background: '#f6f6f6' }}>Решение</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Сильная сторона</th><th style={{ ...cellStyle, background: '#f6f6f6' }}>Ограничения</th></tr></thead>
							<tbody>
								<tr><td style={cellStyle}>Низкий трубчатый радиатор</td><td style={cellStyle}>Тепло поступает ближе к стеклу, прибор доступен для уборки</td><td style={cellStyle}>Занимает место вдоль окна и может потребовать большую длину</td></tr>
								<tr><td style={cellStyle}>Вертикальный радиатор</td><td style={cellStyle}>Оставляет остекление и проход свободными</td><td style={cellStyle}>Находится сбоку; нужно проверить циркуляцию воздуха и крепление</td></tr>
								<tr><td style={cellStyle}>Внутрипольный конвектор</td><td style={cellStyle}>Решётка почти не закрывает обзор</td><td style={cellStyle}>Нужна ниша в полу, регулярная очистка; модели с вентилятором требуют питания</td></tr>
								<tr><td style={cellStyle}>Тёплый пол</td><td style={cellStyle}>Свободные стены и равномерно тёплая поверхность</td><td style={cellStyle}>Ограниченная допустимая температура и мощность; инерционность</td></tr>
							</tbody>
						</table>
					</Box>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Низкий радиатор перед панорамным окном</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Низкая модель повторяет логику классического расположения под окном: холодный воздух возле стекла
						смешивается с восходящим тёплым потоком. Arbonia 2030 имеет два ряда трубок и глубину 65 мм; 3030 и 3037 —
						три ряда, они глубже и мощнее при сопоставимой длине. Выбор зависит от того, что ограничено сильнее: глубина,
						длина или высота доступной зоны.
					</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Измеряют расстояние от чистового пола до нижней границы рамы, но корпус нельзя вписывать в этот размер
						впритык. Снизу и сверху оставляют зазоры для конвекции и монтажа. Учитывают ножки или кронштейны, нижний
						узел, плинтус, шторы и траекторию открывания двери. Радиатор перед стеклом также должен быть защищён от
						случайного удара в проходной зоне.
					</Typography>
				</Box>

				<Box textAlign='center' marginTop='26px'>
					<img src='/images/articles/panorama/arbonia1.jpg' alt='Низкий радиатор Arbonia перед панорамным окном' width={600} height={540} style={{ maxWidth: '100%', height: 'auto' }} />
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Вертикальный радиатор на простенке</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Высокий прибор подходит, если перед окном нельзя ничего ставить. Arbonia 2180 двухтрубчатая и тоньше,
						Arbonia 3180 трёхтрубчатая и при одинаковом числе секций мощнее. Итоговая ширина определяется расчётом.
						На стене должны поместиться сам радиатор, кронштейны, трубы и термостатическая головка; дверь, мебель и
						штора не должны блокировать воздух или регулирование.
					</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Так как источник тепла удалён от центральной части окна, проектировщик проверяет, не останется ли у стекла
						холодная зона. Результат зависит от качества стеклопакета, ширины комнаты и воздухообмена. Иногда одного
						вертикального радиатора достаточно, иногда его дополняют тёплым полом или конвектором. Утверждение, что
						вертикальный прибор автоматически равномерно прогреет любое помещение, без расчёта некорректно.
					</Typography>
				</Box>

				<Box textAlign='center' marginTop='26px'>
					<img src='/images/articles/panorama/arbonia.jpg' alt='Вертикальный радиатор Arbonia рядом с панорамным окном' width={600} height={600} style={{ maxWidth: '100%', height: 'auto' }} />
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Боковое или нижнее подключение</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Боковое подключение №12 проще использовать, если трубы уже проходят по стене. Нижнее №69 ТВВ удобно
						заложить при новом ремонте: выводы находятся снизу с шагом 50 мм, а в прибор встроен термовентиль. Узел и
						термоголовка могут приобретаться отдельно. До выполнения стяжки фиксируют точную модель, число секций,
						положение подачи и обратки. Подробности собраны в руководстве по <a href='/articles/connections'>нижнему
						подключению Arbonia №69 ТВВ</a>.
					</Typography>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Конденсат на окне: что действительно влияет</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Тёплый поток у стекла может повысить температуру его внутренней поверхности, но радиатор не является
						гарантией отсутствия конденсата. Влага появляется, когда поверхность охлаждается ниже точки росы. На это
						влияют температура и влажность воздуха, качество стеклопакета, монтаж окон, вентиляция и наружная погода.
						Если окна запотевают, нужно проверять не только отопление, но и воздухообмен, влажность и состояние откосов.
					</Typography>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Данные, которые нужны для подбора</Typography>
					<Typography component='div' sx={{ ...styles.standardText }} marginTop='14px'>
						<ul>
							<li>город и расчётная наружная температура;</li>
							<li>план, площадь комнаты и высота потолка;</li>
							<li>размеры и характеристики стеклопакета;</li>
							<li>материал и утепление наружных стен;</li>
							<li>температура подачи и обратки, тип системы;</li>
							<li>фотография простенка и точные чистовые размеры;</li>
							<li>место вывода труб, желаемое подключение и цвет.</li>
						</ul>
					</Typography>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Частые ошибки</Typography>
					<Typography component='div' sx={{ ...styles.standardText }} marginTop='14px'>
						<ol>
							<li>Выбрать прибор только по площади комнаты без расчёта остекления.</li>
							<li>Сравнить каталожные мощности, указанные для разных температурных режимов.</li>
							<li>Забыть про чистовой пол, зазоры, нижний узел и открывание двери.</li>
							<li>Спрятать термоголовку за шторой, где она неверно измеряет температуру.</li>
							<li>Подвести трубы до утверждения точной модели и монтажной схемы.</li>
							<li>Ожидать, что один источник тепла сбоку устранит любой холод у стекла.</li>
						</ol>
					</Typography>
				</Box>

				<Box marginTop='38px'>
					<Typography component='h2' variant='h5'>Готовые модели и расчёт</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						На коммерческой странице собраны низкие и вертикальные складские модели с ценами по числу секций. Это
						удобная отправная точка, но перед заказом мы рекомендуем проверить мощность, монтажные зазоры и подключение.
					</Typography>
					<Box marginTop='22px' display='flex' flexWrap='wrap' gap='12px'>
						<a href='/catalog/radiatory-dlya-panoramnyh-okon' style={{ textDecoration: 'none' }}><Button variant='contained' color='secondary'>Радиаторы для панорамных окон</Button></a>
						<a href='/request' style={{ textDecoration: 'none' }}><Button variant='outlined' color='secondary'>Получить расчёт</Button></a>
					</Box>
				</Box>

				<Box marginTop='44px'>
					<Typography component='h2' variant='h5'>Частые вопросы</Typography>
					{faqItems.map(item => <Box key={item.question} marginTop='22px'><Typography component='h3' variant='h6'>{item.question}</Typography><Typography sx={{ ...styles.standardText }} marginTop='8px'>{item.answer}</Typography></Box>)}
				</Box>
				<Box marginTop='44px' marginBottom='30px'>
					<Typography component='h2' variant='h5'>Итог</Typography>
					<Typography sx={{ ...styles.standardText }} marginTop='14px'>
						Низкий радиатор лучше работает непосредственно у остекления, вертикальный сохраняет свободный обзор,
						внутрипольный конвектор прячется в полу, а тёплый пол освобождает стены. Выбор определяется не модой, а
						теплопотерями, архитектурой и возможностью обслуживания. Если расчёт и монтажная схема подготовлены до
						отделки, подобрать аккуратное решение для панорамного окна значительно проще.
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default ArticlePage
