import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="O.IT을 소개합니다! 👋" />
          <meta
            name="keyword"
            content="O.IT, OIT, oit, 정철오, 포트폴리오, 프론트엔드, Frontend, webdeveloper"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="O.IT 포트폴리오" />
          <meta property="og:title" content="O.IT 포트폴리오" />
          <meta
            property="og:description"
            content="O.IT 포트폴리오 입니다! 저를 보러 오세요! 👋"
          />
          <meta
            property="og:image"
            content="https://o-it.me/image/o-it-logo.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
