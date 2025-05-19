import { unixTimeToDateString } from "@/app/utils/unixTimeToDateString";
import { getOneStoryById, getUser } from "@/services/hackernews-api";

function Detail({ label, text }: { label: string; text: string | number }) {
  return (
    <div className="flex flex-row gap-1 text-base">
      <span className="font-semibold">{label}</span>
      <span>{text}</span>
    </div>
  );
}

export default async function StoryScreen({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const story = await getOneStoryById(id);

  const author = await getUser(story.by);

  const storyCreatedDate = unixTimeToDateString(story.time);
  const authorCreatedDate = unixTimeToDateString(author.created);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-black text-3xl sm:text-4xl">{story.title}</h1>
        <div className="flex flex-col gap-1 pt-2">
          <Detail label="📅" text={storyCreatedDate} />
          <Detail label="⭐" text={story.score} />
        </div>
      </div>
      <div>
        <a className="text-cyan-500 hover:text-cyan-300" href={story.url}>
          {story.url}
        </a>
      </div>
      <div className="p-3 bg-stone-800 rounded-md w-fit">
        <span className="text-stone-700 font-semibold">Author</span>
        <h1 className="font-black text-xl">{author.id}</h1>
        <div className="gap-2">
          <Detail label="Karma:" text={author.karma} />
          <Detail label="Joined at:" text={authorCreatedDate} />
        </div>
      </div>
    </div>
  );
}
