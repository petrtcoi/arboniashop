/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	experimental: { cpus: Number(process.env.NEXT_BUILD_CPUS || 1) },
	// i18n: {
	//   locales: ['ru'],
	//   defaultLocale: 'ru',
	// },
	async redirects() {
		return [
			{
				source: '/articles/arbonia-3180-ral-9016-vs-anthracite-metallic',
				destination: '/articles/arbonia-3180-ral-9016-vs-anthracite',
				permanent: true,
			},
			{
				source: '/models/3057-9016-1270-34',
				destination: '/models/3057-9016-12',
				permanent: true,
			},
			{
				source: '/news/2023-report',
				destination: '/news/2024-report',
				permanent: true,
			},
			{
				source: '/policy',
				destination: '/privacy',
				permanent: true,
			},
			{
				source: '/articles/arbonia-radiators',
				destination: '/articles/column-radiators',
				permanent: true,
			},
			{
				source: '/articles/arbonia-kak-vybrat-trubchatyj-radiator',
				destination: '/articles/column-radiators',
				permanent: true,
			},
			{
				source: '/arbonia-radiators',
				destination: '/',
				permanent: true,
			},
			{
				source: '/catalog/2180-stock',
				destination: '/models/2180',
				permanent: true,
			},
			{
				source: '/catalog',
				destination: '/',
				permanent: true,
			},
			{
				source: '/articles/gde-razmestit-radiator-otopleniya-praktichnye-sovety',
				destination: '/articles/gde-razmestit-radiator-otopleniya',
				permanent: true,
			},
			{
				source: '/articles/razmestit-radiator-otopleniya-praktichnye-sovety',
				destination: '/articles/gde-razmestit-radiator-otopleniya',
				permanent: true,
			},
		]
	},
	async headers() {
		// В dev кэширование ломает HMR: браузер держит старые webpack-чанки
		// и страница уходит в бесконечный цикл full reload
		if (process.env.NODE_ENV !== 'production') {
			return []
		}
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'cache-control',
							// HTML must revalidate after updates. Production nginx sets
							// immutable caching separately for versioned /_next/static assets.
							value: 'public, max-age=0, must-revalidate',
					},
					// {
					//   key: 'X-DNS-Prefetch-Control',
					//   value: 'on'
					// },
					// {
					//   key: 'Strict-Transport-Security',
					//   value: 'max-age=63072000; includeSubDomains; preload'
					// },
					// {
					//   key: 'X-XSS-Protection',
					//   value: '1; mode=block'
					// },
					// {
					//   key: 'X-Frame-Options',
					//   value: 'SAMEORIGIN'
					// },
					// {
					//   key: 'Permissions-Policy',
					//   value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
					// },
					// {
					//   key: 'X-Content-Type-Options',
					//   value: 'nosniff'
					// },
					// {
					//   key: 'Referrer-Policy',
					//   value: 'origin-when-cross-origin'
					// }
				],
			},
		]
	},
}
