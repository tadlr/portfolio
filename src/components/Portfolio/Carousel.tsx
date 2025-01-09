'use client';
import { useState } from 'react';
import Image from 'next/image';

import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Function to open the modal
  const openModal = (index: number) => {
    setCurrentSlide(index);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Thumbnail Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-md h-52">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            onClick={() => openModal(index)}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-pointer object-cover"
              priority
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 w-10 h-10"
          onClick={prevSlide}
          aria-label="Previous Slide">
          ❮
        </button>

        {/* Next Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 w-10 h-10"
          onClick={nextSlide}
          aria-label="Next Slide">
          ❯
        </button>
      </div>

      {/* Full-Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-4/6 px-10">
            {/* Modal Carousel */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ${
                  index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            ))}

            {/* Previous Button in Modal */}
            <button
              className="m-5 absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-gray-200 w-10 h-10"
              onClick={prevSlide}
              aria-label="Previous Slide">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Next Button in Modal */}
            <button
              className="m-5 absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-gray-200 w-10 h-10"
              onClick={nextSlide}
              aria-label="Next Slide">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            {/* Close Button in Modal */}
            <button
              className="absolute top-4 right-4 bg-indigo-600 text-white  p-2 rounded-full hover:bg-gray-200 visited:text-white w-10 h-10"
              onClick={closeModal}
              aria-label="Close Modal">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
