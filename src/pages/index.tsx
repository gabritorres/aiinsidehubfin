import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/layout";
import fotHome1 from "../../public/img/fotoHome1.svg";
import fotHome2 from "../../public/img/fotoHome2.svg";
import fondoHome from "../../public/fondoHome.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: { articles: any }) {
  const objetoConId1 = articles.data.find(
    (objeto: { id: number }) => objeto.id === 1
  );
  const atributosId1 = objetoConId1.attributes;
  return (
    <Layout title={"Home"} description={"Discover the fascinating world of AI"}>
      <div className="" style={{ backgroundImage: `url(${fondoHome.src})` }}>
        <div className="text-center text-[180px] font-extrabold tracking-wider leading-tight">
          <span className="text-white transition duration-800 hover:text-[#f23540] font-grotesk">
            A
          </span>
          <span className="text-white transition duration-800 hover:text-[#f58435] font-grotesk">
            i
          </span>
          <span className="text-white transition duration-800 hover:text-[#f23540] font-grotesk">
            I
          </span>
          <span className="text-white transition duration-800 hover:text-yellow-400 font-grotesk">
            n
          </span>
          <span className="text-white transition duration-800 hover:text-[#fb776c] font-grotesk">
            s
          </span>
          <span className="text-white transition duration-800 hover:text-blue-600 font-grotesk">
            i
          </span>
          <span className="text-white transition duration-800 hover:text-[#f58435] font-grotesk">
            d
          </span>
          <span className="text-white transition duration-800 hover:text-yellow-400 font-grotesk">
            e
          </span>
          <span className="text-white transition duration-800 hover:text-[#f23540] font-grotesk">
            H
          </span>
          <span className="text-white transition duration-800 hover:text-orange-400 font-grotesk">
            u
          </span>
          <span className="text-white transition duration-800 hover:text-[#fb776c]  font-grotesk">
            b
          </span>
        </div>
        <div className="text-center text-5xl font-extrabold tracking-tighter leading-tight mb- 9">
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
            &lt;- Discover The Power of The AI -&gt;
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1b1d20] via-[#f23540] via-[#f58435] to-[#1b1d20] h-[3px] w-full"></div>

      <div className="flex flex-col border border-8 border-white w-full h-[400px]">
        <div className="flex flex-row border border-8 border-white w-full h-[200px]">
          <div className="border border-8 border-white w-1/2 h-full">
            <div>{atributosId1.title}</div>
            <div>
              {
                <Image
                  src={
                    atributosId1.image1?.data?.attributes?.formats?.medium?.url
                  }
                  width={600}
                  height={400}
                  alt={`Imagen ${atributosId1.title}`}
                />
              }
            </div>
          </div>
          <div className="border border-8 border-white w-1/2 h-full">
            <div>TITULO</div>
            <div>IMAGEN</div>
          </div>
        </div>
        <div className="flex flex-row border border-8 border-white w-full h-[200px]">
          <div className="border border-8 border-white w-1/2 h-full"></div>
          <div className="border border-8 border-white w-1/2 h-full"></div>
        </div>
      </div>

      <div className="flex flex-col  justify-between bg-white ">
        <div className="flex flex-row m-30 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-black hover:shadow-lg">
          <div className=" mt-40 text-center">
            <p className="text-justify-left text-black">
              Are you interested in the latest developments and news in the
              field of artificial intelligence? Look no further! Our website
              features a wide range of articles on AI, including cutting-edge
              research, fascinating use cases, and practical tips on how to
              leverage this technology to make money.
            </p>
            <div className="py-4">
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;Descubre cómo Elon Musk me come la polla a diario
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;ChatGPT y la consecuencia de no dar un palo al agua
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                &gt;Se manda en la práctica la copia de la práctica (sale bien)
              </h1>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 text-center">
            <p>🧙</p>
            <p className="text-3xl font-bold uppercase text-black">
              Discover The Power
            </p>
            <div className="relative mx-auto mt-4 w-48 h-48">
              <Image
                src={fotHome1.src}
                width={300}
                height={300}
                alt="Unleash the Potential of AI and Discover its Power for Your Business"
                className="rounded-full"
              />
            </div>
            <p className="text-3xl mt-32 font-bold uppercase text-black">
              of THE AI
            </p>
          </div>
          <div className=" mt-40 text-center">
            <p className="text-justify-left text-black">
              Discover how AI is transforming industries from healthcare to
              finance, and learn about the latest breakthroughs in natural
              language processing, machine learning, and computer vision. Our
              expert writers are constantly on the lookout for the most
              interesting and relevant AI topics.
            </p>
            <div className="py-4">
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;La de ELP es una zorra de mucho cuidado
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;Todavia hay que poner lo de las putas cookies
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                &gt;Juan se folla a todas las suecas posibles
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-40 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-black hover:shadow-lg">
          <div className="text-center">
            <p className="text-justify-left text-black">
              Are you interested in the latest developments and news in the
              field of artificial intelligence? Look no further! Our website
              features a wide range of articles on AI, including cutting-edge
              research, fascinating use cases, and practical tips on how to
              leverage this technology to make money.
            </p>
            <div className="py-4">
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;Descubre cómo Elon Musk me come la polla a diario
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;ChatGPT y la consecuencia de no dar un palo al agua
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                &gt;Se manda en la práctica la copia de la práctica (sale bien)
              </h1>
            </div>
          </div>
          <div className=" mb-5 text-center">
            <p>👉</p>
            <p className="text-3xl font-bold uppercase text-black">
              EXPLORE THE AMAZING
            </p>
            <div className="relative mx-auto mt-4 w-48 h-48">
              <Image
                src={fotHome2.src}
                width={300}
                height={300}
                alt="Enter the Exciting World of AI and Explore its Limitless Possibilities"
                className="rounded-full"
              />
            </div>
            <p className="text-3xl mt-32 font-bold uppercase text-black">
              WORLD OF AI
            </p>
          </div>
          <div className="text-center">
            <p className="text-justify-left text-black">
              Discover how AI is transforming industries from healthcare to
              finance, and learn about the latest breakthroughs in natural
              language processing, machine learning, and computer vision. Our
              expert writers are constantly on the lookout for the most
              interesting and relevant AI topics.
            </p>
            <div className="py-4">
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;La de ELP es una zorra de mucho cuidado
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                {" "}
                &gt;Todavia hay que poner lo de las putas cookies
              </h1>
              <h1 className="text-red-500 font-bold hover:underline">
                &gt;Juan se folla a todas las suecas posibles
              </h1>
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
