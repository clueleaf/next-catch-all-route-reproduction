import { GetServerSideProps } from "next";

export default function Index() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const session = ...
  //   if (!session) {
  //     return { redirect: { destination: `/signin?callback=${context.resolvedUrl}`, permanent: false } };
  //   }
  return { notFound: true };
};
