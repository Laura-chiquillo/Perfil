import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import perfil from '../imagenes/perfil2.jpeg'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Acerca de mi">
          <p>Hola, mi nombre es Laura Daniela Chiquillo Leon, tengo 20 años y 
            actualmente me encuentro estudiando ingeniería de sistemas en la universidad El Bosque.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src={perfil} style={{height:"330px"}} />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
