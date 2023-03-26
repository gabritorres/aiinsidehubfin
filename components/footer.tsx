import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row sm:h-[340px] justify-between w-full bg-[#1A1A1A]">
        <nav className="text-white no-underline text-2xl uppercase sm:text-5xl sm:m-2 sm:mt-[150px] sm:mr-[120px] flex justify-center sm:justify-end">
          <Link href="/" className="mr-6">
            HOME
          </Link>
          <Link href="/articles" className="mr-6">
            ARTICLES
          </Link>
          <Link href="/aboutus">ABOUT US</Link>
        </nav>
        <p className="text-white text-2xl uppercase mt-[25px] md:mt-[75px] md:mr-[120px] sm:text-5xl sm:m-2 sm:mt-[150px] sm:mr-[120px]">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
