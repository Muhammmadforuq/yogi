'use client'
import { Tab } from '@headlessui/react'
import React from 'react'

export const Ethics = () => {
  return (
    <section className='bg-brand-yogiPurple pt-28 border-t-2 border-brand-darkPurple'>
      <div className='max-w-8xl mx-auto px-4 text-center'>
        <h2 className='text-brand-darkPurple font-gasoek text-mobileTitle lg:text-title mb-5'>
          Ethics
        </h2>
        <p className='max-w-[616px] mx-auto text-brand-darkPurple text-xl font-bold mb-4'>
          At Yogi Paws, our aim is to create a memorable and unique experience that brings a smile to people’s faces.
        </p>

        <Tab.Group>
          <div className='max-w-6xl mx-auto justify-center px-8'>
            <Tab.List className="flex items-center gap-5 border border-brand-darkPurple px-2.5 py-2 rounded-full">
              <Tab>Tab 1</Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
