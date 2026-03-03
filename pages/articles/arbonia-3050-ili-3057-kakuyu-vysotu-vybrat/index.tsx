import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { NextPage } from 'next/types'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import tableStyle from './index.module.css'

const ArboniaHeightComparisonPage: NextPage = () => {
	return (
		<Box>
			<PageHeader
				title={'Arbonia 3050 или 3057 - что выбрать'}
				description={
					'Сравнение радиаторов Arbonia 3050 и 3057. Разница 7 см по высоте, межосевое расстояние 50 см, замена чугунных батарей и выбор под подоконник 70-80 см.'
				}
			/>

			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Arbonia 3050 или 3057 - какую высоту выбрать',
						link: '/articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat',
					},
				]}
			/>

			<Box
				component={'article'}
				sx={{
					...global.pagePadding,
					maxWidth: '920px',
					margin: 'auto',
					...styles.standardText,
				}}
				marginTop='20px'
			>
				<Typography
					component={'h1'}
					variant='h4'
					marginTop='10px'
					marginBottom={'30px'}
				>
					Arbonia 3050 или 3057 - какую высоту радиатора выбрать
				</Typography>

				<Typography
					component={'p'}
					marginBottom='20px'
					sx={{ ...styles.standardText }}
				>
					Если вы выбираете между радиаторами, ключевое различие кроется не только в дополнительных 7 см, а в
					дифференцированном сценарии монтажа. Во-первых, под каким подоконником вы будете устанавливать радиатор.
					Во-вторых, нужно ли сохранять существующую разводку с межосевым расстоянием 50 см. В большинстве случаев
					решение принимается исходя из высоты ниши под окном или от того, насколько легко можно сохранить старые трубы,
					не штробя стены заново.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'40px'}
					marginBottom='10px'
				>
					📊 Краткое сравнение Arbonia 3050 и 3057
				</Typography>

				<table className={tableStyle.table}>
					<thead>
						<tr>
							<th>Параметр</th>
							<th>Arbonia 3050</th>
							<th>Arbonia 3057</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Высота секции</td>
							<td>500 мм</td>
							<td>570 мм</td>
						</tr>
						<tr>
							<td>Глубина</td>
							<td>105 мм</td>
							<td>105 мм</td>
						</tr>
						<tr>
							<td>Мощность секции (ΔT=60)</td>
							<td>68 Вт</td>
							<td>78 Вт</td>
						</tr>
						<tr>
							<td>Тип</td>
							<td>3-трубчатый</td>
							<td>3-трубчатый</td>
						</tr>
						<tr>
							<td>Межосевое при боковом подключении</td>
							<td>430 мм</td>
							<td>500 мм</td>
						</tr>
						<tr>
							<td>Рабочее давление</td>
							<td>10 бар</td>
							<td>10 бар</td>
						</tr>
						<tr>
							<td>Замена старого чугуна</td>
							<td>Требует корректировки труб</td>
							<td>Обычно без переделки</td>
						</tr>
					</tbody>
				</table>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					📐 Главная разница - 7 см высоты
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					На бумаге 7 см выглядят незначительно. На практике они решают, удастся ли сохранить рекомендуемые монтажные
					зазоры. Для естественной конвекции нужно минимум 10 см снизу и 8–10 см сверху. Если подоконник на высоте 80 см
					от чистого пола, то радиатор высотой 57 см почти упирается в допустимый верхний зазор. Он выглядит «зажатым» и
					часто прижимается к верхней кромке ниши. Более низкая модель позволяет центрировать прибор, сохранить
					симметрию и сделать монтаж аккуратным.
				</Typography>

				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					При подоконниках 70–75 см пространство становится ещё более чувствительным. 3057 тогда приходится поджимать к
					верхней границе, а 3050 спокойно держит рабочие зазоры, не выглядывая «вписанным» в нишу.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🔥 Влияет ли высота на мощность
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Да, высокая модель дает 78 Вт на секцию при ΔT=60°, тогда как низкая - 68 Вт. Разница ощутимая, но не
					критичная: мощность проще компенсировать количеством секций. Чтобы покрыть теплопотери, удобнее удлинить
					прибор на 2–3 секции, чем выбирать более высокий радиатор только ради паспорта. В итоге геометрия ниши
					определяет выбор чаще, чем теплотехника.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🏗 Когда удобнее Arbonia 3057 при боковом подключении
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Вот где кроется самая практичная причина выбрать высоту 57 см. У этой модели межосевое расстояние при боковом
					подключении составляет 500 мм - стандарт для старых чугунных или алюминиевых батарей в домах советского и
					раннего постсоветского периода. Если вы заменяете старый радиатор с межосевым 500 мм, то он вставляется на те
					же выводы без переделки труб. Монтаж дешевле, быстрее и не требует штробления стен. Более короткая модель с
					межосевым 430 мм требует переноса труб, что делает установку сложнее и дороже. Поэтому при боковом подключении
					выбор часто диктует существующая разводка.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🏢 А если подключение нижнее
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					При нижнем подключении актуальность межосевого расстояния исчезает: используется узел с 50 мм, и заводские
					выводы уже подходят. Тогда выбор между 3050 и 3057 почти полностью определяется высотой подоконника и
					визуальными задачами. Если ниша высокая - 3057 добавит выраженности и немного больше мощности на секцию. Если
					подоконник 70–80 см, то 3050 выглядит гармоничнее и не требует скромных зазоров.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🎨 Вопрос дизайна и пропорций
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Разница в 7 см ощущается визуально сильнее, чем кажется по цифрам: высокие приборы воспринимаются как более
					«высокие» и плотные элементы интерьера, а низкие - как лёгкие и универсальные. В современных интерьерах с
					низкими подоконниками короткие модели смотрятся гармоничнее, а в классических помещениях и при замене старых
					батарей высокие часто становятся логичным выбором.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					📌 Итог - что выбрать
				</Typography>

				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Выбирайте{' '}
					<Link
						href='/models/3057'
						passHref
						legacyBehavior
					>
						<Typography
							component='a'
							sx={{ ...styles.standardTextRedLink }}
						>
							Arbonia 3057
						</Typography>
					</Link>{' '}
					если:
				</Typography>
				<ul>
					<li>Меняете чугунные или алюминиевые радиаторы с межосевым 50 см</li>
					<li>Хочется установить радиатор без переделки труб</li>
					<li>Подоконник выше 80–85 см</li>
				</ul>

				<Typography
					component={'p'}
					marginTop='20px'
					sx={{ ...styles.standardText }}
				>
					Выбирайте{' '}
					<Link
						href='/models/3050'
						passHref
						legacyBehavior
					>
						<Typography
							component='a'
							sx={{ ...styles.standardTextRedLink }}
						>
							Arbonia 3050
						</Typography>
					</Link>{' '}
					если:
				</Typography>
				<ul>
					<li>Подоконник находится на 70–80 см от пола</li>
					<li>Важно симметричное центрирование радиатора</li>
					<li>Разводка труб нижняя или уже приведена к стандарту 50 мм</li>
					<li>Приоритет - аккуратный дизайн и рабочие монтажные зазоры</li>
				</ul>

				<Typography
					component={'p'}
					marginTop='20px'
					sx={{ ...styles.standardText }}
				>
					Разница между моделями не в мощности, а в монтажной логике. Именно она определяет правильный выбор радиатора
					для вашей ниши.
				</Typography>
			</Box>
		</Box>
	)
}

export default ArboniaHeightComparisonPage
