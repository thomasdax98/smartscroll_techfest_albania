import FeedItem from "./FeedItem";

const FeedList = () => {
  return (
    <div className="snap-y snap-mandatory flex flex-col overflow-y-scroll w-screen h-screen">
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default FeedList;
