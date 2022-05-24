import React from 'react'

import { NavLinks } from './nav-links'
import { SocialLinks } from './social-links'

export function Footer() {
  return (
    <footer className="pt-8 text-sm leading-5 tracking-normal text-white bg-primary-400 lg:bg-transparent lg:text-gray-400">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-wrap py-10 lg:justify-between">
          <NavLinks className="inline-flex justify-center flex-none w-full mb-6 lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" />
          <SocialLinks className="inline-flex justify-center flex-none w-full mb-6 lg:flex lg:justify-end" />
          <div className="inline-flex justify-center flex-none w-full mb-6 lg:w-1/2 lg:justify-start">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
