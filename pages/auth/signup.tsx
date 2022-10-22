import { useRouter } from "next/router";
import Layout from "app/core/layouts/Layout";
import { SignupForm } from "app/auth/components/SignupForm";
import { BlitzPage, Routes } from "@blitzjs/next";
import { AuthLayout } from "app/auth/layouts/AuthLayout";

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <AuthLayout title="Sign Up">
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </AuthLayout>
  );
};

export default SignupPage;
