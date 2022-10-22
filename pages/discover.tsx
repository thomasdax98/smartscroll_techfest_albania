import { BlitzPage, Routes } from "@blitzjs/next";
import { Suspense } from "react";
import AppLayout from "app/core/layouts/AppLayout";
import Link from "next/link";
import { useCurrentUser } from "app/users/hooks/useCurrentUser";
import clsx from "clsx";
import { useQuery } from "@blitzjs/rpc";
import getCategories from "app/discover/queries/getCategories";
import { useSubscribeToCategory } from "app/discover/hooks/useSubscribeToCategory";
import { useUnsubscribeFromCategory } from "app/discover/hooks/useUnsubscribeFromCategory";
import getCurrentUser from "app/users/queries/getCurrentUser";

const CategoryList = () => {
  const [categories] = useQuery(getCategories, null);
  const [user, { refetch }] = useQuery(getCurrentUser, null);
  const subscribeToCategory = useSubscribeToCategory();
  const unsubscribeFromCategory = useUnsubscribeFromCategory();

  function hasSubscribedToCategory(categories, id: number) {
    return categories?.some((category) => category.id === id);
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={`category-${category.id}`} className="mt-4">
          <div className="flex flex-row justify-between items-center">
            <Link href={Routes.FeedBySlug({ slug: category.slug })}>
              <a className="font-bold flex items-center">
                <span className="text-xl text-gray-400">#</span>
                <span className="ml-1">{category.name}</span>
              </a>
            </Link>
            <div>
              <button
                type="button"
                className={clsx(
                  "inline-flex items-center rounded border px-2.5 py-1.5 text-xs font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  {
                    "border-gray-300 bg-white hover:bg-gray-50 text-gray-700":
                      hasSubscribedToCategory(user?.categories, category.id),
                    "border-gray-800 bg-gray-900 hover:bg-gray-700 text-white":
                      !hasSubscribedToCategory(user?.categories, category.id),
                  }
                )}
                onClick={async () => {
                  if (!hasSubscribedToCategory(user?.categories, category.id)) {
                    await subscribeToCategory({ categoryId: category.id });
                  } else {
                    await unsubscribeFromCategory({ categoryId: category.id });
                  }
                  await refetch();
                }}
              >
                {hasSubscribedToCategory(user?.categories, category.id)
                  ? "Unsubscribe"
                  : "Subscribe"}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Discover: BlitzPage = () => {
  return (
    <AppLayout title="Discover" blackHeading>
      <div className="container">
        <main className="mx-8 pt-24">
          <div className="w-full max-w-lg lg:max-w-xs">
            <label className="sr-only">Search</label>
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                className="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">Categories</h2>
          <Suspense>
            <CategoryList />
          </Suspense>
        </main>
      </div>
    </AppLayout>
  );
};

Discover.authenticate = { redirectTo: Routes.LoginPage() };

export default Discover;
