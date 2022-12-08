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
                id='jivo'
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
                async
                strategy="afterInteractive"
                id="vk_pixel"
            >
                {`function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1622038-fv2ia"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`}
            </Script>
        </>
    )
}

export default HeaderScripts

