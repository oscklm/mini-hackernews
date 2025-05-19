import { getTopStories, Story } from "@/services/hackernews-api";
import Link from "next/link";

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="flex flex-row justify-between items-center p-3 bg-stone-900 rounded-md">
      <span className="max-w-[80%] md:max-w-fit">{story.title}</span>
      <span>⭐ {story.score}</span>
    </div>
  );
}

export default async function HomeScreen() {
  const topStories = await getTopStories(20, true);

  return (
    <div>
      <div className="flex flex-col gap-2 mb-5">
        <h1 className="font-bold text-3xl uppercase">Top stories ⭐</h1>
        <span className="text-sm text-stone-500">
          Sorted by score (high to low)
        </span>
      </div>
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
