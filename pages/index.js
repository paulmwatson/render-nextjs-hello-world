import Link from "next/link";
import Redis from "ioredis";

const Index = ({ data }) => (
  <div>
    Hello World.{" "}
    <Link href="https://render.com" rel="noopener noreferrer">
      <a>Visit Render</a>
    </Link>
    <p>
      <b>Redis Counter:</b> {data}
    </p>
  </div>
);
export default Index;

export async function getServerSideProps() {
  let redis = new Redis(process.env.REDIS_URL);
  const data = await redis.incr("counter");
  redis.quit();
  return { props: { data } };
}
