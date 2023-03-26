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
      <div className="flex flex-col w-1/2 ml-auto mr-auto">
        <div className="text-[28px] font-extrabold uppercase text-justify">
          {title}
        </div>
        <br></br>
        <div className="text-justify">{description}</div>
        <br></br>
        <Image
          src={image1?.data?.attributes?.formats?.medium?.url}
          width={600}
          height={500}
          alt={`Image ${title}`}
        />
        <br></br>
      </div>

      <div className="flex flex-col w-1/2 ml-auto mr-auto">
        <div className="font-bold text-justify">{title2}</div>
        <br></br>
        <div className="text-justify">{text2}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title3}</div>
        <br></br>
        <div className="text-justify">{text3}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title4}</div>
        <br></br>
        <div className="text-justify">{text4}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title5}</div>
        <br></br>
        <div className="text-justify">{text5}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title6}</div>
        <br></br>
        <div className="text-justify">{text6}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title7}</div>
        <br></br>
        <div className="text-justify">{text7}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title8}</div>
        <br></br>
        <div className="text-justify">{text8}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title9}</div>
        <br></br>
        <div className="text-justify">{text9}</div>
        <br></br>
        <br></br>
        <div className="font-bold text-justify">{title10}</div>
        <br></br>
        <div className="text-justify">{text10}</div>
        <br></br>
        <br></br>
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
