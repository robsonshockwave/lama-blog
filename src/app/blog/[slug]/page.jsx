import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/post.png'} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}></h1>
        <div className={styles.detail}>
          <Image
            src={'/post.png'}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailText}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailText}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sit
          aspernatur iste quibusdam quia soluta repudiandae iusto provident
          explicabo labore! Perferendis, ea? Perferendis facere a, officia
          impedit est illum dolores?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
