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
            image: "images/tirana/panorama_of_tirana_1.jpg",
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
            image: "images/tirana/panorama_of_tirana_2.jpg",
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
            image: "images/tirana/panorama_of_tirana_3.jpg",
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
            image: "images/tirana/panorama_of_tirana_4.jpg",
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
            image: "images/tirana/panorama_of_tirana_5.jpg",
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

  await db.course.create({
    data: {
      name: "",
      summary: "",
      categories: {
        connect: [{ id: tech.id }],
      },
      lessons: {
        create: [
          {
            image: "images/programming.jpg",
            order: 1,
            quizPage: {
              create: {
                question: '"NaN === NaN" is "false" in JavaScript',
                options: {
                  create: [
                    {
                      option: "Correct",
                      correct: false,
                    },
                    {
                      option: "No way",
                      correct: true,
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });

  await db.course.create({
    data: {
      name: "Course name",
      summary: "Course summary",
      categories: {
        connect: [{ id: albania.id }, { id: history.id }],
      },
      lessons: {
        create: [
          {
            image: "images/skanderbeg/skanderbeg_1.jpg",
            order: 1,
            textPage: {
              create: {
                lines: {
                  create: [{ content: "Skanderbeg is the national hero of Albania" }],
                },
              },
            },
          },
          {
            image: "images/skanderbeg/skanderbeg_2.jpg",
            order: 2,
            quizPage: {
              create: {
                question: "When did Skanderbeg live?",
                options: {
                  create: [
                    {
                      option: "In the 8th century",
                      correct: false,
                    },
                    {
                      option: "In the 11th century",
                      correct: false,
                    },
                    {
                      option: "In the 15th century",
                      correct: true,
                    },
                  ],
                },
              },
            },
          },
          {
            image: "images/skanderbeg/skanderbeg_3.jpg",
            order: 3,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "Skanderbeg was born in 1405" },
                    { content: "As a child he was sent to the Ottomans as a hostage" },
                  ],
                },
              },
            },
          },
          {
            image: "images/skanderbeg/skanderbeg_4.jpg",
            order: 4,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "At first he fought for the Ottomans" },
                    {
                      content:
                        "In 1443, he changed sides and became a leader in the Albanian resistance against Ottoman rule",
                    },
                  ],
                },
              },
            },
          },
          {
            image: "images/skanderbeg/skanderbeg_5.jpg",
            order: 5,
            quizPage: {
              create: {
                question: "How did Skanderbeg die?",
                options: {
                  create: [
                    {
                      option: "He died from malaria",
                      correct: true,
                    },
                    {
                      option: "He was executed by the Ottomans",
                      correct: false,
                    },
                    {
                      option: "He was slain in battle",
                      correct: false,
                    },
                  ],
                },
              },
            },
          },
          {
            image: "images/skanderbeg/skanderbeg_5.jpg",
            order: 6,
            textPage: {
              create: {
                lines: {
                  create: [
                    { content: "Skanderbeg died in 1468 after catching malaria" },
                    {
                      content:
                        "His resistance was essential for preventing the Ottoman expansion into Europe",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });

  await db.course.create({
    data: {
      name: "",
      summary: "",
      categories: {
        connect: [{ id: tech.id }],
      },
      lessons: {
        create: [
          {
            image: "images/kaiserschmarrn.jpg",
            order: 1,
            quizPage: {
              create: {
                question: '"Kaiserschmarrn" is a traditional dish from',
                options: {
                  create: [
                    {
                      option: "Germany",
                      correct: false,
                    },
                    {
                      option: "Austria",
                      correct: true,
                    },
                    {
                      option: "Greece",
                      correct: false,
                    },
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
