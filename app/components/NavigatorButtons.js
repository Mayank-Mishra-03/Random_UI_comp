"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const allPages = ["/", "/c1", "/c2", "/c3", "/c4", "/c5", "/c6"];

const NavigationButtons = () => {
  const pathname = usePathname();
  const currentIndex = allPages.indexOf(pathname);

  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-16 z-50">
      {prevPage ? (
        <Link
          href={prevPage}
          passHref
        >
          <button className="p-3 bg-white rounded-full font-medium hover:-translate-x-1 transition-all duration-200 cursor-pointer">
            <ArrowLeftCircle />
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="p-3 bg-white rounded-full font-medium"
        >
          <ArrowLeftCircle className="text-neutral-500" />
        </button>
      )}

      {nextPage ? (
        <Link
          href={nextPage}
          passHref
        >
          <button className="p-3 bg-white rounded-full font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer">
            <ArrowRightCircle />
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="p-3 bg-white rounded-full font-medium"
        >
          <ArrowRightCircle className="text-neutral-500" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
