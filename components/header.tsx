import Image from "next/image";
import logo from "../public/img/blanco.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header className="flex-row items-center bg-[#1A1A1A] py-4 flex justify-between w-full ">
      <div className="px-4">
        <Link href="/">
          <div className="hover:transform hover:rotate-180 transition duration-500 ease-in-out">
            <Image
              src={logo.src}
              width={160}
              height={160}
              alt="imagen logotipo"
            />
          </div>
        </Link>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <nav className="text-white text-lg sm:text-2xl uppercase mr-[60px]">
          <ul className="flex">
            <li className="mr-4">
              <Link
                href="/"
                className={`${
                  router.pathname === "/" && "border-b-2 border-white"
                }`}
              >
                HOME
              </Link>
            </li>
            <li className="mr-4">
              <Link
                href="/articles"
                className={`${
                  router.pathname === "/articles" && "border-b-2 border-white"
                }`}
              >
                ARTICLES
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={`${
                  router.pathname === "/aboutus" && "border-b-2 border-white"
                }`}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
