import type { NextPage } from "next";
import Head from "next/head";
import AuthorLayout from "../layouts/AuthorLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Iron.J Portfolio 📖</title>
      </Head>

      <DefaultLayout>
        <div className="mt-6">
          <div className="max-w-screen-lg md:flex mx-auto">
            <AuthorLayout />
            <MainLayout />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
