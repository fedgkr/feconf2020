import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class FEConf2020Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head title="FEConf 2020 at Home" />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default FEConf2020Document;
