'use client';
import React from "react";

export const ContactUs = () =>{
  return (
    <section className="relative bg-brand-yogiPurple border-y-2 border-brand-darkPurple py-14 xl:py-32 px-4">
      <form className="relative max-w-2xl mx-auto font-bold text-brand-darkPurple bg-white border-2 border-brand-darkPurple shadow-btn rounded-3xl space-y-6 p-8 xl:p-16 z-10">
          <h2 className="font-gasoek font-black text-mobileTitle xl:text-6xl/tight text-center">Contact Us</h2>
          {/* name */}
          <input type="text" className="w-full border-2 border-brand-darkPurple rounded-xl placeholder:text-brand-darkPurple focus:outline-none py-3 px-4" placeholder="Name" /> 
          {/* email */}
          <input type="email" className="w-full border-2 border-brand-darkPurple rounded-xl placeholder:text-brand-darkPurple focus:outline-none py-3 px-4" placeholder="Email" /> 
          {/* Type your message here */}
          <textarea className="w-full h-36 resize-none border-2 border-brand-darkPurple rounded-xl placeholder:text-brand-darkPurple focus:outline-none py-3 px-4" 
          placeholder="Type your message here"></textarea> 
          <button type="submit" className="w-full font-gasoek font-black text-xl text-brand-darkPurple hover:text-white bg-brand-yogiPurple border-2 border-brand-darkPurple shadow-btn rounded-full transition-colors uppercase p-4">send</button>
      </form>
      {/* background image */}
      <div className="absolute left-0 w-full top-0 h-full z-0">
        <img className="size-full object-cover" src="./img/dog.png" alt="dog" />
      </div>
    </section>
  )
}
