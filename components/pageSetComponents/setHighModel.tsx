import { Box, Typography } from '@mui/material'
import React from 'react'

import Hero from '../../components/hero/hero'
import PageHeader from '../../components/pageHeader/pageHeader'
import ModelBlock from '../modelBlock/modelBlock'

import { SetComponentProps } from '../../models/setComponentProps.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

const SetHighModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	return (
		<Box>
			<PageHeader
				title={'Вертикальные трубчатые Arbonia | в наличии'}
				description='Вертикальные трубчатые Arbonia. Популярные модели 2180 и 3180. Купить по выгодным ценам с официальной гарантией 10 лет. Доставка по России.'
			/>
			<Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Вертикальные радиаторы Arbonia'}
				subheader={'Складские модели радиаторов высотой 180 см'}
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Вертикальные радиаторы Arbonia - одна из самых популярных и любимых моделей среди владельцев квартир, домов,
						выбор профессиональных дизайнеров и архитекторов. Стальные трубчатые вертикальные радиаторы уже стали
						важным, а иногда и центральным элементом или акцентом в интерьере помещения. Забудьте те времена, когда
						радиатор скрывали в интерьерах. Arbonia Column не нужно скрывать под декоративными панелями.
					</Typography>
				</Box>
				<Box marginTop='20px'>
					<Typography sx={{ ...styles.standardText }}>
						Стальные трубчатые вертикальные радиаторы функциональны, так как подходят для помещения с высокими окнами,
						их можно разместить на узких стенах по бокам от окон, в различных выступах, узких угловых пространствах.
						Вертикальные радиаторы Arbonia впишутся в любую концепцию интерьера – от минимализма и модерна до хайтека,
						лофта, фьюжн и многих других.
					</Typography>
				</Box>

				{/* 2180 белый*/}
				<ModelBlock
					title={'Arbonia 2180 RAL 9016, боковое подключение 3/4'}
					description={
						'Вертикальный 2-трубчатый радиатор Arbonia 2180 в классическом белом цвете (RAL 9016) - это изящное решение для интерьеров, где важны чистота линий и визуальная лёгкость. Установленный вдоль стены, он занимает минимум места и эффективно обогревает высокие помещения. Боковое подключение 3/4 подходит для модернизации старых систем отопления, в том числе однотрубных. Вертикальная форма радиатора обеспечивает равномерное распределение тепла по всей высоте комнаты, создавая ощущение комфорта и уюта.'
					}
					model={models.find(x => x.id === '2180-9016-12') || models[0]}
					color={colors.find(x => x.id === '9016') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 2180 RAL 9016, №69 ТВВ'}
					description={
						'Этот вертикальный радиатор Arbonia 2180 в белом исполнении предназначен для нижнего подключения со встроенным термовентилем, что делает его идеальным для современных систем с разводкой по полу. Тонкий, высокий корпус визуально вытягивает пространство и гармонично вписывается в интерьеры в стиле минимализм или лофт. Вертикальное расположение труб позволяет лучше использовать потоки воздуха и ускоряет нагрев комнаты при минимальных теплопотерях.'
					}
					model={models.find(x => x.id === '2180-9016-69tvv') || models[0]}
					color={colors.find(x => x.id === '9016') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				{/* 2180 RAL 7016*/}
				<ModelBlock
					title={'Arbonia 2180 RAL 7016, боковое подключение 3/4'}
					description={
						'Высокий радиатор Arbonia 2180 в антрацитово-сером оттенке (RAL 7016) выделяется строгой элегантностью и современным характером. Такой цвет особенно хорошо смотрится в интерьерах с контрастными акцентами - на светлых стенах или рядом с натуральным деревом. Боковое подключение 3/4 даёт возможность использовать радиатор в системах старого типа, а вертикальное расположение секций обеспечивает высокую теплоотдачу и равномерное прогревание помещений по высоте..'
					}
					model={models.find(x => x.id === '2180-7016-12') || models[0]}
					color={colors.find(x => x.id === '7016') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 2180 RAL 7016, №69 ТВВ'}
					description={
						'Вертикальный радиатор Arbonia 2180 в глубоком антрацитовом цвете с нижним подключением и встроенным термовентилем - отличный выбор для современных домов. Он не только эффективно нагревает высокие комнаты, но и выступает декоративным элементом интерьера. Вертикальная конструкция экономит пространство и обеспечивает мягкое, естественное циркулирование тёплого воздуха снизу вверх, создавая равномерный микроклимат по всей высоте стены.'
					}
					model={models.find(x => x.id === '2180-7016-69tvv') || models[0]}
					color={colors.find(x => x.id === '7016') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				{/* 2180 SF-3*/}
				<ModelBlock
					title={'Arbonia 2180 SF-3 Anthrazit metallic, боковое подключение 3/4'}
					description={
						'Модель Arbonia 2180 в металлическом оттенке SF-3 (Anthrazit metallic) предаёт интерьеру статусный и современный вид. Благодаря вертикальному формату он занимает минимум полезной площади и идеально подходит для комнат с узкими участками стен. Боковое подключение 3/4 позволяет легко заменить старый радиатор на новый Arbonia, сохранив схему подачи теплоносителя. Гладкая металлизированная поверхность эффектно отражает свет и добавляет глубины интерьеру.'
					}
					model={models.find(x => x.id === '2180-sf3-12') || models[0]}
					color={colors.find(x => x.id === 'sf3') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 2180 SF-3 Anthrazit metallic, №69 ТВВ'}
					description={
						'Вертикальный радиатор Arbonia 2180 в цвете SF-3 с нижним подключением и интегрированным термовентилем разработан для современных систем отопления с разводкой по полу. Металлический глянец придаёт ему технологичный внешний вид, а высокая конструкция обеспечивает равномерный прогрев воздуха по всей высоте комнаты. Такой вертикальный радиатор подходит для офисов, квартир и лофтов, где важно сочетание мощности и дизайна.'
					}
					model={models.find(x => x.id === '2180-sf3-69tvv') || models[0]}
					color={colors.find(x => x.id === 'sf3') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				{/* 3180 белый*/}
				<ModelBlock
					title={'Arbonia 3180 RAL 9016, боковое подключение 3/4'}
					description={
						'Трёхтрубчатый радиатор Arbonia 3180 в белом цвете - это мощное и в то же время изящное решение для высоких помещений. Вертикальная форма и увеличенное число труб обеспечивают повышенную теплоотдачу, а боковое подключение 3/4 делает его удобным для монтажа в старых домах. Такой радиатор удачно смотрится в гостиных, спальнях и прихожих, где требуется сочетание функциональности и элегантного вида.'
					}
					model={models.find(x => x.id === '3180-9016-12') || models[0]}
					color={colors.find(x => x.id === '9016') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 3180 RAL 9016, №69 ТВВ'}
					description={
						'Высокий 3-трубчатый радиатор Arbonia 3180 с нижним подключением и термовентилем создан для современных систем отопления, где важно скрыть коммуникации и сохранить чистый дизайн интерьера. Белый цвет универсален и легко сочетается с любым оформлением. Вертикальная ориентация радиатора обеспечивает естественную циркуляцию тёплого воздуха и быстрое создание комфортного климата в помещении.'
					}
					model={models.find(x => x.id === '3180-9016-69tvv') || models[0]}
					color={colors.find(x => x.id === '9016') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				{/* 3180 RAL 7016*/}
				<ModelBlock
					title={'Arbonia 3180 RAL 7016, боковое подключение 3/4'}
					description={
						'Вертикальный 3-трубчатый радиатор в цвете антрацит (RAL 7016) впечатляет своей геометрией и контрастным видом. Боковое подключение 3/4 делает его совместимым со старыми системами отопления, а высокая вертикальная форма эффективно обогревает комнаты с высокими потолками. Матовая поверхность приятна на ощупь и легко чистится, что особенно важно для городских интерьеров.'
					}
					model={models.find(x => x.id === '3180-7016-12') || models[0]}
					color={colors.find(x => x.id === '7016') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 3180 RAL 7016, №69 ТВВ'}
					description={
						'Современный трубчатый радиатор Arbonia 3180 в антрацитовом цвете предназначен для нижнего подключения со встроенным термовентилем. Он идеален для монтажа в системах с половой разводкой и отлично сочетается с интерьерами в стиле индастриал или минимализм. Благодаря вертикальному расположению труб радиатор обеспечивает равномерный и быстрый нагрев воздуха по всей высоте комнаты, создавая приятное тепло без перегрева.'
					}
					model={models.find(x => x.id === '3180-7016-69tvv') || models[0]}
					color={colors.find(x => x.id === '7016') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				{/* 3180 SF-3*/}
				<ModelBlock
					title={'Arbonia 3180 SF-3 Anthrazit metallic, боковое подключение 3/4'}
					description={
						'Трёхтрубчатый вертикальный радиатор Arbonia 3180 в цвете SF-3 Anthrazit metallic объединяет технологичный дизайн и высокую производительность. Благодаря вертикальной ориентации он занимает минимум места и эффективно нагревает воздух вдоль всей стены. Боковое подключение 3/4 позволяет легко интегрировать радиатор в существующие системы, а металлический блеск поверхности придаёт помещению современный характер.'
					}
					model={models.find(x => x.id === '3180-sf3-12') || models[0]}
					color={colors.find(x => x.id === 'sf3') || colors[0]}
					connection={connections.find(x => x.id === '12') || connections[0]}
				/>
				<ModelBlock
					title={'Arbonia 3180 SF-3 Anthrazit metallic, №69 ТВВ'}
					description={
						'Вертикальный радиатор Arbonia 3180 в цвете Anthrazit metallic с нижним подключением и термовентилем - это функциональное и эстетичное решение для домов и офисов. Вертикальное расположение труб позволяет равномерно распределять тепло, создавая комфортный микроклимат даже в высоких помещениях. Металлический оттенок добавляет элегантности и подчеркивает современный характер интерьера.'
					}
					model={models.find(x => x.id === '3180-sf3-69tvv') || models[0]}
					color={colors.find(x => x.id === 'sf3') || colors[0]}
					connection={connections.find(x => x.id === '69tvv') || connections[0]}
				/>

				<Box marginTop='60px'>
					<Typography
						component='h2'
						variant='h5'
					>
						Полезные материалы
					</Typography>

					<ul>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/high-arbonia`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Высокие радиаторы Arbonia
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/panorama`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Радиаторы Arbonia для панорамных окон
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/2180-3180`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Arbonia 2180 vs 3180: чем отличаются и когда что выбрать
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/vertical-vs-horizontal`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Какой радиатор выбрать: вертикальный или горизонтальный
								</Typography>
							</a>
						</li>
						<li>
							<a
								style={{ textDecoration: 'none' }}
								href={`/articles/montazh-vysokih-radiatorov-arbonia-instrukciya`}
							>
								<Typography
									sx={{ ...styles.standardTextLinkUnderline }}
									component='span'
								>
									Монтаж высоких радиаторов Arbonia: требования и расчет кронштейнов
								</Typography>
							</a>
						</li>
					</ul>
				</Box>
			</Box>
		</Box>
	)
}

export default SetHighModel
