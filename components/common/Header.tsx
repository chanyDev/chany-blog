import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <header className="flex justify-between max-w-3xl py-8 mx-auto xl:max-w-5xl">
        <div>
          <h1 className="text-2xl font-bold">
            <Link href={'/'}>Logo</Link>
          </h1>
        </div>
        <nav className="flex gap-8">
          <Link href={'/'}>Post</Link>
          <Link href={'/'}>Note</Link>
          <Link href={'/'}>About</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
