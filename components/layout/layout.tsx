import { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, useReducer, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/system'
import { Box, CssBaseline, Container } from '@mui/material'
import Head from 'next/head'

import theme from './../../theme/theme'

import Navbar from './navbar'
import Footer from './footer'
import ShoppingCart from './../shoppingCart/shoppingCart'
import HeaderScripts from './headerScripts'

import { reducer, initialState, ShoppingCartContext } from './../../contexts/shoppingCartContext'
import { CurrencyContext } from '../../contexts/currencyContext'

import useGetCurrency from '../../api_utils/useGetCurrency'
import { trackPage } from '../../utils/trackEvent'




type LayoutProps = ReactElement




const Layout: NextComponentType<LayoutProps> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { rateEuro } = useGetCurrency()

    const [pageUrl, setPageUrl] = useState<string>('')
    const router = useRouter()
    useEffect(() => {
        const newPath = router.asPath.split('#')[0]
        if (pageUrl === newPath) return
        setPageUrl(newPath)
        trackPage(newPath)
    }, [router.asPath])


    return (
        <Box padding="0px">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="yandex-verification" content="9ac1785e06142cc3" />
                <script src="//code-ya.jivosite.com/widget/y6IaQXr7wR" defer></script>
            </Head>
            <ThemeProvider theme={ theme }>
                <Container style={ {
                    minWidth: "100%",
                    padding: "0px"
                } }>
                    <CssBaseline />
                    <ShoppingCartContext.Provider value={ { state, dispatch } }>
                        <CurrencyContext.Provider value={ { rateEuro } } >
                            <HeaderScripts />
                            <Navbar />
                            <ShoppingCart />
                            <Box paddingX={ "0px" } marginBottom="50px" >
                                <main>{ children }</main>
                            </Box>
                            <Footer />
                        </CurrencyContext.Provider>
                    </ShoppingCartContext.Provider>
                </Container>
            </ThemeProvider>
        </Box >
    )
}

export default Layout