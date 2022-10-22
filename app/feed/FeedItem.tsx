import FeedPage from "./FeedPage";
import { FeedItemType } from "./feed.types";

interface FeedItemProps {
  item: FeedItemType;
}

const FeedItem = ({ item }: FeedItemProps) => {
  return (
    <div className="snap-x snap-mandatory flex overflow-x-scroll w-screen min-h-full snap-start">
      {item.pages.map((page) => (
        <FeedPage key={page.id} page={page} />
      ))}
    </div>
  );
};

export default FeedItem;
