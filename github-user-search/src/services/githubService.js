// src/services/githubService.js

/**
 * Search GitHub users using advanced filters like location and minRepos.
 * - location: user location (e.g., "Egypt")
 * - minRepos: minimum number of public repositories (e.g., 10)
 */
export const searchUsers = async ({ query = "", location = "", minRepos = 0 }) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += ` location:${location}`;
    }

    if (minRepos) {
      searchQuery += ` repos:>${minRepos}`;
    }

    const apiUrl = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

/**
 * Get detailed GitHub user info.
 */
export const getUserDetails = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Failed to fetch user details");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get public repositories of a user.
 */
export const getUserRepos = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) throw new Error("Failed to fetch repos");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
