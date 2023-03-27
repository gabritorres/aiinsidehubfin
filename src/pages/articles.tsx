import Link from "next/link";
import Layout from "../../components/layout";
import Articulo from "../../components/article";

export default function Articles({ articles }: { articles: any }) {
  console.log("art " + articles);
  return (
    <Layout
      title={"Articles"}
      description={
        "Explore in-depth the latest trends in artificial intelligence"
      }
    >
      <main className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article: { id: string; attributes: any }) => (
          <Articulo key={article.id} article={article.attributes} />
        ))}
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//     const resp =  await fetch(`http://127.0.0.1:1337/api/articulos?populate=imagen`);
//     const {data: articulos} = await resp.json();
//     console.log(articulos)

//     return {
//         props: {articulos},
//     }
// }

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/articles`);
    const articles = await response.json();
    console.log("articulos: ", articles);
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: "Ocurrió un error al cargar los articulos",
      },
    };
  }
}
