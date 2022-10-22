-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "quizPageId" INTEGER,
    "textPageId" INTEGER,
    CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lesson_quizPageId_fkey" FOREIGN KEY ("quizPageId") REFERENCES "LessonPageQuiz" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Lesson_textPageId_fkey" FOREIGN KEY ("textPageId") REFERENCES "LessonPageText" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lesson" ("courseId", "createdAt", "id", "image", "order", "quizPageId", "textPageId", "updatedAt") SELECT "courseId", "createdAt", "id", "image", "order", "quizPageId", "textPageId", "updatedAt" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_quizPageId_key" ON "Lesson"("quizPageId");
CREATE UNIQUE INDEX "Lesson_textPageId_key" ON "Lesson"("textPageId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
