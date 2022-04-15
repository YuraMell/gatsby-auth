import React from 'react'
import * as styles from '../styles/PostCard.module.css'
import CustomLink from './UI/CustomLink'

const PostCard = ({ path, category, title, content, author }) => {

  return (
    <div className={styles.card}>
      <strong>{title}</strong>
      <i>{category}</i>
      <p>{content}</p>
      <span>{author}</span>
      <CustomLink value='Read more' to={path} />
    </div>
  )
}

export default PostCard