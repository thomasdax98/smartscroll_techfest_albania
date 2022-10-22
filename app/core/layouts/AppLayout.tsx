import Head from "next/head";
import React, { FC } from "react";
import { BlitzLayout, Routes } from "@blitzjs/next";
import Layout from "./Layout";
import Link from "next/link";
import clsx from "clsx";

const AppLayout: BlitzLayout<{
  title?: string;
  blackHeading?: boolean;
  headingOverlay?: boolean;
  children?: React.ReactNode;
}> = ({ title, children, blackHeading = false, headingOverlay = false }) => {
  return (
    <>
      <Layout title={title}>
        {headingOverlay && (
          <div className="fixed -top-16 left-0 w-full h-56 bg-gradient-to-b from-black to-transparent z-10"></div>
        )}
        <h1
          className={clsx("text-4xl font-black fixed left-8 top-8 z-10", {
            "text-white": !blackHeading,
            "text-black": blackHeading,
          })}
        >
          {title}
        </h1>
        {children}
        <nav className="border-t border-gray-200 bg-white fixed bottom-0 w-full">
          <div className="mx-auto max-w-7xl px-16">
            <div className="flex h-16 justify-between items-center">
              <Link href={Routes.Discover()}>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href={Routes.Home()}>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </Layout>
    </>
  );
};

export default AppLayout;
