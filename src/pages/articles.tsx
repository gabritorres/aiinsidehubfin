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
      <main className="mt-[30px] container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {articles ? (
          articles.data.map((article: { id: string; attributes: any }) => (
            <Articulo key={article.id} article={article.attributes} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </main>

      <div className="mt-[10px] bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
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
    //console.log(articles);
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
