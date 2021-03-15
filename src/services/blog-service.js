import axios from 'axios';

export const getBlogPosts = async () => {
  const posts = await axios.get('/post');
  return posts.data;
};
