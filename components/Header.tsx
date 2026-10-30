import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Andrew Parry
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
