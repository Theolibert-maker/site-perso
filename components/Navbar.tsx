import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200">
      <ul className="mx-auto flex max-w-3xl flex-col gap-2 p-4 sm:flex-row sm:gap-6">
        <li>
          <Link href="/" className="font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cv" className="hover:underline">
            CV
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}