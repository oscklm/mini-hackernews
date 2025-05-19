import { getOneStoryById } from "@/services/hackernews-api";

export default async function StoryScreen({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const story = await getOneStoryById(id);

  return <div>{story.id}</div>;
}
