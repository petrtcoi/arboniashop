const MODEL_CANONICAL_IDS = new Set(['2050', '2057', '2180', '3030', '3050', '3057', '3180'])

module.exports = {
	siteUrl: process.env.SITE_URL || 'https://arboniashop.ru',
	exclude: ['/accepted', '/order/*', '/feed.yml', '/catalog/2180-stock'],
	transform: async (config, path) => {
		if (path.startsWith('/models/')) {
			const modelPath = path.replace(/^\/models\//, '').replace(/\/$/, '')

			// Remove section-level URLs like /models/:id/:sections from sitemap.
			if (modelPath.includes('/')) {
				return null
			}

			// Keep only canonical model family pages in sitemap for /models/:id.
			if (modelPath.includes('-') && !MODEL_CANONICAL_IDS.has(modelPath)) {
				return null
			}
		}

		return {
			loc: path,
			changefreq: 'daily',
			priority: 0.7,
			lastmod: new Date().toISOString(),
			alternateRefs: config.alternateRefs ?? [],
		}
	},
}
