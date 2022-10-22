import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import React, { Suspense } from "react";
import Feed from "../app/feed/components/Feed";
import { useCourses } from "app/feed/hooks/useCourses";
import getCourses from "app/feed/queries/getCourses";
import Link from "next/link";
import AppLayout from "app/core/layouts/AppLayout";
import ProgressBarContextProvider from "../app/feed/contexts/ProgressBarContext";
import CourseTrackerContextProvider from "../app/feed/contexts/TrackerContext";

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
            <ProgressBarContextProvider>
              <CourseTrackerContextProvider>
                <Courses />
              </CourseTrackerContextProvider>
            </ProgressBarContextProvider>
          </Suspense>
        </main>
      </div>
    </AppLayout>
  );
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
