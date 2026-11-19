"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  const linkStyle = "px-4 py-2 border border-gray-300 rounded-lg";
  const disabledStyle = `${linkStyle} text-gray-400 cursor-not-allowed`;

  return (
    <nav className="flex items-center gap-4 mt-8" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className={`${linkStyle} hover:bg-gray-100`}>
          Previous
        </Link>
      ) : (
        <span className={disabledStyle}>Previous</span>
      )}
      <span className="text-gray-700">
        Page {currentPage} of {Math.max(totalPages, 1)}
      </span>
      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className={`${linkStyle} hover:bg-gray-100`}>
          Next
        </Link>
      ) : (
        <span className={disabledStyle}>Next</span>
      )}
    </nav>
  );
}
