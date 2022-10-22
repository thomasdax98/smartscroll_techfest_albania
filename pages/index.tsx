import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Suspense } from "react";
import Feed from "../app/feed/components/Feed";
import { useCourses } from "app/feed/hooks/useCourses";
import getCourses from "app/feed/queries/getCourses";
import Link from "next/link";
import AppLayout from "app/core/layouts/AppLayout";

const Courses = () => {
  const courses = useCourses();
  return <Feed courses={courses} />;
};

const Home: BlitzPage = () => {
  return (
    <AppLayout title="Feed" headingOverlay>
      <div className="container">
        <main>
          <Suspense>
            <Courses />
          </Suspense>
        </main>
      </div>
    </AppLayout>
  );
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
