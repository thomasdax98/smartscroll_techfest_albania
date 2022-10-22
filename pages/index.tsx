import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Suspense } from "react";
import Feed from "../app/feed/Feed";
import { mockCourses } from "../app/feed/mockData";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Suspense fallback="Loading...">
            <Feed courses={mockCourses} />
          </Suspense>
        </main>
      </div>
    </Layout>
  );
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
