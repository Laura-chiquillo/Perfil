import React from 'react'
import proyecto from '../imagenes/proyectos.jpg'
import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Add your FAQ content here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src={proyecto} style={{height:"300px", width:"600px"}} />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
