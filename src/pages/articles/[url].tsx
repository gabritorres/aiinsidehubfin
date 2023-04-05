import { useRouter } from "next/router";
import Image from "next/image";
import styles2 from "src/styles/guitarras.module.css";
import Layout from "../../../components/layout";
import { GetServerSideProps } from "next";

import Link from "next/link";
export default function Article({
  article,
  articles,
}: {
  article: any;
  articles: any;
}) {
  const numArticles = articles.data.lenght;
  const randomArticles = articles.data.slice(-8).reverse();

  // divide los 8 artículos en 2 columnas
  const column1 = randomArticles.slice(0, 2);
  const column2 = randomArticles.slice(2, 4);
  const column3 = randomArticles.slice(4, 6);
  const column4 = randomArticles.slice(6, 8);
  if (!article) {
    return <div>Loading...</div>; // or some other error handling behavior
  }
  const {
    title,
    description,
    title2,
    text2,
    image1,
    url,
    title3,
    text3,
    title4,
    text4,
    title5,
    text5,
    title6,
    text6,
    title7,
    text7,
    title8,
    text8,
    title9,
    text9,
    title10,
    text10,
  } = article[0].attributes;
  return (
    <Layout title={`Article ${title}`}>
      <div className="flex flex-col w-full md:w-1/2 mx-auto">
        <div className="mt-[30px] text-white text-4xl md:text-4xl font-extrabold uppercase text-center text-justify-center">
          {title}
        </div>
        <br />
        <div className="mt-[30px] text-white text-lg md:text-xl text-justify px-6 md:px-0">
          {description}
        </div>
        <br />
        <div className="mt-[30px] flex justify-center">
          <Image
            src={image1?.data?.attributes?.formats?.medium?.url}
            width={600}
            height={500}
            alt={`Image ${title}`}
          />
        </div>

        <br />
      </div>

      <div className="mt-[30px] text-white flex flex-col w-full md:w-1/2 mx-auto px-6 md:px-0">
        <div className="text-2xl font-bold text-justify">{title2}</div>
        <br />
        <div className="text-lg text-justify">{text2}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title3}</div>
        <br />
        <div className="text-lg text-justify">{text3}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title4}</div>
        <br />
        <div className="text-lg text-justify">{text4}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title5}</div>
        <br />
        <div className="text-lg text-justify">{text5}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title6}</div>
        <br />
        <div className="text-lg text-justify">{text6}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title7}</div>
        <br />
        <div className="text-lg text-justify">{text7}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title8}</div>
        <br />
        <div className="text-lg text-justify">{text8}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title9}</div>
        <br />
        <div className="text-lg text-justify">{text9}</div>
        <br />
        <br />
        <div className="text-2xl font-bold text-justify">{title10}</div>
        <br />
        <div className="text-lg text-justify">{text10}</div>
        <br />
        <br />
      </div>

      <div className="mt-[10px] bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>

      <div className="flex justify-center text-4xl md:text-5xl mt-4 mb-4">
        <span className="text-white transition duration-800 font-grotesk">
          RECOMENDED
          <span className="text-[#fb776c] hover:text-yellow-400">
            {" "}
            ARTICLES:
          </span>
        </span>
      </div>
      <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-[3px] w-full"></div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div>
          {column1.map((articlee: any) => (
            <Link href={`/articles/${articlee.attributes.url}`} target="_blank">
              <div
                key={articlee.id}
                className="bg-white rounded-lg shadow-lg p-4 mt-5"
              >
                <h2 className="text-lg font-bold mb-2">
                  {articlee.attributes.title}
                </h2>
                <img
                  src={
                    articlee.attributes.image1?.data?.attributes?.formats?.small
                      ?.url
                  }
                  alt={`Imagen ${articlee.attributes.title}`}
                  className="object-cover w-full h-32 border rounded-[10px] border-black"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>
        <div>
          {column2.map((articlee: any) => (
            <Link href={`/articles/${articlee.attributes.url}`} target="_blank">
              <div
                key={articlee.id}
                className="bg-white rounded-lg shadow-lg p-4 mt-5"
              >
                <h2 className="text-lg font-bold mb-2">
                  {articlee.attributes.title}
                </h2>
                <img
                  src={
                    articlee.attributes.image1?.data?.attributes?.formats?.small
                      ?.url
                  }
                  alt={`Imagen ${articlee.attributes.title}`}
                  className="object-cover w-full h-32 border rounded-[10px] border-black"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>
        <div>
          {column3.map((articlee: any) => (
            <Link href={`/articles/${articlee.attributes.url}`} target="_blank">
              <div
                key={articlee.id}
                className="bg-white rounded-lg shadow-lg p-4 mt-5"
              >
                <h2 className="text-lg font-bold mb-2">
                  {articlee.attributes.title}
                </h2>
                <img
                  src={
                    articlee.attributes.image1?.data?.attributes?.formats?.small
                      ?.url
                  }
                  alt={`Imagen ${articlee.attributes.title}`}
                  className="object-cover w-full h-32 border rounded-[10px] border-black"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>
        <div>
          {column4.map((articlee: any) => (
            <Link href={`/articles/${articlee.attributes.url}`} target="_blank">
              <div
                key={articlee.id}
                className="bg-white rounded-lg shadow-lg p-4 mt-5"
              >
                <h2 className="text-lg font-bold mb-2">
                  {articlee.attributes.title}
                </h2>
                <img
                  src={
                    articlee.attributes.image1?.data?.attributes?.formats?.small
                      ?.url
                  }
                  alt={`Imagen ${articlee.attributes.title}`}
                  className="object-cover w-full h-32 border rounded-[10px] border-black"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-[10px] bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/articles`);

  const { data } = await respuesta.json();

  console.log(data);

  const paths = data.map((article: { attributes: { url: any } }) => ({
    params: {
      url: article.attributes.url,
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

export const getStaticProps = async ({
  params: { url },
}: {
  params: { url: string };
}) => {
  try {
    const response = await fetch(`${process.env.API_URL}/articles?populate=*`);
    const articles = await response.json();
    console.log(articles);
    const respuesta = await fetch(
      `${process.env.API_URL}/articles/?filters[url]=${url}&populate=*`
    );
    const { data: article } = await respuesta.json();

    return {
      props: {
        articles,
        article,
      },
    };
  } catch (error) {
    console.error("ERROR");
    return {
      props: {
        error: "Ocurrió un error al cargar los articulos",
      },
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async ({
//   query: { url },
// }) => {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/articles/?filters[url]=${url}&populate=*`
//   );
//   const { data: article } = await respuesta.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
