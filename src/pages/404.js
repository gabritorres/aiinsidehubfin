import Link from "next/link";
import Layout from "../../components/layout";

export default function Pagina404() {
  return (
    <Layout title="Page not found">
      <p className="error">Page not found</p>
      <Link href="/" className="error-enlace">
        Go Home
      </Link>
    </Layout>
  );
}
