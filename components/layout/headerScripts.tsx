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
                <script
                    defer
                    id={ 'google_analytics_2' }
                    dangerouslySetInnerHTML={ {
                        __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KB7LCQ7');
                    `,
                    } }
                />
            </Head>
            <YMInitializer accounts={ [89126477] } options={ { defer: true, webvisor: true, ecommerce: "dataLayer", trackLinks: true, accurateTrackBounce: true, clickmap: true, } } />
            <noscript dangerouslySetInnerHTML={ {
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB7LCQ7"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`} }></noscript>

<Script
                id="Jivo"
                strategy="afterInteractive"
                src="//code-ya.jivosite.com/widget/y6IaQXr7wR"
            />
        </>
    )
}

export default HeaderScripts

