import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import perfil from '../imagenes/perfil1.1.jpeg'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Acerca de mi">
          <p>Hola, mi nombre es Laura Daniela Chiquillo Leon, tengo 20 años y acutalmente me encuentro estudiando ingenieria de sistemas
            en la universidad El Bosque.
          </p>
          <p></p>
        </ArticleContent>

        <ArticleMedia>
          <img src={perfil} style={{height:"430px"}} />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
