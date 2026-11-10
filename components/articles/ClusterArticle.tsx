import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import PageHeader from '../pageHeader/pageHeader'
import PageTitle from '../pageTitle/pageTitle'
import JsonLd from '../seo/JsonLd'
import css from './ClusterArticle.module.css'

export type ClusterArticleData = {
	slug: string
	title: string
	heading: string
	description: string
	image: string
	imageAlt: string
	datePublished?: string
	dateModified: string
	about: string
	keywords: string[]
	body: string
	faq: { question: string; answer: string }[]
}

const siteUrl = 'https://arboniashop.ru'
const displayDate = (date: string) => new Intl.DateTimeFormat('ru-RU', {
	day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(new Date(date))

const ClusterArticle: React.FC<{ article: ClusterArticleData }> = ({ article }) => {
	const url = `${siteUrl}/articles/${article.slug}`
	return (
		<Box>
			<Head><link key='canonical' rel='canonical' href={url} /></Head>
			<PageHeader title={article.title} description={article.description} image={article.image} type='article' />
			<PageTitle breadcrumbs={[
				{ title: 'Главная', link: '/' },
				{ title: 'Полезная информация', link: '/articles' },
				{ title: article.heading, link: `/articles/${article.slug}` },
			]} />
			<article className={css.article}>
				<h1>{article.heading}</h1>
				<p className={css.byline}>ArboniaShop · {article.datePublished === article.dateModified ? '' : 'Обновлено '}
					<time dateTime={article.dateModified}>{displayDate(article.dateModified)}</time>
				</p>
				<img className={css.image} src={article.image} alt={article.imageAlt} width={900} height={450} />
				<div dangerouslySetInnerHTML={{ __html: article.body }} />
			</article>
			<JsonLd data={{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: article.heading,
				description: article.description,
				image: `${siteUrl}${article.image}`,
				datePublished: article.datePublished,
				dateModified: article.dateModified,
				mainEntityOfPage: { '@type': 'WebPage', '@id': url },
				about: article.about,
				keywords: article.keywords,
				author: { '@type': 'Organization', name: 'ArboniaShop', url: siteUrl },
				publisher: {
					'@type': 'Organization', name: 'ArboniaShop', url: siteUrl,
					logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
				},
				inLanguage: 'ru-RU',
			}} />
			<JsonLd data={{
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: article.faq.map(item => ({
					'@type': 'Question', name: item.question,
					acceptedAnswer: { '@type': 'Answer', text: item.answer },
				})),
			}} />
		</Box>
	)
}

export default ClusterArticle
