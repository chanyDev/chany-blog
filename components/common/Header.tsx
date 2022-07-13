import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <header className="flex items-center justify-between max-w-3xl py-8 mx-auto xl:max-w-5xl">
        <div>
          <h1 className="text-2xl font-bold cursor-pointer">
            <Link href={'/'}>Logo</Link>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li className="font-medium hover:text-teal-500">
              <Link href={'/'}>Post</Link>
            </li>
            <li className="font-medium hover:text-teal-500">
              <Link href={'/'}>Note</Link>
            </li>
            <li className="font-medium hover:text-teal-500">
              <Link href={'/'}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
