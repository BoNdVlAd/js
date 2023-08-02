import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  const { author, content, image, date } = props;
  console.log(author.photo);
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img className={styles.avatar} src={author.photo} />
        <h2 className={styles.fullName}>{author.name}</h2>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.contentText}>{content}</p>
      <div className={styles.blockImg}>
        <img className={styles.contentImage} src={image} />
      </div>

      <div className={styles.icons}></div>
    </div>
  );
};

export default Post;
