import Link from "next/link";
import Layout from "../../components/layout";

export default function Pagina404() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2068007191150725"
    crossOrigin="anonymous"
  ></script>;
  return (
    <Layout title="Page not found">
      <p className="error">Page not found</p>
      <Link href="/" className="error-enlace">
        Go Home
      </Link>
    </Layout>
  );
}
