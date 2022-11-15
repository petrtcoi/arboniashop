import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { YMInitializer } from 'react-yandex-metrika'

type HeaderScriptsProps = {
}

const HeaderScripts: React.FC<HeaderScriptsProps> = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <YMInitializer accounts={ [89126477] } options={ { defer: true } } />
            <Script
                strategy='lazyOnload'
                src="//code-ya.jivosite.com/widget/y6IaQXr7wR"
            />
            <Script
                strategy='lazyOnload'
                id={ 'google_analytics_1' }
                src="https://www.googletagmanager.com/gtag/js?id=UA-59967703-20"
            />
            <Script
                defer
                strategy="lazyOnload"
                id={ 'google_analytics_2' }
                dangerouslySetInnerHTML={ {
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-59967703-20');
                    `,
                } }
            />
        </>
    )
}

export default HeaderScripts

