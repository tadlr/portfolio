type Project = {
  images?: { src: string; alt: string }[];
  image: string;
  altText: string;
  logo: string;
  logoAltText: string;
  title: string;
  technologies: string[];
  links?: { url: string; label: string; icon: string }[];
};

interface PopoverElementProps {
  content: React.ReactNode | string;
  trigger: 'hover' | 'click';
  children: React.ReactNode;
}

type PrettyButonProps = {
  label: string;
  url: string;
  className?: string;
};
