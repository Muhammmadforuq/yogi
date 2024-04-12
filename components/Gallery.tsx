'use client';

import React from "react";

const images = [
  {
    id:1,
    name:'goldenYoga',
  },
  {
    id:2,
    name:'bwPuppyYoga',
  },
  {
    id:3,
    name:'dogLayingDown',
  },
]

export const Gallery = () =>{
  return (
    <section className="relative bg-brand-yellow">
      <div className="absolute top-0 h-[10%] md:h-1/2 left-0 w-full bg-brand-tan border-b border-brand-darkPurple"></div>
      <div className="relative max-w-8xl mx-auto grid md:grid-cols-3 gap-5 xl:gap-8 px-4 lg:px-10 xl:px-20 pt-5 md:pt-12 lg:pt-24 pb-16 z-10">
      {
        images.map(img =>(
          <div key={img.id} className={`${img.id === 2 ? 'md:-translate-y-16  xl:-translate-y-24' : ''} h-105 xl:h-110 border border-brand-darkPurple overflow-hidden rounded-3xl`}>
            <img className="size-full object-cover" src={`/img/${img.name}.png`} alt={`/img/${img.name}`} />
          </div>
        ))
      }
      </div>
    </section>
  )
}

