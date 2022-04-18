import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CustomLink from '../components/UI/CustomLink';

import * as styles from '../styles/blog.module.css'

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, category } = frontmatter

  return (
    <Layout>
      <Seo title='Single post' />
      <div className="blog-post-container">
        <div className={styles.blog_post}>
          <h1 className={styles.title}>{title}</h1>
          <i>{date}</i>
          <h3>{category}</h3>
          <div
            className={styles.blog_post__content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <CustomLink value='Go back to the blog' to='/blog' />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        author
      }
    }
  }
`;
