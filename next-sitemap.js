const INDEXABLE_MODEL_VARIANT_IDS = new Set([
	'2030-9016-12',
	'2050-9016-12',
	'2050-9016-69tvv',
	'2057-9016-12',
	'2057-9016-69tvv',
	'2180-9016-12',
	'2180-9016-69tvv',
	'2180-7016-12',
	'2180-7016-69tvv',
	'2180-sf3-12',
	'2180-sf3-69tvv',
	'3030-9016-12',
	'3030-9016-69tvv',
	'3037-9016-12',
	'3037-9016-69tvv',
	'3050-9016-12',
	'3050-9016-69tvv',
	'3057-9016-12',
	'3057-9016-69tvv',
	'3180-9016-12',
	'3180-9016-69tvv',
	'3180-7016-12',
	'3180-7016-69tvv',
	'3180-sf3-12',
	'3180-sf3-69tvv',
])

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

			// Keep family hubs and the stable, commercially useful stock variants.
			if (modelPath.includes('-') && !INDEXABLE_MODEL_VARIANT_IDS.has(modelPath)) {
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
