import Image from "next/image";
import logo from "../public/img/logoFinal.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header className="flex justify-between items-center bg-[#1b1d20] h-12 py-4 px-6 relative font-grotesk text-white">
      <div className="flex-1 flex justify-end">
        <div className="mr-[70px]">
          <Link
            href="/"
            className={`${
              router.pathname === "/" && "border-b-2 border-white"
            } hover:text-[#f23540]`}
          >
            Home
          </Link>
        </div>
        <div className="mr-[70px]">
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
        <div className="rounded-full h-16 w-16 flex justify-center items-center">
          <Link href="/">
            <Image
              src={logo.src}
              width={300}
              height={300}
              alt="imagen logotipo"
              className="z-10"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 flex ">
        <div className="mr-[70px] ml-[70px]">
          <Link
            href="/aboutus"
            className={`${
              router.pathname === "/aboutus" &&
              "border-b-2 border-white mr-[50px]"
            } hover:text-[#f23540]`}
          >
            About us
          </Link>
        </div>

        <div className="mr-[50px]">
          <Link
            href="/aboutus"
            className={`${
              router.pathname === "/contact" &&
              "border-b-2 border-white mr-[50px]"
            } hover:text-[#f23540]`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
