import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
  title,
  description,
}: React.PropsWithChildren<{ title?: string; description?: string }>) {
  return (
    <>
      <Head>
        <title>{`AInsideHub - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
