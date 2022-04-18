import React, { useState } from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from '../components/PostCard'
import * as styles from '../styles/blog.module.css'
import { DOMParser } from 'xmldom'
import Select from '../components/UI/Select'

const isBrowser = typeof window !== "undefined"

const BlogPage = ({ data }) => {
  const [selectCategory, setSelectCategory] = useState('')
  const { nodes } = data.allMarkdownRemark

  const parceContentSlice = html => {
    const htmlDoc = new DOMParser().parseFromString(html, 'text/html');
    const postContent = htmlDoc.firstChild.firstChild.data
    const contentSlice = postContent.slice(0, 100)
    return `${contentSlice}...`
  }

  const categories = [...new Set(nodes.map(node => node.frontmatter.category))]

  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Hi from the Blog page</h1>
      <Select
        name='blog_select'
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
        optionValue='Select category'
        options={categories}
      />

      <div className={styles.post_grid}>
        {(categories.includes(selectCategory) ? nodes.filter((node) => node.frontmatter.category === selectCategory) : nodes)
          .map((node, index) => {
            const { path, title, category, date } = node.frontmatter
            const { html } = node
            const content = parceContentSlice(html)
            const postPath = isBrowser ? window.location.origin + path : ''
            return <PostCard
              key={index}
              path={postPath}
              category={category}
              title={title}
              content={content}
              date={date}
              author='aaaaa'
            />
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
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`