import { getTopStories } from "@/services/hackernews-api";
import Link from "next/link";

export default async function HomeScreen() {
  const topStories = await getTopStories();

  return (
    <div>
      {topStories.length > 0 ? (
        topStories.map((story) => (
          <div key={story.id}>
            <Link href={`/story/${story.id}`}>
              <span>{story.title}</span>
            </Link>
          </div>
        ))
      ) : (
        <div>Couldn't get any stories from HackerNews...</div>
      )}
    </div>
  );
}
