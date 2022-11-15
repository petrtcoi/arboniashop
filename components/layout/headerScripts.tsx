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
                strategy='afterInteractive'
                src="//code-ya.jivosite.com/widget/y6IaQXr7wR"
            />
            <Script
                strategy='afterInteractive'
                id={ 'google_analytics_1' }
                src="https://www.googletagmanager.com/gtag/js?id=UA-59967703-20"
            />
            <Script
                defer
                strategy="afterInteractive"
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
            <Script
                id={ 'ucalc' }
                strategy="lazyOnload"
                dangerouslySetInnerHTML={ {
                    __html: `
                    var widgetOptions403860 = { bg_color: "transparent" }; 
                    (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=403860&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
                    `
                } }

            />

        </>
    )
}

export default HeaderScripts

