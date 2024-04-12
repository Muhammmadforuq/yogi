import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InstaButton from './btn/InstaButton'
import BookButton from './btn/BookButton'

export const Header = () => {
  return (
    <header className='sticky w-full  px-4 md:px-6 lg:px-8 top-5 md:top-8 lg:top-10 z-50'>
      <nav className='max-w-8xl mx-auto flex items-center justify-between border-2 border-brand-darkPurple bg-white rounded-full overflow-hidden p-1.5'>
        <Link className='relative w-40 h-7 md:w-52 md:h-10' href={'/'}>
          <Image className='absolute w-full h-full object-cover' src={'/img/logo.png'} fill alt='logo' />
        </Link>

        <div className='flex items-center gap-2.5'>
          <InstaButton />
          <BookButton />
        </div>
      </nav>
    </header>
  )
}
