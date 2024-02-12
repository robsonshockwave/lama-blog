import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) throw new Error('Something went wrong');

//   return res.json();
// };

// FETCH DATA WITH AN API - api routes
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    method: 'GET',
  });

  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // FETCH DATA WITH AN API
  //   const post = await getData(slug);

  //   console.log(params, post);

  // FETCH DATA WITHOUT AN API - server actions
  // const post = await getPost(slug);

  // FETCH DATA WITHOUT AN API - api routes
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailText}>Published</span>
            <span className={styles.detailValue}>
              {post?.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
