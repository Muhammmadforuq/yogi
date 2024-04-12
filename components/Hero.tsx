import React from 'react'
import { Header } from './Header'
import Image from 'next/image'
import BookButton from './btn/BookButton'

export const Hero = () => {
  return (
    <section className='bg-brand-yogiTeal relative -top-[82px]'>
      <div className='flex items-center justify-center md:pt-10'>
        <Image className='md:absolute md:w-1/2 2xl:w-2/5 z-40 md:top-1/2 md:-translate-y-1/2 -right-0' width={869} height={900} src={'/img/yogaDogBed.png'} alt='dog' />
      </div>
      <div className='max-w-8xl mx-auto grid md:grid-cols-2 md:pt-36 pt-5'>
        <div className='flex flex-col items-center justify-center gap-7'>
          <Image src={'/img/yogiPawsLogo.png'} width={148} height={168} alt=''/>
          <h1 className='font-gasoek text-white text-mobileTitle md:text-title font-extrabold text-center'>
          Puppy yoga is in Brighton!
          </h1>
          <BookButton />
        </div>
      </div>

      <div className='relative w-full h-9 md:h-16 lg:h-[130px] -bottom-8 md:-bottom-16 lg:-bottom-[165px]'>
        <Image className='absolute w-full bottom-0' src={'/arrows/swoopShape.png'} fill alt='bottom' />
      </div>
      <div className='hidden md:block relative w-full lg:h-[83px] -bottom-20'>
        <Image className='absolute w-full bottom-0' src={'/arrows/swoopline.png'} fill alt='bottom' />
      </div>
    </section>
  )
}
