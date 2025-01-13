type Project = {
  images?: { src: string; alt: string }[];
  image: string;
  altText: string;
  logo: string;
  logoAltText: string;
  title: string;
  video?: string;
  videoBtn?: string;
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

interface CarouselProps {
  images: { src: string; alt: string }[];
}

interface PopoverElementProps {
  content: string | React.ReactNode;
  trigger?: 'click' | 'hover';
  children: React.ReactNode;
}

interface PrettyButtonProps {
  url: string;
  label: string;
  className?: string;
}
