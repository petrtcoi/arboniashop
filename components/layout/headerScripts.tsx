import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';

type HeaderScriptsProps = {
};

const HeaderScripts: React.FC<HeaderScriptsProps> = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <YMInitializer accounts={ [89126477] } options={ { defer: true, webvisor: true, ecommerce: "dataLayer", trackLinks: true, accurateTrackBounce: true, clickmap: true, } } />
            <Script
                id="Jivo"
                strategy="lazyOnload"
                src="//code-ya.jivosite.com/widget/y6IaQXr7wR"
            />
        </>
    );
};

export default HeaderScripts

