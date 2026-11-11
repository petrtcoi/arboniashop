import { NextPage } from 'next'
import ClusterArticle from '../../../components/articles/ClusterArticle'
// 10.11.2026: объединена со статьёй ral-9016-9010-9003-kakoy-belyy-vybrat (301 в next.config.js).
import article from '../../../data/articles/ral-9016-pochemu-vybirayut-arkhitektory.json'

const ArticlePage: NextPage = () => <ClusterArticle article={article} />

export default ArticlePage
