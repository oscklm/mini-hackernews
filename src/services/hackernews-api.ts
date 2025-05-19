const API_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export type Story = {
  id: number;
  by: string;
  descendants: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: "story" | string;
  url?: string;
};

type User = {
  id: string;
  about: string;
  created: number;
  karma: number;
  submitted: number[];
};

export const getTopStoryIds = async (limit = 20): Promise<string[]> => {
  const res = await fetch(`${API_BASE_URL}/topstories.json`);
  const data = await res.json();

  const slicedData = data.slice(0, limit);

  return slicedData;
};

export const getOneStoryById = async (id: string): Promise<Story> => {
  const res = await fetch(`${API_BASE_URL}/item/${id}.json`);
  return (await res.json()) as Story;
};

export const getTopStories = async (
  limit = 20,
  sortByScore: boolean
): Promise<Story[]> => {
  const storyIds = await getTopStoryIds(limit);

  const stories = await Promise.all(storyIds.map((id) => getOneStoryById(id)));

  if (!sortByScore) return stories;

  return stories.sort((a, b) => b.score - a.score);
};

export const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_BASE_URL}/user/${id}.json`);
  return (await res.json()) as User;
};
