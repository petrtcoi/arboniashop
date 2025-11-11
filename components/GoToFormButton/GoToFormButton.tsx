import { useRouter } from 'next/router'
import styles from './index.module.css'

export function GoToFormButton() {
	const pathname = useRouter().pathname

	if (
		pathname === '/request' ||
		pathname === '/accepted' ||
		pathname.includes('/success') ||
		pathname.includes('/cart')
	)
		return null

	return (
		<a
			href={'/request'}
			style={{ textDecoration: 'none' }}
		>
			<div className={styles.container}>
				<div>Получить КП на радиаторы Arbonia 🔥</div>
				<div className={styles.smallText}>Пришлем предложение на почту или в мессенджер</div>
			</div>
		</a>
	)
}
