import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { NextPage } from 'next/types'
import React from 'react'

import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import tableStyle from './index.module.css'

const metaTitle = 'Как выбрать трубчатый радиатор Arbonia'
const metaDescription =
	'Как выбрать трубчатый радиатор Arbonia для квартиры и дома - разбор мощности, размеров, подключения и типичных ошибок при выборе'

const ArboniaHowToChooseTubularRadiatorPage: NextPage = () => {
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
						title: 'Как выбрать трубчатый радиатор Arbonia для квартиры и дома',
						link: '/articles/arbonia-kak-vybrat-trubchatyj-radiator',
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
					Как выбрать трубчатый радиатор Arbonia для квартиры и дома
				</Typography>

				<Typography
					component={'p'}
					marginBottom='20px'
					sx={{ ...styles.standardText }}
				>
					Трубчатый радиатор Arbonia выбирают не по внешнему виду, а по задаче - мощности, размерам, типу подключения и
					условиям системы отопления. Чтобы правильно выбрать трубчатый радиатор Arbonia для квартиры или дома, сначала
					рассчитывают необходимую теплоотдачу с учетом площади, высоты потолков и теплопотерь, затем подбирают размеры
					и глубину радиатора, после чего определяют тип подключения и только в конце выбирают дизайн. Такой подход
					позволяет избежать типичных ошибок, когда радиатор не справляется с отоплением или оказывается неудобным в
					установке и эксплуатации.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'40px'}
					marginBottom='10px'
				>
					📊 Быстрый выбор трубчатого радиатора Arbonia
				</Typography>

				<table className={tableStyle.table}>
					<thead>
						<tr>
							<th>Параметр</th>
							<th>На что влияет</th>
							<th>Что учитывать</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Мощность</td>
							<td>Прогрев помещения</td>
							<td>Площадь, окна, угловая ли комната</td>
						</tr>
						<tr>
							<td>Высота</td>
							<td>Установка</td>
							<td>Высота подоконника</td>
						</tr>
						<tr>
							<td>Длина</td>
							<td>Общая теплоотдача</td>
							<td>Длина стены</td>
						</tr>
						<tr>
							<td>Глубина</td>
							<td>Эффективность</td>
							<td>Количество труб</td>
						</tr>
						<tr>
							<td>Подключение</td>
							<td>Реальная мощность</td>
							<td>Схема подключения</td>
						</tr>
						<tr>
							<td>Дизайн</td>
							<td>Внешний вид</td>
							<td>Интерьер</td>
						</tr>
					</tbody>
				</table>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🧱 Что такое Arbonia
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Трубчатые радиаторы Arbonia - это стальные радиаторы с модульной конструкцией, которые позволяют точно
					подобрать параметры под конкретное помещение. В отличие от стандартных панельных моделей, здесь можно
					варьировать высоту, длину и глубину, что дает большую гибкость при проектировании отопления.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Главная особенность - возможность подобрать радиатор под задачу, а не под ограниченный модельный ряд. Это
					особенно важно, когда требуется совместить теплоотдачу и дизайн.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🏠 Где используется трубчатый радиатор Arbonia
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Трубчатый радиатор Arbonia одинаково хорошо подходит для квартиры и частного дома, но задачи в этих случаях
					отличаются. В квартире чаще приходится учитывать ограничения - стандартные выводы труб, высоту подоконника и
					особенности центрального отопления. Поэтому здесь важны компактные размеры и стабильная работа.
					<div className='cta'>
						👉 Вам требуются трубчатые радиаторы Arbonia? Подберём модель с мощностью, цветом и сроками поставки.
						<a
							href='/request'
							style={{ textDecoration: 'none' }}
						>
							<div className='ctaButton'>Запросить подбор →</div>
						</a>
					</div>
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					В частном доме радиатор подбирается более гибко. Можно заранее заложить нужные размеры и схему подключения,
					что позволяет добиться точного соответствия расчетной мощности. Это особенно актуально для больших помещений и
					домов с панорамным остеклением.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					В гостиной с большими окнами радиатор компенсирует теплопотери через стекло, поэтому важна длина и мощность. В
					спальне важнее равномерный и мягкий прогрев без перегрева. В детской дополнительно учитывается безопасность и
					отсутствие острых элементов. В коридоре или прихожей чаще выбирают вертикальные или компактные решения, чтобы
					не занимать полезное пространство.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🔥 Как выбрать трубчатый радиатор Arbonia по мощности
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Выбор трубчатого радиатора Arbonia всегда начинается с мощности. Это ключевой параметр, от которого зависит
					комфорт в помещении.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Сначала определяется теплопотребность комнаты. В среднем ориентируются на площадь, но этого недостаточно.
					Важно учитывать высоту потолков, количество и тип окон, утепление стен и расположение комнаты. Угловые
					помещения и комнаты с большими окнами требуют больше тепла.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					После этого подбирается радиатор. У Arbonia есть важное преимущество - мощность можно регулировать не только
					длиной, но и глубиной радиатора. Это означает, что вместо слишком длинной модели можно выбрать более глубокую,
					сохранив компактность.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Такой подход особенно полезен в квартирах, где длина стены ограничена.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					📐 Какие параметры учитывать при выборе
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Высота радиатора определяет, можно ли установить его под окно или в нишу. Это один из первых параметров,
					который задает ограничения. Длина радиатора напрямую связана с теплоотдачей - чем больше длина, тем больше
					площадь теплообмена.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Глубина и количество труб - один из самых недооцененных параметров. Более глубокие модели дают большую
					мощность, но увеличивают габариты. В небольших помещениях это может быть критично.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Тип подключения влияет на реальную эффективность. Даже правильно рассчитанный радиатор может работать хуже,
					если выбрана неудачная схема подключения. Это особенно важно для длинных моделей.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Рабочее давление и совместимость с системой отопления критичны для квартир с центральным отоплением. Цвет и
					дизайн завершают выбор, но не должны быть определяющим фактором.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					⚖️ Квартира или дом - в чем разница выбора
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					При выборе трубчатого радиатора Arbonia для квартиры основное внимание уделяется ограничениям. Важно учитывать
					стандартные размеры, расположение труб и особенности системы отопления. Ошибка здесь часто приводит к
					проблемам с установкой.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					В частном доме выбор более гибкий. Можно заранее продумать систему отопления и подобрать радиаторы точно под
					расчет. Это позволяет оптимизировать не только внешний вид, но и эффективность всей системы.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					❗ Типичные ошибки при выборе
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Самая частая ошибка - выбор радиатора только по дизайну. В результате радиатор не справляется с отоплением,
					несмотря на высокую стоимость.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Также часто не рассчитывают мощность и выбирают модель на глаз. Это приводит либо к недогреву, либо к
					избыточному теплу. Еще одна распространенная проблема - игнорирование высоты подоконника и ограничений по
					установке.
					<div className='cta'>
						👉 Вам требуются трубчатые радиаторы Arbonia? Подберём модель с мощностью, цветом и сроками поставки.
						<a
							href='/request'
							style={{ textDecoration: 'none' }}
						>
							<div className='ctaButton'>Запросить подбор →</div>
						</a>
					</div>
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Ошибки с типом подключения приводят к потере части теплоотдачи. Нередко выбирают слишком компактную модель,
					пытаясь сэкономить пространство, но это ухудшает эффективность.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Отдельно стоит отметить игнорирование особенностей системы отопления, что может повлиять на срок службы
					радиатора.
				</Typography>

				<Typography
					component={'h2'}
					variant='h5'
					marginTop={'50px'}
					marginBottom='10px'
				>
					🧭 Как упростить выбор трубчатого радиатора Arbonia
				</Typography>
				<Typography
					component={'p'}
					sx={{ ...styles.standardText }}
				>
					Чтобы выбрать трубчатый радиатор Arbonia без ошибок, важно действовать последовательно. Сначала определяется
					помещение и его особенности, затем рассчитывается необходимая мощность. После этого подбираются размеры
					радиатора с учетом ограничений.
				</Typography>
				<Typography
					component={'p'}
					marginTop='10px'
					sx={{ ...styles.standardText }}
				>
					Далее определяется тип подключения и проверяется совместимость с системой отопления. Только после этого имеет
					смысл выбирать дизайн и цвет. Такой подход позволяет получить оптимальный результат без лишних компромиссов.
				</Typography>

				<Typography
					component={'p'}
					marginTop='20px'
					sx={{ ...styles.standardText }}
				>
					Посмотреть модели для подбора можно в разделе{' '}
					<Link
						href='/catalog'
						passHref
						legacyBehavior
					>
						<Typography
							component='a'
							sx={{ ...styles.standardTextRedLink }}
						>
							каталог радиаторов Arbonia
						</Typography>
					</Link>
					.
				</Typography>
			</Box>
		</Box>
	)
}

export default ArboniaHowToChooseTubularRadiatorPage
