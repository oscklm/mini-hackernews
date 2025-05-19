const API_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: "story" | string;
  url?: string;
};

export const getTopStoryIds = async (limit = 20): Promise<string[]> => {
  const res = await fetch(`${API_BASE_URL}/topstories.json`);
  const data = await res.json().then((result) => result.slice(0, limit));

  return data;
};

export const getOneStoryById = async (id: string): Promise<Story> => {
  const res = await fetch(`${API_BASE_URL}/item/${id}.json`);
  const data = (await res.json().then((result) => result)) as Story;
  return data;
};

export const getTopStories = async (limit = 20): Promise<Story[]> => {
  const storyIds = await getTopStoryIds(limit);

  const stories = await Promise.all(storyIds.map((id) => getOneStoryById(id)));
  return stories;
};
