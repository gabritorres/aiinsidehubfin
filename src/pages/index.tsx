import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/layout";
import fotHome1 from "../../public/img/fotoHome1.svg";
import fotHome2 from "../../public/img/fotoHome2.svg";
import fondoHome from "../../public/fondoHome.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: { articles: any }) {
  const ids = Object.keys(articles.data)
    .map(Number)
    .sort((a: number, b: number) => b - a);

  console.log(ids);
  const objetoConId1 = articles.data.find(
    (objeto: { id: number }) => objeto.id === ids[0] + 1
  );
  const atributosId1 = objetoConId1.attributes;
  const objetoConId2 = articles.data.find(
    (objeto: { id: number }) => objeto.id === ids[1] + 1
  );
  const atributosId2 = objetoConId2.attributes;
  const objetoConId3 = articles.data.find(
    (objeto: { id: number }) => objeto.id === ids[2] + 1
  );
  const atributosId3 = objetoConId3.attributes;
  const objetoConId4 = articles.data.find(
    (objeto: { id: number }) => objeto.id === ids[3] + 1
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
      <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
      <div className="bg-[#1b1d20] flex flex-row justify-beetween w-full h-full bg-[#1b1d20]">
        <div className="w-0 md:w-1/5"> </div>
        <div className="">
          <div className="flex justify-center mx-auto text-4xl md:text-5xl mt-4 mb-4 text-center">
            <span className="text-white transition duration-800 font-grotesk">
              CHECK OUT OUR
              <span className="text-[#fb776c] hover:text-yellow-400">
                {" "}
                ARTICLES:
              </span>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
          <div className="relative flex flex-col md:flex-row w-full md:justify-beetween items-center md:justify-around mb-8 mt-8">
            <div className="ml-[20px] mr-[20px] w-full md:w-8/12">
              <div className="relative md:ml-[100px] lg:ml-[200px] md:w-3/4">
                <Link href={`/articles/${atributosId1.url}`} target="_blank">
                  <div
                    className="text-white font-bold hover:underline lg:absolute md:text-center lg:text-left lg:-ml-[10%] md:w-full lg:w-[250px] xl:w-[450px] 2xl:w-[600px] w-full z-20 uppercase sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl sm:mx-4"
                    style={{
                      textShadow:
                        "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                    }}
                  >
                    {atributosId1.title}
                  </div>
                </Link>
                <div className="overflow-hidden mb-4 md:mb-0 md:mr-10 md:ml-[90px] border border-2 rounded-[40px] border-white z-8">
                  <div className="max-w-full max-h-full duration-500 hover:scale-110 lg:hover:scale-150">
                    <Link
                      href={`/articles/${atributosId1.url}`}
                      target="_blank"
                    >
                      <img
                        src={
                          atributosId1.image1?.data?.attributes?.formats?.medium
                            ?.url
                        }
                        alt={`Imagen ${atributosId1.title}`}
                        className="object-cover w-full h-full "
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-[3px] md:h-[342px] w-full md:w-[3px] md:ml-10 md:mr-10"></div>

            <div className="relative flex flex-col ml-[20px] md:ml-[60px] mr-[20px] w-full md:w-4/12">
              <Link href={`/articles/${atributosId2.url}`} target="_blank">
                <div
                  className="block sm:hidden text-white font-bold hover:underline z-20 uppercase sm:text-xl md:text-2xl sm:mx-4"
                  style={{
                    textShadow:
                      "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                  }}
                >
                  {atributosId2.title}
                </div>
              </Link>
              <div></div>
              <div className="overflow-hidden mb-4 md:mb-0 md:mr-10 border border-2 rounded-[40px] border-white s z-8">
                <div className="max-w-full max-h-full duration-500 hover:scale-110 lg:hover:scale-150">
                  <Link href={`/articles/${atributosId2.url}`} target="_blank">
                    <img
                      src={
                        atributosId2.image1?.data?.attributes?.formats?.medium
                          ?.url
                      }
                      alt={`Imagen ${atributosId2.title}`}
                      className="object-cover w-full h-full"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
              <Link href={`/articles/${atributosId2.url}`} target="_blank">
                <div
                  className="hidden sm:block text-white font-bold hover:underline z-21 uppercase sm:text-xl md:text-2xl sm:mx-4"
                  style={{
                    textShadow:
                      "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                  }}
                >
                  {atributosId2.title}
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>

          <div className="relative flex flex-col md:flex-row w-full justify-beetween items-center md:justify-around mb-8 mt-8">
            <div className="relative flex flex-col ml-[20px] md:ml-[60px] mr-[20px] w-full md:w-4/12">
              <Link href={`/articles/${atributosId3.url}`} target="_blank">
                <div
                  className="block sm:hidden md:hidden text-white font-bold hover:underline z-20 uppercase sm:text-xl md:text-2xl sm:mx-4"
                  style={{
                    textShadow:
                      "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                  }}
                >
                  {atributosId3.title}
                </div>
              </Link>
              <div className="overflow-hidden mb-4 md:mb-0 md:mr-10 border border-2 rounded-[40px] border-white z-8">
                <div className="max-w-full max-h-full duration-500 hover:scale-110 lg:hover:scale-150">
                  <Link href={`/articles/${atributosId3.url}`} target="_blank">
                    <img
                      src={
                        atributosId3.image1?.data?.attributes?.formats?.medium
                          ?.url
                      }
                      alt={`Imagen ${atributosId3.title}`}
                      className="object-cover w-full h-full"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
              <Link href={`/articles/${atributosId3.url}`} target="_blank">
                <div
                  className="hidden sm:block md:block text-white font-bold hover:underline z-20 uppercase sm:text-xl md:text-2xl sm:mx-4"
                  style={{
                    textShadow:
                      "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                  }}
                >
                  {atributosId3.title}
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-[3px] md:h-[342px] w-full md:w-[3px] md:ml-10 md:mr-10"></div>
            <div className="ml-[20px] mr-[20px] w-full md:w-8/12">
              <div className="relative md:ml-[100px] lg:ml-[200px] md:w-3/4">
                <Link href={`/articles/${atributosId4.url}`} target="_blank">
                  <div
                    className="text-white font-bold hover:underline lg:absolute md:text-center lg:text-left lg:-ml-[10%] md:w-full lg:w-[250px] xl:w-[450px] 2xl:w-[600px] w-full z-20 uppercase sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl sm:mx-4"
                    style={{
                      textShadow:
                        "2px 2px black, -2px -2px black, 2px -2px black, -1px 1px black",
                    }}
                  >
                    {atributosId4.title}
                  </div>
                </Link>
                <div className="overflow-hidden mb-4 md:mb-0 md:mr-10 md:ml-[90px] border border-2 rounded-[40px] border-white z-8">
                  <div className="max-w-full max-h-full duration-500 hover:scale-110 lg:hover:scale-150">
                    <Link
                      href={`/articles/${atributosId4.url}`}
                      target="_blank"
                    >
                      <img
                        src={
                          atributosId4.image1?.data?.attributes?.formats?.medium
                            ?.url
                        }
                        alt={`Imagen ${atributosId4.title}`}
                        className="object-cover w-full h-full"
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-1/5"> </div>
      </div>
      <div className="bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
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
