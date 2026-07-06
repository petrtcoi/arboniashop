import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import tableStyle from './index.module.css'

type ArticlePageProps = {}

const tableLinkStyle: React.CSSProperties = {
	color: 'red',
	fontWeight: 500,
	textDecoration: 'underline',
}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Высокие радиаторы Arbonia: когда выбирать вертикальную модель 2180 или 3180'}
				description={
					'Разбираем, когда стоит выбрать высокий радиатор Arbonia, чем отличаются модели 2180 и 3180, как учесть мощность, вес, монтаж, цвет и подключение. Поможем рассчитать секции и подобрать вертикальный радиатор под помещение.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Высокие радиаторы Arbonia',
						link: '/articles/high-arbonia',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Высокие радиаторы Arbonia'}
			/>
			<Typography
				sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto', ...styles.standardText }}
				marginY='20px'
				component={'div'}
			>
				<p>
					Высокие радиаторы Arbonia выбирают, когда под окном нет места для обычной батареи, нужно освободить стену
					или поставить мощный радиатор на узкий простенок. Чаще всего для таких задач подходят складские модели{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/models/2180'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							Arbonia 2180
						</Typography>
					</a>{' '}
					и{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/models/3180'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							Arbonia 3180
						</Typography>
					</a>
					: первая компактнее по глубине, вторая даёт больше мощности. Чтобы не ошибиться с секциями, высотой,
					подключением и креплением, лучше сразу отправить размеры помещения на расчёт.
				</p>

				<h2 style={{ marginTop: '40px' }}>Быстрый выбор высокого радиатора Arbonia</h2>
				<div style={{ overflowX: 'auto', marginTop: '20px' }}>
					<table className={tableStyle.table}>
						<tbody>
							<tr>
								<th>Ситуация</th>
								<th>Что смотреть</th>
								<th>Куда перейти</th>
							</tr>
							<tr>
								<td>Нужен высокий узкий радиатор на простенок</td>
								<td>Arbonia 2180</td>
								<td>
									<a
										href='/models/2180'
										style={tableLinkStyle}
									>
										/models/2180
									</a>
								</td>
							</tr>
							<tr>
								<td>Нужно больше мощности при той же высоте</td>
								<td>Arbonia 3180</td>
								<td>
									<a
										href='/models/3180'
										style={tableLinkStyle}
									>
										/models/3180
									</a>
								</td>
							</tr>
							<tr>
								<td>Выбираете между 2180 и 3180</td>
								<td>сравнение по глубине, мощности и внешнему виду</td>
								<td>
									<a
										href='/articles/2180-3180'
										style={tableLinkStyle}
									>
										/articles/2180-3180
									</a>
								</td>
							</tr>
							<tr>
								<td>Радиатор нужен рядом с панорамным окном</td>
								<td>высокий радиатор на простенке или низкий радиатор вдоль окна</td>
								<td>
									<a
										href='/articles/panorama'
										style={tableLinkStyle}
									>
										/articles/panorama
									</a>
								</td>
							</tr>
							<tr>
								<td>Не уверены, хватит ли мощности</td>
								<td>расчёт по помещению</td>
								<td>
									<a
										href='/articles/vertical-radiator-power'
										style={tableLinkStyle}
									>
										/articles/vertical-radiator-power
									</a>
								</td>
							</tr>
							<tr>
								<td>Стена из ГКЛ или есть сомнения по креплению</td>
								<td>проверить монтаж и кронштейны</td>
								<td>
									<a
										href='/articles/montazh-vysokih-radiatorov-arbonia-instrukciya'
										style={tableLinkStyle}
									>
										/articles/montazh-vysokih-radiatorov-arbonia-instrukciya
									</a>
								</td>
							</tr>
							<tr>
								<td>Нужно получить цену и подбор</td>
								<td>отправить данные на расчёт</td>
								<td>
									<a
										href='/request'
										style={tableLinkStyle}
									>
										/request
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2 style={{ marginTop: '40px' }}>Особенности высоких трубчатых радиаторов Arbonia</h2>
				<p>
					Высокий радиатор не «магически» мощнее обычного - он даёт больше тепла за счёт большей высоты и площади
					теплоотдачи, а не за счёт особой конструкции. Это особенно полезно, когда в помещении мало места по
					ширине: там, где стандартный радиатор под окном просто не помещается, высокая модель решает задачу за
					счёт вертикали.
				</p>
				<p>Такой радиатор обычно ставят на простенок рядом с окном, балконной дверью, панорамным остеклением, в
					прихожей, гостиной или на кухне-гостиной. Но при выборе важно проверять не только внешний вид, а прежде
					всего мощность - и отдельно учитывать крепление, вес радиатора и тип стены, на которую он будет
					устанавливаться.
				</p>

				<Box textAlign={'center'}>
					<img
						src='/images/articles/30.jpeg'
						alt='Трубчатый высокий радиатор Arbonia'
						width={500}
						height={500}
					/>
				</Box>

				<h2 style={{ marginTop: '40px' }}>Когда высокий радиатор Arbonia подходит</h2>
				<p>Высокий радиатор стоит рассматривать, если:</p>
				<ul>
					<li>под окном нет места для стандартного радиатора;</li>
					<li>подоконник низкий или окно начинается почти от пола;</li>
					<li>есть узкий простенок рядом с окном, дверью или балконом;</li>
					<li>нужно освободить стену под мебель;</li>
					<li>радиатор должен стать частью интерьера;</li>
					<li>требуется получить больше мощности при небольшой ширине прибора.</li>
				</ul>
				<p>
					Складские{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							вертикальные радиаторы Arbonia в наличии
						</Typography>
					</a>{' '}
					можно посмотреть в каталоге. Если радиатор нужен рядом с окном без подоконника, отдельно разберите{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/panorama'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							радиаторы для панорамных окон
						</Typography>
					</a>
					, а если сомневаетесь в самом формате - статью{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/vertical-vs-horizontal'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							вертикальный или горизонтальный радиатор
						</Typography>
					</a>
					.
				</p>

				<h2 style={{ marginTop: '40px' }}>Когда высокий радиатор может не подойти</h2>
				<p>
					Высокий радиатор не всегда лучший вариант. Его стоит дополнительно проверять, если стена слабая, нет
					подходящего места для крепления, требуется очень большая мощность, а доступная ширина простенка слишком
					маленькая. Также высокий радиатор не всегда заменяет прибор под окном, если нужно отсечь холодный воздух
					от большого остекления - в этом случае у горизонтального радиатора под окном есть преимущество.
				</p>
				<p>
					Честный разбор ограничений - в статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/kogda-vertikalnyy-radiator-arbonia-ne-podkhodit'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							когда вертикальный радиатор Arbonia не подходит
						</Typography>
					</a>
					. Альтернативой может стать{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/low-models'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							низкий радиатор под окно
						</Typography>
					</a>
					, а если не уверены, какой вариант лучше сработает именно у вас, отправьте параметры помещения на{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/request'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							расчёт
						</Typography>
					</a>
					.
				</p>

				<h2 style={{ marginTop: '40px' }}>Arbonia 2180 или 3180: какую высокую модель выбрать</h2>
				<div style={{ overflowX: 'auto', marginTop: '20px' }}>
					<table className={tableStyle.table}>
						<tbody>
							<tr>
								<th>Модель</th>
								<th>Когда выбрать</th>
								<th>Особенность</th>
							</tr>
							<tr>
								<td>
									<a
										href='/models/2180'
										style={tableLinkStyle}
									>
										Arbonia 2180
									</a>
								</td>
								<td>когда нужен высокий, более компактный по глубине радиатор</td>
								<td>2-трубчатая модель глубиной 65 мм, хорошо подходит для узких простенков</td>
							</tr>
							<tr>
								<td>
									<a
										href='/models/3180'
										style={tableLinkStyle}
									>
										Arbonia 3180
									</a>
								</td>
								<td>когда нужна большая теплоотдача при похожей высоте</td>
								<td>3-трубчатая модель глубиной 105 мм, глубже и мощнее 2180</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>
					Если помещение небольшое или есть ограничение по глубине, чаще начинают с Arbonia 2180. Если комната
					больше, потолки выше или нужно больше мощности на той же стене, стоит рассмотреть Arbonia 3180. Точный
					выбор зависит от площади, теплопотерь и температуры системы отопления - подробное сравнение смотрите в
					статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/2180-3180'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							Arbonia 2180 vs 3180
						</Typography>
					</a>
					.
				</p>

				<div className='cta'>
					Не уверены, какая модель подойдёт - 2180 или 3180? Пришлите размеры помещения и место установки, мы
					рассчитаем мощность и предложим подходящий вариант.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Получить расчёт →</div>
					</a>
				</div>

				<h2 style={{ marginTop: '40px' }}>Хватит ли мощности высокого радиатора</h2>
				<p>
					Высокий радиатор не нужно выбирать только по высоте. Важно рассчитать теплоотдачу: площадь помещения,
					высоту потолков, тип остекления, наружные стены, температуру теплоносителя и место установки. В одной
					комнате Arbonia 2180 может быть достаточен, а в другой лучше выбрать Arbonia 3180 или увеличить число
					секций.
				</p>
				<p>
					Формулу и калькулятор секций смотрите в статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/vertical-radiator-power'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							как рассчитать мощность вертикального радиатора Arbonia
						</Typography>
					</a>
					. Если хотите подобрать радиатор по площади или по уже установленным приборам, пригодятся статьи{' '}
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
							подбор радиаторов на основе уже установленных
						</Typography>
					</a>
					.
				</p>

				<div className='cta'>
					Пришлите площадь помещения, высоту потолков, размеры простенка и фото места установки - рассчитаем
					мощность и предложим подходящую модель.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Рассчитать высокий радиатор →</div>
					</a>
				</div>

				<h2 style={{ marginTop: '40px' }}>Что учесть при монтаже высокого радиатора</h2>
				<p>
					У высоких моделей больше нагрузка на крепления, поэтому важно заранее проверить тип стены, высоту
					установки, место подключения и доступ к кронштейнам. Для капитальной стены задача обычно проще: секция
					радиатора, заполненная водой, весит около 5 кг, а значит радиатор из 10 секций создаёт нагрузку около 50
					кг. Для гипсокартона, слабых перегородок и нестандартных ниш нужно заранее продумать усиление стены или
					другой вариант крепления.
				</p>
				<p>
					<strong>
						Не стоит выбирать высокий радиатор без проверки стены и веса прибора, особенно для моделей с большим
						числом секций.
					</strong>
				</p>
				<p>
					Подробный расчёт кронштейнов и требования к стене - в статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/montazh-vysokih-radiatorov-arbonia-instrukciya'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							монтаж высоких радиаторов Arbonia
						</Typography>
					</a>
					. Если стена из ГКЛ, отдельно смотрите{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/montazh-arbonia-2180-na-gkl'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							монтаж Arbonia 2180 на ГКЛ
						</Typography>
					</a>
					, а про сами варианты креплений -{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/consoles'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							кронштейны и крепления для радиаторов Arbonia
						</Typography>
					</a>
					.
				</p>

				<h2 style={{ marginTop: '40px' }}>Где чаще всего ставят высокие радиаторы Arbonia</h2>

				<h3 style={{ marginTop: '30px' }}>В гостиной</h3>
				<p>
					Когда нужно сохранить панорамное окно, освободить стену или сделать радиатор интерьерным акцентом.
				</p>

				<h3 style={{ marginTop: '30px' }}>В прихожей и коридоре</h3>
				<p>Когда мало места по ширине, но есть узкий вертикальный участок стены.</p>

				<h3 style={{ marginTop: '30px' }}>На кухне-гостиной</h3>
				<p>Когда стандартный радиатор мешает мебели, кухонному гарнитуру или выходу на балкон.</p>

				<h3 style={{ marginTop: '30px' }}>Рядом с панорамным окном</h3>
				<p>
					Когда радиатор нельзя поставить под окно, его переносят на простенок рядом. Но мощность и расположение
					в этом случае нужно считать отдельно - см.{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/panorama'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							радиаторы Arbonia для панорамных окон
						</Typography>
					</a>
					.
				</p>
				{/* TODO: добавить ссылки на /articles/vertikalnyy-radiator-dlya-gostinoy и
				/articles/vertikalnyy-radiator-v-prihozhey-i-koridore, когда эти статьи будут опубликованы */}

				<h2 style={{ marginTop: '40px' }}>Цвет высокого радиатора Arbonia</h2>
				<p>
					Высокий радиатор заметнее стандартной батареи, поэтому цвет особенно важен. Белый{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/ral9016'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							RAL 9016
						</Typography>
					</a>{' '}
					подойдёт для спокойного универсального интерьера. Антрацит и тёмные оттенки делают радиатор акцентом.
					Если нужно попасть в цвет стены, мебели или дизайн-проекта, можно рассмотреть{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/coloring'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							покраску по RAL
						</Typography>
					</a>
					.
				</p>
				<p>
					Сравнение белого и антрацитового исполнения смотрите в статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/arbonia-3180-ral-9016-vs-anthracite'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							RAL 9016 или Anthracite Metallic для Arbonia 3180
						</Typography>
					</a>
					, а общие принципы подбора цвета - в статье{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/articles/tsvet-radiatorov-v-interiere'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							цвет радиаторов в интерьере
						</Typography>
					</a>
					.
				</p>

				<h2 style={{ marginTop: '40px' }}>Частые вопросы</h2>

				<p>
					<strong>Чем высокий радиатор отличается от обычного?</strong>
					<br />
					Высокий радиатор занимает меньше места по ширине и использует вертикальную часть стены. Его выбирают для
					узких простенков, панорамных окон, помещений без места под стандартную батарею.
				</p>
				<p>
					<strong>Что выбрать: Arbonia 2180 или 3180?</strong>
					<br />
					2180 компактнее по глубине, 3180 обычно выбирают, когда нужна большая теплоотдача. Точный выбор зависит
					от помещения и расчёта мощности.
				</p>
				<p>
					<strong>Можно ли поставить высокий радиатор вместо батареи под окном?</strong>
					<br />
					Можно, но не всегда это оптимально. Нужно проверить теплопотери окна, расположение радиатора и
					достаточность мощности.
				</p>
				<p>
					<strong>Подходит ли высокий радиатор для панорамных окон?</strong>
					<br />
					Да, если есть подходящий простенок рядом с окном. Иногда альтернативой будет низкий радиатор вдоль
					остекления.
				</p>
				<p>
					<strong>Нужна ли усиленная стена?</strong>
					<br />
					Зависит от веса, высоты, числа секций и типа стены. Для ГКЛ и слабых перегородок нужно заранее
					продумать крепление.
				</p>
				<p>
					<strong>Можно ли заказать высокий радиатор в цвет интерьера?</strong>
					<br />
					Да, можно выбрать белый вариант, антрацит или покраску по RAL.
				</p>
				<p>
					<strong>Сколько секций нужно для комнаты?</strong>
					<br />
					Это рассчитывается по площади, высоте потолков, остеклению, наружным стенам и температурному режиму
					системы отопления.
				</p>
				<p>
					<strong>Есть ли высокие радиаторы Arbonia в наличии?</strong>
					<br />
					Складские варианты смотрите в{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							каталоге вертикальных радиаторов
						</Typography>
					</a>
					, а точное наличие и цену лучше уточнить через заявку.
				</p>

				<h2 style={{ marginTop: '40px' }}>Вывод</h2>
				<p>
					Высокий радиатор нужно выбирать по месту установки, мощности, весу и подключению, а не только по
					внешнему виду. Отправьте параметры помещения - подберём модель Arbonia, количество секций, цвет и
					вариант подключения.
				</p>

				<div className='cta'>
					Подберём высокий радиатор Arbonia под ваше помещение - учтём мощность, вес, монтаж и цвет.
					<a
						href='/request'
						style={{ textDecoration: 'none' }}
					>
						<div className='ctaButton'>Подобрать высокий радиатор Arbonia →</div>
					</a>
				</div>
			</Typography>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: [
						{
							'@type': 'Question',
							name: 'Чем высокий радиатор отличается от обычного?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Высокий радиатор занимает меньше места по ширине и использует вертикальную часть стены. Его выбирают для узких простенков, панорамных окон, помещений без места под стандартную батарею.',
							},
						},
						{
							'@type': 'Question',
							name: 'Что выбрать: Arbonia 2180 или 3180?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '2180 компактнее по глубине, 3180 обычно выбирают, когда нужна большая теплоотдача. Точный выбор зависит от помещения и расчёта мощности.',
							},
						},
						{
							'@type': 'Question',
							name: 'Можно ли поставить высокий радиатор вместо батареи под окном?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Можно, но не всегда это оптимально. Нужно проверить теплопотери окна, расположение радиатора и достаточность мощности.',
							},
						},
						{
							'@type': 'Question',
							name: 'Подходит ли высокий радиатор для панорамных окон?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, если есть подходящий простенок рядом с окном. Иногда альтернативой будет низкий радиатор вдоль остекления.',
							},
						},
						{
							'@type': 'Question',
							name: 'Нужна ли усиленная стена?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Зависит от веса, высоты, числа секций и типа стены. Для ГКЛ и слабых перегородок нужно заранее продумать крепление.',
							},
						},
						{
							'@type': 'Question',
							name: 'Можно ли заказать высокий радиатор в цвет интерьера?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, можно выбрать белый вариант, антрацит или покраску по RAL.',
							},
						},
						{
							'@type': 'Question',
							name: 'Сколько секций нужно для комнаты?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Это рассчитывается по площади, высоте потолков, остеклению, наружным стенам и температурному режиму системы отопления.',
							},
						},
						{
							'@type': 'Question',
							name: 'Есть ли высокие радиаторы Arbonia в наличии?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Складские варианты нужно смотреть в каталоге вертикальных радиаторов, а точное наличие и цену лучше уточнять через заявку.',
							},
						},
					],
					}),
				}}
			/>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
