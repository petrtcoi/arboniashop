import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { YMInitializer } from 'react-yandex-metrika'

type HeaderScriptsProps = {}

const HeaderScripts: React.FC<HeaderScriptsProps> = () => {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<YMInitializer
				accounts={[89126477]}
				options={{
					defer: true,
					webvisor: true,
					ecommerce: 'dataLayer',
					trackLinks: true,
					accurateTrackBounce: true,
					clickmap: true,
				}}
			/>

			{/* <Script
				id='Jivo'
				strategy='afterInteractive'
				src='//code-ya.jivosite.com/widget/y6IaQXr7wR'
			/> */}

			<Script
				id='top-mail-ru-counter'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            setTimeout(function() {
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3549747", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");
            }, 3000);
          `,
				}}
			/>
			<noscript>
				<div>
					<img
						src='https://top-fwz1.mail.ru/counter?id=3549747;js=na'
						style={{ position: 'absolute', left: '-9999px' }}
						alt='Top.Mail.Ru'
					/>
				</div>
			</noscript>

			<Script
				id='amo-social-button'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            setTimeout(function() {
              (function(a,m,o,c,r,m){ 
                a[m]={id:"414232",hash:"992692e5785bb2206dfa0458ff77f97d80bbe8016218c98fcdb2255819e2feab",locale:"ru",inline:false,setMeta:function(p){this.params=(this.params||[]).concat([p])}};
                a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
                var d=a.document,s=d.createElement('script');
                s.async=true;
                s.id=m+'_script';
                s.src='https://gso.amocrm.ru/js/button.js';
                d.head&&d.head.appendChild(s);
              })(window,0,'amoSocialButton',0,0,'amo_social_button');
            }, 5000);
          `,
				}}
			/>
		</>
	)
}

export default HeaderScripts
