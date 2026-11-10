import { NextPage } from 'next'
import ClusterArticle from '../../../components/articles/ClusterArticle'
import article from '../../../data/articles/ral-9016-9010-9003-kakoy-belyy-vybrat.json'

const ArticlePage: NextPage = () => <ClusterArticle article={article} />

export default ArticlePage
