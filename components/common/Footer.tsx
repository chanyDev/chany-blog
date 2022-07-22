import { EmailIcon, GithubIcon } from '@components/icons';
import metadata from 'config/metadata';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 pt-12 pb-8">
      <div className="flex gap-6">
        <GithubIcon
          href={metadata.contacts.github}
          className="h-6 text-gray-500 transition fill-current dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        />
        <EmailIcon
          href={metadata.contacts.email}
          className="h-6 text-gray-500 transition fill-current dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        />
      </div>
      <div className="text-gray-500 text-md dark:text-gray-400">
        {metadata.copyright}
      </div>
    </footer>
  );
};

export default Footer;
