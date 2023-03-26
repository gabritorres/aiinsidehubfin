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
      <main className="contenedor">
        <div className="">
          {articles.map((article: { id: string; attributes: any }) => (
            <Articulo key={article.id} article={article.attributes} />
          ))}
        </div>
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
    const respuesta = await fetch(`${process.env.API_URL}/articles?populate=*`);
    const { data: articles } = await respuesta.json();
    console.log("articulos: ", articles);
    const articlesArray = articles.map(
      (article: { [key: string]: any }) => article
    );
    return {
      props: {
        articles: articlesArray,
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
