import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import pageStyle from './index.module.css'

type ArticlePageProps = {}
type RoomType = 'bedroom' | 'kitchen' | 'livingRoom'

const metaTitle = 'Мощность вертикального радиатора Arbonia - расчет'
const metaDescription =
	'Как рассчитать мощность вертикального радиатора Arbonia для комнаты. Простая формула, примеры расчета и советы по выбору подходящей модели.'

const ARBONIA_2180_WATTS_PER_SECTION = 164
const ARBONIA_3180_WATTS_PER_SECTION = 219
const ROOM_TYPE_COEFFICIENTS: Record<RoomType, number> = {
	bedroom: 1.0,
	kitchen: 0.9,
	livingRoom: 1.1,
}
const CORNER_ROOM_COEFFICIENT = 1.2
const PANORAMIC_WINDOW_COEFFICIENT = 1.15
const MIN_SECTIONS = 4
const MAX_SECTIONS = 66

const ArticlePage: NextPage<ArticlePageProps> = () => {
	const [area, setArea] = useState<number>(18)
	const [ceilingHeight, setCeilingHeight] = useState<number>(2.8)
	const [roomType, setRoomType] = useState<RoomType>('livingRoom')
	const [isCorner, setIsCorner] = useState<boolean>(false)
	const [hasPanoramicWindow, setHasPanoramicWindow] = useState<boolean>(false)

	const calculation = useMemo(() => {
		const safeArea = Number.isFinite(area) ? Math.max(area, 0.1) : 0.1
		const safeCeilingHeight = Number.isFinite(ceilingHeight) ? Math.max(ceilingHeight, 0.1) : 0.1
		const useVolumeFormula = safeCeilingHeight >= 3
		const roomTypeCoefficient = ROOM_TYPE_COEFFICIENTS[roomType]
		const cornerCoefficient = isCorner ? CORNER_ROOM_COEFFICIENT : 1
		const panoramicCoefficient = hasPanoramicWindow ? PANORAMIC_WINDOW_COEFFICIENT : 1
		const basePower = useVolumeFormula ? safeArea * safeCeilingHeight * 40 : safeArea * 100
		const totalPowerRaw = basePower * roomTypeCoefficient * cornerCoefficient * panoramicCoefficient
		const totalPower = Math.round(totalPowerRaw)
		const sections2180 = Math.ceil(totalPower / ARBONIA_2180_WATTS_PER_SECTION)
		const sections3180 = Math.ceil(totalPower / ARBONIA_3180_WATTS_PER_SECTION)
		const totalCoefficient = roomTypeCoefficient * cornerCoefficient * panoramicCoefficient

		return {
			basePower,
			totalPower,
			totalCoefficient,
			useVolumeFormula,
			roomTypeCoefficient,
			cornerCoefficient,
			panoramicCoefficient,
			sections2180,
			sections3180,
		}
	}, [area, ceilingHeight, roomType, isCorner, hasPanoramicWindow])

	const roomTypeLabel =
		roomType === 'bedroom' ? 'спальня' : roomType === 'kitchen' ? 'кухня' : 'гостиная'

	return (
		<Box>
			<PageHeader
				title={metaTitle}
				description={metaDescription}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Как рассчитать мощность вертикального радиатора Arbonia',
						link: '/articles/vertical-radiator-power',
					},
				]}
			/>

			<Box
				sx={{ ...global.pagePadding, maxWidth: '920px', margin: 'auto', ...styles.standardText }}
				marginY='20px'
				component='div'
			>
				<Typography
					component='h1'
					variant='h4'
					marginTop='10px'
					marginBottom='24px'
				>
					Как рассчитать мощность вертикального радиатора Arbonia
				</Typography>

				<p>
					Чтобы рассчитать мощность вертикального радиатора Arbonia, сначала определяют базовую теплопотребность комнаты:
					при потолках до 3 м обычно берут 100 Вт на 1 м², а при высоте 3 м и более - 40 Вт на 1 м³. После этого учитывают
					тип помещения, угловое расположение и панорамные окна, а затем делят итоговую мощность на теплоотдачу одной
					секции - 164 Вт у Arbonia 2180 и 219 Вт у Arbonia 3180. Так можно быстро понять, сколько секций потребуется
					именно для вашей комнаты.
				</p>

				<div className={pageStyle.linkBox}>
					Подходящие модели для такого расчета собраны в разделе{' '}
					<Link href='/catalog/high-models'>
						<a style={{ textDecoration: 'none' }}>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								вертикальные радиаторы Arbonia
							</Typography>
						</a>
					</Link>
					.
				</div>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					📊 Быстрая таблица: мощность и секции
				</Typography>
				<div className={pageStyle.tableWrap}>
					<table className={pageStyle.compareTable}>
						<thead>
							<tr>
								<th>Сценарий</th>
								<th>Требуемая мощность</th>
								<th>Arbonia 2180</th>
								<th>Arbonia 3180</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Спальня 12 м²</td>
								<td>1200 Вт</td>
								<td>8 секций</td>
								<td>6 секций</td>
							</tr>
							<tr>
								<td>Гостиная 18 м², угловая</td>
								<td>2376 Вт</td>
								<td>15 секций</td>
								<td>11 секций</td>
							</tr>
							<tr>
								<td>Кухня 10 м², панорамное окно</td>
								<td>1035 Вт</td>
								<td>7 секций</td>
								<td>5 секций</td>
							</tr>
							<tr>
								<td>Гостиная 22 м², потолок 3.2 м</td>
								<td>4275 Вт</td>
								<td>27 секций</td>
								<td>20 секций</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>
					Из таблицы видно, что при одинаковой высоте 1800 мм модель Arbonia 3180 позволяет получить ту же мощность при
					меньшем числе секций, чем Arbonia 2180. Поэтому при ограниченной длине стены или при повышенных теплопотерях
					чаще удобнее рассматривать именно 3-трубчатый вариант.
				</p>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					🔥 Arbonia 2180 и 3180 - какие данные брать для расчета
				</Typography>
				<p>
					Для вертикальных моделей высотой 1800 мм ключевая величина - мощность одной секции при dT=60. У Arbonia 2180
					(2-трубчатый радиатор, глубина 65 мм) это <b>164 Вт/секция</b>. У Arbonia 3180 (3-трубчатый радиатор, глубина
					105 мм) это <b>219 Вт/секция</b>. При одинаковой высоте 3180 дает больше тепла на той же длине.
				</p>
				<div className={pageStyle.tableWrap}>
					<table className={pageStyle.compareTable}>
						<thead>
							<tr>
								<th>Параметр</th>
								<th>Arbonia 2180</th>
								<th>Arbonia 3180</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Тип</td>
								<td>2-трубчатый</td>
								<td>3-трубчатый</td>
							</tr>
							<tr>
								<td>Высота секции</td>
								<td>1800 мм</td>
								<td>1800 мм</td>
							</tr>
							<tr>
								<td>Глубина</td>
								<td>65 мм</td>
								<td>105 мм</td>
							</tr>
							<tr>
								<td>Длина секции</td>
								<td>46 мм</td>
								<td>46 мм</td>
							</tr>
							<tr>
								<td>Мощность секции (dT=60)</td>
								<td>164 Вт</td>
								<td>219 Вт</td>
							</tr>
							<tr>
								<td>Допустимое число секций</td>
								<td>4-66</td>
								<td>4-66</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>
					На практике это означает, что Arbonia 2180 чаще выбирают там, где важна более компактная глубина радиатора, а
					Arbonia 3180 - когда нужно получить больше тепла на той же высоте и примерно той же длине прибора.
				</p>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					📐 Формулы расчета мощности
				</Typography>
				<div className={pageStyle.formulaBox}>
					<p style={{ marginTop: 0 }}>
						<b>Если высота потолка до 3 м:</b>
					</p>
					<p className={pageStyle.formula}>Мощность = площадь x 100 x коэффициенты</p>
					<p>
						<b>Если высота потолка 3 м и выше:</b>
					</p>
					<p className={pageStyle.formula}>Мощность = площадь x высота x 40 x коэффициенты</p>
				</div>

				<Typography
					marginTop='34px'
					variant='h5'
					component='h2'
				>
					🧮 Коэффициенты для итогового расчета
				</Typography>
				<div className={pageStyle.tableWrap}>
					<table className={pageStyle.compareTable}>
						<thead>
							<tr>
								<th>Параметр</th>
								<th>Коэффициент</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Спальня</td>
								<td>1.0</td>
							</tr>
							<tr>
								<td>Кухня</td>
								<td>0.9</td>
							</tr>
							<tr>
								<td>Гостиная</td>
								<td>1.1</td>
							</tr>
							<tr>
								<td>Угловая комната</td>
								<td>1.2</td>
							</tr>
							<tr>
								<td>Панорамное окно</td>
								<td>1.15</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>
					Коэффициенты нужны для того, чтобы приблизить расчет к реальным условиям. Например, угловая гостиная с большим
					остеклением почти всегда требует более мощный радиатор, чем обычная спальня такой же площади. Поэтому базовый
					расчет по площади или объему - это только отправная точка, а окончательное значение лучше определять уже с учетом
					поправок.
				</p>
				<p>
					Для комнат с большим остеклением ориентируйтесь на повышенные теплопотери и дополнительно посмотрите обзор{' '}
					<Link href='/articles/panorama'>
						<a style={{ textDecoration: 'none' }}>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								радиаторов Arbonia для панорамных окон
							</Typography>
						</a>
					</Link>
					.
				</p>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					🧩 Примеры расчета для типовых комнат
				</Typography>

				<div className={pageStyle.exampleCard}>
					<Typography
						component='h3'
						variant='h6'
						marginBottom='8px'
					>
						Пример 1. Спальня 12 м², потолок 2.7 м, не угловая, без панорамных окон
					</Typography>
					<p>База: 12 x 100 = 1200 Вт.</p>
					<p>Поправки: спальня 1.0 x не угловая 1.0 x обычное окно 1.0.</p>
					<p>Итог: 1200 Вт.</p>
					<p>Arbonia 2180: 1200 / 164 = 7.31, берем 8 секций.</p>
					<p style={{ marginBottom: 0 }}>Arbonia 3180: 1200 / 219 = 5.48, берем 6 секций.</p>
				</div>

				<div className={pageStyle.exampleCard}>
					<Typography
						component='h3'
						variant='h6'
						marginBottom='8px'
					>
						Пример 2. Гостиная 18 м², потолок 2.8 м, угловая, без панорамного окна
					</Typography>
					<p>База: 18 x 100 = 1800 Вт.</p>
					<p>Поправки: гостиная 1.1 x угловая 1.2 x обычное окно 1.0.</p>
					<p>Итог: 1800 x 1.1 x 1.2 = 2376 Вт.</p>
					<p>Arbonia 2180: 2376 / 164 = 14.49, берем 15 секций.</p>
					<p style={{ marginBottom: 0 }}>Arbonia 3180: 2376 / 219 = 10.84, берем 11 секций.</p>
				</div>

				<div className={pageStyle.exampleCard}>
					<Typography
						component='h3'
						variant='h6'
						marginBottom='8px'
					>
						Пример 3. Кухня 10 м², потолок 2.7 м, не угловая, с панорамным окном
					</Typography>
					<p>База: 10 x 100 = 1000 Вт.</p>
					<p>Поправки: кухня 0.9 x не угловая 1.0 x панорамное окно 1.15.</p>
					<p>Итог: 1000 x 0.9 x 1.15 = 1035 Вт.</p>
					<p>Arbonia 2180: 1035 / 164 = 6.31, берем 7 секций.</p>
					<p style={{ marginBottom: 0 }}>Arbonia 3180: 1035 / 219 = 4.72, берем 5 секций.</p>
				</div>

				<div className={pageStyle.exampleCard}>
					<Typography
						component='h3'
						variant='h6'
						marginBottom='8px'
					>
						Пример 4. Гостиная 22 м², потолок 3.2 м, угловая, с панорамным окном
					</Typography>
					<p>Объем: 22 x 3.2 = 70.4 м³.</p>
					<p>База: 70.4 x 40 = 2816 Вт.</p>
					<p>Поправки: гостиная 1.1 x угловая 1.2 x панорамное окно 1.15.</p>
					<p>Итог: 2816 x 1.1 x 1.2 x 1.15 = 4274.688, округляем до 4275 Вт.</p>
					<p>Arbonia 2180: 4275 / 164 = 26.06, берем 27 секций.</p>
					<p style={{ marginBottom: 0 }}>Arbonia 3180: 4275 / 219 = 19.52, берем 20 секций.</p>
				</div>
				<p>
					Эти примеры показывают, что разница между Arbonia 2180 и 3180 особенно заметна в помещениях с повышенной
					теплопотребностью. Чем выше итоговая мощность, тем сильнее 3-трубчатая модель помогает сократить число секций и
					общую длину радиатора.
				</p>

				<div
					className='cta'
					style={{ marginTop: '32px', marginBottom: '8px' }}
				>
					Уже понимаете примерную мощность и число секций? Отправьте параметры комнаты, и мы подскажем, какая модель
					Arbonia подойдет по теплоотдаче, длине и подключению.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Получить подбор по параметрам →</div>
					</a>
				</div>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					✅ Что выбрать: Arbonia 2180 или Arbonia 3180
				</Typography>
				<p>
					Если нужна более компактная 2-трубчатая модель и расчетная нагрузка умеренная, обычно достаточно Arbonia 2180.
					Если нужно получить больше тепла на меньшей длине радиатора или стена короткая при высоких теплопотерях,
					практичнее Arbonia 3180.
				</p>
				<p>
					Подробное сравнение по конструкции и применению смотрите в статье{' '}
					<Link href='/articles/2180-3180'>
						<a style={{ textDecoration: 'none' }}>
							<Typography
								sx={{ ...styles.standardTextRedLink }}
								component='span'
							>
								Arbonia 2180 vs 3180
							</Typography>
						</a>
					</Link>
					.
				</p>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					🧠 Калькулятор мощности и секций Arbonia
				</Typography>
				<div className={pageStyle.calcBox}>
					<div className={pageStyle.calcGrid}>
						<div className={pageStyle.calcField}>
							<TextField
								label='Площадь комнаты, м²'
								type='number'
								value={area}
								onChange={(event) => setArea(Math.max(0.1, Number(event.target.value) || 0.1))}
								inputProps={{ min: 0.1, step: 0.1 }}
								size='small'
								fullWidth
							/>
						</div>
						<div className={pageStyle.calcField}>
							<TextField
								label='Высота потолка, м'
								type='number'
								value={ceilingHeight}
								onChange={(event) => setCeilingHeight(Math.max(0.1, Number(event.target.value) || 0.1))}
								inputProps={{ min: 0.1, step: 0.1 }}
								size='small'
								fullWidth
							/>
						</div>
						<div className={pageStyle.calcField}>
							<TextField
								label='Тип помещения'
								select
								value={roomType}
								onChange={(event) => setRoomType(event.target.value as RoomType)}
								size='small'
								fullWidth
							>
								<MenuItem value='bedroom'>Спальня</MenuItem>
								<MenuItem value='kitchen'>Кухня</MenuItem>
								<MenuItem value='livingRoom'>Гостиная</MenuItem>
							</TextField>
						</div>
					</div>

					<FormGroup
						row
						sx={{ marginTop: '8px' }}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={isCorner}
									onChange={(event) => setIsCorner(event.target.checked)}
								/>
							}
							label='Угловая комната'
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={hasPanoramicWindow}
									onChange={(event) => setHasPanoramicWindow(event.target.checked)}
								/>
							}
							label='Панорамное окно'
						/>
					</FormGroup>

					<div className={pageStyle.resultCard}>
						<p className={pageStyle.resultLine}>
							Формула:{' '}
							{calculation.useVolumeFormula
								? 'площадь x высота x 40 x коэффициенты (потолок 3 м и выше)'
								: 'площадь x 100 x коэффициенты (потолок ниже 3 м)'}
							.
						</p>
						<p className={pageStyle.resultLine}>Базовая мощность: {Math.round(calculation.basePower)} Вт.</p>
						<p className={pageStyle.resultLine}>
							Коэффициенты: тип помещения ({roomTypeLabel}) {calculation.roomTypeCoefficient} x угловая{' '}
							{calculation.cornerCoefficient} x панорамное окно {calculation.panoramicCoefficient}.
						</p>
						<p className={pageStyle.resultLine}>
							Итоговый коэффициент: {calculation.totalCoefficient.toFixed(3)}. Расчетная мощность:{' '}
							<b>{calculation.totalPower} Вт</b>.
						</p>
						<p className={pageStyle.resultLine}>Arbonia 2180: {calculation.sections2180} секций.</p>
						<p className={pageStyle.resultLine}>Arbonia 3180: {calculation.sections3180} секций.</p>
						{(calculation.sections2180 < MIN_SECTIONS ||
							calculation.sections2180 > MAX_SECTIONS ||
							calculation.sections3180 < MIN_SECTIONS ||
							calculation.sections3180 > MAX_SECTIONS) && (
							<p className={pageStyle.notice}>
								Расчет вышел за диапазон 4-66 секций для одного прибора. Рассмотрите два радиатора или уточните подбор по
								проекту.
							</p>
						)}
						<p style={{ marginBottom: 0 }}>
							Для вашей комнаты расчетная мощность составляет <b>{calculation.totalPower} Вт</b>. Это соответствует
							примерно <b>{calculation.sections2180} секциям Arbonia 2180</b> или <b>{calculation.sections3180} секциям
							Arbonia 3180</b>.
						</p>
					</div>
				</div>
				<p>
					Калькулятор выше помогает сделать предварительный подбор, но для окончательного выбора важно также учитывать
					температурный график системы отопления, способ подключения, длину свободной стены и желаемый запас по
					теплоотдаче.
				</p>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					🏁 Итог
				</Typography>
				<p>
					Чтобы рассчитать мощность вертикального радиатора Arbonia, для стандартных помещений с потолками до 3 м обычно
					используют формулу 100 Вт на 1 м², а для более высоких помещений - 40 Вт на 1 м³. После этого применяют поправки
					на тип комнаты, угловое расположение и панорамные окна.
				</p>
				<p>
					Если нужен более компактный по глубине радиатор, чаще рассматривают Arbonia 2180. Если важно получить большую
					теплоотдачу на меньшей длине прибора, практичнее Arbonia 3180. Для предварительного подбора этого достаточно, а
					для окончательного выбора стоит дополнительно учитывать длину стены, схему подключения и параметры системы
					отопления.
				</p>

				<div
					className='cta'
					style={{ marginTop: '36px' }}
				>
					Нужен точный подбор вертикального радиатора Arbonia под вашу комнату?
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Отправить параметры на расчет →</div>
					</a>
				</div>
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
