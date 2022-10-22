import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes, useParam } from "@blitzjs/next";
import React, { Suspense } from "react";
import Feed from "app/feed/components/Feed";
import { useCourses } from "app/feed/hooks/useCourses";
import getCourses from "app/feed/queries/getCourses";
import Link from "next/link";
import AppLayout from "app/core/layouts/AppLayout";
import CourseTrackerContextProvider from "../../app/feed/contexts/TrackerContext";
import ProgressBarContextProvider from "../../app/feed/contexts/ProgressBarContext";

const Courses = () => {
  const slug = useParam("slug", "string");
  const courses = useCourses(slug ? { category: slug } : undefined);
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center mt-64">
        <p className="text-4xl font-black text-center">No courses found for {`"${slug}"`}</p>
        <Link href={Routes.Discover()}>
          <a className="underline">Explore courses</a>
        </Link>
      </div>
    );
  }
  return <Feed courses={courses} />;
};

const FeedBySlug: BlitzPage = () => {
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

FeedBySlug.authenticate = { redirectTo: Routes.LoginPage() };

export default FeedBySlug;
