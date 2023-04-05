import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import fotInsta from "../../public/img/fotInsta.svg";
import fotTik from "../../public/img/fotTik.svg";
import paypal from "../../public/img/fotPaypal.webp";

export default function Nosotros() {
  return (
    <Layout
      title={"About Us"}
      description={"Connect with us to support you on your AI journey"}
    >
      <div className="flex flex-col lg:flex-row justify-center h-full">
        <div className="lg:w-1/3 mt-8 text-center">
          <div className="pb-[10px] text-5xl font-extrabold tracking-tighter text-[#51D1F6] leading-tight mb-8">
            ABOUT US
          </div>
          <div className="text-white">
            At AInsideHub, we're a team of passionate AI experts who are
            dedicated to advancing the frontiers of artificial intelligence
            research and development. We believe that AI has the power to
            transform our world in ways that were once unimaginable, and we're
            excited to be at the forefront of this revolutionary technology.
          </div>
          <div className="flex flex-row justify-center">
            <div className="m-[30px]">
              <div className="font-bold mb-2 text-[#51D1F6]">INSTAGRAM</div>
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
              <div className="font-bold mb-2 text-[#51D1F6]">TIKTOK</div>
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
              <div className="font-bold mb-2 text-[#51D1F6]">DONATIONS</div>
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
      <div className="mt-[10px] bg-gradient-to-r from-[#1b1d20] via-blue-500 to-[#1b1d20] h-1 w-full"></div>
    </Layout>
  );
}
