import { NextPage } from 'next'
import ClusterArticle from '../../../components/articles/ClusterArticle'
import article from '../../../data/articles/arbonia-3030-skolko-sektsiy-dlina-moshchnost.json'

const ArticlePage: NextPage = () => <ClusterArticle article={article} />

export default ArticlePage
