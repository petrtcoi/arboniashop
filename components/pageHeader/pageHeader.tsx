import React from 'react'
import Head from 'next/head'

type PageHeaderProps = {
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <Head>
            <title>{ title }</title>
        </Head>
    )
}

export default PageHeader