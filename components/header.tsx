import Image from "next/image";
import logo from "../public/img/blanco.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header>
      <div className="flex w-full h-[340px] bg-[#1A1A1A] justify-between">
        <Link href="/">
          <Image
            src={logo.src}
            width={400}
            height={400}
            alt="imagen logotipo"
          />
        </Link>
        <nav className="text-white no-underline text-5xl uppercase m-2 mt-[150px] mr-[120px]">
          <Link href="/" className="mr-12">
            HOME
          </Link>

          <Link href="/articles" className="mr-12">
            Articles
          </Link>

          <Link href="/aboutus">ABOUT US</Link>
        </nav>
      </div>
    </header>
  );
}
