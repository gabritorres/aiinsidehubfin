import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/layout";
import fotHome1 from "../../public/img/fotoHome1.svg";
import fotHome2 from "../../public/img/fotoHome2.svg";
import fondoHome from "../../public/fondoHome.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: { articles: any }) {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2068007191150725"
    crossOrigin="anonymous"
  ></script>;
  const objetoConId1 = articles.data.find(
    (objeto: { id: number }) => objeto.id === 1
  );
  const atributosId1 = objetoConId1.attributes;
  const objetoConId2 = articles.data.find(
    (objeto: { id: number }) => objeto.id === 2
  );
  const atributosId2 = objetoConId2.attributes;
  const objetoConId3 = articles.data.find(
    (objeto: { id: number }) => objeto.id === 3
  );
  const atributosId3 = objetoConId3.attributes;
  const objetoConId4 = articles.data.find(
    (objeto: { id: number }) => objeto.id === 4
  );
  const atributosId4 = objetoConId4.attributes;
  return (
    <Layout title={"Home"} description={"Discover the fascinating world of AI"}>
      <div className="bg-[#1b1d20]">
        <div className="" style={{ backgroundImage: `url(${fondoHome.src})` }}>
          <div className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-wider leading-tight">
            <span className="text-white transition duration-800 hover:text-red-500 font-grotesk">
              A
            </span>
            <span className="text-white transition duration-800 hover:text-yellow-500 font-grotesk">
              i
            </span>
            <span className="text-white transition duration-800 hover:text-red-500 font-grotesk">
              I
            </span>
            <span className="text-white transition duration-800 hover:text-green-500 font-grotesk">
              n
            </span>
            <span className="text-white transition duration-800 hover:text-blue-500 font-grotesk">
              s
            </span>
            <span className="text-white transition duration-800 hover:text-indigo-500 font-grotesk">
              i
            </span>
            <span className="text-white transition duration-800 hover:text-yellow-500 font-grotesk">
              d
            </span>
            <span className="text-white transition duration-800 hover:text-red-500 font-grotesk">
              e
            </span>
            <span className="text-white transition duration-800 hover:text-green-500 font-grotesk">
              H
            </span>
            <span className="text-white transition duration-800 hover:text-yellow-500 font-grotesk">
              u
            </span>
            <span className="text-white transition duration-800 hover:text-blue-500 font-grotesk">
              b
            </span>
          </div>
          <div className="text-center text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-9">
            <span
              className="font-grotesk"
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(to right, #4e54c8, #8f94fb, #4e54c8)",
              }}
            >
              Discover The Power of The AI
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1b1d20] via-[#f23540] via-[#f58435] to-[#1b1d20] h-1 w-full"></div>

      <div className="bg-[#1b1d20] flex flex-col w-full h-full bg-[#1b1d20]">
        <div className="flex justify-center text-4xl md:text-5xl mt-4 mb-4">
          <span className="text-white transition duration-800 font-grotesk">
            CHECK OUT OUR
            <span className="text-[#fb776c] hover:text-yellow-400">
              {" "}
              ARTICLES:
            </span>
          </span>
        </div>
        <div className="bg-gradient-to-r from-[#1b1d20] via-[#fb776c] via-[#fb776c] to-[#1b1d20] h-[3px] w-full"></div>
        <div className="relative flex flex-col md:flex-row w-full justify-center items-center md:justify-around mb-8 mt-8 ml-[100px]">
          <div className="relative">
            <div className="absolute text-white font-bold text-3xl hover:underline absolute top-0 left-0 w-[400px] z-20 uppercase">
              {atributosId1.title}
            </div>
            <div className="overflow-hidden mb-4 md:mb-0 md:mr-10">
              <div className="max-w-full max-h-full duration-500 hover:scale-150">
                <img
                  src={
                    atributosId1.image1?.data?.attributes?.formats?.medium?.url
                  }
                  alt={`Imagen ${atributosId1.title}`}
                  className="object-cover w-full h-full border rounded-[40px] border-black z-8"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1b1d20] via-[#fb776c] via-[#fb776c] to-[#1b1d20] h-[3px] md:h-[342px] w-full md:w-[3px] md:ml-10 md:mr-10"></div>
          <div className="relative">
            <div className="absolute text-white font-bold text-3xl hover:underline top-0 left-0 w-[400px] z-20 uppercase">
              {atributosId2.title}
            </div>
            <div className="overflow-hidden mb-4 md:mb-0 md:mr-10">
              <div className="max-w-full max-h-full duration-500 hover:scale-150">
                <img
                  src={
                    atributosId2.image1?.data?.attributes?.formats?.medium?.url
                  }
                  alt={`Imagen ${atributosId2.title}`}
                  className="object-cover w-full h-full border rounded-[40px] border-black z-8"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1b1d20] via-[#f23540] via-[#f58435] to-[#1b1d20] h-1 w-full"></div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-around mb-8 mt-8">
          <div className="relative text-white font-bold text-lg hover:underline absolute w-1/10 top-0 left-0 z-20">
            {atributosId3.title}
          </div>
          <div className="relative overflow-hidden mb-4 md:mb-0 md:mr-10">
            <div className="max-w-full max-h-full duration-500 hover:scale-150">
              <img
                src={
                  atributosId3.image1?.data?.attributes?.formats?.medium?.url
                }
                alt={`Imagen ${atributosId3.title}`}
                className="object-cover w-full h-full border rounded-[40px] border-black z-8"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1b1d20] via-[#fb776c] via-[#fb776c] to-[#1b1d20] h-[3px] md:h-[342px] w-full md:w-[3px] md:ml-10 md:mr-10"></div>
          <div className="relative text-white font-bold text-lg hover:underline absolute top-0 left-0 z-10">
            {atributosId4.title}
          </div>
          <div className="relative overflow-hidden mt-4 md:mt-0 md:ml-10">
            <div className="max-w-full max-h-full duration-500 hover:scale-150">
              <img
                src={
                  atributosId4.image1?.data?.attributes?.formats?.medium?.url
                }
                alt={`Imagen ${atributosId4.title}`}
                className="object-cover w-full h-full border rounded-[40px] border-black z-8"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
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
