'use client';

import React from "react";
const faqs = [
  {
    id:1,
    name:'Where do the puppies come from?',
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui, ipsum voluptates aliquam dolorum est architecto recusandae omnis soluta sequi! Culpa eaque natus fugiat nesciunt voluptatum maiores perspiciatis alias sint.",
  },

  {
    id:2,
    name:'Where do the puppies come from?',
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur perferendis aperiam consectetur magnam inventore sint.",
  },
  {
    id:3,
    name:'Where do the puppies come from?',
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, quia, officia minima sequi eveniet, quae dolorum exercitationem quo impedit accusamus provident omnis eos. Exercitationem doloremque eius culpa odio ipsum?",
  },
]



export const Faqs = ()=> {
  return (
    <section className="bg-brand-tan">
      <div className="max-w-4xl mx-auto font-gasoek px-4 lg:px-7 pt-24 pb-20 xl:py-40"> 
        <h2 className="font-black text-mobileTitle xl:text-6xl/tight text-center">FAQs</h2>
        <div className="space-y-4 mt-5 xl:mt-7">
          {faqs.map(faq =>(
            <div key={faq.id}>
              <button type="button" className="w-full flex items-center justify-between text-start shadow-btn border-2 border-brand-darkPurple rounded-3xl gap-6 pt-2 pr-3 pb-2.5 pl-6 "> 
                  <span className="font-black text-lg/6"> {faq.name} </span>
                  <span className="size-14 flex shrink-0 bg-brand-yogiPurple border-2 border-brand-darkPurple rounded-full">
                  <svg className="m-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" width="4" height="28" rx="2" fill="#13062B"/>
                      <rect y="15" width="4" height="28" rx="2" transform="rotate(-90 0 15)" fill="#13062B"/>
                      </svg>
                  </span>
              </button>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}