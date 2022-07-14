import { EmailIcon, GithubIcon } from '@components/icons';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 pt-12 pb-8">
      <div className="flex gap-6">
        <GithubIcon
          href="https://github.com/chanyDev"
          className="h-6 text-gray-500 fill-current dark:text-gray-400"
        />
        <EmailIcon
          href="chanyd.dev@gmail.com"
          className="h-6 text-gray-500 fill-current dark:text-gray-400"
        />
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Copyright © 2022 Dongchan Kim
      </div>
    </footer>
  );
};

export default Footer;
