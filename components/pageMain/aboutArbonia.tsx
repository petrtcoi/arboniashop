import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'

import * as styles from '../../styles/styles'

export const linkStyle = {
	marginTop: '5px',
	marginBottom: '5px',
	fontSize: '16px',
	fontWeight: '400',
	textDecoration: 'none',
	color: '#333333',
	cursor: 'pointer',
	'&:hover': {
		textDecoration: 'underline',
	},
}

type AboutArboniaProps = {}

const AboutArbonia: React.FC<AboutArboniaProps> = () => {
	return (
		<Box>
			<Typography
				variant='h5'
				component='h2'
				textAlign='left'
			>
				Трубчатые радиаторы Arbonia
			</Typography>
			<Box
				marginTop='20px'
				maxWidth='800px'
				paddingX={{ xs: '10px', md: '0px' }}
			>
				<Typography sx={{ ...styles.standardText }}>
					Трубчатые радиаторы Arbonia являются оптимальным решением для систем отопления закрытого типа, используемых в
					административных и жилых зданиях. Они обладают высоким коэффициентом производительности и эффективно
					распределяют тепло по помещению. Радиаторы изготовлены из стали и выполнены в форме колонн. Их конструкция
					собирается из отдельных секций шириной 4,5 мм методом сварки, что позволяет точно подобрать необходимые
					размеры. Дизайн радиаторов лишен острых углов, что делает их безопасными в использовании.
				</Typography>
				<Typography
					sx={{ ...styles.standardText }}
					marginTop='10px'
				>
					В продуктовой линейке представлены модели с разным числом труб: начиная от двухтрубчатых моделей (глубина 6,5
					см) и заканчивая шеститрубчатыми (глубина 22,5 см). Размеры радиаторов варьируются: высота от 18 см до 3
					метров, длина от 9 см до 3 метров, что позволяет выбрать оптимальный вариант для любого помещения.
				</Typography>

				<Box
					width='600px'
					maxWidth={'90%'}
					marginY='20px'
					border='1px solid lightgrey'
					borderRadius={'10px'}
					marginX='auto'
				>
					<img
						style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
						src='/images/arbonia-schema.jpg'
						width={'600px'}
						sizes='700px'
						alt='Габариты радиаторов Arbonia'
					/>
				</Box>
				<Typography
					sx={{ ...styles.standardText }}
					marginTop='10px'
					marginBottom='10px'
				>
					Каждый радиатор покрыт специальной порошковой эмалью в электрическом поле, что обеспечивает его долговечность
					и привлекательный внешний вид. Технические характеристики радиаторов впечатляют: опрессовочное давление
					составляет 15-16 атмосфер, рабочее давление — 10-12 атмосфер, а максимальная температура теплоносителя
					достигает 120 градусов. Такие параметры гарантируют надежность и эффективность работы системы отопления.
				</Typography>
				<div className={'iframeContainer'}>
					<iframe
						src='https://www.youtube.com/embed/d7zekZlAqTI?si=VXUDtcU4bci2Frh2'
						title='Видео о радиаторах Arbonia'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
			</Box>

			<Typography
				variant='h6'
				component='h3'
				textAlign='left'
				marginTop='60px'
				marginBottom={'30px'}
			>
				Сертификаты
			</Typography>

			<Grid
				container
				spacing={5}
			>
				<Grid
					item
					xs={6}
					md={3}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
				>
					<a
						href='/certs/1.png'
						target='_blank'
					>
						<img
							src={'/certs/1_sm.avif'}
							width={'100%'}
							height={'auto'}
							alt='Сертификаты соответствия дизайн-радиаторы Kermi'
						/>
					</a>
					<Typography style={{ textAlign: 'center', fontSize: '12px' }}>
						Сертификаты соответствия дизайн-радиаторы Kermi
					</Typography>
				</Grid>
				<Grid
					item
					xs={6}
					md={3}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
				>
					<a
						href='/certs/2.jpg'
						target='_blank'
					>
						<img
							src={'/certs/2_sm.avif'}
							width={'100%'}
							height={'auto'}
							alt='Сертификат соответствия Arbonia'
						/>
					</a>
					<Typography style={{ textAlign: 'center', fontSize: '12px' }}>Сертификат соответствия Arbonia</Typography>
				</Grid>
				<Grid
					item
					xs={6}
					md={3}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
				>
					<a
						href='/certs/3.png'
						target='_blank'
					>
						<img
							src={'/certs/3_sm.avif'}
							width={'100%'}
							height={'auto'}
							alt='Экспертное заключение на отопительные приборы Arbonia'
						/>
					</a>
					<Typography style={{ textAlign: 'center', fontSize: '12px' }}>
						Экспертное заключение на отопительные приборы Arbonia
					</Typography>
				</Grid>
				<Grid
					item
					xs={6}
					md={3}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
				>
					<a
						href='/certs/4.png'
						target='_blank'
					>
						<img
							src={'/certs/4_sm.avif'}
							width={'100%'}
							height={'auto'}
							alt='Сертификаты соответствия на конвекторы Kermi'
						/>
					</a>
					<Typography style={{ textAlign: 'center', fontSize: '12px' }}>
						Сертификаты соответствия на конвекторы Kermi
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default AboutArbonia
