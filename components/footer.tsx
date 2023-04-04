import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex flex-col sm:flex-row bg-[#1b1d20] h-auto sm:h-12 py-4 px-6 relative font-grotesk text-white">
      <div className="flex-1 flex items-center justify-center sm:justify-start">
        <nav className="flex space-x-4">
          <Link
            href="/"
            className={`${
              router.pathname === "/" && "border-b-2 border-white"
            } hover:text-[#f23540]`}
          >
            Home
          </Link>
          <Link
            href="/articles"
            className={`${
              router.pathname === "/articles" && "border-b-2 border-white"
            } hover:text-[#f23540]`}
          >
            Articles
          </Link>
          <Link
            href="/aboutus"
            className={`${
              router.pathname === "/aboutus" && "border-b-2 border-white"
            } hover:text-[#f23540]`}
          >
            About us
          </Link>
          <Link
            href="/aboutus"
            className={`${
              router.pathname === "/contact" && "border-b-2 border-white"
            } hover:text-[#f23540]`}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <p className="text-white text-lg md:text-2xl uppercase">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
