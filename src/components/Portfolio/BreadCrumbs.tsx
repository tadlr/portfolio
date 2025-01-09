import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export function BreadCrumbs() {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="bg-gray-50 px-5 py-3 dark:bg-gray-800 ">
      <BreadcrumbItem href="/" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>Some of my work</BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
