import { createStylesServer, ServerStyles } from '@mantine/next'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { emotionCache } from '../configs/emotion-cache'

const stylesServer = createStylesServer(emotionCache)

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key='styles'
        />,
      ],
    }
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='theme-color' content='#000000' />
          <link rel='favicon' type='image/ico' href='/favicon.ico' />
          <link rel='manifest' href='/site.webmanifest' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;700&family=Epilogue:wght@400;600;800&family=Work+Sans:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body lang='en'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
