import React from 'react'
import * as styles from '../styles/PostCard.module.css'
import CustomLink from './UI/CustomLink'

const isBrowser = typeof window !== "undefined"

const PostCard = ({ path, category, title, content, author }) => {
  const postPath = isBrowser ? window.location.href : ''

  return (
    <div className={styles.card}>
      <strong>{title}</strong>
      <i>{category}</i>
      <p>{content}</p>
      <span>{author}</span>
      <CustomLink value='Read more' to={`${postPath}${path}`} />
    </div>
  )
}

export default PostCard