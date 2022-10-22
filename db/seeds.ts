import db from "./index";

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  await db.course.create({
    data: {
      name: "Course name",
      summary: "Course summary",
      lessons: {
        create: [
          {
            image: "panorama_of_tirana.jpg",
            order: 1,
            quizPage: {
              create: {
                question: "How many people live in Tirana?",
                options: {
                  create: [
                    {
                      option: "232.000",
                      correct: false,
                    },
                    {
                      option: "494.000",
                      correct: true,
                    },
                    {
                      option: "828.000",
                      correct: false,
                    },
                  ],
                },
              },
            },
          },
          {
            image: "panorama_of_tirana.jpg",
            order: 2,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "In 2020, 494.000 people lived in Tirana" },
                    { content: "That makes it the biggest city in all of Albania" },
                  ],
                },
              },
            },
          },
          {
            image: "panorama_of_tirana.jpg",
            order: 3,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "Around 51% of the population" },
                    { content: "And 49% is female" },
                  ],
                },
              },
            },
          },
          {
            image: "panorama_of_tirana.jpg",
            order: 4,
            quizPage: {
              create: {
                question: "What’s the average age in Tirana?",
                options: {
                  create: [
                    {
                      option: "25",
                      correct: false,
                    },
                    {
                      option: "32",
                      correct: true,
                    },
                    {
                      option: "41",
                      correct: false,
                    },
                  ],
                },
              },
            },
          },
          {
            image: "panorama_of_tirana.jpg",
            order: 5,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "Most people in Tirana are pretty young" },
                    { content: "The average age is only 32 years" },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
};

export default seed;
