'use client';
import React from 'react';
import Image from 'next/image';
import Carousel from './Carousel';
import { Button, Popover } from 'flowbite-react';
import Link from 'next/link';

export function PopoverElement({ content, trigger = 'click', children }: PopoverElementProps) {
  const contentElement = (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <>{content}</>
      </div>
    </div>
  );

  return (
    <Popover content={contentElement} trigger={trigger}>
      {children}
    </Popover>
  );
}

const PortfolioCard = ({ project }: { project: Project }) => {
  const CardImage = () => {
    if (project.images) {
      return <Carousel images={project.images} />;
    } else {
      return (
        <Image
          src={project.image}
          alt={project.altText}
          width={500}
          height={220}
          className="w-full object-cover h-[220px]"
          priority
        />
      );
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between content-evenly flex-col portfolio_card animate fade__bottom">
      {/* <PopoverElement content={project.title} trigger="hover"> */}
      <div className="w-full px-2 py-2 text-center  flex justify-between items-center rounded-t-lg">
        <Image src={project.logo} alt={project.logoAltText} width={120} height={120} />
        <h3 className="text-white">{project.title}</h3>
      </div>
      <CardImage />

      <div className="my-0 py-0">
        <p className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-2 mt-0 rounded-sm w-full mb-0 d-block">
          Project technology
        </p>
        <div className="grid grid-flow-col auto-cols-max gap-3 p-5">
          {project.technologies.map((tech, i) => (
            <PopoverElement key={i} content={tech} trigger="hover">
              <Image
                src={`/images/${tech.toLowerCase()}.svg`}
                alt={`${tech} logo`}
                width={50}
                height={50}
                className="rounded max-h-8 h-16 w-auto "
              />
            </PopoverElement>
          ))}
        </div>
      </div>

      {project.links ? (
        <div className="p-3 flex justify-between items-center bg-slate-900 rounded-b-lg">
          {project.links.length > 1 ? (
            <Button.Group className="mx-auto gap-3" outline>
              {project.links.map((link, index) => (
                <PortfolioButton key={index} url={link.url} label={link.label} />
              ))}
            </Button.Group>
          ) : (
            <PortfolioButton
              url={project.links[0].url}
              label={project.links[0].label}
              className="m-auto w-auto"
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const PortfolioButton = ({ url, label, className }: PrettyButonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${className}`}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </a>
  );
};

export default PortfolioCard;
