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
				title={'Рекомендации по монтажу радиаторов Arbonia'}
				description={
					'Как правильно установить радиаторы Arbonia: практические советы, FAQ, типичные ошибки. Пошаговые рекомендации от профессионалов.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{ title: 'Монтаж радиторов Arbonia', link: '/articles/montazh-radiatorov-arbonia-rekomendacii' },
				]}
			/>
			<Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Рекомендации по монтажу радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<p>
						Чтобы радиаторы Arbonia работали эффективно и служили долго, установка должна проводиться с соблюдением всех
						технических требований. Ниже — подробные рекомендации по подготовке, креплению, подключению и запуску
						радиатора, а также ответы на популярные вопросы.
					</p>
				</Typography>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					Общие рекомендации по монтажу
				</Typography>

				<Typography
					variant='h6'
					component='h3'
					marginTop='20px'
				>
					1. Подготовка к установке
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li style={{ ...styles.standardText }}>
							Перед началом работ убедитесь, что радиатор предназначен для закрытых систем отопления. Подключение к
							горячему водоснабжению или открытым системам недопустимо, так как это приведёт к коррозии, нестабильной
							работе и аннулирует гарантию.
						</li>
						<li style={{ ...styles.standardText }}>
							Осмотрите упаковку и лакокрасочное покрытие. Повреждения нужно зафиксировать до начала установки. Защитную
							плёнку снимать только в местах подключения. Полное удаление — только перед сдачей системы в эксплуатацию.
						</li>
						<li style={{ ...styles.standardText }}>
							Если радиатор весит более 25 кг (а с теплоносителем — и все 30–40 кг), монтаж должен производиться с
							привлечением помощника или с использованием подъемных механизмов.
						</li>
						<li style={{ ...styles.standardText }}>
							Обязательно промойте трубопровод перед установкой радиатора. В системе не должно быть песка, металлической
							стружки, остатков резьбовой пасты и герметиков. Загрязнения могут вызвать засор, кавитацию и повреждение
							покрытия внутри радиатора.
						</li>
					</ul>
				</Typography>

				<Typography
					variant='h6'
					component='h3'
				>
					2. Условия установки
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li style={{ ...styles.standardText }}>
							Максимальная рабочая температура теплоносителя — 110 °C, давление — до 10 бар. Для промышленных объектов
							возможны модели до 16 бар. Превышение этих параметров приводит к выходу из строя радиатора.
						</li>
						<li style={{ ...styles.standardText }}>
							Монтаж имеет право выполнять только квалифицированный сантехник или монтажник систем отопления. Требуйте у
							исполнителя акт выполненных работ и отметку о вводе радиатора в эксплуатацию. Без этого документального
							подтверждения заводская гарантия считается недействительной.
						</li>
						<li style={{ ...styles.standardText }}>
							Обеспечьте минимальные отступы: от пола — 100–150 мм, от стены — 30–70 мм. Это необходимо для естественной
							конвекции и равномерного распределения тепла.
						</li>
						<li style={{ ...styles.standardText }}>
							Нельзя устанавливать радиатор вплотную к шторам, мебели или в нишу без вентиляции — это ухудшит
							теплоотдачу и может привести к перегреву.
						</li>
					</ul>
				</Typography>

				<Typography
					variant='h6'
					component='h3'
				>
					3. Крепление радиатора
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li style={{ ...styles.standardText }}>
							Для каждого типа стены (бетон, кирпич, гипсокартон) подбираются подходящие крепёжные элементы. Используйте
							только кронштейны, рекомендованные Arbonia — они сертифицированы по VDI 6036 и выдерживают вес с запасом
							прочности.
						</li>
						<li style={{ ...styles.standardText }}>
							Для длинных моделей (от 22 секций и более) необходимо установить центральный держатель, предотвращающий
							прогиб при нагреве.
						</li>
						<li style={{ ...styles.standardText }}>
							На гипсокартон монтировать радиаторы можно только при наличии внутренних закладных и усиленных дюбелей.
							Иначе возможен отрыв от стены.
						</li>
						<li style={{ ...styles.standardText }}>
							После закрепления радиатора убедитесь, что он установлен ровно и не имеет люфта. Допускается использование
							уровней и дистанционных подкладок.
						</li>
					</ul>
				</Typography>

				<Typography
					variant='h6'
					component='h3'
				>
					4. Подключение и запуск
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li style={{ ...styles.standardText }}>
							Подключение осуществляется только с использованием оригинальных соединительных пробок, заглушек и
							уплотнений Arbonia. Использование сторонней фурнитуры приводит к протечкам и отказу в гарантии.
						</li>
						<li style={{ ...styles.standardText }}>
							Соединения затягиваются динамометрическим ключом. Недостаточная или чрезмерная затяжка может привести к
							утечке или деформации резьбы. Оптимальный момент: 250–400 Н·м.
						</li>
						<li style={{ ...styles.standardText }}>
							Если радиатор длинный и с боковым подключением — в него обязательно устанавливается направляющая вставка
							(вставная трубка), обеспечивающая правильную циркуляцию теплоносителя по всей длине.
						</li>
						<li style={{ ...styles.standardText }}>
							После заполнения системы необходимо <strong>удалить воздух</strong> через воздухоотводчик. Воздух в
							системе вызывает неравномерный прогрев, шум, и в перспективе — коррозию. Откройте клапан до тех пор, пока
							не пойдёт стабильная струя воды.
						</li>
						<li style={{ ...styles.standardText }}>
							После удаления воздуха — проверьте герметичность всех соединений и наличие течей. Осмотрите радиатор на
							наличие конденсата или капель в местах соединений. Повторную затяжку производите при остывшем радиаторе.
						</li>
					</ul>
				</Typography>

				<Typography
					marginTop='40px'
					variant='h5'
					component='h2'
				>
					FAQ по монтажу Arbonia
				</Typography>

				<Typography
					sx={{ ...styles.standardText }}
					marginY='20px'
				>
					<ul>
						<li style={{ ...styles.standardText }}>
							<strong>Можно ли установить радиатор самостоятельно?</strong> Нет. Arbonia требует, чтобы монтаж
							выполнялся квалифицированным специалистом. Для сохранения гарантии необходимо иметь: акт ввода в
							эксплуатацию, копию товарного чека и отметку о монтаже от сертифицированного подрядчика.
						</li>
						<li style={{ ...styles.standardText }}>
							<strong>Как подобрать нужные кронштейны?</strong> Ориентируйтесь на высоту, вес и количество секций
							радиатора, а также тип стены. Для типовых случаев Arbonia предлагает готовые монтажные комплекты.
						</li>
						<li style={{ ...styles.standardText }}>
							<strong>Допустим ли монтаж во влажных помещениях?</strong> Только при наличии вентиляции и использовании
							моделей с порошковым дуплексным покрытием. Установка в помещениях с постоянной влажностью (сауны,
							неотапливаемые веранды) не допускается.
						</li>
						<li style={{ ...styles.standardText }}>
							<strong>Что будет, если перепутать подачу и обратку?</strong> Радиатор может работать с пониженной
							теплоотдачей, возникнут зоны с застоем воды. В случае моделей с термостатическим вентилем — полностью
							нарушается регулировка.
						</li>
						<li style={{ ...styles.standardText }}>
							<strong>Можно ли соединять радиаторы в блоки?</strong> Да, если они не находятся в высоконапорном
							исполнении. Максимально допустимо соединять не более трёх блоков. Соединение производится только
							комплектом ниппелей Arbonia и с использованием специального ключа.
						</li>
						<li style={{ ...styles.standardText }}>
							<strong>Когда нужно подтягивать пробки и заглушки?</strong> В системах с подготовленной водой — не ранее
							чем через 2 часа после запуска. Это время нужно для естественной усадки уплотнителей под давлением.
						</li>
					</ul>
				</Typography>
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
