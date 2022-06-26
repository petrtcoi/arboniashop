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
            <YMInitializer accounts={ [89126477] } />
            <Script
                id={ 'yandex_metrika' }
                dangerouslySetInnerHTML={ {
                    __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 
                    ym(89126477, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true,
                         webvisor:true
                    });
                                        `,
                } }
            />
            <Script id={ 'google_analytics_1' } src="https://www.googletagmanager.com/gtag/js?id=UA-59967703-20" />
            <Script
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