import React from 'react';
import { Modal, Carousel as FlowbiteCarousel } from 'flowbite-react';

const VideoModal = ({
  video,
  videoBtn,
  openModal,
  setOpenModal,
  buttonTrigger,
}: {
  video: string;
  videoBtn: string;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  buttonTrigger: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) => {
  return (
    // <div className="dark portfolio_carousel w-full">
    <>
      <a
        href="#"
        onClick={(e) => buttonTrigger(e)}
        rel="noopener noreferrer"
        className={`w-full relative inline-flex items-center justify-center p-0.5 mb-2 mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800`}>
        <span className="w-full text-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {videoBtn}
        </span>
      </a>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="dark portfolio_modal_carousel">
        <Modal.Header />
        <Modal.Body className="dark portfolio_carousel">
          <FlowbiteCarousel className="h-[70vh] " pauseOnHover>
            <iframe
              width="560"
              height="100%"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </FlowbiteCarousel>
        </Modal.Body>
      </Modal>
    </>
    // </div>
  );
};

export default VideoModal;
