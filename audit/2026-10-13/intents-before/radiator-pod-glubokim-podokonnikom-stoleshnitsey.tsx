import { NextPage } from 'next'
import ClusterArticle from '../../../components/articles/ClusterArticle'
import article from '../../../data/articles/radiator-pod-glubokim-podokonnikom-stoleshnitsey.json'

const ArticlePage: NextPage = () => <ClusterArticle article={article} />

export default ArticlePage
