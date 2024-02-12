'use server';

import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';

export const addPost = async (formData) => {
  // 'use server';

  //   const title = formData.get('title');
  //   const desc = formData.get('desc');
  //   const slug = formData.get('slug');
  //   const userId = formData.get('userId');

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Post created successfully!');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong!' };
  }

  console.log(title, desc, slug, userId);
};

export const deletePost = async (formData) => {
  // 'use server';

  //   const title = formData.get('title');
  //   const desc = formData.get('desc');
  //   const slug = formData.get('slug');
  //   const userId = formData.get('userId');

  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('Delete from db');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong!' };
  }
};

export const handleGithubLogin = async (e) => {
  await signIn('github');
};

export const handleLogout = async (e) => {
  await signOut();
};
