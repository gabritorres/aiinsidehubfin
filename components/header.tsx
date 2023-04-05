import Image from "next/image";
import logo from "../public/img/logoCircularTransparente.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#1b1d20] h-auto sm:h-12 py-4 px-6 relative font-grotesk text-white">
        <div className="flex-1 flex justify-center sm:justify-end">
          <div className="mr-4 sm:mr-10 lg:mr-20">
            <Link
              href="/"
              className={`${
                router.pathname === "/" && "border-b-2 border-white"
              } hover:text-[#f23540]`}
            >
              Home
            </Link>
          </div>
          <div className="mr-4 sm:mr-10 lg:mr-20">
            <Link
              href="/articles"
              className={`${
                router.pathname === "/articles" && "border-b-2 border-white"
              } hover:text-[#f23540]`}
            >
              Articles
            </Link>
          </div>
        </div>

        <div className="relative top-4">
          <div className="h-16 w-16 relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#4A148C] via-[#7B1FA2] to-[#9C27B0] rounded-full animate-spin"
              style={{ height: "100%", width: "100%" }}
            ></div>
            <Image
              src={logo.src}
              width={300}
              height={300}
              alt="imagen logotipo"
              className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center sm:justify-start mt-4 sm:mt-0">
          <div className="mr-4 sm:mr-10 lg:mr-20 sm:ml-10 lg:ml-20">
            <Link
              href="/aboutus"
              className={`${
                router.pathname === "/aboutus" && "border-b-2 border-white"
              } hover:text-[#f23540]`}
            >
              About us
            </Link>
          </div>

          <div className="mr-4 sm:mr-10 lg:mr-20">
            <Link
              href="/aboutus"
              className={`${
                router.pathname === "/contact" && "border-b-2 border-white"
              } hover:text-[#f23540]`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1b1d20] via-[#f23540] via-[#f58435] to-[#1b1d20] h-1 w-full"></div>
    </header>
  );
}
