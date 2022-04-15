import * as React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from '../components/PostCard'
import * as styles from '../styles/blog.module.css'
import { DOMParser } from 'xmldom'

const isBrowser = typeof window !== "undefined"

const BlogPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  const parceContentSlice = html => {
    const htmlDoc = new DOMParser().parseFromString(html, 'text/html');
    const postContent = htmlDoc.firstChild.firstChild.data
    const contentSlice = postContent.slice(0, 100)
    return `${contentSlice}...`
  }

  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Hi from the Blog page</h1>
      <div className={styles.post_grid}>
        {nodes.map((node, index) => {
          const { path, title, } = node.frontmatter
          const { html } = node
          const content = parceContentSlice(html)
          const postPath = isBrowser ? window.location.href + path : ''
          return <PostCard key={index} path={postPath} category='vvvvv' title={title} content={content} author='aaaaa' />
        }
        )}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
query PostsQuery {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        path
        title
      }
    }
  }
}
`