import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Suspense } from "react";
import Feed from "../app/feed/components/Feed";
import { useCourses } from "app/feed/hooks/useCourses";
import getCourses from "app/feed/queries/getCourses";

const Courses = () => {
  const courses = useCourses();
  return <Feed courses={courses} />;
};

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <Suspense>
            <Courses />
          </Suspense>
        </main>
      </div>
    </Layout>
  );
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
