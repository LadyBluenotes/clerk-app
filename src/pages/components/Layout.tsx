import Head from "next/head";
import Header from "./Header";

export default function LayOut({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Sarah Gerrard | Clerk Application</title>
        <meta
          name="description"
          content="A Clerk Application for Sarah Gerrard"
        />
      </Head>
      <Header />
      {children}
    </>
  );
}
