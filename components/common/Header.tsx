import Link from 'next/link';

import { CloseIcon, MenuIcon } from '@components/icons';
import useVisible from '@hooks/useVisible';
import ThemeSwitch from './ThemeSwitch';
import DropDown from './DropDown';

const Header = () => {
  const { visible, handleToggleDropDown } = useVisible();

  return (
    <div className="z-20 w-full">
      <header className="flex items-center justify-between max-w-3xl py-8 mx-auto xl:max-w-5xl">
        <div>
          <Link href={'/'}>
            <a className="underlined">
              <h1 className="text-2xl font-medium cursor-pointer">
                Chany D. Dev
              </h1>
            </a>
          </Link>
        </div>
        <nav className="flex items-center text-lg">
          <ul className="hidden gap-4 md:flex">
            <li className="px-4 py-2 font-medium">
              <Link href={'/posts'}>
                <a className="underlined">Posts</a>
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link href={'/about'}>
                <a className="underlined">About</a>
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link href={'/tags'}>
                <a className="underlined">Tags</a>
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 ml-8">
            <ThemeSwitch />
            <button
              onClick={handleToggleDropDown}
              className="p-3 transition border-2 border-gray-200 hover:border-black dark:border-gray-600 dark:hover:border-white md:hidden rounded-3xl modal"
            >
              {visible ? (
                <CloseIcon className="w-5 h-5 text-black transition fill-current dark:text-white animate-fadeIn" />
              ) : (
                <MenuIcon className="w-5 h-5 text-black transition fill-current dark:text-white animate-fadeIn" />
              )}
            </button>
          </div>
        </nav>
      </header>
      <DropDown visible={visible} handleToggleDropDown={handleToggleDropDown} />
    </div>
  );
};

export default Header;
