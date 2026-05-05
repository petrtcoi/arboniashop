import { Box, Button, CircularProgress, Link, Typography } from '@mui/material'
import React, { FormEvent, useMemo, useRef, useState } from 'react'

type LeadWidgetProps = {
	webhook?: string
	successUrl?: string
	store?: string
	privacyUrl?: string
	termsUrl?: string
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const LeadWidget: React.FC<LeadWidgetProps> = ({
	webhook = 'https://arufefet.beget.app/webhook/calc-notify',
	successUrl = 'https://homekomfort.ru/thanks',
	store = 'default',
	privacyUrl = '/privacy',
	termsUrl = '/agreement',
}) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [city, setCity] = useState('')
	const [wishes, setWishes] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [channels, setChannels] = useState<string[]>(['whatsapp', 'telegram'])
	const [privacyConsent, setPrivacyConsent] = useState(false)
	const [termsConsent, setTermsConsent] = useState(false)
	const [privacyConsentInvalid, setPrivacyConsentInvalid] = useState(false)
	const [termsConsentInvalid, setTermsConsentInvalid] = useState(false)
	const [file, setFile] = useState<File | null>(null)
	const [fileNote, setFileNote] = useState('')
	const [msg, setMsg] = useState('')
	const [msgType, setMsgType] = useState<'ok' | 'err' | null>(null)
	const [loading, setLoading] = useState(false)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const selectedFileName = useMemo(() => (file ? file.name : 'Файл не выбран'), [file])

	const onToggleChannel = (channel: string) => {
		setChannels(prev => (prev.includes(channel) ? prev.filter(item => item !== channel) : [...prev, channel]))
	}

	const onFileChange = (nextFile: File | null) => {
		if (!nextFile) {
			setFile(null)
			setFileNote('')
			return
		}

		if (nextFile.size > MAX_FILE_SIZE) {
			setFile(null)
			setFileNote('Файл слишком большой! Выберите файл до 5Мб.')
			if (fileInputRef.current) fileInputRef.current.value = ''
			return
		}

		setFile(nextFile)
		setFileNote(`Выбран: ${nextFile.name}`)
	}

	const onSubmit = async (event: FormEvent) => {
		event.preventDefault()
		if (loading) return

		const consent = privacyConsent && termsConsent
		const isInvalid = !name.trim() || !email.trim() || !wishes.trim() || channels.length === 0 || !consent

		setPrivacyConsentInvalid(!privacyConsent)
		setTermsConsentInvalid(!termsConsent)

		if (isInvalid) {
			setMsg('Пожалуйста, заполните все поля, выберите способ связи и подтвердите оба согласия.')
			setMsgType('err')
			return
		}

		setLoading(true)
		setMsg('')
		setMsgType(null)

		try {
			const formData = new FormData()
			formData.append('store', store)
			formData.append('name', name.trim())
			formData.append('email', email.trim())
			formData.append('city', city.trim())
			formData.append('whatsapp', whatsapp.trim())
			formData.append('wishes', wishes.trim())
			formData.append('channels', JSON.stringify(channels))
			if (file) formData.append('file', file)

			const response = await fetch(webhook, { method: 'POST', body: formData })
			const result = await response.json()

			if (result.status === 'OK') {
				setMsg('Успешно! Перенаправляем...')
				setMsgType('ok')
				window.setTimeout(() => {
					window.location.href = successUrl
				}, 600)
				return
			}

			throw new Error('Request failed')
		} catch (error) {
			setMsg('Не удалось отправить, пожалуйста, попробуйте позже.')
			setMsgType('err')
			setLoading(false)
		}
	}

	const hasConsentError = privacyConsentInvalid || termsConsentInvalid

	return (
		<Box
			component='form'
			onSubmit={onSubmit}
			sx={{
				position: 'relative',
				bgcolor: '#fff',
				border: '1px solid #d9dde5',
				borderRadius: '16px',
				padding: { xs: '16px', sm: '20px' },
			}}
		>
			{loading && (
				<Box
					sx={{
						position: 'absolute',
						inset: 0,
						bgcolor: 'rgba(255,255,255,0.75)',
						backdropFilter: 'blur(3px)',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 1,
						zIndex: 2,
						borderRadius: '16px',
					}}
				>
					<CircularProgress size={34} />
					<Typography sx={{ fontSize: '14px', color: '#333' }}>Отправляем данные...</Typography>
				</Box>
			)}

			<Typography sx={{ fontWeight: 600, marginBottom: '6px' }}>Как нам с Вами связаться?</Typography>
			<Typography sx={{ color: '#6b6b6b', fontSize: '12px', marginBottom: '10px' }}>
				Выберите наиболее удобный для Вас канал, чтобы получить расчёт:
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
				<label>
					<input
						type='checkbox'
						checked={channels.includes('whatsapp')}
						onChange={() => onToggleChannel('whatsapp')}
					/>{' '}
					WhatsApp
				</label>
				<label>
					<input
						type='checkbox'
						checked={channels.includes('telegram')}
						onChange={() => onToggleChannel('telegram')}
					/>{' '}
					Telegram
				</label>
				<label>
					<input
						type='checkbox'
						checked={channels.includes('email')}
						onChange={() => onToggleChannel('email')}
					/>{' '}
					Электронная почта
				</label>
			</Box>

			<Typography sx={{ fontWeight: 600, marginBottom: '6px' }}>Ваши пожелания</Typography>
			<Box sx={{ marginBottom: '12px' }}>
				<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
					Ваши требования и пожелания в свободной форме:
					<span style={{ color: '#b00020' }}>*</span>
				</Typography>
				<textarea
					value={wishes}
					onChange={event => setWishes(event.target.value)}
					placeholder='Модель, цвет, размеры, бюджет...'
					style={{
						width: '100%',
						minHeight: '90px',
						borderRadius: 10,
						border: '1px solid #e0e0e0',
						padding: '10px 12px',
					}}
				/>
			</Box>

			<Box sx={{ height: '1px', bgcolor: '#f0f0f0', marginY: '14px' }} />

			<Typography sx={{ fontWeight: 600, marginBottom: '6px' }}>Контактная информация</Typography>
			<Box sx={{ marginBottom: '10px' }}>
				<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
					Как к вам можно обращаться
					<span style={{ color: '#b00020' }}>*</span>
				</Typography>
				<input
					type='text'
					value={name}
					onChange={event => setName(event.target.value)}
					placeholder='Имя'
					style={{ width: '100%', borderRadius: 10, border: '1px solid #e0e0e0', padding: '10px 12px' }}
				/>
			</Box>

			<Box
				sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '12px', marginBottom: '10px' }}
			>
				<Box>
					<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>Телефон</Typography>
					<input
						type='text'
						value={whatsapp}
						onChange={event => setWhatsapp(event.target.value)}
						placeholder='+7 (999) 123-45-67'
						style={{ width: '100%', borderRadius: 10, border: '1px solid #e0e0e0', padding: '10px 12px' }}
					/>
				</Box>
				<Box>
					<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
						Ваша электронная почта
						<span style={{ color: '#b00020' }}>*</span>
					</Typography>
					<input
						type='email'
						value={email}
						onChange={event => setEmail(event.target.value)}
						placeholder='Электронная почта'
						style={{ width: '100%', borderRadius: 10, border: '1px solid #e0e0e0', padding: '10px 12px' }}
					/>
				</Box>
			</Box>

			<Box sx={{ marginBottom: '12px' }}>
				<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
					Город. Для расчёта доставки
					<span style={{ color: '#b00020' }}>*</span>
				</Typography>
				<input
					type='text'
					value={city}
					onChange={event => setCity(event.target.value)}
					placeholder='Город'
					style={{ width: '100%', borderRadius: 10, border: '1px solid #e0e0e0', padding: '10px 12px' }}
				/>
			</Box>

			<Box sx={{ marginBottom: '10px' }}>
				<Typography sx={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
					Прикрепите фото или смету (до 5Мб)
				</Typography>
				<input
					type='file'
					ref={fileInputRef}
					onChange={event => onFileChange(event.target.files?.[0] || null)}
					accept='*/*'
				/>
				<Typography sx={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{selectedFileName}</Typography>
				{fileNote ? (
					<Typography sx={{ fontSize: '12px', color: file ? '#0a7a2f' : '#b00020', marginTop: '2px' }}>
						{fileNote}
					</Typography>
				) : null}
			</Box>

			<Box
				sx={{
					marginTop: '10px',
					padding: '14px',
					borderRadius: '10px',
					border: '1px solid',
					borderColor: hasConsentError ? '#c8102e' : '#d3d3d3',
					backgroundColor: '#f2eff0',
				}}
			>
				<Typography sx={{ fontSize: '12px', color: '#6a6a6a', marginBottom: '10px' }}>
					Для отправки формы необходимо подтвердить согласие с условиями обработки персональных данных и правилами
					использования сайта.
				</Typography>
				<label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '8px' }}>
					<input
						type='checkbox'
						checked={privacyConsent}
						onChange={event => {
							setPrivacyConsent(event.target.checked)
							if (event.target.checked && termsConsent) {
								setPrivacyConsentInvalid(false)
								setTermsConsentInvalid(false)
							}
						}}
						required
						style={{ marginRight: 8 }}
					/>
					Я подтверждаю согласие на обработку персональных данных в соответствии с{' '}
					<Link
						href={privacyUrl}
						target='_blank'
						rel='noopener noreferrer'
						underline='hover'
					>
						Политикой конфиденциальности
					</Link>
				</label>
				<label style={{ display: 'block', fontSize: '12px', color: '#555' }}>
					<input
						type='checkbox'
						checked={termsConsent}
						onChange={event => {
							setTermsConsent(event.target.checked)
							if (event.target.checked && privacyConsent) {
								setPrivacyConsentInvalid(false)
								setTermsConsentInvalid(false)
							}
						}}
						required
						style={{ marginRight: 8 }}
					/>
					Я принимаю условия{' '}
					<Link
						href={termsUrl}
						target='_blank'
						rel='noopener noreferrer'
						underline='hover'
					>
						Пользовательского соглашения
					</Link>
				</label>
				{hasConsentError ? (
					<Typography sx={{ fontSize: '12px', color: '#c8102e', marginTop: '10px' }}>
						Подтвердите согласие с Политикой конфиденциальности и Пользовательским соглашением.
					</Typography>
				) : null}
			</Box>

			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
				<Button
					type='submit'
					variant='contained'
					disabled={loading}
					sx={{
						backgroundColor: '#ef7d00',
						borderRadius: '10px',
						padding: '10px 16px',
						minWidth: { xs: '100%', sm: '360px' },
						'&:hover': { backgroundColor: '#cf6d00' },
					}}
				>
					Получить расчёт стоимости
				</Button>
			</Box>

			{msg ? (
				<Typography
					sx={{
						marginTop: '10px',
						textAlign: 'center',
						fontWeight: 500,
						color: msgType === 'ok' ? '#0a7a2f' : '#b00020',
					}}
				>
					{msg}
				</Typography>
			) : null}
		</Box>
	)
}

export default LeadWidget
