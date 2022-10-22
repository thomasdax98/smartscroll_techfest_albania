import Layout from "app/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";

const Home: BlitzPage = () => {
  return <Layout title="Home">hi</Layout>;
};

Home.authenticate = { redirectTo: Routes.LoginPage() };

export default Home;
