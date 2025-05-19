import { getTopStories, Story } from "@/services/hackernews-api";
import Link from "next/link";

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="flex flex-row justify-between p-3 bg-stone-900 rounded-md">
      <span>{story.title}</span>
      <span>⭐ {story.score}</span>
    </div>
  );
}

export default async function HomeScreen() {
  const topStories = await getTopStories(20, true);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2 uppercase">Top stories</h1>
      <div className="flex flex-col gap-3">
        {topStories.length > 0 ? (
          topStories.map((story) => (
            <div key={story.id}>
              <Link href={`/story/${story.id}`}>
                <StoryCard story={story} />
              </Link>
            </div>
          ))
        ) : (
          <div>Couldn't get any stories from HackerNews...</div>
        )}
      </div>
    </div>
  );
}
