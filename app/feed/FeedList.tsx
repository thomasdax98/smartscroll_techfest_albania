import FeedItem from "./FeedItem";
import { FeedItemType } from "./feed.types";

const mockItem: FeedItemType = {
  id: "1",
  category: "GEOGRAPHY",
  pages: [
    {
      id: "1",
      question: {
        questionText: "How many people live in Tirana?",
        answers: [
          {
            text: "232.000",
            correct: false,
          },
          {
            text: "494.000",
            correct: true,
          },
          {
            text: "828.000",
            correct: false,
          },
        ],
      },
      backgroundImageUrl: "panorama_of_tirana.jpg",
    },
    {
      id: "2",
      text: [
        "In 2020, 494.000 people lived in Tirana",
        "That makes it the biggest city in all of Albania",
      ],
      backgroundImageUrl: "panorama_of_tirana.jpg",
    },
    {
      id: "3",
      text: ["Around 51% of the population is male", "And 49% is female"],
      backgroundImageUrl: "panorama_of_tirana.jpg",
    },
    {
      id: "4",
      question: {
        questionText: "What’s the average age in Tirana?",
        answers: [
          {
            text: "25",
            correct: false,
          },
          {
            text: "32",
            correct: true,
          },
          {
            text: "41",
            correct: false,
          },
        ],
      },
      backgroundImageUrl: "panorama_of_tirana.jpg",
    },
    {
      id: "5",
      text: ["Most people in Tirana are pretty young", "The average age is only 32 years"],
      backgroundImageUrl: "panorama_of_tirana.jpg",
    },
  ],
};

const FeedList = () => {
  return (
    <div className="snap-y snap-mandatory flex flex-col overflow-y-scroll w-screen h-screen">
      <FeedItem item={mockItem} />
    </div>
  );
};

export default FeedList;
