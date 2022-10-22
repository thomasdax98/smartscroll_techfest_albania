-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCourse_AB_unique" ON "_CategoryToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCourse_B_index" ON "_CategoryToCourse"("B");
