import Link from "next/link";
import Redis from "ioredis";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Index = ({ data, posts }) => (
  <div>
    Hello World.{" "}
    <Link href="https://render.com" rel="noopener noreferrer">
      <a>Visit Render</a>
    </Link>
    <p>
      <b>Redis Counter:</b> {data}
    </p>
    <p>
      <b>Posts:</b> {JSON.stringify(posts)}
    </p>
  </div>
);
export default Index;

export async function getServerSideProps() {
  let redis = new Redis(process.env.REDIS_URL);
  const data = await redis.incr("counter");
  redis.quit();

  const posts = await prisma.post.findMany();

  return { props: { data, posts } };
}
