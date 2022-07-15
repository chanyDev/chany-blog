import Email from 'public/assets/email.svg';
import Github from 'public/assets/github.svg';
import Sun from 'public/assets/sun.svg';
import Moon from 'public/assets/moon.svg';
import Menu from 'public/assets/menu.svg';
import Close from 'public/assets/close.svg';
import Arrow from 'public/assets/arrow.svg';

interface IconProps {
  className: string;
  href?: string;
}

export const EmailIcon = ({ className, href }: IconProps) => {
  return (
    <a href={`mailto:${href}`} target="_blank" rel="noreferrer">
      <Email className={className} />
    </a>
  );
};

export const GithubIcon = ({ className, href }: IconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
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
