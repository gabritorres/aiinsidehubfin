import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Discover the fascinating world of AI"
          />
          <link rel="icon" type="image/x-icon" href="/img/logoFinal.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-[#1b1d20] pt-[160px] sm:pt-[64px]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
