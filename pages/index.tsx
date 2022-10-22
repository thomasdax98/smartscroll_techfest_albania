import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Suspense } from "react";
import FeedList from "../app/feed/FeedList";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Suspense fallback="Loading...">
            <FeedList />
          </Suspense>
        </main>
      </div>
    </Layout>
  );
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
