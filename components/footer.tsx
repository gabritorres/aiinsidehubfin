import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-[#1A1A1A] py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <nav className="text-white text-lg md:text-2xl uppercase mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row md:justify-center">
            <li className="mr-4 md:mr-6">
              <Link
                href="/"
                className={`${
                  router.pathname === "/" && "border-b-2 border-white"
                }`}
              >
                HOME
              </Link>
            </li>
            <li className="mr-4 md:mr-6">
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
        <p className="text-white text-lg md:text-2xl uppercase mt-4 md:mt-0">
          ALL RIGHTS RESERVED {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
