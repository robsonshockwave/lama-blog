import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

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

// FETCH DATA WITH AN API - api routes
const getData = async (params, searchParams) => {
  const res = await fetch(
    'http://localhost:3000/api/blog',
    // {
    //   cache: 'force-cache', // no-store
    // }
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

const BlogPage = async (/* { params, searchParams } */) => {
  // console.log(params, searchParams);

  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API - server actions
  // const posts = await getPosts();

  // FETCH DATA WITH AN API - api routes
  const posts = await getData();

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
