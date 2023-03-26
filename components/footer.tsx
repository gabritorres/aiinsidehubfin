import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex w-full h-[200px] bg-[#1A1A1A] justify-between">
        <nav className="text-white no-underline text-5xl uppercase ml-[120px] mt-[75px]">
          <Link href="/" className="mr-12">
            Home
          </Link>

          <Link href="/articles" className="mr-12">
            Articles
          </Link>

          <Link href="/nosotros">ABOUT US</Link>
        </nav>
        <p className="text-white no-underline text-5xl uppercase mr-[120px] mt-[75px]">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
