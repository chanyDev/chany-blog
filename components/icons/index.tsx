import Email from 'public/assets/icons/email.svg';
import Github from 'public/assets/icons/github.svg';
import Sun from 'public/assets/icons/sun.svg';
import Moon from 'public/assets/icons/moon.svg';
import Menu from 'public/assets/icons/menu.svg';
import Close from 'public/assets/icons/close.svg';
import Arrow from 'public/assets/icons/arrow.svg';
import Search from 'public/assets/icons/search.svg';

interface IconProps {
  className: string;
  href?: string;
}

export const EmailIcon = ({ className, href }: IconProps) => {
  return (
    <a href={`mailto:${href}`} target="_blank" rel="noreferrer">
      <span className="sr-only">Email Icon</span>
      <Email className={className} />
    </a>
  );
};

export const GithubIcon = ({ className, href }: IconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="sr-only">Github Icon</span>
      <Github className={className} />
    </a>
  );
};

export const SunIcon = ({ className }: IconProps) => {
  return <Sun className={className} />;
};

export const MoonIcon = ({ className }: IconProps) => {
  return <Moon className={className} />;
};

export const MenuIcon = ({ className }: IconProps) => {
  return <Menu className={className} />;
};

export const CloseIcon = ({ className }: IconProps) => {
  return <Close className={className} />;
};

export const ArrowIcon = ({ className }: IconProps) => {
  return <Arrow className={className} />;
};

export const SearchIcon = ({ className }: IconProps) => {
  return <Search className={className} />;
};
