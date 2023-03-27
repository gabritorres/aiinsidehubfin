import { useRouter } from "next/router";
import Image from "next/image";
import styles2 from "src/styles/guitarras.module.css";
import Layout from "../../../components/layout";
import { GetServerSideProps } from "next";

export default function Article({ article }: { article: any }) {
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
        <div className="mt-[30px] text-4xl md:text-4xl font-extrabold uppercase text-center text-justify-center">
          {title}
        </div>
        <br />
        <div className="mt-[30px] text-lg md:text-xl text-justify px-6 md:px-0">
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

      <div className="mt-[30px] flex flex-col w-full md:w-1/2 mx-auto px-6 md:px-0">
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
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { url },
}) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/articles/?filters[url]=${url}&populate=*`
  );
  const { data: article } = await respuesta.json();

  return {
    props: {
      article,
    },
  };
};
