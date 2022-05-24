import React from 'react'
 
import { BackgroundGradient } from './background-gradient'
import { Header } from './header'
import { Footer } from './footer'
import { Article, ArticleTitle } from './article'


export default function ProyectsLayout({children, title}) {
  return (
    <div className="relative flex flex-col min-h-screen mx-auto my-0 overflow-hidden bg-white shadow-2xl max-w-screen-2xl">
      
      <div>{children}</div>
      <BackgroundGradient className="absolute top-0 bottom-0 hidden w-1/2 left-1/2 ml-28 lg:block" />

			<p className="absolute hidden text-5xl font-bold text-center text-white right-10 lg:top-1/2 lg:block">{title}</p>
      <div className="absolute bottom-0 left-0 right-0">
					
					<p className="absolute left-0 right-0 mx-auto text-4xl font-bold text-center text-white top-3 lg:hidden">{title}</p>
          
						<Footer />
      </div>
    </div>
  )
}
