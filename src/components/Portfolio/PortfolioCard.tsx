'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from './Carousel';
import { Button, Popover } from 'flowbite-react';
import VideoModal from './VideoModal';

export function PopoverElement({ content, trigger = 'click', children }: PopoverElementProps) {
  return (
    <Popover
      content={<div className="text-sm text-gray-500 dark:text-gray-400 px-3 py-2">{content}</div>}
      trigger={trigger}>
      {children}
    </Popover>
  );
}

const PortfolioCard = ({ project }: { project: Project }) => {
  const [openModal, setOpenModal] = useState(false);

  const buttonTrigger = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOpenModal(true);
  };

  // Extracted media rendering logic
  const ProjectMedia = () => {
    return project.images ? (
      <Carousel images={project.images} />
    ) : (
      <Image
        src={project.image}
        alt={project.altText}
        width={500}
        height={220}
        className="w-full object-cover h-[220px]"
        priority
      />
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between portfolio_card animate fade__bottom">
      <div className="w-full px-2 py-2 text-center flex justify-between items-center rounded-t-lg">
        <Image
          src={project.logo}
          alt={project.logoAltText}
          width={120}
          height={120}
          className="h-12 w-auto"
        />
        <h3 className="text-white">{project.title}</h3>
      </div>

      <ProjectMedia />

      <div className="my-0 py-0">
        <p className="bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-sm w-full">
          Project Technology
        </p>
        <div className="grid grid-flow-col auto-cols-max gap-3 p-5">
          {project.technologies.map((tech, i) => (
            <PopoverElement key={i} content={tech} trigger="hover">
              <Image
                src={`/images/${tech.toLowerCase()}.svg`}
                alt={`${tech} logo`}
                width={50}
                height={50}
                className="rounded max-h-8 h-16 w-auto"
              />
            </PopoverElement>
          ))}
        </div>
      </div>

      {((project.links?.length ?? 0) > 0 || project.video) && (
        <div className="p-3 flex justify-between items-center bg-slate-900 rounded-b-lg">
          <Button.Group className="mx-auto gap-3 w-full" outline>
            {project.video && project.videoBtn && (
              <VideoModal
                video={project.video}
                videoBtn={project.videoBtn}
                openModal={openModal}
                setOpenModal={setOpenModal}
                buttonTrigger={buttonTrigger}
              />
            )}
            {project.links && project.links.length > 0 && (
              <>
                {project.links.map((link, index) => (
                  <PortfolioButton key={index} url={link.url} label={link.label} />
                ))}
              </>
            )}
          </Button.Group>
        </div>
      )}
    </div>
  );
};

const PortfolioButton = ({ url, label, className }: PrettyButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full h-full relative inline-flex items-center justify-center p-0.5 mb-2 mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${className}`}>
      <span className="w-full h-full text-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </a>
  );
};

export default PortfolioCard;
