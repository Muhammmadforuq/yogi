'use client';
import React from "react";

export const WhatPeopleSay = () =>{
  return (
    <section className="relative bg-brand-yellow">
      <div className="relative max-w-8xl mx-auto px-4 lg:px-10 xl:px-20 pt-16 xl:pt-20 pb-32 xl:pb-40 z-10">
        <h2 className="font-gasoek font-black text-mobileTitle xl:text-6xl/tight text-center">What people say</h2>
        <div className="flex items-center justify-center font-bold text-lg text-center gap-5 mt-8 xl:mt-11">
          <p>Yoga students</p>
          <button type="button" className="w-28 shrink-0 bg-brand-yogiTeal border-2 border-brand-darkPurple shadow-btn rounded-full p-2">
            <span className="flex size-11 bg-white border-2 border-brand-darkPurple rounded-full">
              <svg className="m-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_71_41)">
                <path d="M12.9549 8.27127C13.2666 7.71761 13.5264 7.21801 13.6866 6.83776C14.4648 4.9913 13.6953 2.86739 11.8144 2.00102C9.93355 1.13465 8.04483 2.03299 7.21592 3.76752C5.6308 2.67983 3.51631 2.83957 2.35023 4.53694C1.18415 6.23432 1.55012 8.45177 3.14723 9.66178C3.87208 10.2109 5.30563 11.0202 6.65529 11.7405M13.5813 9.7917C13.2296 7.90174 11.6215 6.51953 9.59669 6.89521C7.57193 7.27089 6.26272 9.09765 6.53645 11.0826C6.75637 12.6773 7.97026 16.419 8.439 17.8284C8.50296 18.0207 8.53494 18.1169 8.59826 18.184C8.65343 18.2424 8.72677 18.2847 8.80494 18.3033C8.89468 18.3246 8.99395 18.3042 9.19249 18.2634C10.6474 17.9647 14.4948 17.1451 15.9858 16.5382C17.8417 15.7828 18.7994 13.7369 18.0821 11.7942C17.3647 9.85164 15.3939 9.15134 13.5813 9.7917Z" stroke="#13062B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_71_41">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </span>
          </button>
          <p>Puppy owners</p>
        </div>
        <div className="grid md:grid-cols-3 text-center gap-6 xl:gap-8 mt-10 xl:mt-16">
        {
          [...Array(3)].map(card =>(
            <div key={card} className="bg-white border-2 border-brand-darkPurple shadow-btn rounded-3xl space-y-7 p-8">
                <p className="font-medium text-brand-paragraphText leading-7">
                  We blend Yoga's mindful practices with the vibrancy of puppies at Yogi Paws, fostering well-being, positive connections, and a joyous environment for both attendees and puppies. 
                </p>
                <img className="inline-block w-16" src="./img/line.svg" alt="line" />
              <h4 className="font-bold text-lg text-brand-darkPurple">Jane Doe</h4>
            </div>  
          ))
    }
        </div>
      </div>
    </section>
  )
}