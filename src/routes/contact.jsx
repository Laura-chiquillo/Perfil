import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import perfil from '../imagenes/contactos.jpg'

export default function Contactpage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Me pudes contactar por estos medios">
          <div className="flex h-10 gap-x-2">

            <svg className="grid self-center w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
            </svg>
            <p className="grid self-center">Correo institucional: lchiquillo@unbosque.edu.co </p>
          </div>
          <div className="flex h-10 gap-x-2"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="grid self-center w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          <p className="grid self-center">Correo personal: lauradchiquillol@gmail.com</p>
          </div>
          <div className="flex h-10 gap-x-2"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="grid self-center w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <p className="grid self-center">WhatsApp: 3222862351</p>
          </div>
        </ArticleContent>

        <ArticleMedia>
          <img src={perfil} style={{ height: "250px", width: "450px" }} />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
