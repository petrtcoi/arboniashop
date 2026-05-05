import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material'

import sendOrderConfirmation from './../../api_utils/sendOrderConfirmation'

import { CartItemExtended } from '../../models/cartItemExtended.model'
import { OrderData } from '../../models/orderData.model'

import { ShoppingCartContext } from '../../contexts/shoppingCartContext'

import trackEvent from '../../utils/trackEvent'

import * as styles from './../../styles/styles'

type CartOrderDataProps = {
	items: CartItemExtended[]
}
type InputErrors = {
	name: boolean
	city: boolean
	contacts: boolean
}

const INIT_INPUT: OrderData = {
	name: '',
	city: '',
	address: '',
	phone: '',
	email: '',
	comments: '',
}
const EMPTY_ERRORS: InputErrors = {
	name: false,
	city: false,
	contacts: false,
}

const CartOrderData: React.FC<CartOrderDataProps> = ({ items }) => {
	const [privacyChecked, setPrivacyChecked] = useState<boolean>(false)
	const [termsChecked, setTermsChecked] = useState<boolean>(false)
	const [consentErrors, setConsentErrors] = useState<boolean>(false)

	const shoppingCartContext = useContext(ShoppingCartContext)
	const consoleType = shoppingCartContext.state.consoleType

	const router = useRouter()

	const [sendEmailError, setSendEmailError] = useState<boolean>(false)
	const [inputData, setInputData] = useState<OrderData>(INIT_INPUT)
	const handleDataInput = (key: string) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputData({ ...inputData, [key]: e.target.value })
		}
	}
	const [checkErrors, setCheckErrors] = useState<boolean>(false)
	const [errors, setErrors] = useState<InputErrors>(EMPTY_ERRORS)
	useEffect(() => {
		if (checkErrors === false) return

		setErrors({
			name: inputData.name.length === 0 ? true : false,
			city: inputData.city.length === 0 ? true : false,
			contacts: inputData.phone.length === 0 && inputData.email.length === 0 ? true : false,
		})
	}, [inputData, checkErrors])

	const handleSendEmail = async () => {
		setCheckErrors(true)
		const isErrors = Object.values(errors).filter(x => x).length > 0 ? true : false
		setConsentErrors(!privacyChecked || !termsChecked)
		if (isErrors === false && privacyChecked && termsChecked) {
			trackEvent('order_placed')
			const res = await sendOrderConfirmation({
				...inputData,
				consoleType,
				items,
			})
			if (res === 'ok') {
				shoppingCartContext.dispatch({ type: 'RESET' })
				router.push('/order/success')
			} else {
				setSendEmailError(true)
			}
		}
	}

	return (
		<Box
			paddingTop='30px'
			display={'flex'}
			flexDirection='column'
			alignItems='center'
		>
			<Typography
				variant='h4'
				component='h2'
				gutterBottom
				textAlign='center'
				sx={{ textTransform: 'uppercase' }}
			>
				Оформить заказ
			</Typography>

			<Box
				paddingTop='30px'
				display={'flex'}
				flexDirection='column'
				width='100%'
				alignItems='center'
			>
				<Grid
					container
					spacing={2}
					alignItems='center'
					margin={'auto'}
				>
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						alignItems={'center'}
						margin={'auto'}
						justifyContent={'center'}
					>
						<TextField
							required
							fullWidth
							id='name'
							label='Как к вам можно обращаться'
							variant='outlined'
							value={inputData.name}
							onChange={handleDataInput('name')}
							error={errors.name}
							helperText={errors.name ? 'Пожалуйста, укажите ваше имя' : ''}
						/>
					</Grid>
					<Box width='100%' />
					<Grid
						item
						xs={12}
						margin={'auto'}
						md={6}
						lg={4}
					>
						<TextField
							required
							fullWidth
							id='city'
							label='В каком городе требуется доставка'
							variant='outlined'
							value={inputData.city}
							onChange={handleDataInput('city')}
							error={errors.city}
							helperText={errors.city ? 'Укажите город доставки' : ''}
						/>
					</Grid>
					<Box width='100%' />
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						margin={'auto'}
					>
						<TextField
							fullWidth
							id='address'
							label='Адресс достаки (необязательно)'
							variant='outlined'
							value={inputData.address}
							onChange={handleDataInput('address')}
						/>
					</Grid>

					<Box
						width='100%'
						marginTop='30px'
					>
						<Box
							maxWidth='540px'
							margin={'auto'}
						>
							<Typography sx={errors.contacts ? styles.smallTextBoldRed : styles.smallTextBold}>
								Пожалуйста, укажите телефон и/или почту для связи:
							</Typography>
						</Box>
					</Box>
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						margin={'auto'}
					>
						<TextField
							required
							fullWidth
							id='tel'
							label='Телефон'
							variant='outlined'
							type='tel'
							value={inputData.phone}
							onChange={handleDataInput('phone')}
							error={errors.contacts}
						/>
					</Grid>
					<Box width='100%' />
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						margin={'auto'}
					>
						<TextField
							required
							fullWidth
							id='email'
							label='Электронная почта'
							variant='outlined'
							type='email'
							value={inputData.email}
							onChange={handleDataInput('email')}
							error={errors.contacts}
						/>
					</Grid>
					<Box width='100%' />
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						margin={'auto'}
					>
						<TextField
							fullWidth
							multiline
							minRows={4}
							maxRows={7}
							id='comments'
							label='Комментарии к заказу'
							variant='outlined'
							value={inputData.comments}
							onChange={handleDataInput('comments')}
							// error
							// helperText={ "странное имя" }
						/>
					</Grid>

					{sendEmailError && (
						<>
							<Box width='100%' />
							<Grid
								item
								xs={12}
								md={6}
								lg={4}
								textAlign={'right'}
								margin={'auto'}
							>
								<Typography sx={styles.smallTextBoldRed}>Во время отправки заказа возникла ошибка.</Typography>
							</Grid>
						</>
					)}
					<Box width='100%'>
						<Box
							marginTop={'30px'}
							maxWidth={'540px'}
							margin={'auto'}
							padding='20px'
							border='1px solid'
							borderColor={consentErrors ? '#c8102e' : '#d3d3d3'}
							borderRadius='12px'
							bgcolor='#f2eff0'
						>
							<Typography sx={{ ...styles.smallText, color: '#6a6a6a' }} marginBottom='10px'>
								Для отправки формы необходимо подтвердить согласие с условиями обработки персональных данных и правилами
								использования сайта.
							</Typography>
							<Box display='flex' flexDirection='row' gap='10px' alignItems='center'>
								<Checkbox
									checked={privacyChecked}
									onChange={x => {
										setPrivacyChecked(x.target.checked)
										if (x.target.checked && termsChecked) setConsentErrors(false)
									}}
								/>
								<Typography sx={styles.smallText}>
									Я подтверждаю согласие на обработку персональных данных в соответствии с{' '}
									<a href='/privacy' target='_blank' className='underline hover:no-underline'>
										Политикой конфиденциальности
									</a>
									.
								</Typography>
							</Box>
							<Box display='flex' flexDirection='row' gap='10px' alignItems='center' marginTop='8px'>
								<Checkbox
									checked={termsChecked}
									onChange={x => {
										setTermsChecked(x.target.checked)
										if (x.target.checked && privacyChecked) setConsentErrors(false)
									}}
								/>
								<Typography sx={styles.smallText}>
									Я принимаю условия{' '}
									<a href='/agreement' target='_blank' className='underline hover:no-underline'>
										Пользовательским соглашением
									</a>
									.
								</Typography>
							</Box>
							{consentErrors ? (
								<Typography sx={styles.smallTextBoldRed} marginTop='10px'>
									Подтвердите согласие с Политикой конфиденциальности и Пользовательским соглашением.
								</Typography>
							) : null}
						</Box>
					</Box>

					<Box width='100%' />
					<Grid
						item
						xs={12}
						textAlign={'center'}
					>
						<Box marginTop='30px' />
						<Button
							disabled={Object.values(errors).filter(x => x).length > 0}
							variant='contained'
							onClick={() => handleSendEmail()}
						>
							Отправить запрос
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default CartOrderData
