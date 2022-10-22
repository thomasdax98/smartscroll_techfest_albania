import { SecurePassword } from "@blitzjs/auth";
import db from "./index";

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const thomas = await db.user.create({
    data: {
      email: "thomas@test.com",
      name: "Thomas",
      role: "USER",
      hashedPassword: await SecurePassword.hash("verysecret"),
    },
  });

  const luca = await db.user.create({
    data: {
      email: "luca@test.com",
      name: "Luca",
      role: "USER",
      hashedPassword: await SecurePassword.hash("verysecret"),
    },
  });

  const albania = await db.category.create({
    data: {
      name: "Albania",
      slug: "albania",
    },
  });

  const history = await db.category.create({
    data: {
      name: "History",
      slug: "history",
    },
  });

  const tech = await db.category.create({
    data: {
      name: "Tech",
      slug: "tech",
    },
  });

  await Promise.all(
    [
      { name: "Austria", slug: "austria" },
      { name: "Politics", slug: "politics" },
      { name: "Science", slug: "science" },
      { name: "Economy", slug: "economy" },
      { name: "Society", slug: "society" },
      { name: "Culture", slug: "culture" },
    ].map(({ name, slug }) =>
      db.category.create({
        data: { name, slug },
      })
    )
  );

  await db.course.create({
    data: {
      name: "Course name",
      summary: "Course summary",
      categories: {
        connect: [{ id: albania.id }],
      },
      lessons: {
        create: [
          {
            image: "images/panorama_of_tirana_1.jpg",
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
            image: "images/panorama_of_tirana_2.jpg",
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
            image: "images/panorama_of_tirana_3.jpg",
            order: 3,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "Around 51% of the population is male" },
                    { content: "And 49% is female" },
                  ],
                },
              },
            },
          },
          {
            image: "images/panorama_of_tirana_4.jpg",
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
            image: "images/panorama_of_tirana_5.jpg",
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
