import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com/users';

export const getUserData = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching github user:', error);
  }
};

export const getUserRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_BASE_URL}/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching github repositories:', error);
  }
};