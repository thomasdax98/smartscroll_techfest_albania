import { BlitzPage } from "@blitzjs/next";
import Layout from "../app/core/layouts/Layout";
import Image from "next/image";
import logo from "../public/logo.png";
import { Suspense } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import FeedList from "../app/feed/FeedList";

const Feed: BlitzPage = () => {
  return (
    <Layout title="Feed">
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

export default Feed;
