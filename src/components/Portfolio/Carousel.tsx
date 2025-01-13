'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Modal, Carousel as FlowbiteCarousel } from 'flowbite-react';

const Carousel = ({ images }: CarouselProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="dark portfolio_carousel">
      <div
        className="relative w-full overflow-hidden  h-[220px]"
        onClick={() => setOpenModal(true)}>
        {images.map((image, index) => (
          <FlowbiteCarousel className="h-[220px]" pauseOnHover>
            {images.map((image, index) => {
              console.log(image.src);
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={220}
                  className="cursor-pointer object-cover h-[220px]"
                  priority
                />
              );
            })}
          </FlowbiteCarousel>
        ))}
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="dark portfolio_modal_carousel">
        <Modal.Header />
        <Modal.Body className="dark portfolio_carousel">
          <FlowbiteCarousel className="h-96 " pauseOnHover>
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="cursor-pointer object-contain h-96"
                  priority
                />
              );
            })}
          </FlowbiteCarousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Carousel;
