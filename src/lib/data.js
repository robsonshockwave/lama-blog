// TEMPORARY DATA
// const users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'John Smith' },
//   { id: 4, name: 'Jane Smith' },
// ];

import { Post, User } from './models';
import { connectToDb } from './utils';

// const posts = [
//   { id: 1, userId: 1, title: 'Post 1', body: 'This is the first post' },
//   { id: 2, userId: 2, title: 'Post 2', body: 'This is the second post' },
//   { id: 3, userId: 3, title: 'Post 3', body: 'This is the third post' },
//   { id: 4, userId: 4, title: 'Post 4', body: 'This is the fourth post' },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug: slug });

    return post;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch post!');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users!');
  }
};
