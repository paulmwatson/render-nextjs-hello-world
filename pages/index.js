import Link from "next/link";
import Redis from "ioredis";

const Index = ({data}) => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <p>
      <b>Redis:</b> {data}
    </p>
  </div>
);
export default Index;

export async function getServerSideProps() {
  let redis = new Redis(process.env.REDIS_URL);
  const data = await redis.incr("counter");
  redis.quit()
  return { props: { data } }
}