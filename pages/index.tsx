import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <p>Home</p>
        {[1, 2, 3, 4, 5].map((id) => {
          return (
            <div><Link key={id} href={`/posts/${id}`}>
              Post {id}
            </Link></div>
          );
        })}
    </main>
  );
}
