'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

// ------------
function setCookie(name: string, value: string, days: number) {
	let expires = ''
	if (days) {
		let date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		expires = '; expires=' + date.toUTCString()
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
function getCookie(name: string) {
	let matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	)
	return matches ? decodeURIComponent(matches[1]) : undefined
}

// ------------

export function CookieAlert() {
	const [showAlert, setShowAlert] = useState(false)

	useEffect(() => {
		if (!getCookie('cookies_policy')) {
			setShowAlert(true)
		}
	}, [])

	if (!showAlert) return null

	return (
		<div className={clsx(styles.cookie_note)}>
			<p>
				Мы используем файлы cookies для улучшения работы сайта. Оставаясь на нашем сайте, вы соглашаетесь с условиями
				использования файлов cookies. Чтобы ознакомиться с нашими Положениями о конфиденциальности, сборе персональных
				данных и об использовании файлов cookie,{' '}
				<a
					href='/privacy'
					target='_blank'
					className={styles.privacy_link}
				>
					нажмите здесь
				</a>
				.
			</p>
			<button
				onClick={() => {
					setCookie('cookies_policy', 'true', 365)
					setShowAlert(false)
				}}
				className={styles.cookie_accept}
			>
				Хорошо
			</button>
		</div>
	)
}
