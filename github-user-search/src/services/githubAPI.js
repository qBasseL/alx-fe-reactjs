import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    ...(apiKey && { Authorization: `token ${apiKey}` }),
  },
});

export const searchUsers = async (query) => {
  try {
    const response = await githubAPI.get('/search/users', {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};
