import { Box, Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { NextComponentType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useReducer, useState } from 'react'
import { CookieAlert } from './CookieAlert'

import theme from './../../theme/theme'

import ShoppingCart from './../shoppingCart/shoppingCart'
import Footer from './footer'
import HeaderScripts from './headerScripts'
import Navbar from './navbar'

import { CurrencyContext } from '../../contexts/currencyContext'
import { initialState, reducer, ShoppingCartContext } from './../../contexts/shoppingCartContext'

import useGetCurrency from '../../api_utils/useGetCurrency'
import { trackPage } from '../../utils/trackEvent'

type LayoutProps = ReactElement

const Layout: NextComponentType<LayoutProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { rateEuro, isFetching } = useGetCurrency()

	const [pageUrl, setPageUrl] = useState<string>('')
	const router = useRouter()
	useEffect(() => {
		const newPath = router.asPath.split('#')[0]
		if (pageUrl === newPath) return
		setPageUrl(newPath)
		trackPage(newPath)
	}, [router.asPath])

	let canonicalUrl = `https://zehnders.ru${router.asPath}`
	const paths = canonicalUrl.split('/')
	if (canonicalUrl.includes('/models/') && paths.length === 6) {
		const newPaths = paths.slice(0, 5)
		canonicalUrl = newPaths.join('/')
	}
	if (canonicalUrl.includes('/models/2180')) {
		canonicalUrl = `https://arboniashop.ru/models/2180`
	}
	if (canonicalUrl.includes('/models/3180')) {
		canonicalUrl = `https://arboniashop.ru/models/3180`
	}
	if (canonicalUrl.includes('/models/3057')) {
		canonicalUrl = `https://arboniashop.ru/models/3057`
	}
	if (canonicalUrl.includes('/models/2057')) {
		canonicalUrl = `https://arboniashop.ru/models/2057`
	}
	if (canonicalUrl.includes('/models/3050')) {
		canonicalUrl = `https://arboniashop.ru/models/3050`
	}
	if (canonicalUrl.includes('/models/2050')) {
		canonicalUrl = `https://arboniashop.ru/models/2050`
	}
	if (canonicalUrl.includes('/models/3030')) {
		canonicalUrl = `https://arboniashop.ru/models/3030`
	}

	return (
		<Box padding='0px'>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicons/favicon-16x16.png'
				/>
				<link
					rel='mask-icon'
					href='/images/favicons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta
					name='msapplication-TileColor'
					content='#da532c'
				/>
				<meta
					name='theme-color'
					content='#ffffff'
				/>
				<meta
					name='yandex-verification'
					content='9ac1785e06142cc3'
				/>
				<link
					rel='canonical'
					href={canonicalUrl}
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Container
					style={{
						minWidth: '100%',
						padding: '0px',
					}}
				>
					<CssBaseline />
					<ShoppingCartContext.Provider value={{ state, dispatch }}>
						<CurrencyContext.Provider value={{ rateEuro, isFetching }}>
							<HeaderScripts />
							<Navbar />
							<ShoppingCart />
							<Box
								paddingX={'0px'}
								marginBottom='50px'
							>
								<main>{children}</main>
							</Box>
							<Footer />
						</CurrencyContext.Provider>
					</ShoppingCartContext.Provider>
				</Container>
			</ThemeProvider>
			<CookieAlert />
		</Box>
	)
}

export default Layout
