import Link from "next/link";
import Layout from "../../components/layout";
import Articulo from "../../components/article";

export default function Articles({ articles }: { articles: any }) {
  return (
    <Layout
      title={"Articles"}
      description={
        "Explore in-depth the latest trends in artificial intelligence"
      }
    >
      <main className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black">
        {articles ? (
          articles.data.map((article: { id: string; attributes: any }) => (
            <Articulo key={article.id} article={article.attributes} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/articles?populate=*`);
    const articles = await response.json();
    console.log(
      "------------------------------------------------------------------------"
    );
    console.log(articles);
    return {
      props: { articles },
    };
  } catch (error) {
    console.error("ERROR");
    return {
      props: {
        error: "Ocurrió un error al cargar los articulos",
      },
    };
  }
}

// export async function getServerSideProps() {
//   try {
//     const response = await fetch(`${process.env.API_URL}/articles?populate=*`);
//     const articles = await response.json();
//     console.log("articulos: ", articles);
//     return {
//       props: {
//         articles,
//       },
//     };
//   } catch (error) {
//     console.error("ERROR");
//     return {
//       props: {
//         error: "Ocurrió un error al cargar los articulos",
//       },
//     };
//   }
// }
