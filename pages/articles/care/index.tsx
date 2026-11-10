import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticleCarePage: NextPage<ArticlePageProps> = () => {
	return (
        <Box>
            <PageHeader
				title={'Правильный уход за радиаторами Arbonia: чистота и долговечность'}
				description={
					'Узнайте, как правильно чистить трубчатые радиаторы Arbonia, какие средства использовать, как ухаживать за покрытием и что делать при появлении царапин, чтобы ваши радиаторы служили долго и выглядели как новые.'
				}
			/>
            <PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Правильный уход за радиаторами Arbonia',
						link: '/articles/care',
					},
				]}
			/>
            <Hero
				imgPath={'/images/sliders/slide.jpeg'} // Рекомендую подобрать подходящее изображение
				header={'Правильный уход за радиаторами Arbonia'}
			/>
            <Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Трубчатые радиаторы Arbonia - это не только эффективный источник тепла, но и важный элемент интерьера. Их
					высококачественное покрытие рассчитано на десятилетия службы. Правильный и регулярный уход поможет сохранить
					их безупречный внешний вид и продлить срок эксплуатации. В этой статье мы расскажем об основных правилах
					ухода.
				</Typography>

				<Typography
					variant='h5'
					component={'h2'}
					sx={{
                        marginTop: '40px'
                    }}
				>
					Регулярная сухая чистка от пыли
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Пыль, скапливающаяся между секциями, не только портит вид, но и незначительно снижает теплоотдачу. Для ее
					удаления идеально подходят:
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Специальная щетка-ершик для радиаторов. Ее гибкая и длинная конструкция позволяет легко проникать в
								самые труднодоступные места между трубками.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>Пылесос с узкой насадкой или насадкой-щеткой.</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>Мягкая ткань из микрофибры для протирки внешних поверхностей.</Box>
						</li>
					</ul>
					Рекомендуется проводить сухую чистку радиаторов во время каждой генеральной уборки в доме, а также обязательно
					перед началом и после окончания отопительного сезона.
				</Typography>
				<Box
                    sx={{
                        textAlign: 'center',
                        marginY: '30px'
                    }}>
					<img
						src='/images/articles/20250814.jpg'
						alt='Трубчатый радиатор Arbonia'
						style={{ maxWidth: '100%', height: 'auto', width: '600px' }}
					/>
				</Box>
				<Typography
					variant='h5'
					component={'h2'}
					sx={{
                        marginTop: '40px'
                    }}
				>
					Влажная уборка и удаление загрязнений
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Для удаления более стойких загрязнений, например, на кухне или в детской, используйте мягкую ткань, смоченную
					в теплой воде с добавлением нейтрального моющего средства (например, обычного средства для мытья посуды).
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText,
                        fontWeight: 'bold'
                    }}>
					Категорически запрещено использовать:
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>Абразивные чистящие порошки и пасты.</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>Жесткие губки, металлические щетки или скребки.</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Агрессивные химические составы: растворители, средства на основе кислот, щелочей или хлора.
							</Box>
						</li>
					</ul>
					Их применение может необратимо повредить лакокрасочное покрытие. После очистки мыльным раствором обязательно
					протрите поверхность радиатора сначала влажной чистой тканью, а затем насухо, чтобы не осталось разводов.
				</Typography>

				<Typography
					variant='h5'
					component={'h2'}
					sx={{
                        marginTop: '40px'
                    }}
				>
					Устранение мелких повреждений (царапин и сколов)
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Несмотря на прочность порошкового покрытия, в процессе эксплуатации или ремонта могут случайно появиться
					царапины. Для их устранения Arbonia предлагает специальные ремкомплекты (краска-карандаш или жидкая эмаль) в
					фирменных цветах палитры RAL.
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Процесс реставрации прост:
					<ol>
						<li>
							<Box sx={{ ...styles.standardText }}>Очистите и обезжирьте поврежденный участок.</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Аккуратно нанесите краску на царапину согласно инструкции к ремкомплекту.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>Дайте покрытию полностью высохнуть.</Box>
						</li>
					</ol>
					Своевременное устранение сколов не только вернет радиатору первоначальный вид, но и защитит металл от
					коррозии.
				</Typography>

				<Typography
					variant='h5'
					component={'h2'}
					sx={{
                        marginTop: '40px'
                    }}
				>
					Общие рекомендации
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Не сушите на радиаторах одежду или обувь. Постоянный контакт с влажной тканью может со временем
								повредить покрытие.
							</Box>
						</li>
						<li>
							<Box sx={{ ...styles.standardText }}>
								Во время ремонта в помещении всегда укрывайте радиаторы плотной пленкой, чтобы защитить их от
								строительной пыли, краски и случайных повреждений.
							</Box>
						</li>
					</ul>
					Простой и бережный уход - залог того, что ваши радиаторы Arbonia будут радовать вас теплом и безупречным
					стилем долгие годы.
				</Typography>
			</Box>
        </Box>
    );
}

export default ArticleCarePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
