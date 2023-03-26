import Image from "next/image";
import logo from "../public/img/blanco.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header>
      <div className="flex flex-col sm:flex-row sm:h-[340px] bg-[#1A1A1A] justify-between">
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
        <nav className="text-white no-underline text-2xl uppercase sm:text-5xl sm:m-2 sm:mt-[150px] sm:mr-[120px] flex justify-center sm:justify-end">
          <Link href="/" className="mr-6">
            HOME
          </Link>
          <Link href="/articles" className="mr-6">
            ARTICLES
          </Link>
          <Link href="/aboutus">ABOUT US</Link>
        </nav>
      </div>
    </header>
  );
}
