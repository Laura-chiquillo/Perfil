import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'
import About from './routes/about'
import Contact from './routes/contact'
import Faqs from './routes/faqs'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="sobremi" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="proyectos" element={<Faqs />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
