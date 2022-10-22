const FeedPage = ({ children }) => {
  return <section className="min-w-full h-screen snap-start relative">{children}</section>;
};

const FeedItem = () => {
  return (
    <div className="snap-x snap-mandatory flex overflow-x-scroll w-screen min-h-full snap-start">
      <FeedPage>
        <h1>Section One</h1>
      </FeedPage>
      <FeedPage>
        <h1>Section Two</h1>
      </FeedPage>
      <FeedPage>
        <h1>Section Three</h1>
      </FeedPage>
      <FeedPage>
        <h1>Section Four</h1>
      </FeedPage>
      <FeedPage>
        <h1>Section Five</h1>
      </FeedPage>
    </div>
  );
};

export default FeedItem;
