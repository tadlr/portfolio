import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BreadCrumbs = () => {
  return (
    <section className="py-2 bg-blue-50">
      <div className="container mx-auto px-20">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faChevronRight} className="font-medium text-sm" />
                <span className="ms-1 text-sm font-medium text-black-500 md:ms-2 ">
                  Some of my work
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumbs;
