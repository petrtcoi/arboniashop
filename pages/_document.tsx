import { DocumentHeadTags, documentGetInitialProps, type DocumentHeadTagsProps } from '@mui/material-nextjs/v16-pagesRouter'
import { Head, Html, Main, NextScript, type DocumentContext, type DocumentProps } from 'next/document'

const Document = (props: DocumentProps & DocumentHeadTagsProps) => {
	return (
		<Html lang='ru'>
			<Head>
				<DocumentHeadTags {...props} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

Document.getInitialProps = async (ctx: DocumentContext) => documentGetInitialProps(ctx)

export default Document
