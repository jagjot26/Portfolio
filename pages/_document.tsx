import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class PortfolioDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head/>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PortfolioDocument;
