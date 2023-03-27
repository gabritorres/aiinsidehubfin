import Image from "next/image";
import logo from "../public/img/blanco.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header>
      <div className="flex flex-col sm:flex-row sm:h-[290px] bg-[#1A1A1A] justify-between">
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <Link href="/">
            <Image
              src={logo.src}
              width={400}
              height={400}
              alt="imagen logotipo"
            />
          </Link>
        </div>
        <nav className="text-white no-underline text-2xl uppercase sm:text-5xl sm:m-2 sm:mt-[150px] sm:mr-[120px] flex justify-center sm:justify-end ">
          <Link
            href="/"
            className={`mr-6 ${
              router.pathname === "/" && "border-b-2 border-white"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/articles"
            className={`mr-6 ${
              router.pathname === "/articles" && "border-b-2 border-white"
            }`}
          >
            ARTICLES
          </Link>
          <Link
            href="/aboutus"
            className={`${
              router.pathname === "/aboutus" && "border-b-2 border-white"
            }`}
          >
            ABOUT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
