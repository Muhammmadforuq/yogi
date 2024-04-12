import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section className='max-w-8xl mx-auto px-4 py-14 lg:py-32'>
      <div className='grid md:grid-cols-2 items-center gap-10'>
        <div className=''>
          <Image className='' src={'/img/yogiPawsStudio.png'} width={685} height={653} alt='yogiPawsStudio' />
        </div>
        <div>
          <h2 className='text-brand-darkPurple font-gasoek text-mobileTitle lg:text-title mb-6'>
            About us
          </h2>
          <p className='text-brand-darkPurple text-xl font-bold mb-4'>
          At Yogi Paws, our aim is to create a memorable and unique experience that brings a smile to people’s faces.
          </p>
          <p className='md:text-lg font-medium text-brand-paragraphText'>
            We blend Yoga's mindful practices with the vibrancy of puppies at Yogi Paws, fostering well-being, positive connections, and a joyous environment for both attendees and puppies. Inspired by our love for puppies and Yoga's benefits, we created a unique experience. Join us to relax, stretch, and bond with adorable puppies, in a community filled with laughter, wagging tails, and new friendships.
          </p>
        </div>
      </div>
    </section>
  )
}
