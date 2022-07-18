import { ArrowIcon } from '@components/icons';
import Link from 'next/link';

interface PagenationProps {
  pagenation: {
    currentPage: number;
    totalPages: number;
  };
}

const Pagenation = ({ pagenation }: PagenationProps) => {
  const prevPage =
    pagenation.currentPage > 1 ? pagenation.currentPage - 1 : null;
  const nextPage =
    pagenation.currentPage < pagenation.totalPages
      ? pagenation.currentPage + 1
      : null;

  return (
    <div className="flex justify-between py-6">
      <div>
        {prevPage && (
          <Link href={prevPage === 1 ? '/posts' : `/posts/page/${prevPage}`}>
            <a className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
              <ArrowIcon className="w-3 h-3 mr-2 rotate-180 fill-current" />
              Page {prevPage}
            </a>
          </Link>
        )}
      </div>
      <div>
        {nextPage && (
          <Link href={`/posts/page/${nextPage}`}>
            <a className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
              Page {nextPage}
              <ArrowIcon className="w-3 h-3 ml-2 fill-current" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagenation;
