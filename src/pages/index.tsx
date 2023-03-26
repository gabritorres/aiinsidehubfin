import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/layout";
import fotHome1 from "../../public/img/fotoHome1.svg";
import fotHome2 from "../../public/img/fotoHome2.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"} description={"Discover the fascinating world of AI"}>
      <div className="flex flex-col lg:flex-row justify-between bg-white">
        <div className="lg:w-1/3 mt-8 text-center">
          <p className="text-3xl font-bold uppercase text-black">
            - Discover The Power of THE AI -
          </p>
          <Image
            src={fotHome1.src}
            width={400}
            height={400}
            alt="Unleash the Potential of AI and Discover its Power for Your Business"
            className="mx-auto mt-8"
          />
        </div>
        <div className="lg:w-1/3 mt-8 text-center">
          <div className="text-5xl font-extrabold tracking-tighter text-black leading-tight mb-8">
            ARTICLES
          </div>
          <p className="text-justify text-black">
            Are you interested in the latest developments and news in the field
            of artificial intelligence? Look no further! Our website features a
            wide range of articles on AI, including cutting-edge research,
            fascinating use cases, and practical tips on how to leverage this
            technology to make money.
          </p>
          <br />
          <p className="text-justify text-black">
            Discover how AI is transforming industries from healthcare to
            finance, and learn about the latest breakthroughs in natural
            language processing, machine learning, and computer vision. Our
            expert writers are constantly on the lookout for the most
            interesting and relevant AI topics, ensuring that you stay
            up-to-date with the latest trends and developments.
          </p>
          <br />
          <p className="text-justify text-black">
            Whether you are a seasoned AI professional or just starting out, our
            website has something for everyone. From beginner-friendly guides to
            advanced technical deep-dives, our articles provide valuable
            insights and actionable advice to help you stay ahead of the curve.
            Do not miss out on the exciting world of artificial intelligence -
            browse our collection of articles today and join the conversation!
          </p>
        </div>
        <div className="lg:w-1/3 mt-8 text-center">
          <p className="text-3xl font-bold text-black">
            - EXPLORE THE AMAZING WORLD OF AI -
          </p>
          <Image
            src={fotHome2.src}
            width={400}
            height={400}
            alt="Enter the Exciting World of AI and Explore its Limitless Possibilities"
            className="mx-auto mt-8"
          />
        </div>
      </div>
    </Layout>
  );
}
