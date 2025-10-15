import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Радиаторы Arbonia: ответы на частые вопросы про радиаторы Arbonia'}
				description={
					'Собрали наиболее частые вопросы, которые нам задают про радиаторы Arbonia, и подготовили на них ответы. Где можно устанавливать радиаторы Arbonia? Где их производят? Какое давление они выдерживают? И т.д.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Радиаторы Arbonia: ответы на частые вопросы',
						link: '/articles/faq',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Ответы на часто задаваемые вопросы про радиаторы Arbonia'}
			/>
			<Box
				sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}
				itemScope
				itemType='https://schema.org/FAQPage'
			>
				<div>
					<Typography
						variant='h5'
						component={'h2'}
					>
						Содержание:
					</Typography>
					<Typography sx={{ ...styles.standardText }}>
						<ul>
							<li>
								<Link href={'#faq-1'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Где производят радиаторы Arbonia?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-2'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Какие вертикальные радиаторы Arbonia поддерживаются в наличии?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-3'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Подходят ли радиаторы Arbonia для центрального отопления?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-4'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Возможно ли радиусное исполнение радиаторов Arbonia?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-42'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Как соотносятся мощности радиаторов Arbonia c алюминиевыми или биметаллическими радиаторами?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-5'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Какое должно быть расстояние радиатора от стены?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-6'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Какое нужно расстояние от пола и от подоконника?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-7'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Возможно ли проходное подключение радиаторов Arbonia
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-8'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Как работает циркуляция теплоносителя в радиаторах большой длины
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-9'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Возможна ли покраска радиаторов в свой цвет?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-10'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Основные преимущества стальных трубчатых радиаторов
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-11'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Как приобрести радиатор Arbonia по индивидуальному заказу?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-12'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Что такое объем радиатора в литрах?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-13'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Зачем нужна перемычка при установки трубчатых радиаторов с боковым подключением?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-14'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Когда лучше менять радиаторы отопления?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-15'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Зачем нужен кран Маевского?
									</Typography>
								</Link>
							</li>
							<li style={{ marginTop: '5px' }}>
								<Link href={'#faq-16'}>
									<Typography
										sx={{ ...styles.smallTextDotted, ...styles.standardText }}
										component='span'
									>
										Почему трубчатые радиаторы считаются наиболее гигиеничными?
									</Typography>
								</Link>
							</li>
						</ul>
					</Typography>
				</div>

				<div
					id='faq-1'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Где производят радиаторы Arbonia?
					</Typography>
					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Холдинг, который управляет брендом Arbonia, располагает несколькими производственными мощностями. Завод,
								расположенный в городе Стршибро, Чехия, специализируется на изготовлении трубчатых радиаторов для систем
								отопления.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-2'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Какие вертикальные радиаторы Arbonia поддерживаются в наличии?
					</Typography>
					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								На складе постоянно поддерживаются радиаторы{' '}
								<Link href='/models/2180'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										Arbonia 2180
									</Typography>
								</Link>{' '}
								и{' '}
								<Link href='/models/3180'>
									<Typography
										sx={{ ...styles.standardTextRedLink }}
										component='span'
									>
										Arbonia 3180
									</Typography>
								</Link>{' '}
								- это батареи высотой 180 см в 2-трубчатом и 3-трубчатом исполнении. Вы можете приобрести радиаторы как
								с нижним, так и с боковым подключением. В большинстве случаев подходит модель 2180. Но если вам
								требуется более мощный радиатор, то следует обратить внимание на Arbonia 3180.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-3'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Подходят ли радиаторы Arbonia для центрального отопления?
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Радиаторы Arbonia подходят как для установки в многоквартирные дома с централизованной системой
								отопления, так и для использования в частных домах с собственным отопительным котлом. Они предназначены
								для работы в системах с закрытым контуром, где отсутствует прямой доступ кислорода к воде.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								В обычных условиях работы центральной отопительной системы давление обычно не превышает 8 атмосфер.
								Однако радиаторы спроектированы таким образом, что могут непрерывно работать при давлении до 10 атмосфер
								и выдерживать кратковременные повышения до 16 атмосфер, что обеспечивает их надежность и долговечность в
								широком диапазоне рабочих условий.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}
				<div
					id='faq-42'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Как соотносятся мощности радиаторов Arbonia c алюминиевыми или биметаллическими радиаторами?
					</Typography>
					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Алюминиевые или биметаллические радиаторы состоят из секций длиной 80 мм и обладают высокой теплоотдачей
								за счет высокой доли передачи тепла через конвекцию. Ниже представлена таблица, в которой приведены
								мощности популярных моделей радиаторов Arbonia в сравнении с алюминиевыми батареями (мощности указаны
								при dT=60C).
							</Typography>
							<Typography
								sx={{ ...styles.smallText }}
								marginY='20px'
							>
								<table
									style={{
										width: '100%',
										minWidth: '500px',
										borderCollapse: 'collapse',
										overflowX: 'auto',
									}}
								>
									<tr>
										<th style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: 'lightgrey' }}>
											Алюминиевый
											<br />
											радиатор
										</th>
										<th style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: 'lightgrey' }}>
											Arbonia 3057
										</th>
										<th style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: 'lightgrey' }}>
											Arbonia 2180
										</th>
										<th style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: 'lightgrey' }}>
											Arbonia 3180
										</th>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											5 секций
											<br />
											430 мм
											<br />
											790 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											10 секций
											<br />
											476 мм
											<br />
											780 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											5 секций
											<br />
											251 мм
											<br />
											820 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											4 секции
											<br />
											206 мм
											<br />
											876 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											6 секций
											<br />
											510 мм
											<br />
											948 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											12 секций
											<br />
											566 мм
											<br />
											936 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											6 секций
											<br />
											296 мм
											<br />
											984 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											4 секции
											<br />
											206 мм
											<br />
											876 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											7 секций
											<br />
											590 мм
											<br />
											1106 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											14 секций
											<br />
											656 мм
											<br />
											1092 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											7 секций
											<br />
											341 мм
											<br />
											1148 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											5 секций
											<br />
											251 мм
											<br />
											1095 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											8 секций
											<br />
											670 мм
											<br />
											1264 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											16 секций
											<br />
											746 мм
											<br />
											1248 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											8 секций
											<br />
											386 мм
											<br />
											1312 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											6 секций
											<br />
											296 мм
											<br />
											1314 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											9 секций
											<br />
											750 мм
											<br />
											1422 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											18 секций
											<br />
											836 мм
											<br />
											1404 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											9 секций
											<br />
											431 мм
											<br />
											1476 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											6 секций
											<br />
											296 мм
											<br />
											1314 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											10 секций
											<br />
											830 мм
											<br />
											1580 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											20 секций
											<br />
											926 мм
											<br />
											1560 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											10 секций
											<br />
											476 мм
											<br />
											1640 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											7 секций
											<br />
											341 мм
											<br />
											1533 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											11 секций
											<br />
											910 мм
											<br />
											1738 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											22 секций
											<br />
											1016 мм
											<br />
											1716 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											11 секций
											<br />
											521 мм
											<br />
											1804 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											8 секций
											<br />
											386 мм
											<br />
											1752 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											12 секций
											<br />
											990 мм
											<br />
											1896 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											24 секций
											<br />
											1106 мм
											<br />
											1872 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											12 секций
											<br />
											566 мм
											<br />
											1968 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											9 секций
											<br />
											431 мм
											<br />
											1971 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											13 секций
											<br />
											1070 мм
											<br />
											2054 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											26 секций
											<br />
											1196 мм
											<br />
											2028 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											13 секций
											<br />
											611 мм
											<br />
											2132 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											9 секций
											<br />
											431 мм
											<br />
											1971 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											14 секций
											<br />
											1150 мм
											<br />
											2212 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											28 секций
											<br />
											1286 мм
											<br />
											2184 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											13 секций
											<br />
											611 мм
											<br />
											2132 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray', backgroundColor: '#f2f2f2' }}>
											10 секций
											<br />
											476 мм
											<br />
											2190 Вт
										</td>
									</tr>
									<tr>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											15 секций
											<br />
											1230 мм
											<br />
											2370 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											30 секций
											<br />
											1376 мм
											<br />
											2340 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											14 секций
											<br />
											656 мм
											<br />
											2296 Вт
										</td>
										<td style={{ padding: '5px', border: '1px solid darkgray' }}>
											11 секций
											<br />
											521 мм
											<br />
											2409 Вт
										</td>
									</tr>
								</table>
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-4'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Возможно ли радиусное исполнение радиаторов Arbonia?
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Радиусное исполнение радиаторов Arbonia предполагает индивидуальный подход к каждому заказу, начиная с
								точного замера радиуса стены на месте установки и заканчивая контрольной проверкой утвержденного шаблона
								перед началом производства. Этот процесс гарантирует, что радиатор будет идеально соответствовать
								кривизне стены и интерьеру помещения. Особенностью является то, что каждый этап требует участия
								квалифицированных специалистов, от замерщика до инженеров конструкторского бюро, что, безусловно, влияет
								на стоимость и сроки изготовления такого радиатора.
								<Box
									textAlign={'center'}
									marginTop='20px'
								>
									<img
										src='/images/articles/radius1.png'
										alt='Радиатор Arbonia в радиусном исполнении'
										width={502}
										height={213}
									/>
								</Box>
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-5'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Какое должно быть расстояние радиатора от стены
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Установка радиатора на рекомендованном минимальном расстоянии от стены позволяет достичь оптимального
								теплообмена и распределения воздуха в помещении.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								На выбор кронштейнов влияет не только тип радиатора (количество трубок), но и необходимое расстояние от
								стены. Кронштейны с фиксированной глубиной установки (ZB 0251, ZB 0257, ZB 0280) подойдут, если точно
								известно расстояние, необходимое для установки радиатора. В то же время, кронштейны с регулируемой
								глубиной (W161, W162, W163, W164) предоставляют большую гибкость при монтаже, позволяя адаптировать
								установку под конкретные условия и требования к расстоянию от стены.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Для разных типов радиаторов требуются разные минимальные расстояния от стены, что связано с их тепловой
								мощностью и способностью к распределению тепла в помещении. Чем больше количество трубок в радиаторе,
								тем больше места необходимо для обеспечения эффективного теплообмена, поскольку более массивные
								радиаторы генерируют и распределяют больше тепла. Эти рекомендации помогают обеспечить, чтобы радиаторы
								работали наиболее эффективно, не теряя тепловую мощность из-за слишком близкого расположения к стене.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-6'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Какое нужно расстояние от пола и от подоконника?
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Соблюдение минимального расстояния как от подоконника, так и от пола гарантирует, что воздух свободно
								циркулирует вокруг радиатора, что способствует более эффективному распределению тепла.
								<ul>
									<li>
										<strong>От подоконника до радиатора</strong>: Минимум 10 см расстояние позволяет горячему воздуху
										подниматься от радиатора вверх, не создавая теплового затора под подоконником. Это уменьшает риск
										конденсации и повышает эффективность отопления.
									</li>
									<li>
										<strong>От пола до радиатора</strong>: Такое же минимальное расстояние в 10 см обеспечивает
										адекватную циркуляцию воздуха под радиатором, что способствует более равномерному распределению
										тепла по комнате. Это также позволяет удобно убирать пыль и грязь, которые могут скапливаться под
										радиатором.
									</li>
								</ul>
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-7'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Возможно ли проходное подключение радиаторов Arbonia
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Последовательное подключение нескольких радиаторов Arbonia – это распространенный метод в системах
								отопления, позволяющий эффективно распределять тепло в нескольких помещениях или в большом пространстве.
								Использование проходных радиаторов и комплектующих, таких как переходники с отбортовкой и прокладки,
								обеспечивает герметичность и надежность такого подключения.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Выбор между 1/2" и 3/4" зависит от расчетной тепловой мощности системы и требуемого расхода воды через
								радиаторы. Более крупный диаметр позволяет обеспечить больший расход и, соответственно, может быть
								предпочтителен для систем с высокой тепловой нагрузкой.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-8'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Как работает циркуляция теплоносителя в радиаторах большой длины
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Когда радиатор получается особенно длинным (1500 мм и более), без дополнительных мер может произойти
								снижение эффективности отопления из-за недостаточного распределения горячей воды по всей его длине. В
								таких случаях внутрь радиатора устанавливается трубка-удлинитель, которая помогает воде равномерно
								распределиться, повышая тем самым общую теплоотдачу радиатора.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Длина трубки составляет 2/3 от длины радиатора, что позволяет горячей воде достигать дальних участков
								радиатора, тем самым улучшая его теплоотдачу и обеспечивая более равномерный нагрев помещения.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-9'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Возможна ли покраска радиаторов в свой цвет?
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Вы можете выбрать между заказом радиатора прямо с завода в нужном цвете, что может занять от 2 до 4
								месяцев, либо воспользоваться услугой покраски радиаторов в выбранный цвет из палитры RAL, что
								значительно быстрее – всего 1-2 недели.
							</Typography>
						</div>
					</div>
				</div>

				{/* --- */}

				<div
					id='faq-10'
					itemScope
					itemProp='mainEntity'
					itemType='https://schema.org/Question'
				>
					<Typography
						marginTop='40px'
						variant='h5'
						component={'h2'}
						itemProp='name'
					>
						Основные преимущества стальных трубчатых радиаторов
					</Typography>

					<div
						itemScope
						itemProp='acceptedAnswer'
						itemType='https://schema.org/Answer'
					>
						<div itemProp='text'>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Стальные трубчатые радиаторы обладают множеством преимуществ, делающих их идеальным выбором для
								современного жилища. Одно из ключевых преимуществ — это полностью автоматизированное производство,
								исключающее человеческий фактор, что гарантирует высокое качество и однородность каждого изделия. Эти
								радиаторы предлагаются в широком ассортименте типоразмеров: высота варьируется от 19 до 300 см,
								количество трубок в секции — от 2 до 6, а число секций может достигать от 2 до 50. Такой разнообразный
								выбор позволяет подобрать радиатор для любого пространства и тепловых нужд.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Порошковая окраска, используемая в производстве, не только придает изделиям привлекательный внешний вид,
								но и увеличивает их устойчивость к коррозии и механическим повреждениям. Это делает радиаторы более
								долговечными и уменьшает потребность в их регулярном обслуживании. Уход за такими радиаторами не
								составляет труда — они легко очищаются от пыли и грязи, что способствует поддержанию оптимальной гигиены
								в помещении.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Кроме того, стальные трубчатые радиаторы отличаются премиальным внешним видом. Они идеально вписываются
								в дизайнерские интерьеры, будь то классические или современные стили, благодаря своему универсальному
								дизайну. Это делает их подходящими для использования в самых различных архитектурных и дизайнерских
								решениях.
							</Typography>
						</div>
					</div>

					{/* --- */}
					<div
						id='faq-11'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Как приобрести радиатор Arbonia по индивидуальному заказу?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									В наличии поддерживаются наиболее популярные модели радиаторов Arbonia. Однако, если вам нужен
									радиатор с нестандартными параметрами, вы можете оформить индивидуальный заказ. Сроки поставки
									радиатора зависят от загруженности производства и могут составлять от 2 до 4 месяцев. Пожалуйста,
									уточняйте реальные сроки у менеджера при оформлении заказа.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Заказать можно любой радиатор из полного каталога производителя. На выбор доступны не только любые
									размеры, но также цвета и варианты подключения. Это дает возможность подобрать радиатор, который
									идеально подойдет для вашего интерьера и обеспечит оптимальное отопление помещения.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Важно учитывать, что радиаторы изготавливаются и поставляются в России по вашему индивидуальному
									заказу. Поэтому их нельзя будет вернуть или обменять. Мы настоятельно рекомендуем согласовать
									технические параметры радиаторов с вашим прорабом перед оформлением заказа.
								</Typography>
							</div>
						</div>
					</div>

					{/* --- */}

					<div
						id='faq-12'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Что такое объем радиатора в литрах?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									«Емкость для воды» показывает объем теплоносителя, который требуется радиатору для нормального
									функционирования в системе отопления. Этот параметр также называют «объем воды в секции» — что дает
									лучшее представление о его значении. Хотя емкость не считается ключевым фактором при выборе радиатора,
									более важными характеристиками являются его физические размеры, рабочее давление и тепловая мощность.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Иногда можно столкнуться с двумя радиаторами с почти одинаковыми параметрами, но разной емкостью для
									воды. В таких случаях предпочтительнее выбрать радиатор с меньшим объемом воды в секции. Это позволяет
									более точно управлять температурой радиатора и ускоряет его нагрев, что особенно важно зимой.
									Небольшая емкость воды оказывается полезной в домах с газовыми котлами, так как способствует экономии
									затрат на отопление.
								</Typography>
							</div>
						</div>
					</div>

					{/* --- */}

					<div
						id='faq-13'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Зачем нужна перемычка при установки трубчатых радиаторов с боковым подключением?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									В многоквартирных домах с отопительной системой часто можно увидеть перемычку (или байпас) в
									радиаторах с боковым подключением. Это устройство не всегда является обязательным, поэтому возникает
									вопрос: для чего оно нужно? Установка перемычки предусмотрена на этапе проектирования системы, чтобы
									соответствовать техническим требованиям. Перемычка обычно используется в домах с однотрубной системой
									отопления, в отличие от двухтрубных, где теплоноситель циркулирует постоянно и нет необходимости в
									байпасе.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Однотрубная система имеет свои особенности. Для равномерного распределения тепла по этажам иногда
									необходимо перекрывать поток теплой воды в отдельных квартирах. Без перемычки температура на разных
									этажах может существенно различаться: в одних квартирах будет жарко, а в других холодно. Байпас
									позволяет настраивать температуру, обходя радиатор в конкретной квартире, обеспечивая более стабильное
									отопление на всех этажах.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Кроме того, перемычка играет важную роль при аварийных ситуациях и ремонтных работах. В случае
									необходимости можно перекрыть воду в отдельной квартире или радиаторе без отключения всего дома.
									Байпас позволяет изолировать конкретный участок, что делает систему более удобной для обслуживания и
									ремонта, не причиняя неудобств другим жильцам.{' '}
								</Typography>
							</div>
						</div>
					</div>

					{/* --- */}

					<div
						id='faq-14'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Когда лучше менять радиаторы отопления?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Система отопления постепенно изнашивается, что со временем снижает ее эффективность, и встает вопрос о
									замене батарей. Когда же лучше всего проводить эти работы – летом или зимой? Хотя замена радиаторов в
									летний период часто считается более удобной, следует учитывать, что и тогда потребуется сливать воду
									из всей системы, что само по себе представляет непростую задачу. Важно понимать, что в летнее время
									вода остается в системе, хоть и не прогревается, поскольку оставлять трубы пустыми надолго
									нежелательно — это ускоряет их коррозию.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Тем не менее, замена радиаторов летом обычно проще, так как в этот период дом не останется без
									отопления, и согласовать проведение работ с управляющей компанией легче. Единственный недостаток
									летней замены — невозможность сразу проверить работу новых радиаторов, поскольку подача воды
									возобновляется лишь с началом отопительного сезона.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Зимняя замена радиаторов, напротив, проводится в исключительных случаях, обычно в аварийных ситуациях,
									когда устранение проблемы не терпит отлагательств.
								</Typography>
							</div>
						</div>
					</div>

					{/* --- */}

					<div
						id='faq-15'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Зачем нужен кран Маевского на радиаторе?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Кран Маевского — это устройство, предназначенное для выпуска воздушных масс из батарей водяного
									отопления. Он помогает удалить воздух, который попадает в систему во время подпитки теплоносителем.
									Вода в системе отопления может содержать растворенные газы, которые при больших объемах начинают
									скапливаться и образовывать воздушные пробки. Эти пробки мешают нормальной циркуляции теплоносителя,
									из-за чего помещение прогревается медленнее и менее равномерно.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Для выпуска воздуха через кран Маевского требуется специальная отвертка или ключ. Присутствие крана
									особенно важно после длительного простоя системы или при добавлении нового теплоносителя, когда
									скопившиеся газы необходимо вывести наружу. Воздух также может образовываться при взаимодействии воды
									с металлическими элементами, что иногда приводит к выделению водорода.
								</Typography>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Кран Маевского установлен с учетом безопасности: его можно открыть только с помощью специальных
									инструментов, что предотвращает случайный доступ и защищает от нежелательного слива воды, что могло бы
									привести к подтоплению квартиры или соседей.
								</Typography>
							</div>
						</div>
					</div>

					{/* --- */}

					<div
						id='faq-16'
						itemScope
						itemProp='mainEntity'
						itemType='https://schema.org/Question'
					>
						<Typography
							marginTop='40px'
							variant='h5'
							component={'h2'}
							itemProp='name'
						>
							Почему трубчатые радиаторы считаются наиболее гигиеничными?
						</Typography>

						<div
							itemScope
							itemProp='acceptedAnswer'
							itemType='https://schema.org/Answer'
						>
							<div itemProp='text'>
								<Typography
									sx={{ ...styles.standardText }}
									marginY='20px'
								>
									Трубчатые радиаторы считаются наиболее гигиеничными из-за их открытой и гладкой конструкции, которая
									упрощает процесс очистки. В отличие от секционных радиаторов, они не имеют труднодоступных мест, где
									могла бы скапливаться пыль и грязь. Это позволяет легко поддерживать их в чистоте даже в условиях
									строгих требований к гигиене, таких как больницы, детские сады и учебные заведения. Простота очистки
									делает трубчатые радиаторы предпочтительными для помещений, где важно минимизировать накопление пыли и
									загрязнений, поддерживая здоровую и чистую среду.
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</Box>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
