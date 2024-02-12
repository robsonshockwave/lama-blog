import { Post } from '@/lib/models';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  try {
    connectToDb();
    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts!');
  }
};
