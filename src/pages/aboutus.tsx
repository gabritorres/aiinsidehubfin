import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import fotInsta from "../../public/img/fotInsta.svg";
import fotTik from "../../public/img/fotTik.svg";
import paypal from "../../public/img/fotPaypal.webp";

export default function Nosotros() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2068007191150725"
    crossOrigin="anonymous"
  ></script>;
  return (
    <Layout
      title={"About Us"}
      description={"Connect with us to support you on your AI journey"}
    >
      <div className="flex flex-col lg:flex-row justify-center bg-white">
        <div className="lg:w-1/3 mt-8 text-center">
          <div className="pb-[10px] text-5xl font-extrabold tracking-tighter text-black leading-tight mb-8">
            ABOUT US
          </div>
          <div className="flex flex-row justify-center">
            <div className="m-[30px]">
              <div className="font-bold mb-2 text-black">INSTAGRAM</div>
              <Link
                href="https://www.instagram.com/aiinsidehub/"
                target="_blank"
              >
                <Image
                  src={fotInsta.src}
                  width={300}
                  height={300}
                  alt="Our Instagram Account"
                  className="mt-8 cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                />
              </Link>
            </div>
            <div className="m-[30px]">
              <div className="font-bold mb-2 text-black">TIKTOK</div>
              <Link href="https://www.tiktok.com/@aiinsidehub" target="_blank">
                <Image
                  src={fotTik.src}
                  width={300}
                  height={300}
                  alt="Our Tiktok Account"
                  className="mt-8 cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                />
              </Link>
            </div>
            <div className="m-[30px]">
              <div className="font-bold mb-2 text-black">DONATIONS</div>
              <Link href="https://www.paypal.com" target="_blank">
                <Image
                  src={paypal.src}
                  width={300}
                  height={300}
                  alt="Our Paypal Account"
                  className="mt-8 cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
