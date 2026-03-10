import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { NextComponentType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useReducer, useState } from 'react';
import { CookieAlert } from './CookieAlert';

import theme from './../../theme/theme';

import ShoppingCart from './../shoppingCart/shoppingCart';
import Footer from './footer';
import HeaderScripts from './headerScripts';
import Navbar from './navbar';

import { CurrencyContext } from '../../contexts/currencyContext';
import { initialState, reducer, ShoppingCartContext } from './../../contexts/shoppingCartContext';

import useGetCurrency from '../../api_utils/useGetCurrency';
import { trackPage } from '../../utils/trackEvent';
import { GoToFormButton } from '../GoToFormButton';

type LayoutProps = ReactElement
const SITE_URL = 'https://arboniashop.ru'
const MODEL_CANONICAL_IDS = ['2180', '3180', '3057', '2057', '3050', '2050', '3030'] as const

const normalizePath = (path: string) => {
	const pathWithoutHash = path.split('#')[0]
	const pathWithoutQuery = pathWithoutHash.split('?')[0]
	if (pathWithoutQuery.length > 1 && pathWithoutQuery.endsWith('/')) {
		return pathWithoutQuery.slice(0, -1)
	}
	return pathWithoutQuery || '/'
}

const Layout: NextComponentType<LayoutProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { rateEuro, isFetching } = useGetCurrency()

	const [pageUrl, setPageUrl] = useState<string>('')
	const router = useRouter()
	useEffect(() => {
		const newPath = normalizePath(router.asPath)
		if (pageUrl === newPath) return
		setPageUrl(newPath)
		trackPage(newPath)
	}, [router.asPath])

	const normalizedPath = normalizePath(router.asPath)
	let canonicalPath = normalizedPath
	if (/^\/models\/[^/]+\/[^/]+$/.test(canonicalPath)) {
		const parts = canonicalPath.split('/')
		canonicalPath = `/models/${parts[2]}`
	}
	const canonicalModelId = MODEL_CANONICAL_IDS.find(
		id =>
			canonicalPath === `/models/${id}` ||
			canonicalPath.startsWith(`/models/${id}-`) ||
			canonicalPath.startsWith(`/models/${id}/`)
	)
	if (canonicalModelId) {
		canonicalPath = `/models/${canonicalModelId}`
	}
	const canonicalUrl = `${SITE_URL}${canonicalPath}`

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
					key='canonical'
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
							<GoToFormButton />
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
