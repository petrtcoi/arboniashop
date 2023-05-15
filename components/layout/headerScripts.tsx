import Head from "next/head"
import Script from "next/script"
import React from "react"
import { YMInitializer } from "react-yandex-metrika"

type HeaderScriptsProps = {}

const HeaderScripts: React.FC<HeaderScriptsProps> = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <YMInitializer
        accounts={ [ 89126477 ] }
        options={ {
          defer: true,
          webvisor: true,
          ecommerce: "dataLayer",
          trackLinks: true,
          accurateTrackBounce: true,
          clickmap: true,
        } }
      />

      <Script
        id="Jivo"
        strategy="afterInteractive"
        src="//code-ya.jivosite.com/widget/y6IaQXr7wR"
      />
    </>
  )
}

export default HeaderScripts
