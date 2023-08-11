import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Link from "next/link";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <div>
        <p>Post {id}</p>
        <Link href={`/`}>Go back</Link>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const session = ...
  //   if (!session) {
  //     return { redirect: { destination: `/signin?callback=${context.resolvedUrl}`, permanent: false } };
  //   }
  //   return { props: { session } };

  return { props: {} };
};
