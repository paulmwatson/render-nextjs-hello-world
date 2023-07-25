-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" TEXT NOT NULL,
    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- SEED DATA
INSERT INTO
    "Post" ("id", "title", "content", "published", "author")
VALUES
    (
        1,
        'My first post',
        'Hello world!',
        true,
        'Alice'
    ),
    (
        2,
        'My second post',
        'Hello world again!',
        false,
        'Nala'
    );