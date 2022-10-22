import { FeedPageType } from "./feed.types";

interface FeedPageProps {
  page: FeedPageType;
}

const FeedPage = ({ page }: FeedPageProps) => {
  return (
    <section className="min-w-full h-screen snap-start relative">
      <img src={page.backgroundImageUrl} className="absolute top-0 left-0" />
    </section>
  );
};

export default FeedPage;
