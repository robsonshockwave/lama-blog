import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';

// FETCH DATA WITH AN API
// const getData = async (params, searchParams) => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts',
//     // {
//     //   cache: 'force-cache', // no-store
//     // }
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );

//   if (!res.ok) throw new Error('Something went wrong');

//   return res.json();
// };

const BlogPage = async (/* { params, searchParams } */) => {
  // console.log(params, searchParams);

  // const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
