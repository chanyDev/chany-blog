import Link from 'next/link';

import { useEffect, useState } from 'react';

import Portal from './Portal';

interface DropDownProps {
  visible: boolean;
  handleToggleDropDown: () => void;
}

const DropDown = ({ visible, handleToggleDropDown }: DropDownProps) => {
  const [rootEl, setRootEl] = useState<Element | null>(null);

  useEffect(() => {
    const root = document.getElementById('portal');
    setRootEl(root);
  }, []);

  return (
    <Portal root={rootEl}>
      <div
        onClick={handleToggleDropDown}
        className={`fixed inset-0 w-full h-screen origin-[0_10%] transition duration-300 bg-white dark:bg-gray-900 pt-[112px] md:hidden ${
          visible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } `}
      >
        <ul className="flex flex-col">
          <li>
            <Link href={'/posts'}>
              <a className="flex px-4 py-8 text-black transition border-t dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-600">
                Posts
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <a className="flex px-4 py-8 text-black transition border-t dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-600">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/tags'}>
              <a className="flex px-4 py-8 text-black transition border-t dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-600">
                Tags
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Portal>
  );
};

export default DropDown;
