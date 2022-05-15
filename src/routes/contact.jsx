import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import perfil from '../imagenes/contactos.jpg'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="">
          <p>Contactame 7w7</p>
        </ArticleContent>

        <ArticleMedia>
          <img src={perfil} style={{height:"300px", width:"500px"}} />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
